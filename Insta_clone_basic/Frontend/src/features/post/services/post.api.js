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

export async function createPost(imageFile,caption){
  const formData = new FormData();
  formData.append('image',imageFile);
  formData.append('caption',caption);
  const response=await api.post('/',formData);
  return response
}