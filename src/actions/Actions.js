import { UploadAdapter, CategoryAdapter } from '../adapters/UploadAdapter'
import { HANDLE_FEED_CLICK, HANDLE_CLOSE_CLICK } from './types.js';

export const getUploads = () => {
  return dispatch => {
    return CategoryAdapter.index()
      .then(resp =>
        dispatch({
          type: 'GET_CATEGORIES',
          payload: resp
        }))
      }
}

export const postUploads = (data) => {
  return dispatch => {
    return UploadAdapter.post(data)
      .then(resp =>
        dispatch({
          type: 'ADD_UPLOAD',
          payload: resp
        }))
    }
}

export const feedModalVisible = (url, type) => {
  return {
    type: HANDLE_FEED_CLICK,
    payload: { url, type }
  }
}

export const sendCloseClick = () => {
  return {
    type: HANDLE_CLOSE_CLICK,
    payload: false
  }
}

export const updateUpvote = id => {
  return dispatch => {
    return UploadAdapter.upvote(id)
      .then(resp => {
        dispatch({
          type: 'UPDATE_UPLOAD',
          payload: resp
        })
      })
  }
}
