import axios from "axios";
import { useState } from "react";
import { URL_BASE } from "../endpoints";

const useTeams = () =>{
    const [teams, setTeams] = useState([]);

    const selectTeam = () =>{
    axios(`${URL_BASE}/teams`)
    .then(({data})=>{
        setTeams([...data])
    })
    }
    return{
        selectTeam,
        teams
    }
}

export default useTeams