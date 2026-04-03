import { useContext } from "react";
import { SnippetsContext } from "../Snippets.context";
import { executeCode } from "../services/snippets.api";
import { saveCodeFileApi } from "../services/codeController.api";
import { updateCodeFileAPI } from "../services/codeController.api";
import { fileDataApi } from "../services/codeController.api";

export const useSnippets=()=>{
  const context = useContext(SnippetsContext);
  const {languageValue,value,snippetId,setSnippetId}=context;

  const handleCodeOuput=async()=>{
    try{
      const reponse = await executeCode(value,languageValue);
      return reponse
    }catch(err){
      throw err
    }
  }

  const handleSaveFile=async(fileName,language,codeSnippet,isPublic)=>{
    try{
      const response = await saveCodeFileApi(fileName,language,codeSnippet,isPublic);
      return response;
    }catch(err){
      console.log(err)
      throw err
    }
  }

  const handleUpdateFile=async(language,codeSnippet,isPublic)=>{
    try{  
      const response = await updateCodeFileAPI(snippetId,language,codeSnippet,isPublic)
      return response;
    }catch(err){
      console.log(err)
      throw err
    }
  }

  const handleFileData=async(id)=>{
    try{
      const response = await fileDataApi(id);
      return response;
    }catch(err){
      console.log(err)
      throw err
    }
  }

  return {languageValue,value,handleCodeOuput,handleSaveFile,handleUpdateFile,handleFileData};
}