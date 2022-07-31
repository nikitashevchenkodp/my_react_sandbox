import { useEffect, useState } from "react"
import useValidate from "./useValidate"


const useForm = (initial = {}) => {

    const [form, setForm] = useState(initial)

    const initialValues = Object.values(initial).join('')


    useEffect(() => {
        setForm(initial)
    }, [initialValues])


    function handleChange(e) {
        const {name, value} = e.target;

        setForm({
            ...form,
            [name]: value
        })

    }

    return [form, handleChange]

}

export default useForm;