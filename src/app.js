const express = require("express");
// const ObjectId = require("mongodb");
const userRouter = require("./router/user");
const taskRouter = require("./router/task");
require("../src/db/mongoose");

const app = express();

app.use(express.json(), userRouter, taskRouter);

module.exports = app;

//////////////////////////////////////////////

// JSON

// const pet = {
//   name: "Mal",
// };

// pet.toJSON = function () {
//   console.log(this);
//   return this;
// };

// console.log(JSON.stringify(pet));
