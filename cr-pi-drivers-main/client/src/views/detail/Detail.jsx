import style from "./Detail.module.css";
import {useSelector} from "react-redux";


const detailPage = () => {
    const driverDetail = useSelector(state=> state.driverDetail)
    const {id,name,lastName,nationality,image,description,dob,teams} = driverDetail;
    
    return(
        <div className={style.contenedor} >
        <div className={style.detail}>
            <div className={style.contdivimg}>
            <div className={style.divimage}>
            <img src={image} alt={name} className={style.image} />
            </div>
            </div>
            <div className={style.datos}>
            <h1 style={{borderBottom:"1px solid black"}}>{`${name} ${lastName}`} </h1>
            <p className={style.pyh}>{id} </p>
            <h2 className={style.pyh}>{nationality} </h2>
            <p className={style.pyh}>{dob} </p>
            {teams.map(team=>{
                return <span style={{marginRight:"1%"}} className={style.pyh} >{team} </span>
            })}
            <div className={style.descrip}>
                <h2 className={style.h2}>Description</h2>
                <p >{description} </p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default detailPage