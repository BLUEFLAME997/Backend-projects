import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import '../style/codeEditor.scss'
import { SnippetsContext } from '../Snippets.context';
import { useContext } from 'react';
import { CODE_SNIPPETS } from '../contants/languages';
import { useSnippets } from '../hooks/useSnippet';

const CodeEditor = () => {
  const context = useContext(SnippetsContext);
  const {languageValue,value,setValue,output,setOutput,editorRef,theme}=context;
  const {handleCodeOuput}=useSnippets();

  const onMount=(editor)=>{
    editor.focus();
  }
  useEffect(()=>{
    setValue(CODE_SNIPPETS[languageValue])
  },[languageValue])

  const runCode=async()=>{
    const response = await handleCodeOuput();
    console.log(response);
    const finalOutput =
      response.stdout || response.stderr || response.compile_output || "No Output";
    setOutput(finalOutput);
    console.log(output)
  }

  return (
    <section className="code-editor">
      <section className='code-section'>
        <Editor 
        height="90vh" 
        language={languageValue} 
        defaultValue={CODE_SNIPPETS[languageValue]}
        value={value}
        onChange={(value)=>{
          setValue(value)
        }}
        onMount={onMount}
        theme={theme}
        />
      </section>
      <section className="code-output-section">
        <div className="top-section">
          <p>Output: </p>
          <button className='code-run-btn'
          onClick={()=>{
            runCode();
          }}>Run</button>
        </div>
        <div className="code-output">
          <pre>
            {output}
          </pre>
        </div>
      </section>
    </section>
  )
}

export default CodeEditor
