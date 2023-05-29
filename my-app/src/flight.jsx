import React, { useState } from 'react';

const FlightManagementSystem = () => {
  const [flights, setFlights] = useState([]);
  const [flightNumber, setFlightNumber] = useState('');
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');

  const handleFlightNumberChange = (e) => {
    setFlightNumber(e.target.value);
  };

  const handleDepartureChange = (e) => {
    setDeparture(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const addFlight = () => {
    if (flightNumber && departure && destination) {
      const newFlight = {
        flightNumber,
        departure,
        destination,
      };

      setFlights([...flights, newFlight]);

      setFlightNumber('');
      setDeparture('');
      setDestination('');
    }
  };

  const deleteFlight = (index) => {
    const updatedFlights = [...flights];
    updatedFlights.splice(index, 1);
    setFlights(updatedFlights);
  };

  return (
    <div>
      <h1>Flight Management System</h1>
      <div>
        <input
          type="text"
          placeholder="Flight Number"
          value={flightNumber}
          onChange={handleFlightNumberChange}
        />
        <input
          type="text"
          placeholder="Departure"
          value={departure}
          onChange={handleDepartureChange}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={handleDestinationChange}
        />
        <button onClick={addFlight}>Add Flight</button>
      </div>
      <div>
        <h2>Flights:</h2>
        <ul>
          {flights.map((flight, index) => (
            <li key={index}>
              <div>
                <strong>Flight Number:</strong> {flight.flightNumber}
              </div>
              <div>
                <strong>Departure:</strong> {flight.departure}
              </div>
              <div>
                <strong>Destination:</strong> {flight.destination}
              </div>
              <button onClick={() => deleteFlight(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightManagementSystem;