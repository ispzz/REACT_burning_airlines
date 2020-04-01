import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div class="jumbotron">
        <h1>Book a flight wooo!</h1>
        <form>
          <div class="form-group">
            <input class="form-control" type="search" placeholder="SYD" />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
