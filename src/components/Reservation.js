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

// const Reservation= (props) => {
//   console.log(props);
//   return (
//
//     // <div>
//     //   <li>
//     //     Seats: {props.seats}
//     //   </li>
//     //   <button type="button">SeatA1</button>
//     //   <button type="button">SeatA2</button>
//     //   <button type="button">SeatB1</button>
//     //   <button type="button">SeatB2</button>
//     // </div>
//   );
// }


export default Reservation;
