import React, { Component } from "react";
// import React from 'react';

class Reservation extends Component {
  createButtons = () => {
      const seats = [];
      const totalSeats = this.props.seats;
      for(let i = 0; i < totalSeats; i++){
        seats.push(<button type="button">{`Seat ${i+1}`}</button>);
      }
      return seats;
  }
  render(){
    return(
      <div>
        <p>Seats: {this.props.seats}</p>
        {this.createButtons()}
      </div>
    )
  }
}

export default Reservation;
