import React from "react";
import Flight from "./Flight.js";
import SearchForm from "./SearchForm.js";

const AllFlights = props => {
  return (
    <div>
      <SearchForm />
      <ul>
        {props.flights.map(s => (
          <Flight
            flight_no={s.flight_no}
            source={s.source}
            destination={s.destination}
            date={s.date}
            clickStopFunc={props.clickStopFunc}
            id={s.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default AllFlights;
