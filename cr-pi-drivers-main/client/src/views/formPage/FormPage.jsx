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
        <div className={style.contenedor}>
            <form className={style.form} onSubmit={()=>handleSubmit(event,form,errors)}>
                <div className={style.divform}>
                    <label htmlFor="name" className={style.label}>Name:</label>
                    <input type="text" name="name" id="name" className={style.info} value={name} onChange={handleForm}/>
                    <span className={style.span}>{errors.name} </span>
                    <label htmlFor="lastName" className={style.label}>LastName:</label>
                    <input type="text" name="lastName" id="lastName" className={style.info} value={lastName} onChange={handleForm}/>
                    <span className={style.span}>{errors.lastName} </span>
                    <label htmlFor="nationality" className={style.label}>Nationality:</label> 
                    <input type="text" name="nationality" id="nationality" className={style.info} value={nationality} onChange={handleForm} />
                    <span className={style.span}>{errors.nationality} </span>
                    <label htmlFor="dob" className={style.label} >Date Of Birth:</label>
                    <input type="text" name="dob" id="dob" className={style.info} value={dob} onChange={handleForm} />
                    <span className={style.span}>{errors.dob} </span>
                    <label htmlFor="teams" className={style.label}>Teams:</label>
                    <select name="teams" id=""  onChange={()=>handle(event,teamsSelecteds)} >
                        <option value="" disabled selected>Teams</option>
                        {teams.map(team=>{
                            const {name} = team
                            return <option value={name} key={name}>{name} </option> 
                        })}
                    </select>
                    <label htmlFor="description" className={style.label} >Description:</label>
                    <input type="text" name="description" id="description" className={style.info} value={description} onChange={handleForm} />
                    <span className={style.span}>{errors.description} </span>
                    <label htmlFor="image" className={style.label} >Image:</label>
                    <input type="text" name="image" value={image} className={style.info} onChange={handleForm}/>
                    <span className={style.span}>{errors.image} </span>
                </div>
                <div className={style.divbutton}>
                <button type="submit">Submit</button>
                </div>
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