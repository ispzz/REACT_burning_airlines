import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div class="jumbotron">
      <img class="mt-0 p-0" src='https://i.imgur.com/KTd0yIv.png' width='200' />
        <h1 class="pb-3 display-4">Book a flight wooo!</h1>
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
