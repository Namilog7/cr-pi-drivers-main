const axios = require("axios");
const {URL_BASE} = require("../../../endpoints");
const { Driver,Teams } = require("../../db");

const filterApiProps = (data) => {
    const drivers = data.map(driver=>{
        const {id,name,nationality,image,dob,description,teams} = driver;
        const teamsArray = teams?.split(",")
        const teamsArr = teamsArray?.map(team=>team.trim())
        if(!image.url) image.url = "hola aca deberia ir una imagen";
        return  {
            id,
            name:name.forename,
            lastName:name.surname,
            description,
            dob,
            nationality,
            teams: teamsArr,
            image: image.url,
            byfilterdob: new Date(dob).getTime()
        }
    });
    return drivers
}

const getAllDrivers = async () => {
    const {data} = await axios(URL_BASE);
    const drivers = filterApiProps(data);

    const dbdrivers = await Driver.findAll({
        include:{
            model: Teams,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }
    });

    return [...dbdrivers, ...drivers]
}


module.exports = {
    getAllDrivers,
    filterApiProps
}