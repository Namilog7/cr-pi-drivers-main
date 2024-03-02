import axios from "axios";
import { URL_BASE } from "../endpoints";

export const handle = (event,cb) =>{
    const value = event.target.value 
    cb(value)
}

export const handleSubmit = (event,form) => {
    event.preventDefault();
    axios.post(URL_BASE,form)
    .then(response=>{
        window.alert(response.request.statusText)
    })
    .catch(error=>{
        window.alert(error.message)
    })
}
