import React from "react";
import Flight from "./Flight.js";
import SearchForm from "./SearchForm.js";
import Reservation from "./Reservation.js";

const AllFlights = props => {
  return (
    <div>
      <SearchForm />
      <ul>
        {props.flights.map(s => (
          <Flight flight_no={s.flight_no} source={s.source} destination={s.destination} date={s.date} />
        ))}

        {props.planes.map(s => (
          <Reservation seats={s.seats} />
        ))}
      </ul>
    </div>
  );
};

export default AllFlights;
