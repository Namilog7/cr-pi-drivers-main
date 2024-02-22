import style from "./Detail.module.css";
import {useSelector} from "react-redux";

const detailPage = () => {
    const driverDetail = useSelector(state=> state.driverDetail)
    const {id,name,lastName,nationality,image,description,dob,teams} = driverDetail
    return(
        <div className={style.detail}>
            <img src={image} alt={name} />
            <h1>{name} </h1>
            <h2>{lastName} </h2>
            <p>{nationality} </p>
            <p>{dob} </p>
            <p>{teams} </p>
            <p>{description} </p>
        </div>
    )
}

export default detailPage