import React from 'react'
import '../style/savefile.scss'
import { useContext } from 'react'
import { SnippetsContext } from '../Snippets.context'
import { useSnippets } from '../hooks/useSnippet'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SaveFilePopUp = () => {
  const context = useContext(SnippetsContext);
  const { savePopUp, setSavePopUp, languageValue, setLanguageValue, value, setValue, snippetId, setSnippetId, filename, setFilename } = context;
  const { handleSaveFile, handleFileData } = useSnippets();
  const [newFilename, setNewFilename] = useState('');
  const navigate = useNavigate();
  const { snippetId: paramsSnippetId } = useParams();

  const saveFile = async () => {
    try {
      const response = await handleSaveFile(newFilename, languageValue, value, true);
      const data = response.data;
      const { codeFile } = data;
      setFilename(codeFile.fileName);
      setSnippetId(codeFile.snippetId);
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

  const getFileName = async () => {
    try {
      const response = await handleFileData(snippetId);
      console.log(response.data);
      setFilename(response.data.file.fileName);
      setLanguageValue(response.data.file.language);
      setValue(response.data.file.codeSnippet);
      return response
    } catch (err) {
      console.log("Error: ", err)
      throw err;
    }
  }

  useEffect(() => {
    setSnippetId(paramsSnippetId);
  })

  useEffect(() => {
    if (snippetId) {
      getFileName();
    }
  }, [snippetId])

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
            onClick={async () => {
              let res = await saveFile();
              let id = res.data.codeFile.snippetId;
              setSnippetId(id);
              handleSaveFilePopup();
              navigate(`/snippet/${id}`)
            }}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default SaveFilePopUp
