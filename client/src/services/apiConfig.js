import axios from 'axios';

let apiUrl;

const apiUrls = {
  development: "http://localhost:4000/"
  //NEED TO GET HEROKU LINK FROM PAUL WHEN IT'S READY
}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl,
})

export default api;