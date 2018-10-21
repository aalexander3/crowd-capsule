import {HANDLE_FEED_CLICK, GET_DATA} from './types.js';

export const getItems = (dispatch) => {
  fetch('http://WHATEVERAPI')
  .then(resp => resp.json())
  .then(resp =>
    dispatch({
      type: GET_DATA,
      payload: resp.data
    }));
}

export const feedModalVisible = (url) => {
  return {
    type: HANDLE_FEED_CLICK,
    payload: url
  }
}
