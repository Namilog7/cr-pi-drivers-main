import Card from "../card/Card"
import { useEffect } from "react";
import {useDispatch} from "react-redux"
import { getDrivers } from "../../redux/actions/getDrivers";
import style from "./Cards.module.css"
import usePaginated from "../../hooks/usePaginated";
import {handle} from "../../hooks/handle"

const Cards = () => {
    const {driversHome,pages,paginate,setPaginate,visual} = usePaginated()
    const dispatch = useDispatch();
    

    useEffect(()=>{
        if(!driversHome[0]) dispatch(getDrivers())
        pages();
    },[driversHome,paginate])

    
    return(
        <div className={style.cards}>
        {visual.map(driver=>{
            const {name,id,image,nationality,dob,description,teams} = driver
           return <Card 
            name= {name}
            image= {image}
            key={id}
            nationality={nationality}
            dob={dob}
            description={description}
        
            />
        })}
        <div className={style.buttons} >
            {Array.from({length:Math.ceil(driversHome.length/9)}, (_, index)=>{
               return <button key={index+1} value={index +1} onClick={()=>handle(event,setPaginate)} className={style.button}>{index + 1} </button>
            })}
        </div>
        </div>
    )
}

export default Cards