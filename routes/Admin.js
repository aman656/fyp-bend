const router = require("express").Router();
const controllers = require("../controllers");

router.post("/createAdmin", (req, res) => {
  controllers.Admin.createAdmin(req, res);
});

router.post("/fetchAdmin", (req, res) => {
  controllers.Admin.authenticateAdmin(req, res);
});

module.exports = router;
