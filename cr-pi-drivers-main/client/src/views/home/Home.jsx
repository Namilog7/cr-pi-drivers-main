import SearchBar from "../../components/searchBar/SearchBar";
import style from "./Home.module.css"
import Cards from "../../components/cards/Cards";
import useFilByOrigin from "../../hooks/useFilByOrigin";

const Home = () => {

    const {filByOr} = useFilByOrigin()
    const handleChange = (event) => {
        const value = event.target.value;
        filByOr(value)
    }

    return(
        <div className={style.home}>
        <div className={style.contSearch}>
            <div className={style.filters}>
                <select name="filter" id="filter" onChange={handleChange}>
                    <option value="" disabled>Selected option</option>
                    <option value="api">Api</option>
                    <option value="db">DataBase</option>
                </select>
                <select name="filter2" id="filter2">
                    <option value="" disabled>Selected option</option>
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