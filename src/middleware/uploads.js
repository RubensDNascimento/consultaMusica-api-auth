const multer = require('@koa/multer');

const path = "./src/uploads";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path);
    },
    filename: (req, file, cb) => {
        var fileFormat = (file.originalname).split('.')
        cb(null, file.fieldname  + '_' + Date.now() + '.' + fileFormat[fileFormat.length - 1]);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb("Type file is not access", false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits: 1024 * 1024 * 5
});
module.exports = upload 