import React from 'react'
import styled, {keyframes, css} from 'styled-components';
import useForm from '../../utils/hooks/useForm';
import useFormSecond from '../../utils/hooks/useFormSecond';
import useInput from '../../utils/hooks/useInput';

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
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  max-width:650px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  button,
  input[type='submit'] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  }
  button:disabled {
      background-color: green;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(
        to right,
        #ff3019 0%,
        #e2b04a 50%,
        #ff3019 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
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

    const name = useInput('',{
        minLength: 3,
        maxLength: 8,
        isRequired: true
    });
    const lastName = useInput('', {minLength: 3, maxLength: 15, isRequired: true});
    const phone = useInput('', {minLength: 3, maxLength: 15, isRequired: false});
    const adress = useInput('', {minLength: 3, maxLength: 13, isRequired: true});
    const email = useInput('', {isEmail: true});

    const isValid = name.isValid && lastName.isValid && phone.isValid && adress.isValid

  return (
    <FormStyles data-testid="form" className='form'>
        <fieldset aria-busy="false">
            {name.error && <p data-testid='error' style={{color: 'red'}}>{name.error}</p>}
            <label htmlFor='name'>
                First Name
                <input data-testid='name' required type="text" name="name" placeholder='First name' 
                    onChange={name.handleChange}
                    value={name.value}
                    onBlur={name.onBlur}
                    />
            </label>
            {lastName.error && <p style={{color: 'red'}}>{lastName.error}</p>}
            <label htmlFor='lastName'>
                Last name
                <input data-testid='lastName' required type="text" name="lastName" placeholder='Last name'
                    onChange={lastName.handleChange}
                    value={lastName.value}
                    onBlur={lastName.onBlur} />
            </label>
            {phone.error && <p style={{color: 'red'}}>{phone.error}</p>}
            <label  htmlFor='phone'>
                Phone
                <input data-testid='phone' required type="phone" name="phone" placeholder='Phone'
                onChange={phone.handleChange}
                value={phone.value} 
                onBlur={phone.onBlur}/>
            </label>
            {adress.error && <p style={{color: 'red'}}>{adress.error}</p>}
            <label  htmlFor='adress'>
                Adress
                <input data-testid='adress' type="text" name="adress"  placeholder='Adress'
                onChange={adress.handleChange}
                value={adress.value} 
                onBlur={adress.onBlur}/>
            </label>
            {email.error && <p style={{color: 'red'}}>{email.error}</p>}
            <label  htmlFor='email'>
                EMAIL
                <input data-testid='email' type="text" name="email"  placeholder='Email'
                onChange={email.handleChange}
                value={email.value} 
                onBlur={email.onBlur}/>
            </label>
        </fieldset>
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