
const BASE_URL = 'http://localhost:3000/'

const config = (method, body) => {
  return {
    method,
    body
  // headers: {
  //   'Content-Type': 'application/json'
  //   'Accept': 'application/json'
  // }
  }
}

const jsonify = res => res.json()

export const UploadAdapter = {
  index: () => fetch(BASE_URL+"uploads").then(jsonify),
  post: (body) => fetch(BASE_URL+'uploads', config("POST", body)).then(jsonify),
  upvote: (id) => fetch(`${BASE_URL}uploads/${id}`, config("PATCH", JSON.stringify({upvote: 1}))).then(jsonify)
}


export const CategoryAdapter = {
  index: () => fetch(BASE_URL+"categories").then(jsonify)
}
