const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
global.__basedir = __dirname;
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve static files
var directory = require("path").join(
  __dirname,
  "/resources/static/assets/uploads"
);
// console.log(directory);
app.use("/movieCover", express.static(directory));

const db = require("./models");
const Role = db.role;

db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   // console.log("Drop and re-sync db.");
//   initial();
// });

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user",
//   });

//   Role.create({
//     id: 2,
//     name: "moderator",
//   });

//   Role.create({
//     id: 3,
//     name: "admin",
//   });
// }
app.get("/", (req, res) => {
  res.json({
    message: "Hi from the app!",
  });
});

// routes
require("./routes/movies.routes.js")(app);
require("./routes/auth.routes.js")(app);
require("./routes/user.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}.`);
});
