import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setCount(() => count + 1)
    //     }, 1000)
    // }, [count])

    const handleStart = () => {
        // alert("click me")
        setTimeout(() => {
             setCount(() => count + 1)
        }, 1000)  
    }

  return (
    <div>
        <h1>Counter - {count}</h1>
        <button onClick={()=> handleStart(count)}>Start</button>
        <button>Pause</button>
        <button>Reset</button>
    </div>
  )
}

export default Counter