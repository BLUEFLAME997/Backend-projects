import { useContext } from "react";
import { SnippetsContext } from "../Snippets.context";
import { executeCode } from "../services/snippets.api";

export const useSnippets=()=>{
  const context = useContext(SnippetsContext);
  const {languageValue,value}=context;

  const handleCodeOuput=async()=>{
    try{
      const reponse = await executeCode(value,languageValue);
      return reponse
    }catch(err){
      throw err
    }
  }

  return {languageValue,value,handleCodeOuput};
}