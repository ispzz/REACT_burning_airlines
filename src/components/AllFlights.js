import React from 'react';
import Flight from './Flight.js';

const AllFlights= (props) => {
  return (
    <div>
      // { props.flights.map( (s) => <p>{ s.flight_no }</p> ) }
      <Flight />
    </div>
  );
}

export default AllFlights;
