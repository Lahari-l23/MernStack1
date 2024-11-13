const FlightModel = require("./FlightModel");
const connectToMongo = require("./db");

const createFlight = async (flightData) => {
  await connectToMongo();
  const flight = new FlightModel(flightData);
  const createdFlight = await flight.save();
  console.log("Flight created:", createdFlight);
};
const readFlightById = async (id) => {
  await connectToMongo();
  const flight = await FlightModel.findOne({ id });
  console.log("Flight details:", flight);
};
const updateFlightById = async (id, updateData) => {
  await connectToMongo();
  const updatedFlight = await FlightModel.findOneAndUpdate({ id }, updateData, { new: true });
  console.log("Updated Flight:", updatedFlight);
};

const deleteFlightById = async (id) => {
  await connectToMongo();
  await FlightModel.findOneAndDelete({ id });
  console.log("Flight deleted successfully");
};

module.exports = { createFlight, readFlightById, updateFlightById, deleteFlightById };
