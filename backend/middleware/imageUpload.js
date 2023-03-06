const multer = require("multer");

//image upload
//setting storage
//uploads location is relative to middleware folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);
  },
});

//the middleware the controller will use
const upload = multer({ storage });

module.exports = upload;
