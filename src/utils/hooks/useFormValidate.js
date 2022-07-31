import { useEffect, useState } from "react";


const useFormValidate = (form) => {
    const [errors, setErrors] = useState({})
    const [isValid, setValid] = useState(false)
    
    useEffect(() => {
        cleanErrors()
        for(let input in form) {
            let { schema } = form[input]
            for(let validCase in schema ) {
                switch(validCase) {
                    case 'isRequired': 
                        form[input].touched && schema[validCase] && form[input].value.length === 0 && setErrors({...errors, [input]: 'This field is required'}) 
                        break;
                    case 'minLength': 
                        form[input].touched && (form[input].value.length < schema[validCase]) && setErrors({...errors, [input]: 'This should be LONGER'}) 
                        break;
                    case 'maxLength': 
                        form[input].touched && (form[input].value.length > schema[validCase]) && setErrors({...errors, [input]: 'This should be SHORTER'}) 
                        break
                    case 'isEmail': 
                        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                        form[input].touched && !re.test(String(form[input].value).toLocaleLowerCase()) && setErrors({...errors, [input]: 'Type the correct email'}) 
                        break;
                }
            }
        }
    }, [form])

    function cleanErrors () {
        const blankState = Object.fromEntries(Object.entries(errors).map(([key, value]) => {
            return [key, value = '']
        }))

        setErrors(blankState)
    }

    useEffect(() => {
        const errorsValues = Object.values(errors).join('');
        const formValues = Object.values(form).join('');
        console.log(errorsValues);
        console.log(formValues);
        if(!errorsValues && formValues) {
            setValid(true)
        } else {
            setValid(false)
        }

    })


    return {errors, isValid}
}

export default useFormValidate;