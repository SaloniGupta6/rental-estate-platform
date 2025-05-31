const { Schema } = require("mongoose");

const legalDocumentSchema = new Schema({
  UserId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  AadharNumber: {
    type: String,
    required: true,
    unique: true,
  },

  PanNumber: {
    type: String,
    required: true,
    unique: true,
  },

  PhoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
});

legalDocumentSchema.index({ AadharNumber: 1 }, { unique: true });
module.exports = legalDocumentSchema;
