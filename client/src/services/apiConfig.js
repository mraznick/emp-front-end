import axios from 'axios';

let apiUrl;

const apiUrls = {
  development: "https://emp-backend-deployment.herokuapp.com/pictures",
  production: "https://emp-backend-deployment.herokuapp.com/pictures"
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