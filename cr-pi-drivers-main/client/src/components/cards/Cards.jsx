import Card from "../card/Card"
import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { getDrivers } from "../../redux/actions/getDrivers";
import style from "./Cards.module.css"
import { clean } from "../../redux/actions/Clean";

const Cards = () => {
    const drivers = useSelector((state)=> state.driversHome)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDrivers())
        return ()=>dispatch(clean())
    },[])
    
    return(
        <div className={style.cards}>
        {drivers.map(driver=>{
            const {name,id,image,nationality,dob,description,teams} = driver
           return <Card 
            name= {name}
            image= {image}
            teams={teams} 
            key={id}
            nationality={nationality}
            dob={dob}
            description={description}
            />
        })}
        </div>
    )
}

export default Cards