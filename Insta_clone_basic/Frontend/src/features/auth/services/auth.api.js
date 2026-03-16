import axios from "axios";

async function register(userName, email, password) {
  try {
    const response = await axios.post('http://localhost:8000/api/auth/register', {
      userName,
      email,
      password
    }, {
      withCredentials: true
    })
  } catch (err) {
    
  }
}

async function login(userName, password) {
  try {
    const response = await axios.post('http://localhost:8000/api/auth/login', {
      userName,
      password
    }, {
      withCredentials: true
    })
  } catch (err) {

  }
}