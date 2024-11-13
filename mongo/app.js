const { createFlight, readFlightById, updateFlightById, deleteFlightById } = require("./flightController");

// Create a new flight
// createFlight({
//   id: 'FL125',
//   airline: 'Air america',
//   source: 'Delhi',
//   destination: 'blore',
//   fare: 500,
//   duration: '2h 15m',
// });

// Read flight details
// readFlightById('FL124');

// // Update flight details
// updateFlightById('FL124', { fare: 5500 });

// // Delete a flight

deleteFlightById('FL124');
