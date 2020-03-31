import React, { Component } from 'react';
import axios from 'axios';
import AllFlights from './AllFlights'

class Home extends Component {

  fetchFlights(q) {
    const URL = "http://f60893a7.ngrok.io/flights.json";
    axios.get(URL).then((results) => {
      this.setState({flights: results.data});
    });
  }

  render(){
    return(
      <div>
        <h1>Flights</h1>
        <AllFlights />
      </div>
    );
  }
}
export default Home;
