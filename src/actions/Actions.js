import { UploadAdapter } from '../adapters/UploadAdapter'


const GET_DATA = "GET_DATA"

export const getUploads = () => {
  return dispatch => {
    return UploadAdapter.index()
      .then(resp =>
        dispatch({
          type: 'GET_UPLOADS',
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
