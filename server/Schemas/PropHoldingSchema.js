const { Schema } = require("mongoose");

const PropHoldingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  propertyId: {
    type: Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },

  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },
});

PropHoldingSchema.index({ userId: 1, propertyId: 1 }, { unique: true });
module.exports = PropHoldingSchema;
