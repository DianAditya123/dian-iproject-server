const express = require("express")
const userController = require("../controllers/userController")
const router = express.Router()



router.post("/register", userController)
router.post("/login", userController)


module.exports = router