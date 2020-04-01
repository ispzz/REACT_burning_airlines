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
