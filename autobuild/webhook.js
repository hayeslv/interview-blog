const http = require('http');
// github-webhook-handler 的绝对路径
const createHandler = require('github-webhook-handler');
// secret 保持和 GitHub 后台设置保持一致
const handler = createHandler({ path: '/', secret: 'dylanlv2022' });

function run_cmd(cmd, args, callback) {
  const spawn = require('child_process').spawn;
  const child = spawn(cmd, args);
  let resp = '';

  child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
  child.stdout.on('end', function() { callback(resp); });
}

http.createServer(function(req, res) {
  handler(req, res, function(err) {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(7777); // 启动服务的端口，需要开放安全组

handler.on('error', function(err) {
  console.error('Error:', err.message)
})

handler.on('push', function(event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  run_cmd('sh', ['./webhook.sh'], function(text) { console.log(text); });
  // run_cmd('sh', ['./webhook.sh', event.payload.repository.name], function(text) { console.log(text); });
});

handler.on('issues', function (event) {
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title);
})
