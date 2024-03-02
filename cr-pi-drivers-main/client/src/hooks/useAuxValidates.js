import { useState } from "react";
import useTeams from "./useTeams";
import useForm from "./useForm";

const useAuxValidates = () => {

    const {selectTeam} = useTeams()
    const [arrTeams, setArrTeams] = useState([]);
    const [find, setFind] = useState([])


    selectTeam()

    const teamsSelecteds = (value) =>{
        if(!arrTeams.includes(value)){
            setArrTeams([...arrTeams,value])
        }
    };

    const searchIdTeam = (array,teamsIds) => {
        while(array.length){
            let id = array.shift();
            const match = teamsIds.find(ti=> ti.name == id);
            setFind([...find,match.id])
            console.log(typeof find)
        }
    }
    


    return{
        teamsSelecteds,
        arrTeams,
        searchIdTeam,
        find
    }
};

export default useAuxValidates;