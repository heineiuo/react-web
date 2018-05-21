# @react-web/promise-view

## Usage

```js
import PromiseView from '@react-web/promise-view'
// or
// import { PromiseView } from '@react-web/components'

render(
  <PromiseView promise={Promise.resolve('success')}>
  {(state, result) => {
    if (state === 'resolved') return <div>Data: {result}</div>
    if (state === 'rejected') return <div>Error: {result.message}</div>
    if (state === 'pending') return <div>Loading...</div>
    return null
  }}
  </PromiseView>
)
```

## Reference

[如何优雅地结合类 Redux 处理异步通信的中间状态？
](https://www.zhihu.com/question/66869266/answer/345948392)

## License

[MIT↗](../../LICENSE)