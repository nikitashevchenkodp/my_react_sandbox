import React, { useEffect, useState } from 'react'
import './Calculator.scss'

const Calculator = () => {

    const [result, setResult] = useState('');
    const [field, setField] = useState('');
    const [rotate, setRotate] = useState(0)
    const [blur, setBlur] = useState(0)

    useEffect(() => {
        setBlur(2)
        window.addEventListener('keydown', (e) => {
            console.log(e);
            const availableKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
            if(availableKeys.includes(e.key)) {
                counting(e.key)
            }
        })
    }, [])

    const operators = ['/', '*', '-', '+', '.', '='];

    const counting = (value) => {
        if(result && operators.includes(value)) {
            setField('')
            setField(result + value);
        } else {
            setResult('')
        
            if(operators.includes(value) && field === '' ||
                operators.includes(value) && operators.includes(field.slice(-1))) return;
            else setField(field => field + value);
        }
        

    }

    const countRes = () => {
        setResult(eval(field))
    }

    const changeMinus = () => {
        setResult(-1 * eval(field))
    }

    const cleanField = () => {
        if(result) {
            setResult('')
            setField('')
        } else {
            setField(field => field.slice(0,-1))
        }
        
    }

    const percentage = () => {
        setResult(eval(field) / 100)
    }

    const buttons = () => {
        const res = [];
        for(let i = 0; i < 10; i++) {
            res.push(
                <button key={i} className= {`num${i}`} onClick = {() => counting(`${i}`)} >{i}</button>
            )
        }

        return res
    }

    const display = ((result && result || (field || "0")).toString())
    const displayFontSize = () => {
        if(display.length > 30) {
            return 15
        }
        else if(display.length > 20) {
            return 20
        } else if(display.length > 15) {
            return 28
        } else if (display.length > 10) {
            return 36
        }
    }

  return (
    <>
        <button onClick = {() => setRotate(rotate => rotate + 90)}>Rotate</button>
        <div className='calc' style={{transform: `rotate(${rotate}deg)`, filter: `blur(${blur}px)`}} onMouseMove = {() => setBlur(0)} onMouseLeave = {() => setBlur(2)}>
        <div className="calc__header">
            <span className="control green"></span>
            <span className="control yellow"></span>
            <span className="control red"></span>
        </div>
        <div className="calc__display" style={{fontSize: `${displayFontSize()}px`}}>
            <span>{display}</span>
        </div>
        <div className="calc__btns">
           <div className="calc__btns--nums">
                {[...buttons(), <button key={23}>.</button>]}
           </div>

                <div className="calc__btns--top">
                    <button onClick = {cleanField}>AC</button>
                    <button onClick = {changeMinus}>+/-</button>
                    <button onClick = {percentage}>%</button>
                </div>
                <div className="calc__btns--orange">
                    <button onClick = {() => counting('/')}>/</button>
                    <button onClick = {() => counting('*')}>X</button>
                    <button onClick = {() => counting('-')}>-</button>
                    <button onClick = {() => counting('+')}>+</button>
                    <button onClick = {countRes}>=</button>
                </div>
           </div>

    </div>
    </>
  )
}

export default Calculator