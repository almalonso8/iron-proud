const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controllers");

//const middleware = require("/");

// router.get("/create", middleware, usersController.create);
// router.post("/create", middleware, usersController.doCreate);

router.get("/create", usersController.create);
router.post("/create", usersController.doCreate);

module.exports = router;