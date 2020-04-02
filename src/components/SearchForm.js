import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <div className="jumbotron">
        <img
          className="mt-0 p-0"
          src="https://i.imgur.com/KTd0yIv.png"
          width="200"
        />
        <h1 className="pb-3 display-4">Book a flight wooo!</h1>
        <form>
          <div className="form-group">
            <input className="form-control" type="search" placeholder="SYD" />
          </div>
          <p>to</p> 
          <div className="form-group">
            <input className="form-control" type="search" placeholder="MEL" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
