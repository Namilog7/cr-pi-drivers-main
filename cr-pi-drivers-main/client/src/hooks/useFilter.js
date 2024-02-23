import { useSelector,useDispatch } from "react-redux"
import { filByOrigin } from "../redux/actions/filByOrigin";


const useFil = () => {
    const aux = useSelector(state =>state.aux);
    const dispatch = useDispatch();

    const orderByAlpha = (value) =>{

    }

    return{
        orderByAlpha
    }
};
export default useFil