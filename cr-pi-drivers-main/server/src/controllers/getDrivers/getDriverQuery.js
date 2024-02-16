const axios = require("axios")
const URL_BASE = require("../../../endpoints")
const {Driver} = require("../../db")

const getDriverQuery = async (namequery) => {
    const name = namequery.charAt(0).toUpperCase() + namequery.slice(1).toLowerCase()
    const {data} = await axios(URL_BASE);
    const filt = data.filter(driver=>{
        return driver.name.forename == name
    })
    if(filt.length <= 15){
        Driver.findAll({
            where:{
                name: name
            }
        }).then(data=>{
            filt.push(data)
        })
    }
    return filt
} 

module.exports = getDriverQuery