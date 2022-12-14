# Concurrent

## 什么是Concurrent

`Concurrent` 最主要的特点就是**渲染是可中断的**。没错，以前是不可中断的。也就是说，以前 `React`中的`update` 是同步渲染，在这种情况下，一旦 `update` 开启，在任务完成前，都不可中断。

> 注意，这里说的同步，和 `setState` 所谓的同步异步不是一回事，而且 `setState` 所谓的异步本质上是个批量处理。



## Concurrent模式特点

在 Concurrent 模式下，update 开始了也可以中断，当然中间也可能被遗弃掉。

### 关于可中断

​		先说可中断这件事情的重要性。对于 React 来说，任务可能很多，如果不区分优先级，那就是先来后到的顺序。虽然听起来很合理，但是现实是普通车辆就应该给救护车让路，因为事有轻重缓急。

​		那么在 React 中，如果高优先级任务来了，但是低优先级任务还没有处理完毕，就会造成高优先级任务等待的局面。比如说，某个低优先级任务还在缓慢中，input 框突然被用户触发，但是由于主线程被占着，没有人搭理用户，结果就是用户哐哐输入，但是 input 没有任何反应。用户一怒之下就走了。

​		由此可见，对于复杂项目来说，任务可中断这件事很重要。那么 React 是如何做到的呢，其实基础还是 fiber，fiber 本身链表结构，就是指针，想指向别的地方那就加个属性值就行了。



### 关于被遗弃

​		在 Concurrent 模式下，有些 update 可能会被遗弃掉。

​		比如说，我看电视的时候，切换遥控器，从1频道切换到2频道，再切换到3频道，最后在4频道停下来。假如这些频道都是UI，那么2、3频道的渲染其实我并不关心，我只关心4频道的结果，如果你非要花时间把2和3频道的UI也渲染出来，最终导致4频道很久之后才渲染出来，那我肯定不开心。正确的做法应该是尽快渲染4频道就行了，至于2和3频道，不管渲染了多少了，遗弃掉就行了，反正也不需要。

​		最后回到项目的实际场景，比如我想在淘宝搜索 “老人与海”，那么我在输入框输入 “老人与海” 的过程中，“老人” 会有对应的模糊查询结果，但是不一定是我想要的结果，所以这个时候的模糊查询框的 update 就是低优先级。“老人” UI的update 相较于 input 的update，其优先级就会低一些。在 React18 中，这个模糊查询相关的UI可以被当作 transition。























