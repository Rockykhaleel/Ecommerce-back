const express = require("express");
const isAuthenticated = require("../middleware/protectedRoute");

const controller = require("../controller/usercontroller")

const router = express.Router();

router.post("/register", controller.register);

router.post("/login", controller.login);

router.get("/userByID", isAuthenticated, controller.userByID);

router.put("/updateUser", isAuthenticated, controller.updateUser);

//only by Admin
router.delete("/deleteUser/:id", controller.deleteUser);

//only by Admin
router.get("/getAllUsers", controller.getAllUsers );

//protected Route
router.get("/profile", isAuthenticated, controller.profile);

router.post("/logout", async (req, res) => {});

module.exports = router;