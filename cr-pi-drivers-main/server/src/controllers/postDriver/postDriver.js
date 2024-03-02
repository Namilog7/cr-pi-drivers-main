const {Driver} = require("../../db");

const postDriver = async (driver) => {
    const { name, lastName, description, dob, nationality, image, teams } = driver
    if(!name||!lastName||!description||!nationality) throw Error("Faltan datos")

    for(key in driver){
        if(driver[key] == name || driver[key] == lastName || driver[key] == nationality){
            driver[key] = driver[key].charAt(0).toUpperCase() + driver[key].slice(1)
        }
    };
    
    const drivercreate = await Driver.create(driver);
    drivercreate.addTeams(teams);
    return driver
}

module.exports = postDriver