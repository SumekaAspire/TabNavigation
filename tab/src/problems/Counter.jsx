import React from 'react'
import useCounter from './customhooks/useCounter'

const Counter = () => {
  const[count,increment, decrement,reset] = useCounter(0)
  return (
    <div>
      <p>counter - increment, decrement, reset</p>
      <p>count:{count}</p>
      <button onClick={increment}>Increment</button>&nbsp;
      <button onClick={decrement}>Decrement</button>&nbsp;
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter