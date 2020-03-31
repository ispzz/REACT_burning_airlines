import React from "react";
import Flight from "./Flight.js";

const AllFlights = props => {
  return (
    <ul>
      {props.flights.map(s => (
        <Flight flight_no={props.flight_no} />
      ))}
    </ul>
  );
};

export default AllFlights;
