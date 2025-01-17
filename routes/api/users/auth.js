const express = require("express");
const register = require("../../controllers/users/register");
const login = require("../../controllers/users/login");
const logout = require("../../controllers/users/logout");
const current = require("../../controllers/users/current");
const subscription = require("../../controllers/users/subscription");
const validateBodyRegister = require("../../middlewares/users/validateBodyRegister");
const validateBodyLogin = require("../../middlewares/users/validateBodyRegister");
const validateBodySubscription = require("../../middlewares/users/validateBodySubscription");
const validateAuthorization = require("../../middlewares/users/validateAuthorization");

const router = express.Router();

router.post("/register", validateBodyRegister, register);
router.post("/login", validateBodyLogin, login);
router.get("/logout", validateAuthorization, logout);
router.get("/current", validateAuthorization, current);
router.patch(
    "/subscription",
    validateAuthorization,
    validateBodySubscription,
    subscription
);

module.exports = router;
