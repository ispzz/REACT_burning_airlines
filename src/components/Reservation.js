// import React, { Component } from "react";
import React from 'react';

// class Reservation extends Component {
//   render(){
//     return(
//       <div>
        // <button type="button">SeatA1</button>
        // <button type="button">SeatA2</button>
        // <button type="button">SeatB1</button>
        // <button type="button">SeatB2</button>
//       </div>
//     )
//   }
// }

const Reservation= (props) => {
  console.log(props);
  return (
    <div>
      <li>
        Seats: {props.seats}
      </li>
      <button type="button">SeatA1</button>
      <button type="button">SeatA2</button>
      <button type="button">SeatB1</button>
      <button type="button">SeatB2</button>
    </div>
  );
}


export default Reservation;
