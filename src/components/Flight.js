import React, { Component } from "react";

function Flight(props) {
  return (
    <li>
      Flight: <a href={props.flight_no}>{props.flight_no}</a>
    </li>
  );
}

export default Flight;
