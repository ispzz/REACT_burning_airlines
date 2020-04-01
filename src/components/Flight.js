import React, { Component } from "react";

function Flight(props) {
  return (
    <p>
      Flight: <a href={props.flight_no}>{props.date} {props.flight_no} {props.source} {props.destination}</a>
    </p>
  );
}

export default Flight;
