import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8000/api/auth",
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
})

// Register Api: 
export async function registerUser(username, email, password, role) {
  try {

    const response = await api.post('/register', {
      username,
      email,
      password,
      role
    })

    return response.data;

  } catch (err) {
    throw err
  }
}

// Login Api:
export async function loginUser(username, password) {
  try {

    const response = await api.post('/login',{
      username,
      password
    })

    return response.data;
  } catch (err) {
    throw err
  }
}

// 