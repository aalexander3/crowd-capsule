import { HANDLE_FEED_CLICK, HANDLE_CLOSE_CLICK } from '../actions/types.js';

const initialState = {
  uploads: [],
  feedModalVisible: null,
  media: []
};

export default function(state = initialState, action){
  switch(action.type){
    case 'GET_CATEGORIES':
      return {
        ...state,
        media: action.payload
      }
    case 'ADD_UPLOAD':
      return {
        ...state,
        uploads: [...state.uploads, action.payload]
      }
    case 'UPDATE_UPLOAD':
      let new_media = state.media.map(categ => {
        let new_cat = categ.uploads.map(up => {
          if (up.id === action.payload.id) {
            return action.payload
          } else {
            return up
          }
        })
        return {...categ, uploads: new_cat}
      })
      return {
        ...state,
        media: new_media
      }
    case HANDLE_FEED_CLICK:
       return {
         ...state,
         feedModalVisible: action.payload
       }
   case HANDLE_CLOSE_CLICK:
     return {
       ...state,
       feedModalVisible: action.payload
     }
    default:
      return state;
  }
}
