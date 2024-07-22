const busboy = require('busboy');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '../../src/assets');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const fileUpload = (req, res, next) => {
  if (req.is('json')) {
    // If the request is JSON, just pass it through
    return next();
  }

  const bb = busboy({ headers: req.headers });
  req.body = {};
  req.files = {};

  bb.on('file', (name, file, info) => {
    const fileExtension = path.extname(info.filename);
    const baseFileName = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const filename = `${baseFileName}${fileExtension}`;
    const filePath = path.join(uploadsDir, filename);
    const writeStream = fs.createWriteStream(filePath);
    file.pipe(writeStream);

    writeStream.on('finish', () => {
      req.files[name] = '/assets/' + filename;
    });
  });

  bb.on('field', (name, val) => {
    req.body[name] = val;
  });

  bb.on('finish', () => {
    next();
  });

  bb.on('error', (error) => {
    console.error('Busboy error:', error);
    res.status(400).json({ message: 'Error processing form data' });
  });

  req.pipe(bb);
};

module.exports = fileUpload;