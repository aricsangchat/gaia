import * as types from './actionTypes';

export function loadMoreVideos(current, upTo) {
  return { type: types.LOAD_MORE_VIDEOS, current, upTo };
}
