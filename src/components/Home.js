import React, { Component } from "react";
import axios from "axios";
import AllFlights from "./AllFlights";
import Reservation from "./Reservation.js";

// whenever ngrok resets update or stick another url in
const MAIN_URL = `http://93621e8c.ngrok.io`;

const SERVER_URL = MAIN_URL + "/flights.json";
const PLANES_URL = MAIN_URL + "/planes.json";

//
const SINGLE_PLANE_URL = `${MAIN_URL}/planes/`;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      flightId: 0,
      flights: [],
      planes: [],
      reservations: [],
      users: []
    };

    //Will need to move all below

    // Get Flights
    const fetchFlights = () => {
      axios.get(SERVER_URL).then(results => {
        this.setState({ flights: results.data });
        // setTimeout(fetchFlights, 4000);
      });
    };
    fetchFlights();

    // Get Plane
    // const fetchPlanes = () => {
    //   axios.get(PLANES_URL).then(results => {
    //     this.setState({ planes: results.data });
    //   });
    // };
    // fetchPlanes();
  }

  static defaultProps = {
    stopClickFunc: this._handleFlightClick
  };

  fetchPlane = id => {
    axios.get(`${SINGLE_PLANE_URL}${id}.json`).then(results => {
      // kept an array so we dont have to re-write
      let plane = [];
      plane.push(results.data);
      this.setState({ planes: plane });
    });
  };

  _handleFlightClick = e => {
    e.preventDefault();
    //this.setState({ flightId: e.target.id });

    this.fetchPlane(e.target.id);
  };

  _handleSeatClick = e => {
    e.preventDefault();

    console.log(e.target);
  };

  render() {
    return (
      <div className="py-5 text-center container">
        <AllFlights
          flights={this.state.flights}
          planes={this.state.planes}
          clickStopFunc={this._handleFlightClick}
        />
        <div>
          <Reservation
            planes={this.state.planes}
            clickSeatSelection={this._handleSeatClick}
          />
        </div>
      </div>
    );
  }
}
export default Home;
