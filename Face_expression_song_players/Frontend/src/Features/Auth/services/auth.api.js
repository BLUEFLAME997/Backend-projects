import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Register API:
export async function registerUser(userName, email, password) {
  try {

    const response = await api.post('/register', {
      userName,
      email,
      password
    })

    return response;

  } catch (err) {
    throw err
  }
}

// Login API:
export async function loginUser(userName, password) {
  try {

    const response = await api.post('/login', {
      userName,
      password
    })

    return response;

  } catch (err) {
    throw err
  }
}

// Get-me API:
export async function getMe() {
  try {

    const response = await api.get('/get-me')
    return response;

  } catch (err) {
    throw err;
  }
}

// Logout API:
export async function logoutUser() {
  try {

    const response = await api.get('/logout')
    return response;

  } catch (err) {
    throw err
  }
}