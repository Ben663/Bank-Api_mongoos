import axios from 'axios'

let myURL = 'http://localhost:5001/api';
if (process.env.NODE_ENV === 'production') {
    myURL = '/api';
}

export const usersApi = axios.create({
    baseURL: myURL,
}) 