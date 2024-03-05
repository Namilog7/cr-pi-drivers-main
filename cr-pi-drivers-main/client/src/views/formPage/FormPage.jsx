import style from "./FormPage.module.css";
import useForm from "../../hooks/useForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { handle } from "../../hooks/handle";
import useAuxValidates from "../../hooks/useauxValidates";
import { handleSubmit } from "../../hooks/handle";



const FormPage = () => {
    const teams = useSelector(state => state.teams) 
    const {teamsSelecteds,arrTeams,searchIdTeam,find} = useAuxValidates()
    const {form,handleForm,setForm,errors} = useForm()
    const {name,lastName,nationality,description,image,dob} = form;

    
    useEffect(()=>{
        searchIdTeam(arrTeams,teams)
        setForm({
            ...form,
            teams:[...find]
        })
    },[find,arrTeams])

    return(
        <div>
            <form className={style.form} onSubmit={()=>handleSubmit(event,form)}>
                <div className={style.divform}>
                    <label htmlFor="name" className={style.info}>Name:</label>
                    <input type="text" name="name" id="name" className={style.info} value={name} onChange={handleForm}/>
                    <span >{errors.name} </span>
                    <label htmlFor="lastName" className={style.info}>LastName:</label>
                    <input type="text" name="lastName" id="lastName" className={style.info} value={lastName} onChange={handleForm}/>
                    <span>{errors.lastName} </span>
                    <label htmlFor="nationality" className={style.info}>Nationality:</label> 
                    <input type="text" name="nationality" id="nationality" className={style.info} value={nationality} onChange={handleForm} />
                    <span>{errors.nationality} </span>
                    <label htmlFor="dob" className={style.info} >Date Of Birth:</label>
                    <input type="text" name="dob" id="dob" className={style.info} value={dob} onChange={handleForm} />
                    <span>{errors.dob} </span>
                    <label htmlFor="teams" className={style.info}>Teams:</label>
                    <select name="teams" id=""  onChange={()=>handle(event,teamsSelecteds)} >
                        <option value="" disabled selected>Choise Teams</option>
                        {teams.map(team=>{
                            const {name} = team
                            return <option value={name} key={name}>{name} </option> 
                        })}
                    </select>
                    <label htmlFor="description" className={style.info} >Description:</label>
                    <input type="text" name="description" id="description" className={style.info} value={description} onChange={handleForm} />
                    <span>{errors.description} </span>
                    <label htmlFor="image" className={style.info} >Image:</label>
                    <input type="text" name="image" value={image} onChange={handleForm}/>
                    <span>{errors.image} </span>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                {arrTeams.map(arrteam=>{
                    return <h2 value={arrteam} key={arrteam}>{arrteam} </h2>
                })}
            </div>
        </div>
    )
}

export default FormPage