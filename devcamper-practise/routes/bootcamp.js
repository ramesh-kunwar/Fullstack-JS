const express = require("express")
const router = express.Router()

const {createBootcamp, displayBootcamps, updateBootcamp, deleteBootcamp, getBootcamp} = require("../controllers/bootcamp")

router.post("/createBootcamp", createBootcamp)
router.get("/bootcamps", displayBootcamps)

router.get("/bootcamp/:bootcampId", getBootcamp)

router.put("/bootcamp/:bootcampId", updateBootcamp)
router.delete("/bootcamp/:bootcampId",deleteBootcamp)


module.exports = router;