const express = require("express")
const router = express.Router()
const musicRouter = require("./music")
const userRouter = require("./user")

router.use("/listMusic", musicRouter)
router.use("/users", userRouter)

module.exports = router