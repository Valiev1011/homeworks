const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
const port = config.get("port");
const mainrouter = require("./routes/index.routes");

app.use(mainrouter);

async function start() {
  try {
    await mongoose.connect(config.get("dbUri"));
    app.listen(port, () => {
      console.log(`Server is running on ${port} port`);
    });
  } catch (error) {
    console.log(`Serverda xatolik`);
  }
}
start();
