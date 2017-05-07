import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/videoActions';
import VideoListItem from './VideoListItem';
import Scroller from './Scroller';

const VideoList = (props) => {

  const videos = props.videos.map((video) => {
    return <VideoListItem
      key={ video.nid }
      isNew={ video.is_new }
      title={ video.title }
      tileBG={ video.hero_image_withtext.hero_320x200 }
      upCount={ video.fivestar.up_count.value }
    />;
  });

  const listLength = props.videos.length;

  return (
    <div className='video-list'>
      <div className='video-list__wrapper'>
        { videos }
      </div>
      <div className='video-list__bottom'>
        <button className={ props.hideLoadMore ? 'btn__loadmore btn__loadmore--hide' : 'btn__loadmore' } onClick={() => props.actions.loadMoreVideos(listLength, listLength + 16)}>Load More</button>
        <Scroller />
      </div>
    </div>
  );
};

VideoList.propTypes = {

};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(VideoList);
