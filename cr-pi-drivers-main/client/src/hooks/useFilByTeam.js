import { useSelector , useDispatch} from "react-redux";
import { filByOrigin } from "../redux/actions/filByOrigin";

const useFilByTeam = () => {
    const aux = useSelector(state=> state.aux);
    const dispatch = useDispatch();

    const filterTeam = (value) =>{
        const filt = aux.filter(driver=>{
            return driver.teams?.includes(value);
        })
        dispatch(filByOrigin(filt))
    }
    
    return{
        filterTeam
    }
};

export default useFilByTeam