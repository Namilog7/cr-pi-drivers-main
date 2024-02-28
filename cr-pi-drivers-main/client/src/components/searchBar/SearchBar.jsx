import { Link } from "react-router-dom"
import useSearch from "../../hooks/useSearch"
import style from "./SearchBar.module.css"
const SearchBar = () => {
    const {input,setInput,handleSearch} = useSearch()
    const handleChange = (event) => {
        setInput(event.target.value)
    }
    const handleClick = (event) => {
        event.preventDefault();
        handleSearch()
    }

    return(
        <>
        <div className={style.search}>
            <div>
                <Link to="/formPage">
                <button className={style.button}>Create new!</button>
                </Link>
            </div> 
            <input type="text" className={style.input} value={input} onChange={handleChange} />
            <button className={style.searchbutton} onClick={handleClick}>Search</button>
        </div>
        </>
    )
}

export default SearchBar