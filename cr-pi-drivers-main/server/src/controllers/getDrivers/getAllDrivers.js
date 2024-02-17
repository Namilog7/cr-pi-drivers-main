const axios = require("axios");
const {URL_BASE} = require("../../../endpoints")

const getAllDrivers = async () => {
    const {data} = await axios(URL_BASE);
    const drivers = data.map(driver=>{
        const {id,name,nationality,image,dob,description,teams} = driver;
        if(!image.url) image.url = "hola aca deberia ir una imagen";
        return  {
            id,
            name:name.forename,
            lastName:name.surname,
            description,
            dob,
            nationality,
            teams,
            image: image.url
        }
    })
    return drivers
}

module.exports = getAllDrivers