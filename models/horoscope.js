let mongoose = require("mongoose");

const compatibilityMappingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  compatible: { type: Boolean, required: true },
});

const horoscopeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  compatibilityMapping: {
    type: [compatibilityMappingSchema],
    validate: (v) => Array.isArray(v) && v.length > 0,
  },
});

module.exports = mongoose.model("horoscope", horoscopeSchema);
