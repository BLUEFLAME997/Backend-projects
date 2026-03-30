import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import '../style/codeEditor.scss'
import { SnippetsContext } from '../Snippets.context';
import { useContext } from 'react';
import { CODE_SNIPPETS } from '../contants/languages';

const CodeEditor = () => {
  const context = useContext(SnippetsContext);
  const {languageValue,value,setValue}=context;

  const onMount=(editor)=>{
    // editorRef.current=editor;
    editor.focus();
  }
  useEffect(()=>{
    setValue(CODE_SNIPPETS[languageValue])
  },[languageValue])

  return (
    <section className="code-editor">
      <section className='code-section'>
        <Editor 
        height="90vh" 
        language={languageValue} 
        defaultValue={CODE_SNIPPETS[languageValue]}
        value={value}
        onMount={onMount}
        />
      </section>
      <section className="code-output-section">
        <div className="top-section">
          <p>Output: </p>
          <button className='code-run-btn'>Run</button>
        </div>
        <div className="code-output">
          test
        </div>
      </section>
    </section>
  )
}

export default CodeEditor
