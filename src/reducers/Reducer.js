import video from '../samples/small.mp4';
import song from '../samples/prayer.mp3'
import pdf from '../samples/pdf.pdf'
import image from '../samples/image.jpg'
const GET_DATA = "GET_DATA"

const initialState = {
  items: [],
  media: {
    "Art": [
      {type: ".jpg", url: image, user: {}},
      {type: ".mp4", url: video, user: {}}
    ],
    "Science": [
      {type: ".mp4", url: video, user: {}},
      {type: ".jpg", url: image, user: {}}
    ],
    "Literature": [
      {type: ".mp3", url: song, user: {}},
      {type: ".pdf", url: pdf, user: {}}
    ]
  }
};

export default function(state = initialState, action){
  switch(action.type){
    case GET_DATA:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
