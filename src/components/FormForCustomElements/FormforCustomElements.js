import React, { useState } from 'react'
import styled from 'styled-components';
import useInput from '../../utils/hooks/useInput';
import TextInput from '../TextInput/Input';

const FormStyles = styled.form`
    margin: 0 auto;
    width: 300px;
    padding: 30px;
    border: 1px solid gray;
    border-radius: 7px;
`


const FormforCustomElements = () => {

    const name = useInput('', {minLength: 5, maxLength: 10})
    const email = useInput('', {isEmail: true})


  return (
    <FormStyles action="">
        <TextInput 
            label="Name" 
            variant={'outlined'} 
            value = {name.value} 
            onChange = {name.handleChange}
            error = {name.error}
            onBlur = {name.onBlur}/>
        <TextInput 
            label="Email"
            value = {email.value}
            onChange = {email.handleChange}
            error = {email.error}
            onBlur = {email.onBlur}/>
    </FormStyles>
  )
}

export default FormforCustomElements