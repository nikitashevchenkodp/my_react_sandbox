import React, { useEffect, useRef, useState } from 'react'

const MakeNewNumber = () => {
    console.log('render');
    const [numbers, setNumbers] = useState([1,2,3,4,5])
    const timerRef = useRef(10);
    const numRef = useRef(5);

    const addByTimer = () => {
        timerRef.current = setInterval(addNumber, 1000)
    }

    const incRef = () => {
        numRef.current++
        console.log(numRef);
    }

    const addNumber = () => {
        console.log(timerRef);
        setNumbers(prev => [...prev, prev[prev.length - 1] + 1])
    }

    const clearTimer = () => {
        clearInterval(timerRef.current)
    }

  return (
    <div>
        <ul>
            {numbers.map(num => {
                return (
                    <li key={num}>{num}</li>
                )
            })}
        </ul>
        <button onClick={addNumber}>Add</button>
        <button onClick={addByTimer}>Add by timer</button>
        <button onClick={clearTimer}>Stop</button>
        <button onClick={incRef}>+</button>

    </div>
  )
}

export default MakeNewNumber