const multer = require("multer");

// middleware to help upload

// checking file type = image
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

// setting storage location
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-movieCover-${file.originalname}`);
  },
});

var uploadFile = multer({
  storage: storage,
  fileFilter: imageFilter,
  filename: storage.filename,
});
module.exports = uploadFile;
