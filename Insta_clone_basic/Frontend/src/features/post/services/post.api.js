import axios from "axios";
const api=axios.create({
  baseURL:'http://localhost:8000/api/posts',
  withCredentials:true
})

export async function getPosts(){
  try{
    const response=await api.get('/feed')
    return response.data;
  }catch(err){
    throw err
  }
}
