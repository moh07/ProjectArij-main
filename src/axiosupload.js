import axios from "axios";
let ip = "localhost";
const instanceupload = axios.create({
  baseURL: "http://" + ip + ":4000",
  headers: {
    'Authorization': `bearer ${JSON.parse(localStorage.getItem('user')??'{}')?.jwt}`,
    "Content-Type": "multipart/form-data",
    Accept: 'application/json',
    },
});

export default instanceupload;





