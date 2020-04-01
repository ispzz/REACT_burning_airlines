import React, { Component } from "react";

class Reservation extends Component {
  constructor() {
    super();
    this.createButtons = this.createButtons.bind(this);
  }

  createButtons = s => {
    const seats = [];
    const totalSeats = s;
    for (let i = 0; i < totalSeats; i++) {
      seats.push(
        <button
          class="btn btn-outline-success"
          type="button"
          onClick={this.props.clickSeatSelection}
        >{`Seat ${i + 1}`}</button>
      );
    }
    return seats;
  };
  render() {
    return (
      <div class="container">
        {this.props.planes.map(s => (
          <p>
            Seats: {s.seats}
            <div class="col-4">{this.createButtons(s.seats)}</div>
          </p>
        ))}
      </div>
    );
  }
}

export default Reservation;
