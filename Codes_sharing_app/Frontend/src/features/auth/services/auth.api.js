import axios from 'axios';
const API = axios.create({
  baseURL: 'http://localhost:8000/api/auth',
  withCredentials: true
})

export async function userLoginApi(username, password) {
  try {
    const response = await API.post('/login', {
      username,
      password
    })
    
    return response.data
  } catch (err) {
    throw err
  }
}
