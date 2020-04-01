import React, { Component } from "react";

class Reservation extends Component {
  constructor() {
    super();
    this.createButtons = this.createButtons.bind(this);
  }

  //"btn btn-outline-success"
  createButtons = s => {
    const seats = [];
    const totalSeats = s;
    for (let i = 0; i < totalSeats; i++) {
      seats.push(
        <button
          className={this.props.clicked? this.props.seatStyling.selected : this.props.seatStyling.active} // style will be .active or .reserved
          type="button"
          onClick={this.props.clickSeatSelection}
        >{`Seat ${i + 1}`}</button>
      );
    }
    return seats;
  };
  render() {
    return (
      <div className="container">
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
