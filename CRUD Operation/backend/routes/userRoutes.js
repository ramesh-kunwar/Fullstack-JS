const express = require("express");
const router =  express.Router()
const {home, createuser, getUsers, editUser, deleteUser} = require("../controller/userControllers")

router.get("/", home)

router.post("/createuser", createuser)
router.get("/getUsers", getUsers)
router.put("/edituser/:id", editUser )
router.delete("/deleteuser/:id", deleteUser )

module.exports = router