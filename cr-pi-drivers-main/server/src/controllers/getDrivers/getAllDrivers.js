const axios = require("axios");
const {Driver} = require("../../db")


const getAllDrivers = async (URL_BASE) => {
    const {data} = await axios(URL_BASE);
    const drivers = data.map(driver=>{
        const {id,name,nationality,image,dob,description} = driver;
        if(!image.url) image.url = "hola aca deberia ir una imagen";
        return  {
            id,
            name:name.forename,
            lastName:name.surname,
            description,
            dob,
            nationality,
            image: image.url
        }
    })
    return drivers
}

module.exports = getAllDrivers