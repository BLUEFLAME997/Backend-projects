import { Children, createContext, useContext, useRef, useState } from "react";
import { CODE_SNIPPETS } from "./contants/languages";

export const SnippetsContext=createContext();

const SnippetContextProvider=({children})=>{
  const [languageValue,setLanguageValue]=useState('javascript');
  const [theme,setTheme]=useState('light');
  const editorRef=useRef();
  const [value,setValue]=useState(CODE_SNIPPETS[languageValue]);
  const [output,setOutput]=useState('');
  const [savePopUp,setSavePopUp]=useState(false);
  const [snippetId,setSnippetId]=useState('');
  const [filename,setFilename]=useState('');
  const [loggedIn,setLoggedIn]=useState(false);

  return (
    <SnippetsContext.Provider value={{languageValue,theme,setLanguageValue,setTheme,value,setValue,output,setOutput,savePopUp,setSavePopUp,snippetId,setSnippetId,filename,setFilename,loggedIn,setLoggedIn}}>
      {children}
    </SnippetsContext.Provider>
  )
}

export default SnippetContextProvider;