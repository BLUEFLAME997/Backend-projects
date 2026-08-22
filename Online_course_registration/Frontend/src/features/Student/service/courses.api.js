import axios from 'axios';
const api = axios.create({
  baseURL:'http://localhost:8000/api/course',
  withCredentials:true
})

export async function getCourses(){
  try{
    const data = await api.get('/get-courses');
    return data
  }catch(err){
    throw err
  }
}