import {URL_BASE} from "../../endpoints";
import axios from "axios"

export const GET_DRIVERS = "GET_DRIVERS";

export const getDrivers = () =>{
    return async (dispatch) =>{
        const {data} = await axios(URL_BASE);
        dispatch({
            type: GET_DRIVERS,
            payload: data
        })
    }
}