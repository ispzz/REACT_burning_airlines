import React, { Component } from "react";
import axios from "axios";
import AllFlights from "./AllFlights";
import Reservation from "./Reservation.js";

// whenever ngrok resets update or stick another url in
const MAIN_URL = `http://0c8e1d00.ngrok.io`;

const SERVER_URL = MAIN_URL + "/flights.json";
const PLANES_URL = MAIN_URL + "/planes.json";
const RESERV_URL = MAIN_URL + "/reservations.json"

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
      users: [],
      seat: null
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
    stopClickFunc: this._handleFlightClick,
    seatStylez: {
      active: "btn btn-outline-success",
      reserved: "btn btn-dark disabled"
    }
  };

  fetchPlane = id => {
    axios.get(`${SINGLE_PLANE_URL}${id}.json`).then(results => {
      // kept an array so we dont have to re-write
      let plane = [];
      plane.push(results.data);
      this.setState({ planes: plane });
    });
  };

  fetchReservations = () => {
    let reservationsArr = null
    axios.get(`${RESERV_URL}`).then(results => {
      reservationsArr = results.data
      //get reserved seats for flight, needs coersion for id lol
      reservationsArr = reservationsArr.filter(res => res.flight_id == this.state.flightId).map(r => r.seat)

      this.setState({ reservations: reservationsArr });
    });
  };

  _handleFlightClick = e => {
    e.preventDefault();
    //store flight id - its a string so coerce to int
    this.setState({ flightId: e.target.id });

    //get plane details from backend
    this.fetchPlane(e.target.id);
    // get reservations for flight
    this.fetchReservations()
  };

  _handleSeatClick = e => {
    e.preventDefault();

    console.log(e.target.id + " " + this.state.flightId);

    this.setState({ seat: e.target.id });

    // can make AJAX call using seat id and flight id
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
            seatStyling={this.props.seatStylez}
            reservedSeats={this.state.reservations}
          />
        </div>
      </div>
    );
  }
}
export default Home;
