import axios from "axios";
let ip = "localhost";
const instance = axios.create({
  baseURL: "http://" + ip + ":4000",
  headers: {
    'Authorization': `bearer ${JSON.parse(localStorage.getItem('user')??'{}')?.jwt}`,
    "Content-Type": "application/json",
  },
});

export default instance;





