const { verify } = require("../controllers/verifyController");

const router = require("express").Router();

router.post('/check', verify)
module.exports = router;
