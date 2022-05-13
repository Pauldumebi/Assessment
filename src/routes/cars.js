const router = require("express").Router();
const Car = require("../models/Car.js");

// post a car
router.route("/").post(async (req, res) => {
   const { name, price, year, type, condition } = req.body;
   const { image } = req.file.path;
   const postCar = await Car.create({ image, name, price, year, type, condition });

   if(!postCar) {
      return res.status(400).json({ 
         success: false,
         message: "Error posting car."
      })
   }
   res.status(201).json({
     success: true,
     message: "Car posted successfully.",
     postCar
   });
});

// Get all cars
router.route("/").get(async (req, res) => {
  const data = await Car.find();
  return res.status(200).json({
    success: true,
    message: "Cars fetched successfully.",
    data,
  });
});

// view a specific car
router.route("/:id").get(async (req, res) => {
   const {id} = req.params;
   const fetchedCar = await Car.findById(id);
   if(!fetchedCar) {
      return(
         res.status(400).json({
            success: false,
            message: "Car not found."
         })
      )
   }
   return res.status(200).json({
      success: true,
      message: "Car fetched successfully.",
      fetchedCar
   })
});

// delete car
router.route("/:id").delete(async (req, res) => {
   const {id} = req.params;
   const deleteCar = await Car.findByIdandDelete(id);
   if(!deleteCar) {
      return res.status(400).json({
         success: false,
         message: "Error deleting car."
      })
   }
   return res.status(200).json({
     success: true,
     message: "Car deleted successfully.",
   });
});

module.exports = router;
