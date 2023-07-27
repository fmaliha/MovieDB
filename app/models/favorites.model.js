const { response } = require("express");
const sql = require("./db.js");

// constructor
const favMovie = function (movie) {
  this.id = movie.id;
  this.userId = movie.userId;
};

favMovie.create = (newfavMovie, result) => {
  const query = "INSERT INTO favorites SET ?";
  if (query) {
    query += `where fav_user_id = `;
  }
  sql.query(query, newfavMovie, (err, res) => {
    if (err) {
      console.log("Error inserting movie: ", err);
      reject(err);
      return;
    }
    console.log("Movie added to favorites: ", { id: res.id, ...newfavMovie });
    result(null, { id: res.id, ...newfavMovie });
  });
};
