import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function videoReducer(state = initialState.videos, action) {
  switch (action.type) {
    case types.LOAD_MORE_VIDEOS:
      if (state.titles.length - state.count > 16) {
        const showMore = state.toShow.concat(state.titles.slice(action.current, action.upTo));
        return Object.assign({}, state, { count: action.upTo, toShow: showMore, atEnd: false });
      } else {
        const showMore = state.toShow.concat(state.titles.slice(action.current, state.titles.length));
        return Object.assign({}, state, { count: action.upTo, toShow: showMore, atEnd: true });
      }

    default:
      const toShow = state.titles.slice(0, 16);
      return Object.assign({}, state, { count: 16, toShow: toShow, atEnd: false });
  }
}
