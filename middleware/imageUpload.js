const multer = require("multer");

//image upload
//setting storage
//uploads location is relative to server.js
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//the middleware the controller will use
const upload = multer({ storage });

module.exports = upload;
