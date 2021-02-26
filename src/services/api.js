import axios from 'axios';

const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://challenge-front-end-keyrus.us-east-2.elasticbeanstalk.com",
});

export default api;