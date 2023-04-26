const express = require("express");
const { signup, signin, signout, getAllUser, getSingleUser } = require("../controller/userController");
const { isLoggedIn } = require("../middleware/user");
const router = express.Router()


router.route('/signup').post(signup)
router.route('/signin').post(signin)
router.route('/signout').get(signout)

router.route('/getAllUser').get(getAllUser)
router.route('/getSingleUser/:id').get(isLoggedIn, getSingleUser)




module.exports = router;