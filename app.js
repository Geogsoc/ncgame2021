const express = require("express");
const apiRouter = require("./routers/api.router");
const app = express();
app.use(express.json());
app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
});

app.use((err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send({ msg: "Invalid Input" });
  } else next(err);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Internal Server Error" });
});

// app.use((err, req, res, next) => {
//   if (err.code === "22P02") {
//     res.status(400).send({ msg: "Invalid input" });
//   } else next(err);
// });
// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).send({ msg: "Internal Server Error" });
// });

module.exports = app;