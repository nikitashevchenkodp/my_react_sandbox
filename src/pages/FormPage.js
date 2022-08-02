import React, { useCallback, useState } from 'react'
import Form, { Progress } from '../components/Form/Form'
import FormforCustomElements from '../components/FormForCustomElements/FormforCustomElements'

const FormPage = () => {

    const [step, setStep] = useState(1)

    const handleChange = (newStep) => {
        if(step == 1 && newStep == -1) {
            setStep(1)
        } else if (step == 3 && newStep == 1) {
            setStep(3)
        } else {
            setStep(step => step + newStep)
        }
       
    }

  return (
    <>
        <Progress step = {step}/>
        {step == 1 && <Form/>}
        {step == 2 && <p>Second Form</p>}
        {step == 3 && <p>Third Form</p>}
        <button type= 'button' onClick = {() => handleChange(-1)}>Prev</button>
        <button type= 'button' onClick = {() => handleChange(1)}>Next</button>
    </>
  )
}

export default FormPage