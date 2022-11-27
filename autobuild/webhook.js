var http = require('http');
// github-webhook-handler 的绝对路径
// var createHandler = require('/root/tool/nodejs/node-v12.10.0-linux-x64/lib/node_modules/github-webhook-handler');
var createHandler = require('/root/tool/nodejs/node-v14.20.1-linux-x64/lib/node_modules/github-webhook-handler');
var spawn = require('child_process').spawn;
// secret 保持和 GitHub 后台设置保持一致
var handler = createHandler({ path: '/', secret: 'dylanlv2022' });

function run_cmd(cmd, args, callback) {
  var child = spawn(cmd, args);
  var resp = '';

  child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
  child.stdout.on('end', function() { callback(resp); });
}

http.createServer(function(req, res) {
  console.log('========== 有请求进来了 ==========')
  // // TODO 不知道是不是要更新node版本（目前服务器是node12），先用这段来代替
  // if((req.rawHeaders || []).includes("push")) {
  //   run_cmd('sh', ['./webhook.sh'], function(text) { console.log(text); });
  // }
  handler(req, res, function(err) {
    console.log('============= http server handler ==========')
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(7777, function() {
  console.log("==== 开始监听 7777 ====")
}); // 启动服务的端口，需要开放安全组

handler.on('error', function(err) {
  console.log("============ error ===============")
  console.error('Error:', err.message)
})

handler.on('push', function(event) {
  console.log('============== push ================')
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
  // run_cmd('sh', ['./webhook.sh'], function(text) { console.log(text); });
  run_cmd('sh', ['./webhook.sh', event.payload.repository.name], function(text) { console.log(text); });
});

handler.on('issues', function (event) {
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title);
})
