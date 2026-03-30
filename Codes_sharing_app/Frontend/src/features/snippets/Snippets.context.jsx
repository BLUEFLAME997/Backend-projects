import { Children, createContext, useContext, useRef, useState } from "react";
import { CODE_SNIPPETS } from "./contants/languages";

export const SnippetsContext=createContext();

const SnippetContextProvider=({children})=>{
  const [languageValue,setLanguageValue]=useState('javascript');
  const [theme,setTheme]=useState('light');
  const editorRef=useRef();
  const [value,setValue]=useState(CODE_SNIPPETS[languageValue]);

  return (
    <SnippetsContext.Provider value={{languageValue,theme,setLanguageValue,setTheme,value,setValue}}>
      {children}
    </SnippetsContext.Provider>
  )
}

export default SnippetContextProvider;