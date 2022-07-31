import { useEffect, useState } from "react"
import useFormValidate from "./useFormValidate"



const useFormSecond = (initial = {}) => {

    const [form, setForm] = useState(initial)
    const {errors, isValid} = useFormValidate(form)

    const initialValues = Object.values(initial).join('')


    useEffect(() => {
        setForm(initial)
    }, [initialValues])

    function onBlur(e) {
        const {name} = e.target;

        setForm({
            ...form,
            [name]: {
                ...form[name],
                touched: true
            }
        })
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: {
                ...form[name],
                value: value,
            }
        });

    }

    return [form, errors, handleChange, onBlur, isValid]

}

export default useFormSecond;