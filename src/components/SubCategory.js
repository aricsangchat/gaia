import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/videoActions';
import JumbotronSubCategory from './JumbotronSubCategory';
import VideoList from './VideoList';

class SubCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let videos;
    if ( this.props.videos.sortBy === 'recommended' ) {
      videos = this.props.videos.toShow;

    } else if (this.props.videos.sortBy === 'alphabetical') {
      videos = [...this.props.videos.toShow].sort(function (a,b) {
        if (a.title > b.title) {
          return 1;
        } else {
          return -1;
        }
      });
    }
    return (
      <main>
        <JumbotronSubCategory term={ this.props.videos.term }/>
        <VideoList videos={ videos } hideLoadMore={ this.props.videos.atEnd } sortBy={ this.props.videos.sortBy } />
      </main>
    );
  }
}

SubCategory.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCategory);
