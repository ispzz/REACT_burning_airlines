import React from 'react';

const AllFlights= (props) => {
  return (
    <div>
      { props.flights.map( (s) => <p>{ s.flight_no }</p> ) }
    </div>
  );
}

export default AllFlights;
