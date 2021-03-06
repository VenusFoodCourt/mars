import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.props.onMovieSearch(this.state.term, this.props.type);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <TextField
          hintText="Insert Movie Name"
          floatingLabelText={this.props.floatingLabelText}
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  onMovieSearch: PropTypes.func.isRequired,
  floatingLabelText: PropTypes.string.isRequired,
};

export default SearchBar;
