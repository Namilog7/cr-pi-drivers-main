import SearchBar from "../../components/searchBar/SearchBar";
import style from "./Home.module.css"
import Cards from "../../components/cards/Cards";
import useFilByOrigin from "../../hooks/useFilByOrigin";
import useTeams from "../../hooks/useTeams";
import { useEffect } from "react";

const Home =  () => {

    const {filByOr} = useFilByOrigin()
    const handleChange = (event) => {
        const value = event.target.value;
        filByOr(value)
    };
    const {selectTeam,teams} = useTeams()
    useEffect(()=>{
        selectTeam()
    },[])

    return(
        <div className={style.home}>
        <div className={style.contSearch}>
            <div className={style.filters}>
                <select name="filter" id="filter">
                    <option value="" disabled selected>Selected Team</option>
                    {teams && teams.map(team=>{
                        return <option value={team} id={team}>{team}</option>
                    })}
                </select>
                <select name="filter2" id="filter2" onChange={handleChange}>
                    <option value= "" disabled selected>Selected option</option>
                    <option value="api" >Api</option>
                    <option value="db">DataBase</option>
                </select>
                <select name="filter3" id="filter3">
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