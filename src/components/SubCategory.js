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

  componentWillMount() {
    // const category = this.props.match.params.cat;
    // console.log(category);
    //this.props.actions.loadInitialVideos(16);
  }

  render() {
    return (
      <main>
        <JumbotronSubCategory term={ this.props.videos.term }/>
        <VideoList videos={ this.props.videos.toShow } hideLoadMore={ this.props.videos.atEnd } />
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
