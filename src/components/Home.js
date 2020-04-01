import React, { Component } from "react";
import axios from "axios";
import AllFlights from "./AllFlights";
import Reservation from "./Reservation.js";

const SERVER_URL = "http://fff5cbb2.ngrok.io/flights.json";
const PLANES_URL = "http://fff5cbb2.ngrok.io/planes.json";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      flightId: 0,
      flights: [],
      planes: []
    };

    // Get Flights
    const fetchFlights = () => {
      axios.get(SERVER_URL).then(results => {
        this.setState({ flights: results.data });
        // setTimeout(fetchFlights, 4000);
      });
    };
    fetchFlights();

    // Get Plane
    const fetchPlanes = () => {
      axios.get(PLANES_URL).then(results => {
        this.setState({ planes: results.data });
      });
    };
    fetchPlanes();
  }

  static defaultProps = {
    stopClickFunc: this._handleFlightClick
  };

  _handleFlightClick = e => {
    e.preventDefault();
    //console.log(e.target.id);
    this.setState({ flightId: e.target.id });
  };

  render() {
    return (
      <div>
        <h1>Book a flight wooo!</h1>
        <AllFlights
          flights={this.state.flights}
          planes={this.state.planes}
          clickStopFunc={this._handleFlightClick}
        />
        <div>
          <Reservation planes={this.state.planes} />
        </div>
      </div>
    );
  }
}
export default Home;
