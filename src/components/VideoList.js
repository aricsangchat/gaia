import React from 'react';
import PropTypes from 'prop-types';

const VideoList = (props) => {
  const videos = props.videos.map((video) => {
    return <p key={ video.nid } >{ video.title }</p>;
  });

  return (
    <div id='video-list'>
      { videos }
    </div>
  );
};

VideoList.propTypes = {

};

export default VideoList;
