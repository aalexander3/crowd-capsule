
const BASE_URL = 'http://localhost:3000/uploads'

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
  index: () => fetch(BASE_URL).then(jsonify),
  post: (body) => fetch(BASE_URL, config("POST", body)).then(jsonify),
  update: (body) => fetch(BASE_URL, config("PUT", body)).then(jsonify)
}
