import { useState } from "react";

const useAuxValidates = () => {

    const [arrTeams, setArrTeams] = useState([]);
    const [find, setFind] = useState([])



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