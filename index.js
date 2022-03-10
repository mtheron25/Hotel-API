const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const availabilityRouter = require("./routes/availabilityRouter.js");

app.use(express.json());
app.use(cors());

app.set("port", process.env.PORT || 2013);

app.get("/", (req, res) => {
  res.send({ msg: "Hotel API" });
});

app.use("/availability", availabilityRouter);

app.listen(app.get("port"), (server) => {
  console.log(`Server listening on port ${app.get("port")}`);
  console.log("Press CTRL+C to quit");
});
