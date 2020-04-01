import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <form>
         <input type="search" placeholder="SYD" />
         <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchForm;
