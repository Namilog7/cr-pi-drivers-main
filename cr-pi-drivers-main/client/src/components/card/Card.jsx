import style from "./Card.module.css"
import {Link} from "react-router-dom"
import {useDispatch} from "react-redux";
import {getDetail} from "../../redux/actions/getDetail"

const Card = (driver) => {
    const dispatch = useDispatch()
    const {name,image} = driver
    return(
        <>
        <div className={style.card}>
            <Link to="/detailPage">
            <div className={style.divimage}>
            <img src={image} alt={name} className={style.img}  onClick={()=>dispatch(getDetail(driver))} />
            </div>
            </Link>
            <Link to="/detailPage">
            <div className={style.divcontent} onClick={()=>dispatch(getDetail(driver))}>
            <p className={style.name}>{name} </p>
            </div>
            </Link>
        </div>
        </>
    )
}

export default Card