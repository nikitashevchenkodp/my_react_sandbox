import React, { useMemo, useState } from 'react'
import FlexGrowItem from '../flex-grow-item/FlexGrowItem'
import './FlexGrovGalery.scss'

const FlexGrovGalery = () => {

  const arr = useMemo(() => ['https://source.unsplash.com/gYl-UtwNg_I/1500x1500', 
  'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500',
   'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d',
    'https://source.unsplash.com/ITjiVXcwVng/1500x1500', 'https://source.unsplash.com/3MNzGlQM7qs/1500x1500'], [])

    const [current, setCurrent] = useState(null)

    const slides = arr.map((item, i) => {
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