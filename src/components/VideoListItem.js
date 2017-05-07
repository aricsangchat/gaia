import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = (props) => {

  return (
    <div className='video-list-item'>
      <div className='video-list-item__tile' >
        <img className='video-list-item__background' src={props.tileBG} />
      </div>
      <div className='video-list-item__content'>
        <p className='video-list-item__up-count'>{ props.upCount }</p>
        <p className='video-list-item__title'>{ props.title }</p>
      </div>
    </div>
  );
};

VideoListItem.propTypes = {

};


export default VideoListItem;
