const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');


router
    .route("/")
    .get(usersController.index)
//     .post(usersController.addUser);



router
    .route('/:id')
    .get(usersController.getUserInformation);
//     .put(usersController.updateUser)
//     .delete(usersController.deleteUser);



module.exports = router;
