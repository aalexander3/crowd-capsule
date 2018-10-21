import { UploadAdapter, CategoryAdapter } from '../adapters/UploadAdapter'
import { HANDLE_FEED_CLICK, GET_DATA } from './types.js';

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

export const feedModalVisible = (url) => {
  return {
    type: HANDLE_FEED_CLICK,
    payload: url
  }
}
