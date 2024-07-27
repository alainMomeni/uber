const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../src/assets'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload an image.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB file size limit
  }
}).fields([
  { name: 'photo', maxCount: 1 },
  { name: 'profilePhoto', maxCount: 1 },
  { name: 'restaurantPhoto', maxCount: 1 }
]);

module.exports = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: `Multer uploading error: ${err.message}` });
    } else if (err) {
      return res.status(500).json({ message: `Unknown uploading error: ${err.message}` });
    }
    next();
  });
};
