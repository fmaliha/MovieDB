const { uploadFiles } = require("./upload.controller");
const db = require("../models");
const Movie = db.movies;
const Op = db.Sequelize.Op;

// Create  a movie
exports.create = async (req, res) => {
  // Validate request
  try {
    if (!req.body.title || !req.fileName) {
      res.status(400).send({
        message: "Title & File's required!",
      });
      return;
    }

    // Create a Movie
    const movie = {
      title: req.body.title,
      genre: req.body.genre,
      image: req.fileName,
      duration: req.body.duration,
      description: req.body.description,
      release_year: req.body.release_year,

      published: req.body.published ? req.body.published : false,
    };

    // Save Movie in the database
    const createdMovie = await Movie.create(movie);

    res.status(201).send({
      message: "Movie created successfully.",
      movie: createdMovie,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Movie.",
    });
  }
};

// Get all movies published + unpublished for admin
exports.findAllMovies = (req, res) => {
  Movie.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    });
};
// Get all published movies
exports.findAllPublished = (req, res) => {
  Movie.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    });
};

// Get one movies with id for movie details
exports.findOne = (req, res) => {
  const id = req.params.id;

  Movie.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Movie with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Movie with id=" + id,
      });
    });
};

// update movie
exports.update = (req, res) => {
  const id = req.params.id;

  Movie.findByPk(id)
    .then((movie) => {
      if (movie) {
        console.log(req);
        const updatedData = req.body;

        // Save the updated movie data
        return movie.update(updatedData);
      } else {
        throw new Error(`Movie with id=${id} not found.`);
      }
    })
    .then((updatedMovie) => {
      res.send({
        message: "Movie was updated successfully.",
        movie: updatedMovie,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Movie with id=${id}: ${err.message}`,
      });
    });
};

// Delete
exports.delete = (req, res) => {
  const id = req.params.id;

  Movie.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Movie was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete movie with id=${id}. Maybe Movie was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Movie with id=" + id,
      });
    });
};

// search only published movies with keywords from title, genre, release_year field
exports.findAll = (req, res) => {
  console.log(req.query);
  const { search } = req.query;
  const condition = {
    [Op.and]: [
      {
        [Op.or]: [
          { title: { [Op.like]: `%${search}%` } },
          { genre: { [Op.like]: `%${search}%` } },
          { release_year: { [Op.like]: `%${search}%` } },
        ],
      },
      { published: 1 },
    ],
  };

  Movie.findAll({ where: condition })
    .then((movies) => {
      res.send(movies);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    });
};
