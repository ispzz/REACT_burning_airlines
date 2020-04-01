import React from "react";
import Flight from "./Flight.js";

const AllFlights = props => {
  return (
    <ul>
      {props.flights.map(s => (
        <Flight flight_no={s.flight_no} source={s.source} destination={s.destination} />
      ))}
    </ul>
  );
};

export default AllFlights;
