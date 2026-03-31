import React from 'react'
import '../style/savefile.scss'
import { useContext } from 'react'
import { SnippetsContext } from '../Snippets.context'

const SaveFilePopUp = () => {
  const context = useContext(SnippetsContext);
  const {savePopUp,setSavePopUp}=context;

  const handleSaveFile=()=>{
    setSavePopUp(false);
    console.log(savePopUp)
  }

  return (
    <div className={`main-container`}>
      <div className={`container ${savePopUp?'open':'close'}`}>
      </div>
      <div className={`save-file-pop-up ${savePopUp?'open':'close'}`}>
        <div className="top-section">
          <div className="cross"
          onClick={handleSaveFile}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>
        <div className="input-field">
          <input type="text" name='filename' placeholder='Enter file name: ' />
          <input type="text" name='fileExtention' placeholder='Enter file extention: ' />
        </div>
        <div className="save-file-buttons">
          <button className='btn1'
          onClick={handleSaveFile}>Cancel</button>
          <button className='btn2'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default SaveFilePopUp
