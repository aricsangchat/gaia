import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = (props) => {

  let newLabel = null;

  if ( props.isNew ) {
    newLabel = <div className='video-list-item__new-label'>
      <p>new episode</p>
    </div>
  } else {
    newLabel = <div />
  }

  return (
    <div className='video-list-item'>
      <div className='video-list-item__tile' >
        <img className='video-list-item__background' src={props.tileBG} />
        { newLabel }
      </div>
      <div className='video-list-item__content'>
        <div className='video-list-item__content-top'>
          <p className='video-list-item__series-title'>{ props.series }</p>
          <p className='video-list-item__up-count'>{ props.upCount }</p>
        </div>
        <div className='video-list-item__content-bottom'>
          <p className='video-list-item__title'>{ props.title }</p>
        </div>
      </div>
    </div>
  );
};

VideoListItem.propTypes = {

};

export default VideoListItem;
