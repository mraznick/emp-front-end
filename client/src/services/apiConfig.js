import axios from 'axios';

let apiUrl;

const apiUrls = {
  development: "https://emp-group-project.herokuapp.com",
  production: "https://emp-group-project.herokuapp.com"
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