import video from '../samples/small.mp4';
import song from '../samples/prayer.mp3'
import pdf from '../samples/pdf.pdf'
import image from '../samples/image.jpg'
import {HANDLE_FEED_CLICK, GET_DATA} from '../actions/types.js';

// Space Art Music Math Science Literature Technology
// media looks kinda like this [
//   {
//     "id": 1,
//     "name": "Space",
//     "uploads": [
//       {
//         "id": 3,
//         "path": "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000763/GSFC_20171208_Archive_e000763~orig.jpg",
//         "upvotes": 0,
//         "location_id": 26,
//         "user": {
//           "id": 1,
//           "username": "Admin"
//         }
//       },
//       {...}
// ]


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
    case HANDLE_FEED_CLICK:
      return {
        ...state,
        feedModalVisible: action.payload
      }
    default:
      return state;
  }
}
