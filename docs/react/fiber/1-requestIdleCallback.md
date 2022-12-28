## 使用示例

```js
function sleep(dur) {
  for(var t = Date.now(); Date.now() - t <= dur;) {}
}
const works = [
  () => {
    console.log("第一个任务开始")
    sleep(20)
    console.log("第一个任务结束")
  },
  () => {
    console.log("第二个任务开始")
    sleep(20)
    console.log("第二个任务结束")
  },
  () => {
    console.log("第三个任务开始")
    sleep(20)
    console.log("第三个任务结束")
  }
]

function workLoop(deadline) {
  // 因为一帧是16.6ms，浏览器执行完高优先级事件之后，如果还有时间，会执行workloop。
  // 通过deadline.timeRemaining()获取此帧剩下的时间 
  console.log(`本帧的剩余时间是：${deadline.timeRemaining()}`)

  // 如果没有剩余时间了，就会跳出循环
  while(deadline.timeRemaining() > 1 && works.length > 0) { // 如果还有剩余时间，并且还有任务没做完
    performUnitOfWork()
  }

  // 如果还有剩余任务
  if(works.length > 0) {
    console.log(`只剩下${deadline.timeRemaining()}ms了，时间不够了，等待浏览器下次空闲的时候`)
    requestIdleCallback(workLoop)
  }
}

function performUnitOfWork() {
  // 取出任务数组中的第一个任务，并执行
  let work = works.shift();
  work()

}

requestIdleCallback(workLoop)
```





