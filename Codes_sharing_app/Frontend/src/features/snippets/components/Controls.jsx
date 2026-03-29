import React, { useState } from 'react'

const Controls = () => {
  const [openFirst,setOpenFirst]=useState(false);
  const [openSecond,setOpenSecond]=useState(false);
  const [languageValue,setLanguageValue]=useState('html');
  const [theme,setTheme]=useState('light');

  return (
    <div className="controls">
      <div className="multi-select-section">
        <div className="select-languages">
          <button className='language-section-opener'
          onClick={()=>{
            setOpenFirst(!openFirst);
            console.log(openFirst)
          }}>{languageValue}</button>
          <div className={`languages ${openFirst?"open":"close"}`}>
            <button
            onClick={()=>{
              setLanguageValue('html')
              setOpenFirst(!openFirst)
            }}>Html</button>
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
          </div>
        </div>
        <div className="select-theme">
          <button className='language-section-opener'
          onClick={()=>{
            setOpenSecond(!openSecond);
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
