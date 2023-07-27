module.exports = (app) => {
  const uploadController = require("../controllers/upload.controller.js");
  const upload = require("../middleware/upload");
  const movies = require("../controllers/movie.controller.js");
  var router = require("express").Router();

  // Create a new movie
  router.post(
    "/add",
    upload.single("file"),
    uploadController.uploadFiles,
    movies.create
  );
  // get all movies
  router.get("/all", movies.findAllPublished);

  // get all movies for admin
  router.get("/admin", movies.findAllMovies);

  // get movies of a certain id
  router.get("/:id", movies.findOne);

  // get search results
  router.get("/", movies.findAll);

  // get search results published+unpublished
  router.get("/admin", movies.findAll);

  //update movies
  router.patch("/:id", movies.update);

  // delete movies
  router.delete("/:id", movies.delete);

  app.use("/movies", router);
};
