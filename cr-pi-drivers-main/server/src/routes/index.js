const { Router } = require("express");
const getAllDrivers = require("../controllers/getDrivers/getAllDrivers");
const getDriver = require("../controllers/getDrivers/getDriver")
const getDriverQuery = require("../controllers/getDrivers/getDriverQuery")
const URL_BASE = require("../../endpoints")


const router = Router();

router.get("/", async (req,res)=>{
    const {name} = req.query;
    try {
        const driver = name ? await getDriverQuery(name) : await getAllDrivers(URL_BASE);
        res.status(200).json(driver)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get("/:idDriver", async(req,res)=>{
    const {idDriver} = req.params;
    try {
        const driver = await getDriver(idDriver)
        res.status(200).json(driver)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports = router;
