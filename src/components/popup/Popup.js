import React, { useState } from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './popup.scss'
const Popup = ({children}) => {

    const [open, setOpen] = useState(false)

    const modalClass = !open ? "modal" : "modal modal__open"
    const modalInnerClass = !open ? "modal__inner" : "modal__inner modal__inner modal__inner__open"

  return (
      <div className='popup__page'>
        <button className= "button__open" onClick={() => setOpen(open => !open)}>Click</button>
        <div className={modalClass}>
            <div className={modalInnerClass}>
                <div className="close">
                    <AiOutlineCloseCircle className='button__close' onClick = {()=> setOpen(open => !open)}/>
                </div>
                
                    Hello World!
            </div>
        </div>
     </div>
    
  )
}

export default Popup