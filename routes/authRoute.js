 const express  = require("express");
 //Import the controllers from userCtrl
 const { createUser, loginUserCtrl } = require("../controllers/userCtrl");
 const router = express.Router();



 //Register Route
router.post('/register', createUser);
 
 //Login Route
router.post('/login', loginUserCtrl);
 module.exports = router;
