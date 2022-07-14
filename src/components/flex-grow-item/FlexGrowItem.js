import React, { useState } from 'react'
import './FlexGrowItem.scss'

const FlexGrowItem = ({i, img, textTop, textBottom, title, active, setCurrent}) => {
    
    console.log(i);
    const classNamesItem = !active ? `item item${i}` : `item item${i} active`

    const handleClick = () => {
       return  active ? setCurrent(null) : setCurrent(i)
    }


  return (
    <div style = {{backgroundImage: `url(${img})`}} className={classNamesItem} onClick = {handleClick}>
        <p>{textTop}</p>
        <h3 className="item_title">{title}</h3>
        <p>{textBottom}</p>
    </div>
  )
}

export default FlexGrowItem