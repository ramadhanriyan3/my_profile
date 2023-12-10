import express from "express";
const router = express.Router();
const uploadOnMemory = require("./../middleware/uploadOnMemory");
const carController = require("./../controller/carControllers");
const { superAdminAuth, adminAuth } = require("./../middleware/authController");

router.get("/", carController.getCars);

router.get("/:id", carController.getCarById);

router.post("/create", uploadOnMemory.single("picture"), carController.postCar);
// adminAuth
router.patch(
  "/:id/update",
  uploadOnMemory.single("picture"),
  carController.updateCar
);

router.delete("/:id/delete", carController.deleteCar); //adminAuth

module.exports = router;
