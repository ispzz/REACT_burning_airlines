import React from "react";
import Flight from "./Flight.js";

const AllFlights = props => {
  return (
    <ul>
      {props.flights.map(s => (
<<<<<<< HEAD
        <Flight flight_no={s.flight_no} source={s.source} destination={s.destination} />
=======
        <Flight flight_no={s.flight_no} source={s.source} destination={s.destination} date={s.date} />
>>>>>>> fd00bb72d711f3aa43eed3e452b56c31d7e6f6f2
      ))}
    </ul>
  );
};

export default AllFlights;
