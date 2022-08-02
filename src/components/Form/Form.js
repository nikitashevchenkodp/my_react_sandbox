import React from 'react'
import styled, {keyframes, css} from 'styled-components';
import useForm from '../../utils/hooks/useForm';
import useFormSecond from '../../utils/hooks/useFormSecond';
import useInput from '../../utils/hooks/useInput';
import TextInput from '../TextInput/Input'

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const FormStyles = styled.form`
    margin: 0 auto;
    min-width: 300px;
    max-width: 900px;
    padding: 30px;
    border: 1px solid gray;
    border-radius: 7px;
`;



// const Form = () => {

//     const [form, errors, handleChange, onBlur, isValid] = useFormSecond({
//         name: { value: '', schema: {minLength: 3, maxLength: 15}},
//         lastName: {
//             value: '',
//             schema: {
//                 minLength: 3,
//                 maxLength: 15
//             },
//         },
//         phone: {
//             value: '',
//             schema: {
//                 minLength: 3,
//                 maxLength: 15
//             },
//         },
//         adress: {
//             value: '',
//             schema: {
//                 minLength: 3,
//                 maxLength: 15
//             },
//         },
//         email: {
//             value: '',
//             schema: {
//                 isEmail: true
//             },
//         },
//     })

//     console.log(isValid);

//   return (
//     <FormStyles data-testid="form" className='form'>
//         <fieldset aria-busy="false">
//             {errors.name && <p data-testid='error' style={{color: 'red'}}>{errors.name}</p>}
//             <label htmlFor='name'>
//                 First Name
//                 <input data-testid='name' required type="text" name="name" placeholder='First name' 
//                     onChange={handleChange}
//                     value={form.name.value}
//                     onFocus={onBlur}
//                     />
//             </label>
//             {errors.lastName && <p style={{color: 'red'}}>{errors.lastName}</p>}
//             <label htmlFor='lastName'>
//                 Last name
//                 <input data-testid='lastName' required type="text" name="lastName" placeholder='Last name'
//                     onChange={handleChange}
//                     value={form.lastName.value}
//                     onFocus={onBlur} />
//             </label>
//             {errors.phone && <p style={{color: 'red'}}>{errors.phone}</p>}
//             <label  htmlFor='phone'>
//                 Phone
//                 <input data-testid='phone' required type="phone" name="phone" placeholder='Phone'
//                 onChange={handleChange}
//                 value={form.phone.value}
//                 onFocus={onBlur}/>
//             </label>
//             {errors.adress && <p style={{color: 'red'}}>{errors.adress}</p>}
//             <label  htmlFor='adress'>
//                 Adress
//                 <input data-testid='adress' type="text" name="adress"  placeholder='Adress'
//                 onChange={handleChange}
//                 value={form.adress.value}
//                 onFocus={onBlur}/>
//             </label>
//             {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
//             <label  htmlFor='email'>
//                 EMAIL
//                 <input data-testid='email' type="text" name="email"  placeholder='Email'
//                 onChange={handleChange}
//                 value={form.email.value}
//                 onFocus={onBlur}/>
//             </label>
//         </fieldset>
//         <button data-testid='btn' onClick={() => console.log('click')} disabled = {!isValid} type="button">Next Step</button>
//     </FormStyles>
//   )
// }

const Form = () => {
    //Test comment
    const name = useInput('',{
        minLength: 3,
        maxLength: 8,
        isRequired: true
    });
    const lastName = useInput('', {minLength: 3, maxLength: 15, isRequired: true});
    const phone = useInput('', {minLength: 3, maxLength: 15, isRequired: false});
    const adress = useInput('', {minLength: 3, maxLength: 13, isRequired: true});
    const email = useInput('', {isEmail: true});
    console.log(phone);

    const isValid = name.isValid && lastName.isValid && phone.isValid && adress.isValid
    console.log('test');
  return (
    <FormStyles data-testid="form" className='form'>
          <TextInput label = "Name" value = {name.value} onChange = {name.handleChange} onBlur = {name.onBlur} error = {name.error} sx = {{container: {fontSize: '30px'}, input: {height: '100px'}}}/>
          <TextInput label = "Last Name" value = {lastName.value} onChange = {lastName.handleChange} onBlur = {lastName.onBlur} error = {lastName.error}/>
          <TextInput label = "Phone" value = {phone.value} onChange = {phone.handleChange} onBlur = {phone.onBlur} error = {phone.error}/>
          <TextInput label = "Adress" value = {adress.value} onChange = {adress.handleChange} onBlur = {adress.onBlur} error = {adress.error}/>
          <TextInput label = "Email" value = {email.value} onChange = {email.handleChange} onBlur = {email.onBlur} error = {email.error}/>
        <button data-testid='btn' onClick={() => console.log('click')} disabled = {!isValid} type="button">Next Step</button>
    </FormStyles>
  )
}

const ProgressStyles = styled.div`
    text-align: center;
    margin-bottom:40px;
    display:flex;
    justify-content: center;
    ${props => css`
        & > *:nth-child(${props.step}) {
        background-color: red;
    }    
    `}
`

const CircleStyles = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: yellow;
    margin: 0 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    :not(:last-of-type):before {
        content: '';
        width: 70px;
        top: 50%;
        left: 100%;
        position: absolute;
        background-color: black;
        height: 2px;
    }
    
`

export const Progress = ({step}) => {

    return (
        <ProgressStyles step = {step}>
            <CircleStyles>
                    1
            </CircleStyles>
            <CircleStyles>
                    2
            </CircleStyles>
            <CircleStyles>
                    3
            </CircleStyles>

        </ProgressStyles>
    )
}


export default Form