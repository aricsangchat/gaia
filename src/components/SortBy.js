import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/videoActions';

class SortBy extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.actions.sortBy(event.target.value);
  }

  render() {
    return (
      <div className='sort-by'>
        <h3>Sort By</h3>
        <select value={ this.props.sortBy } onChange={ this.handleChange }>
          <option value="recommended">Recommended</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
    );
  }
}

SortBy.propTypes = {

};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(SortBy);
