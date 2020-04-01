import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div class="jumbotron">
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
