module.exports = (app) => {
  const movies = require("../controllers/favorite.controller");

  var router = require("express").Router();

  // Create a new movie
  //router.post("/add", movies.create);
  // get all movies
  //router.get("/all", movies.findAll);
  // add a fav movie
  router.get("/:id", favMovie.create);
  // get search results

  app.use("/favorites", router);
};
