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
      <p>
        Seats: {props.seats}
      </p>
      <div class="btn-group">
        <button class="btn btn-success" type="button">SeatA1</button>
        <button class="btn btn-outline-success" type="button">SeatA2</button>
        <button class="btn btn-dark" type="button" disabled>SeatB1</button>
        <button class="btn btn-outline-success" type="button">SeatB2</button>
      </div>
    </div>
  );
}


export default Reservation;
