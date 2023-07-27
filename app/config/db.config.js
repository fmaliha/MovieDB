module.exports = {
  HOST: "movie-mysql",
  USER: "root",
  PASSWORD: "root",
  DB: "moviedb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
