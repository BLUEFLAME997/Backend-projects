import axios from "axios";

const API=axios.create({
  baseURL:'http://localhost:8000/api/snippet',
  withCredentials:true
})

export async function saveCodeFileApi(fileName,language,codeSnippet,isPublic){
  try{
    const response = await API.post('/save',{
      fileName,
      language,
      codeSnippet,
      isPublic
    })

    return response;

  }catch(err){
    throw err
  }
}

export async function updateCodeFileAPI(snippetId,language,codeSnippet,isPublic){
  try{
    const response = await API.post(`/update/${snippetId}`,{
      language,
      codeSnippet,
      isPublic
    })

    return response 

  }catch(err){
    throw err
  }
}