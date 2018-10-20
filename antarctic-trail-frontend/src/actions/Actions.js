const GET_DATA = "GET_DATA"

export const getItems = () => {
  fetch('http://WHATEVERAPI')
  .then(resp => resp.json())
  .then(resp =>
    dispatch({
      type: GET_DATA,
      payload: res.data
    }));
}
