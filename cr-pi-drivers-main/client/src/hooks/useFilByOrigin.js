import { useSelector } from "react-redux";


const useFilByOrigin = () =>{
    const driversHome = useSelector(state => state.driversHome)
    const filByOr = (value) => {
        if(value == "api"){
            const origin = driversHome.filter(driver => {
             return driver.id.length == 36
            })
            return origin
        }else{
            const origin = driversHome.filter(driver=>{
             return driver.id.length !== 36
            })
            return origin
        }
    }
    return{
        filByOr
    }
};

export default useFilByOrigin