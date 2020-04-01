import React, { Component } from "react";
// import React from 'react';

class Reservation extends Component {
  constructor(){
    super();
    this.createButtons = this.createButtons.bind(this);
  }

  createButtons = (s) => {
      const seats = [];
      const totalSeats = s;
      for(let i = 0; i < totalSeats; i++){
        seats.push(<button type="button">{`Seat ${i+1}`}</button>);
      }
      return seats;
  }
  render(){
    return(
      <div>
        {this.props.planes.map(s => (
          <p>Seats: {s.seats} {this.createButtons(s.seats)}</p>

        ))}

      </div>
    )
  }
}

export default Reservation;
