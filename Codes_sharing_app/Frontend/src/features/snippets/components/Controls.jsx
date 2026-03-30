import React, { useContext, useState } from 'react'
import { SnippetsContext } from '../Snippets.context';

const Controls = () => {
  const context = useContext(SnippetsContext);
  const {languageValue,setLanguageValue,theme,setTheme}=context;
  const [openFirst,setOpenFirst]=useState(false);
  const [openSecond,setOpenSecond]=useState(false);

  return (
    <div className="controls">
      <div className="multi-select-section">
        <div className="select-languages">
          <button className='language-section-opener'
          onClick={()=>{
            setOpenFirst(!openFirst);
            setOpenSecond(false)
          }}>{languageValue}</button>
          <div className={`languages ${openFirst?"open":"close"}`}>
            <button
            onClick={()=>{
              setLanguageValue('javascript')
              setOpenFirst(!openFirst)
            }}>Javascript</button>
            <button
            onClick={()=>{
              setLanguageValue('java')
              setOpenFirst(!openFirst)
            }}>Java</button>
            <button
            onClick={()=>{
              setLanguageValue('python')
              setOpenFirst(!openFirst)
            }}>Python</button>
            <button
            onClick={()=>{
              setLanguageValue('c')
              setOpenFirst(!openFirst)
            }}>C</button>
            <button
            onClick={()=>{
              setLanguageValue('c++')
              setOpenFirst(!openFirst)
            }}>C++</button>
            <button
            onClick={()=>{
              setLanguageValue('typescript')
              setOpenFirst(!openFirst);
            }}>Typescript</button>
            <button
            onClick={()=>{
              setLanguageValue('go');
              setOpenFirst(!openFirst);
            }}>Go</button>
            <button
            onClick={()=>{
              setLanguageValue('rust');
              setOpenFirst(!openFirst)
            }}>Rust</button>
            <button
            onClick={()=>{
              setLanguageValue('php');
              setOpenFirst(!openFirst);
            }}>Php</button>
          </div>
        </div>
        <div className="select-theme">
          <button className='language-section-opener'
          onClick={()=>{
            setOpenSecond(!openSecond);
            setOpenFirst(false)
          }}>{theme}</button>
          <div className={`themes ${openSecond?"open":"close"}`}>
            <button
            onClick={()=>{
              setTheme('dark')
              setOpenSecond(!openSecond)
            }}>Dark</button>
            <button
            onClick={()=>{
              setTheme('light')
              setOpenSecond(!openSecond)
            }}>Light</button>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className='share-btn'>Share</button>
        <button className='cpy-btn'>Copy button</button>
      </div>
    </div>
  )
}

export default Controls
