const express = require("express")
const router = express.Router()

const {createBootcamp, displayBootcamps, updateBootcamp, deleteBootcamp} = require("../controllers/bootcamp")

router.post("/createBootcamp", createBootcamp)
router.get("/bootcamps", displayBootcamps)


router.put("/bootcamp/:bootcampId", updateBootcamp)
router.delete("/bootcamp/:bootcampId",deleteBootcamp)


module.exports = router;