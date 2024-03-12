import { useEffect, useState } from "react"
import style from "./Paginate.module.css"
import { useSelector,useDispatch } from "react-redux";
import { stateFiltered } from "../../redux/actions/stateFilters";


const Paginate = ({driversHome,setPaginate,handle}) => {

    const [buttonsPage, setButtonsPage] = useState(1);
    const stateFilter = useSelector(state=>state.stateFilter)
    const dispatch = useDispatch()

    const pagesButtons = 10;  

    
    const renderButtons = (buttonsPage) => {
        const arrButtons = [];
        const startIndex = (buttonsPage - 1) * pagesButtons;
        const endIndex = Math.min(startIndex + pagesButtons, Math.ceil(driversHome.length/9));
        for(let i = startIndex; i<endIndex; i++){
            arrButtons.push(
                <button key={i+1} value={i+1} onClick={()=>{
                    handle(event,setPaginate)
                    dispatch(stateFiltered(parseInt(event.target.value)))
                }} className={style.buttons}>{i+1} </button>
            );
        }
        return arrButtons
    }

    const previus = () =>{
        if(buttonsPage > 1){
            setButtonsPage(buttonsPage-1)
        } 
    }

    const next = () => {
        if(buttonsPage < Math.ceil(driversHome.length/9 /pagesButtons) ){
            setButtonsPage(buttonsPage+1)
        }
    }


    return(
        <div className={style.paginate}>
            <button onClick={previus} className={style.nextyprev}>Prev</button>
            {renderButtons(buttonsPage)}
            {setPaginate(stateFilter)}
            <button onClick={next} className={style.nextyprev} >Next</button>
        </div>
    )
}

export default Paginate