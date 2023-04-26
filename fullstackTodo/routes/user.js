const express = require("express");
const { signup, signin, signout, getAllUser, getSingleUser, updateSingleUser, deleteSingleUser } = require("../controller/userController");
const { isLoggedIn, isAdmin } = require("../middleware/user");
const router = express.Router()


router.route('/signup').post(signup)
router.route('/signin').post(signin)
router.route('/signout').get(signout)

router.route('/getAllUser').get(getAllUser)
router.route('/getSingleUser/:id').get(isLoggedIn, getSingleUser)
router.route('/updateSingleUser/:id').put(isLoggedIn, isAdmin,  updateSingleUser)
router.route('/deleteSingleUser/:id').delete(isLoggedIn, isAdmin,  deleteSingleUser)




module.exports = router;