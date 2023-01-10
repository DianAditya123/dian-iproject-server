const express = require('express')
const musicController = require('../controllers/musicController')
const router = express.Router()

router.get("/", musicController)
router.get("/myFavorite", musicController)
router.post("/myFavorite/:id", musicController)



module.exports = router