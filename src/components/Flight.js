import React, { Component } from "react";

function Flight(props) {
  return (
    <div>
      <li>
        Flight: <a href={props.flight_no}>{props.flight_no} {props.source} to {props.destination}</a>
      </li>
    </div>
  );
}


export default Flight;
