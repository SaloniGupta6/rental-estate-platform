const { Schema } = require("mongoose");

const PropertySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    enum: ["flat", "PG", "condo", "townhouse", "land"],
    required: true,
  },
});

PropertySchema.index({ title: "text", description: "text", location: "text" });

module.exports = PropertySchema;
