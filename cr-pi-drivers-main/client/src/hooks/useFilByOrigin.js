import { useDispatch, useSelector } from "react-redux";
import { filByOrigin } from "../redux/actions/filByOrigin";


const useFilByOrigin = () =>{
    const dispatch = useDispatch()
    const aux = useSelector(state => state.aux)
    const filByOr = (value) => {
        if(value == "api"){
            const filt = aux.filter(driver=>{
               return driver.id.length !== 36
            })
            dispatch(filByOrigin(filt))
        }else{
            const filt = aux.filter(driver=>{
                return driver.id.length == 36
            });
            dispatch(filByOrigin(filt))
        }
    }
    return {
        filByOr
    }
};

export default useFilByOrigin