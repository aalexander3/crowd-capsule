const GET_DATA = "GET_DATA"

const initialState = {
  items: []
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
