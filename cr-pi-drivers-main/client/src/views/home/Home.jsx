import SearchBar from "../../components/searchBar/SearchBar";
import style from "./Home.module.css"
import Cards from "../../components/cards/Cards";
import useFilByOrigin from "../../hooks/useFilByOrigin";
import useTeams from "../../hooks/useTeams";
import { useEffect } from "react";
import useFilByTeam from "../../hooks/useFilByTeam";
import { handle } from "../../hooks/handle";
import useFil from "../../hooks/useFilter";


const Home =  () => {

    const {filByOr} = useFilByOrigin()
    const {filterTeam} = useFilByTeam()
    const {orderByAlpha} = useFil()
    const {selectTeam,teams} = useTeams()
    
    useEffect(()=>{
        selectTeam()
    },[])

   
    return(
        <div className={style.home}>
        <div className={style.contSearch}>
            <div className={style.filters}>
                <select name="filter" id="filter" onChange={()=>handle(event,filterTeam)}>
                    <option value="" disabled selected >Selected Team</option>
                    {teams.map(team=>{
                        return <option key={team} value={team} id={team}>{team}</option>
                    })}
                </select>
                <select name="filter2" id="filter2" onChange={()=>handle(event,filByOr)}>
                    <option value= "" disabled selected>Selected option</option>
                    <option value="api" >Api</option>
                    <option value="db">DataBase</option>
                </select>
                <select name="filter3" id="filter3" onChange={()=>handle(event,orderByAlpha)}>
                    <option value="" disabled selected>Selected option</option>
                    <option value="desbyalfa">Descend Alphabetically</option>
                    <option value="asbyalfa">Ascend Alphabetically</option>
                    <option value="desbydob">Desend By Date Of Birth</option>
                    <option value="asbydob">Ascend By Date Of Birth</option>
                </select>
            </div>
            <SearchBar />
        </div>
        <div className={style.cards}>
            <Cards />
        </div>
        </div>
    )
}

export default Home