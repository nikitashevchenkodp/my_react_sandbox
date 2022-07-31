import { useEffect, useState } from "react"
import useValidate from "./useValidate"



const useInput = (initial, validCases) => {
    const [value, setValue] = useState(initial)
    const [touched, setTouched] = useState(false)

    const {error, isValid} = useValidate(value, touched, validCases)

    useEffect(() => {
        setValue(initial)
    }, [initial])


    function handleChange(e){
        const {value} = e.target;
        setValue(value)
    }

    function onBlur() {
        setTouched(true)
    }

    return {value, handleChange, onBlur, error, isValid}
}

export default useInput;