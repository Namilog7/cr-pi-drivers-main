const {Driver} = require("../../db");

const postDriver = async (driver) => {
    const { name, lastName, description, dob, nationality, image, teams } = driver
    if(!name||!lastName||!description||!dob||!nationality||!image) throw Error("Faltan datos")
    const drivercreate = await Driver.create(driver);
    drivercreate.addTeams(teams);
    return driver
}

module.exports = postDriver