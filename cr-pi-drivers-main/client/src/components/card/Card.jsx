import style from "./Card.module.css"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";
import {getDetail} from "../../redux/actions/getDetail"

const Card = (driver) => {
    const dispatch = useDispatch()
    const {name,teams,image,} = driver
    return(
        <>
        <div className={style.card}>
            <Link to="/detailPage">
            <div className={style.divimage}>
            <img src={image} alt={name} className={style.img}  onClick={()=>dispatch(getDetail(driver))} />
            </div>
            </Link>
            <div className={style.divcontent}>
            <p className={style.name}>{name} </p>
            </div>
        </div>
        </>
    )
}

export default Card