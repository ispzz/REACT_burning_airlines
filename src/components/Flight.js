import React, { Component } from 'react';

class Flight extends Component {
  render() {
    return (
      <div>
        { props.flights.map( (s) => <Flight flight_no={s.flight_no} source={s.source} id="1" />) }
      /div>
    );
  }
}

export default Flight;
