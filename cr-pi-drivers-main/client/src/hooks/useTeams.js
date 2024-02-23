import axios from "axios";
import { useState } from "react";
import { URL_BASE } from "../endpoints";

const useTeams = () =>{
    const [teams, setTeams] = useState([]);
    const selectTeam = () =>{
    axios(`${URL_BASE}/teams`)
    .then(({data})=>{
        const nameTeams = data.map(team=>{
            return team.name
        })
        setTeams(nameTeams)
    })
    }
    return{
        selectTeam,
        teams
    }
}

export default useTeams