const axios = require("axios")
const {URL_BASE} = require("../../../endpoints");
const {Teams} = require("../../db")

const getTeams = async () =>{
    const teams = []
    const {data} = await axios(`${URL_BASE}`);
    const teamsdrivers = data.map(team=>{
        return team.teams
    })
    const reps = teamsdrivers.join().split(",");
    reps.forEach(team=>{
        if(!teams.includes(team.trim())) teams.push(team.trim())
    });

    teams.forEach(team=>{
        Teams.create({name:team});
    })
}

module.exports = getTeams