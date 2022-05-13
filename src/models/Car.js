const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema(
  {
    image: {
      type: String,
      // required: [true, "image is required"],
    },
    name: {
      type: String,
      required: [true, "name is required"],
    },
    price: {
      type: String,
      required: [true, "price is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    year: {
      type: String,
      required: [true, "year is required"],
    },
    condition: {
      type: String,
      required: [true, "condition is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("car", carSchema);
