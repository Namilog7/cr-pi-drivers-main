import style from "./SearchBar.module.css"
const SearchBar = () => {

    return(
        <>
        <div className={style.search}> 
            <input type="text" className={style.input} />
        </div>
        </>
    )
}

export default SearchBar