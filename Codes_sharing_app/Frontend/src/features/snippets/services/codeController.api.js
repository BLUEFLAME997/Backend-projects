import axios from "axios";

const API = axios.create({
  baseURL: 'https://backend-projects-davh.onrender.com/api/snippet',
  withCredentials: true
})

export async function saveCodeFileApi(fileName, language, codeSnippet, isPublic) {
  try {
    const response = await API.post('/save', {
      fileName,
      language,
      codeSnippet,
      isPublic
    })

    return response;

  } catch (err) {
    throw err
  }
}

export async function updateCodeFileAPI(snippetId, language, codeSnippet, isPublic) {
  try {
    const response = await API.post(`/update/${snippetId}`, {
      language,
      codeSnippet,
      isPublic
    })

    return response

  } catch (err) {
    throw err
  }
}

export async function fileDataApi(snippetId) {
  try {
    const response = await API.get(`/file/${snippetId}`)

    return response;

  } catch (err) {
    throw err
  }
}

export async function allCodeSnippetsApi() {
  try {
    const response = await API.get('/allSnippet');

    return response;

  } catch (err) {
    throw err
  }
}