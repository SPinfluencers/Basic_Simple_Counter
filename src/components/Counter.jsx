import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)

    const countRef = React.useRef(null)

    const startCount = () => {
      countRef.current = setInterval(() => {
        setCount((count) => count + 1)
      }, 1000)
    }

    const pauseCount = () => {
      clearInterval(countRef.current)
      countRef.current = null
    }

    const resetCount = () => {
      pauseCount()
      setCount(0)
    }

  return (
    <div>
        <h1>Counter - {count}</h1>
        <button onClick={startCount}>Start</button>
        <button onClick={pauseCount}>Pause</button>
        <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default Counter