import React from 'react';

const AllFlights= (props) => {
  return (
    <div>
      { props.flights.map( (s) => <p key={ s.id }>{ s.flight }</p> ) }
    </div>
  );
}

export default AllFlights;
