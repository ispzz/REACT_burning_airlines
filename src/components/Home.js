import React, { Component } from 'react';
import axios from 'axios';
import AllFlights from './AllFlights'

const SERVER_URL = 'http://94fa6ae7.ngrok.io/flights.json';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      flights: [],
    };

    const fetchFlights = () => {
        axios.get(SERVER_URL).then((results) => {
          this.setState({flights: results.data});
          // setTimeout(fetchFlights, 4000);
        });
      };
      fetchFlights();
  }

  render(){
    return(
      <div>
        <h1>Flights</h1>
        <AllFlights flights={ this.state.flights }/>
      </div>
    );
  }
}
export default Home;
