const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/v1/voters", routes.Voter);
app.use("/v1/admin", routes.Admin);
app.listen(9000, () => {
  mongoose
    .connect(
      "mongodb+srv://user_004:strong890@cluster0.w8zo3.mongodb.net/fyp?retryWrites=true&w=majority"
    )
    .then(() => console.log("Server and Database Connected"))
    .catch((err) => {
      console.log(err);
    });
  //   console.log("Server and Database Running at port 9000");
});
