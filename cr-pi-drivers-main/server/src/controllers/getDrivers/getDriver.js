const axios = require("axios")
const {URL_BASE} = require("../../../endpoints")
const {Driver} = require("../../db")

const getDriver = async (idDriver) => {
    if(idDriver.length == 36){
        const dbdriver = await Driver.findByPk(idDriver);
        return dbdriver
    }
        const {data} = await axios(`${URL_BASE}/${idDriver}`)
        return data
}

module.exports = getDriver