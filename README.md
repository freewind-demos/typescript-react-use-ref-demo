TypeScript React "useRef" Demo
=================================

使用`useRef`可以让我们使用const来持有一个可能会发生变化的`ref`，并使用`.current`拿到当前最新的element

它与`createRef`的区别在于，后者每次都会创建一个新的对象，所以需要我们额外保存，而`useRef`自己会处理。

```
npm install
npm run demo
```
