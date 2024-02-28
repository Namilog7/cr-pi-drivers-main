import style from "./FormPage.module.css"

const FormPage = () => {

    return(
        <div>
            <form className={style.form}>
                <div className={style.divform}>
                    <label htmlFor="name" className={style.info}>Name:</label>
                    <input type="text" name="name" id="name" className={style.info}/>
                    <label htmlFor="lastName" className={style.info}>LastName:</label>
                    <input type="text" name="lastName" id="lastName" className={style.info} />
                    <label htmlFor="nationality" className={style.info}>Nationality:</label>
                    <input type="text" name="nationality" id="nationality" className={style.info}/>
                    <label htmlFor="dob" className={style.info}>Date Of Birth:</label>
                    <input type="date" name="dob" id="dob" className={style.info} />
                    <label htmlFor="teams" className={style.info}>Teams:</label>
                    <input type="text" name="teams" id="teams" className={style.info}/>
                    <label htmlFor="description" className={style.info}>Description:</label>
                    <input type="text" name="description" id="description" className={style.info} />
                    <label htmlFor="image" className={style.info}>Image:</label>
                    <input type="file" src="image" alt="imagen" />
                </div>
            </form>
        </div>
    )
}

export default FormPage