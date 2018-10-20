const GET_DATA = "GET_DATA"

const initialState = {
  items: [],
  media: {
    "Art": [{type: ".jpg", url: ""}],
    "Science": [{type: ".pdf", url: ""}],
    "Literature": [{type: ".mp3", url: ""}, {type: ".pdf", url: ""}]
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
