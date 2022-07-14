import React, { useState } from 'react'
import FlexGrowItem from '../flex-grow-item/FlexGrowItem'
import './FlexGrovGalery.scss'

const FlexGrovGalery = ({items}) => {

    const [current, setCurrent] = useState(null)

    const slides = items.map((item, i) => {
        return <FlexGrowItem 
                key = {i}
                i = {i}
                img = {item}
                active = {current == i ? true : false}
                setCurrent = {setCurrent}
                textTop = {'Text Top'}
                textBottom = {'Text Top'}
                title = {'Text Top'}/>
    })


  return (
    <div className='galery'>
        {slides}
    </div>
  )
}

export default FlexGrovGalery