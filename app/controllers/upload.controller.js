const fs = require("fs");

// image uploader function
const uploadFiles = async (req, res, next) => {
  try {
    if (req.file === undefined) {
      return res.status(400).send(`You must select a file.`);
    }
    const fileName = req.file.filename;

    // save file to project directory
    const fileData = fs.readFileSync(req.file.path);
    fs.writeFileSync(
      __basedir + "/resources/static/assets/tmp/" + req.file.originalname,
      fileData
    );
    req.fileName = fileName;
    next(); // calling next function (create) from movie Controller
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying to upload file: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};
