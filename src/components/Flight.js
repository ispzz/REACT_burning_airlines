import React, { Component } from "react";

function Flight(props) {
  return (
    <li>
      Flight: <a href={props.flight_no}>{props.date} {props.flight_no} {props.source} {props.destination}</a>
    </li>
  );
}


export default Flight;
