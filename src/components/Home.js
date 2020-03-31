import React, { Component } from 'react';
import AllFlights from './AllFlights'

class Home extends Component {
  render(){
    return(
      <div>
        <h1>Flights</h1>
        <AllFlights />
      </div>
    )
  }
}
export default Home;
