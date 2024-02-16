const axios = require("axios")
const URL_BASE = require("../../../endpoints")
const {Driver} = require("../../db")

const getDriver = async (idDriver) => {
    const {data} = await axios(`${URL_BASE}/${idDriver}`)
    if(!data){
        const dbdriver = await Driver.findOne({
            where:{
                id:idDriver
            }
        })
        return dbdriver
    }
    return data
}

module.exports = getDriver