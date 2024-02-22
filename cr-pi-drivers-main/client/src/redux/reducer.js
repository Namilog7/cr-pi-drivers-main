import { GET_DRIVERS } from "./actions/getDrivers";
import { SEARCH_DRIVER } from "./actions/searchDriver";
import { CLEAN } from "./actions/Clean";
import { GET_DETAIL } from "./actions/getDetail";
import { GET_BY_ORIGIN } from "./actions/filByOrigin";

const initialState = {
    driversHome : [],
    driverDetail : {}
};

const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case GET_DRIVERS:{
            return {...state, driversHome:[...state.driversHome,...payload]} 
        }
        case SEARCH_DRIVER:{
            return {
                ...state,
                driversHome:[...payload]
            }
        }
        case CLEAN :{
            return{
                ...state,
                driversHome:[...payload]
            }
        }
        case GET_DETAIL :{
            return{
                ...state,
                driverDetail: payload
            }
        }
        case GET_BY_ORIGIN:{
            return{
                ...state,
                driversHome:[...payload]
            }
        }
        default:{
            return{...state}
        }
    }
}

export default reducer