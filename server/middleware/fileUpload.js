const busboy = require('busboy');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../../src/assets');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const fileUpload = (req, res, next) => {
  if (req.is('json')) {
    return next();
  }

  const bb = busboy({ headers: req.headers });
  req.body = {};
  req.files = {};

  bb.on('file', (name, file, info) => {
    const filename = Date.now() + '_' + info.filename;
    const filePath = path.join(uploadsDir, filename);
    const writeStream = fs.createWriteStream(filePath);
    file.pipe(writeStream);

    writeStream.on('finish', () => {
      req.files[name] = {
        filename: filename,
        filepath: '/assets/' + filename
      };
    });
  });

  bb.on('field', (name, val) => {
    req.body[name] = val;
  });

  bb.on('finish', () => {
    next();
  });

  req.pipe(bb);
};

module.exports = fileUpload;