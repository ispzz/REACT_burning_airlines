import React from 'react';

function Flight(props) {
  return (
    <div class="border-bottom border-top border-gray p-4 mb-0">
      <h6>
        Flight:{" "}
        <a href={props.flight_no} onClick={props.clickStopFunc} id={props.id}>
          {props.date} {props.flight_no} {props.source} {props.destination}
        </a>
      </h6>
    </div>
  );
}

export default Flight;
