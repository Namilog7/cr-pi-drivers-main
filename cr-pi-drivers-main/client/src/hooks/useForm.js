import { useState } from "react"
import validates from "./validates";

const useForm = () => {

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        nationality: "",
        dob: false,
        teams: false,
        description: "",
        image: false,
    });

    const [errors, setErrors] = useState({
        name: "",
        lastName: "",
        nationality: "",
        dob: "",
        teams: "",
        description: "",
        image: "",
    });

    const handleForm = (event) => {
        const value = event.target.value;
        const property = event.target.name;
        setForm({
            ...form,
            [property] : value
        })
        validates({...form,[property]:value},errors,setErrors,property)
    };
    
    const handleForm2 = (event) => {
        const property = event.target.name;
        if(!form[property]){
            setForm({
                ...form,
                [property] : true
            })
        }else setForm({
            ...form,
            [property] :false
        })
    }

    return {
        form,
        setForm,
        handleForm,
        errors,
        setErrors,
        handleForm2
    }


}

export default useForm