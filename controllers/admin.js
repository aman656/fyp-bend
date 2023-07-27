const db = require("../models");

exports.createAdmin = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      password: req.body.password,
    };
    const save = await db.admin(data).save();
    if (save) {
      res
        .status(200)
        .send({ success: true, message: "Admin Created Successfully" });
    } else {
      res.status(500).send({ success: false, message: "An error occured." });
    }
  } catch (err) {
    res.status(500).send({ success: false, message: "An error occured." });
  }
};

exports.authenticateAdmin = async (req, res) => {
  try {
    if (req.body.name == "" || req.body.password == "") {
      res
        .status(404)
        .send({ success: false, message: "Provide Authentic fields." });
    } else {
      const find = await db.admin.findOne({ name: req.body.name });
      if (find) {
        console.log(find);
        if (find.password !== req.body.password) {
          res
            .status(402)
            .send({ success: false, message: "Unauthorized request." });
        } else {
          res
            .status(200)
            .send({ success: true, message: "Authenticated", data: find });
        }
      } else {
        res.status(404).send({
          success: false,
          message: "Admin not found with this username.",
        });
      }
    }
  } catch (err) {
    res.status(500).send({ success: false, message: "An error occured." });
  }
};
