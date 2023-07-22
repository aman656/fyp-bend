const router = require("express").Router();
const controllers = require("../controllers");

router.post("/createVoter", (req, res) => {
  controllers.Voter.createVoter(req, res);
});

router.post("/fetchVoter", (req, res) => {
  controllers.Voter.fetchVoter(req, res);
});

router.post("/checkStatus", (req, res) => {
  controllers.Voter.checkEligibilty(req, res);
});

module.exports = router;
