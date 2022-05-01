import axios from "axios";

const instance = axios.create({
  timeout: 5000,
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
});

instance.interceptors.request.use(
  (config) => {
    console.log(config);
  },
  (err) => {
    console.log(err);
  }
);

instance.interceptors.response.use(
  (config) => {
    console.log(config);
  },
  (err) => {
    console.log(err);
  }
);

export default instance;
