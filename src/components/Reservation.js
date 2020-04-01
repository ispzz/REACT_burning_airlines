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
      for(let i = 1; i <= totalSeats; i++){
        const row = Math.ceil(i / 4);
        const column = i % 4;
        let seatNumber;
        if (column === 1){
          seatNumber = 'A';
        }else if (column === 2){
          seatNumber = 'B';
        }else if (column === 3){
          seatNumber = 'C';
        }else if (column === 0){
          seatNumber = 'D';
        }
        seatNumber = row.toString() + seatNumber;
        seats.push(<button class="btn btn-outline-success" type="button">{seatNumber}</button>);
      }
      return seats;
  }
  render(){
    return(
        <div class="container">
        {this.props.planes.map(s => (
          <p>Seats: {s.seats}
            <div class = "col-4">
              {this.createButtons(s.seats)}
          </div></p>
        ))}
        </div>
    )
  }
}

export default Reservation;
