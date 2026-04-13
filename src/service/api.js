import axios from "axios";

console.log("Service Run")
//  http://localhost:8080/api/v1/user/chandan54
const BASE_URL = ' http://localhost:8080';
const USER_URL = `${BASE_URL}/api/v1/user/`;


const createHeaders = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return headers;
}

export const getUser=(username)=> axios.get(`${USER_URL}${username}`);


