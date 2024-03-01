import { useState } from "react"
import useForm from "./useForm";

const useAuxValidates = () => {

    const {form,setForm} = useForm()
    const [arrTeams, setArrTeams] = useState([]);

    const teamsSelecteds = (value) =>{
        if(!arrTeams.includes(value)){
            setArrTeams([...arrTeams,value])
        }
    };

    return{
        teamsSelecteds,
        arrTeams
    }
};

export default useAuxValidates;