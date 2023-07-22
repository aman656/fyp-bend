const db = require("../models");

exports.createVoter = async (req, res) => {
  try {
    const data = req.body;
    const present = await db.voters.find({ cnic: req.body.cnic });
    if (present) {
      res.status(202).send({
        success: false,
        message: "Voter with given cnic already exist.",
      });
    } else {
      const saving = await db.voters(data).save();
      if (saving) {
        res
          .status(200)
          .send({ success: true, message: "Voter created successfully." });
      } else {
        res.status(500).send({ success: false, message: "Some error occured" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: "Some error occured" });
  }
};

exports.fetchVoter = async (req, res) => {
  try {
    const find = await db.voters.find({ cnic: req.body.cnic });
    if (find) {
      res.status(200).send({ success: true, data: find });
    } else {
      res.status(202).send({ success: false, message: "Voter not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: "Some error occured" });
  }
};

exports.checkEligibilty = async (req, res) => {
  try {
    let eligible;
    const voter = await db.voters.find({ cnic: req.body.cnic });
    if (voter) {
      if (voter?.age < 18 || voter?.is_alive == false) {
        eligible = false;
      } else {
        eligible = true;
      }
      res.status(200).send({ success: true, eligible: eligible });
    } else {
      res
        .status(202)
        .send({ success: false, message: "Voter with given cnic not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ success: false, message: "Some error occured" });
  }
};
