const GET_DATA = "GET_DATA"

const initialState = {
  items: [],
  media: {
    "Art": [
      {type: ".jpg", url: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg", user: {}},
      {type: ".mp4", url: "", user: {}}
    ],
    "Science": [
      {type: ".pdf", url: "", user: {}},
      {type: ".png", url: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg", user: {}}
    ],
    "Literature": [
      {type: ".mp3", url: "", user: {}},
      {type: ".pdf", url: "", user: {}}
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
