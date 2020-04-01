import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div class="jumbotron">
        <form class="form-group">
           <input class="form-control" type="search" placeholder="SYD" />
           <button type="submit" class="btn btn-primary btn-lg">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
