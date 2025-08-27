const MakeTeam = require("../controllers/teamBuildController");

const router= require("express").Router();


router.post("/build-team", MakeTeam);

module.exports=router;