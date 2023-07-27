module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movies", {
    title: {
      type: Sequelize.STRING,
    },
    genre: {
      type: Sequelize.STRING,
    },
    image: {
      type: Sequelize.STRING,
    },

    duration: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    release_year: {
      type: Sequelize.STRING,
    },

    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Movie;
};
