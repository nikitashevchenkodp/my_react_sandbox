import { useEffect, useState } from "react";


const useValidate = (value,touched, validCases) => {

    const [error, setError] = useState('')
    const [isValid, setValid] = useState(false)


    useEffect(() => {
        setError(null)
        for(let validCase in validCases) {
            switch(validCase) {
                case 'isRequired': 
                    touched && validCases[validCase] && value.length === 0 && setError('This field is required') 
                    break;
                case 'minLength': 
                    touched &&(value.length < validCases[validCase]) && setError('it must be longer') 
                    break;
                case 'maxLength': 
                    touched && (value.length > validCases[validCase]) && setError('it must be shorter')
                    break
                case 'isEmail': 
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    touched && !re.test(String(value).toLocaleLowerCase()) && setError('TYPE CORRECT EMAIL')
                    break;
                
                default:
                    setError(null)
            }
        }

    }, [value, touched])

    useEffect(() => {
        if(!value && !error) {
            setValid(false)
        } else if(error) {
            setValid(false)
        } else {
            setValid(true)
        }
    })


    return {error, isValid}
}

export default useValidate;