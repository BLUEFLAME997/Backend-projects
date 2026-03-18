import axios from "axios";
const api=axios.create({
  baseURL:'http://localhost:8000/api/auth',
  withCredentials:true
})

export async function register(userName, email, password) {
  try {
    const response = await api.post('/register', {
      userName,
      email,
      password
    })
    console.log("Auth api: ",response.data)
  } catch (err) {
    throw err
  }
}


export async function login(userName, password) {
  try {
    const response = await api.post('/login', {
      userName,
      password
    })
    console.log("Auth api: ",response.data)
    return response;
  } catch (err) {
    throw err
  }
}

export async function getMe(){
  try{
    const response=await api.get('/get-me')
    console.log(response.data)
    return response;
  }catch(err){
    throw err
  }
}