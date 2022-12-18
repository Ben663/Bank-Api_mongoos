import axios from 'axios'

let myURL = 'https://bankapi-e8gp.onrender.com/api/add';
if (process.env.NODE_ENV === 'production') {
    myURL = '/api';
}

export const usersApi = axios.create({
    baseURL: myURL,
}) 