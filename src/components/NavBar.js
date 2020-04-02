import React, { Component } from 'react';

class Navbar extends Component {
render() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#">Login</a>
          <a class="nav-item nav-link" href="#">Flights</a>
          <a class="nav-item nav-link" href="#">Bookings</a>
        </div>
      </div>
    </nav>
  );
}
}

export default Navbar;
