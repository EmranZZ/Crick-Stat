const { fetchDivFromESPN } = require("../controllers/homeController");
const {SeeTeam} = require("../controllers/teamController")

const router= require("express").Router();


router.post("/", SeeTeam);
router.get("/home", fetchDivFromESPN)

module.exports=router;