import React, { memo } from 'react';
import styled from 'styled-components'
import { css } from 'styled-components';
const InputContainerStyles = styled.div`
    
    position: relative;
    margin-bottom: 32px;
    font-size: 16px;

    input {
        width: 100%;
        border: none;
        border-bottom: 1px solid lightgrey;
        outline: none;
        background-color: transparent;
        transition: .3s;
        ${({variant}) => variant === 'outlined' && css`
            position: relative;
            border: 1px solid gray;
            height: 50px;
            border-radius: 12px
        `}
    }

    label {
        position: absolute;
        top: 0;
        left: 0;
        color: lightgray;
        z-index: -1;
        transition: .3s;
        ${({variant}) => variant === 'outlined' && css`
            top:30%;
            left: 3%;
        `}
    }

    input:focus ~ label,
    input:not(:placeholder-shown) ~ label {
        top:-18px;
        font-size: 12px
    }
    ${({error}) => error && css`
        input {
            border-color: red;
        }
        label {
            color: red;
        }
    `}
    ${({sx}) => sx && css`
        
    `}
    
`;

const InputError = styled.span`
    color: red;
    font-size: 12px;
`

const inputTypes = ['number','email', 'password']

const checkType = (type) => {
    return inputTypes.some(input => input == type)
}



const TextInput = ({label, type, error, variant, value, onChange, onBlur, sx}) => {

    const transformStyles = (sx) => {
        let styles = []
        for(let key in sx) {
            styles.push(sx[key])
        }
        return styles;
    }

    const [containerStyles, labelStyles, inputStyles] = transformStyles(sx)

  return (
    <InputContainerStyles variant = {variant} error = {error}>
        <div style={containerStyles}>
            <input style={inputStyles} type={checkType(type) ? type : 'text'} placeholder=' ' value = {value} onChange = {onChange} onBlur = {onBlur}/>
            <label style={labelStyles} htmlFor="">{label}</label>
            <InputError>
                {error}
            </InputError>
        </div>
        
    </InputContainerStyles>
  )
}

export default memo(TextInput);