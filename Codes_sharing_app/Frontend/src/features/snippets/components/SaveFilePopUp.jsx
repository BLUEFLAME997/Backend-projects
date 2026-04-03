import React from 'react'
import '../style/savefile.scss'
import { useContext } from 'react'
import { SnippetsContext } from '../Snippets.context'
import { useSnippets } from '../hooks/useSnippet'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SaveFilePopUp = () => {
  const context = useContext(SnippetsContext);
  const { savePopUp, setSavePopUp, languageValue, value, snippetId, setSnippetId, filename, setFilename } = context;
  const { handleSaveFile } = useSnippets();
  const [newFilename, setNewFilename] = useState('');
  const navigate=useNavigate();

  const saveFile = async () => {
    try {
      const response = await handleSaveFile(newFilename, languageValue, value, true);
      const data = response.data;
      const { codeFile } = data;
      setFilename(codeFile.fileName);
      setSnippetId(codeFile.snippetId);
      navigate(`/?snippetId=${snippetId}`);
      return response;
    } catch (err) {
      console.log(err)
      throw err
    }
  }


  const handleSaveFilePopup = () => {
    setSavePopUp(false);
    console.log(savePopUp)
  }

  return (
    <div className={`main-container`}>
      <div className={`container ${savePopUp ? 'open' : 'close'}`}>
      </div>
      <div className={`save-file-pop-up ${savePopUp ? 'open' : 'close'}`}>
        <div className="top-section">
          <div className="cross"
            onClick={handleSaveFilePopup}>
            <i className="ri-close-large-line"></i>
          </div>
        </div>
        <div className="input-field">

          <input
            type="text"
            name='filename'
            placeholder='Enter file name: '
            value={newFilename}
            onChange={(e) => {
              setNewFilename(e.target.value);

            }}
          />

        </div>
        <div className="save-file-buttons">
          <button className='btn1'
            onClick={handleSaveFilePopup}>Cancel</button>
          <button className='btn2'
            onClick={()=>{
              saveFile();
              handleSaveFilePopup();
            }}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default SaveFilePopUp
