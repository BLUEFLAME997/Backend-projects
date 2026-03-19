import axios from "axios";
const api=axios.create({
  baseURL:'http://localhost:8000/api/posts',
  withCredentials:true
})

export async function getPosts(user){
  try{
    const response=await api.get('/',{
      user
    })
    return response;
  }catch(err){
    throw err
  }
}
