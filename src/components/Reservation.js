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
    let buttonStyle; //determine style button
    let disabled; // disable clicking of seat
    for (let i = 1; i <= totalSeats; i++) {
      //row determines the number. divide first number by 4 (4 seats/row)
      const row = Math.ceil(i / 4);
      //column determines the letter. get the remainder to determine letter
      const column = i % 4;
      let seatNumber;
      if (column === 1) {
        seatNumber = "A";
      } else if (column === 2) {
        seatNumber = "B";
      } else if (column === 3) {
        seatNumber = "C";
      } else if (column === 0) {
        seatNumber = "D";
      }
      seatNumber = row.toString() + seatNumber;
      disabled = '';
      buttonStyle = '';
      //start: this matches seatNumber with already reserved seats
      if (this.props.reservedSeats.includes(seatNumber)){
        disabled = true;
        buttonStyle = this.props.seatStyling.reserved;
      } else {
        buttonStyle = this.props.seatStyling.active;
      }
      //end: this matches seatNumber with already reserved seats
      seats.push(
        <button
          className={this.props.clicked ? this.props.seatStyling.selected : buttonStyle}
          // style will be .active or .reserved
          type="button"
          onClick={this.props.clickSeatSelection}
          id={seatNumber}
          disabled={disabled}
        >
          {seatNumber}
        </button>
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
