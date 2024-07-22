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
    req.body[name] = ''; // Initialize the field to store the file path
    const tmpFilePath = path.join(uploadsDir, `tmp_${Date.now()}`);
    const writeStream = fs.createWriteStream(tmpFilePath);
    file.pipe(writeStream);

    writeStream.on('finish', () => {
      req.files[name] = {
        filename: info.filename,
        encoding: info.encoding,
        mimetype: info.mimeType,
        filepath: tmpFilePath
      };
    });
  });

  bb.on('field', (name, val) => {
    req.body[name] = val;
  });

  bb.on('finish', () => {
    // Process files after all fields are parsed
    Object.keys(req.files).forEach((fieldname) => {
      const file = req.files[fieldname];
      const fileExtension = path.extname(file.filename);
      const email = req.body.email || 'unknown';
      const sanitizedEmail = email.replace(/[^a-zA-Z0-9]/g, '_');
      const filename = `${sanitizedEmail}${fileExtension}`;
      const filePath = path.join(uploadsDir, filename);
      
      fs.renameSync(file.filepath, filePath);
      req.body[fieldname] = '/assets/' + filename;
    });
    next();
  });

  bb.on('error', (error) => {
    console.error('Busboy error:', error);
    res.status(400).json({ message: 'Error processing form data' });
  });

  req.pipe(bb);
};

module.exports = fileUpload;