import { GET_DRIVERS } from "./actions/getDrivers";
import { SEARCH_DRIVER } from "./actions/searchDriver";
import { GET_DETAIL } from "./actions/getDetail";
import { GET_BY_FILTER } from "./actions/filByOrigin";

const initialState = {
    driversHome : [],
    driverDetail : {},
    aux: [],
};

const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case GET_DRIVERS:{
            return {
                ...state,
                driversHome:[...state.driversHome,...payload],
                aux:[...state.driversHome, ...payload]
            } 
        }
        case SEARCH_DRIVER:{
            return {
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
        case GET_BY_FILTER:{

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