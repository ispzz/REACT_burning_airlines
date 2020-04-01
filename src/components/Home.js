import React, { Component } from 'react';
import axios from 'axios';
import AllFlights from './AllFlights'

const SERVER_URL = 'http://fff5cbb2.ngrok.io/flights.json';
const PLANES_URL = 'http://fff5cbb2.ngrok.io/planes.json';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
    };

    // Get Flights
    const fetchFlights = () => {
        axios.get(SERVER_URL).then((results) => {
          this.setState({flights: results.data});
          // setTimeout(fetchFlights, 4000);
        });
      };
      fetchFlights();

     // Get Plane
     const fetchPlanes = () => {
       axios.get(PLANES_URL).then((results) => {
         this.setState({planes: results.data});
       });
     }

  }

  render(){
    return(
      <div>
        <h1>Book a flight wooo!</h1>
        <AllFlights flights={ this.state.flights }/>
      </div>
    );
  }
}
export default Home;
