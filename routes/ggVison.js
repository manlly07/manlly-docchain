const router = require("express").Router();
const multer = require("multer")

const upload = multer()
const {detect} = require('../controllers/ggVisionController')

router.post('/verify', upload.single("image"), detect)

module.exports = router;