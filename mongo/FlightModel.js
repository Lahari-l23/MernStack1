const mongoose = require("mongoose");

const collection_name = 'flight';

const collection_fields = {
  id: String,
  airline: String,
  source: String,
  destination: String,
  fare: Number,
  duration: String,
};

const collection_config = {
  timestamps: false,
};

const flightSchema = new mongoose.Schema(collection_fields, collection_config);
const FlightModel = mongoose.model(collection_name, flightSchema);

module.exports = FlightModel;
