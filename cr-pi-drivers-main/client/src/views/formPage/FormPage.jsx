import style from "./FormPage.module.css";
import useForm from "../../hooks/useForm";
import useTeams from "../../hooks/useTeams";
import { useEffect } from "react";
import { handle } from "../../hooks/handle";
import useAuxValidates from "../../hooks/useauxValidates";
import { URL_BASE } from "../../endpoints";
import axios from "axios";


const FormPage = () => {

    const {teamsSelecteds,arrTeams} = useAuxValidates()
    const {teams,selectTeam} = useTeams()
    const {form,handleForm,handleForm2} = useForm()
    const {name,lastName,nationality,description,} = form;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(URL_BASE,{
            data: {...form}
        }).then(({data})=>console.log("ok"))
    }

    useEffect(()=>{
        selectTeam();
    },[])

    return(
        <div>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.divform}>
                    <label htmlFor="name" className={style.info}>Name:</label>
                    <input type="text" name="name" id="name" className={style.info} value={name} onChange={handleForm}/>
                    <label htmlFor="lastName" className={style.info}>LastName:</label>
                    <input type="text" name="lastName" id="lastName" className={style.info} value={lastName} onChange={handleForm}/>
                    <label htmlFor="nationality" className={style.info}>Nationality:</label> 
                    <input type="text" name="nationality" id="nationality" className={style.info} value={nationality} onChange={handleForm} />
                    <label htmlFor="dob" className={style.info} >Date Of Birth:</label>
                    <input type="date" name="dob" id="dob" className={style.info} onChange={handleForm2}/>
                    <label htmlFor="teams" className={style.info}>Teams:</label>
                    <select name="teams" id=""  onChange={()=>handle(event,teamsSelecteds)} >
                        <option value="" disabled selected>Choise Teams</option>
                        {teams.map(team=>{
                            return <option value={team} key={team}>{team} </option> 
                        })}
                    </select>
                    <label htmlFor="description" className={style.info}>Description:</label>
                    <input type="text" name="description" id="description" className={style.info} />
                    <label htmlFor="image" className={style.info}>Image:</label>
                    <input type="file" src="image" alt="imagen" />
                </div>
            </form>
            <div>
                {arrTeams.map(arrteam=>{
                    return <h2 value={arrteam} key={arrteam}>{arrteam} </h2>
                })}
            </div>
             <button type="submit"onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default FormPage