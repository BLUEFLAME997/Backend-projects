import React, { useEffect } from 'react'
import useAuth from '../../auth/hooks/useAuth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../style/dashboard.scss'
import Controls from '../components/Controls'
import CodeEditor from '../components/CodeEditor'
import SaveFilePopUp from '../components/SaveFilePopUp'
import { SnippetsContext } from '../Snippets.context'
import SnippetName from '../components/SnippetName'
import { useSnippets } from '../hooks/useSnippet'
import LoginPopUp from '../components/LoginPopUp';
import { useParams } from 'react-router-dom'

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const context = useContext(SnippetsContext);
  const { savePopUp, setSavePopUp, languageValue,setLanguageValue, value,setValue, snippetId, setSnippetId, loggedIn, setLoggedIn} = context;
  const { handleUpdateFile } = useSnippets();
  const {handleFileData}=useSnippets();
  const {snippetId:paramSnippetId}=useParams();

  useEffect(() => {
    if (user === null) {
      console.log(user)
      navigate('/login')
    }
  }, [user, navigate])

  // useEffect(() => {
  //   if (user) {
  //     setLoggedIn(true);
  //     setTimeout(() => {
  //       setLoggedIn(false);
  //     }, 2000)
  //   }
  // })

  useEffect(()=>{
    const fileData=async()=>{
      const response = await handleFileData(paramSnippetId);
      console.log("Data about file: ",response);
      setLanguageValue(response.data.file.language);
      setValue(response.data.file.codeSnippet)
    }
    fileData();
  },[])

  if (user === undefined) {
    return (
      <main><h1>Loading...</h1></main>
    )
  }

  const handleSaveFile = () => {
    setSavePopUp(true);
    console.log(savePopUp);
  }

  const updateFile = async () => {
    try {
      const response = await handleUpdateFile(languageValue, value, true);
      console.log(response)
      setLanguageValue(response.data.file.language);
      setValue(response.data.file.codeSnippet);
      return response;
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  return (
    <section className='dashboard-page'>
      <Navbar />
      <SnippetName />
      <Controls />
      <CodeEditor />
      <div className="save-button-section">
        <button className={`save-button ${snippetId ? "save-button-close" : ''}`}
          onClick={handleSaveFile}>Save File</button>
        <button className="update-button"
          onClick={() => {
            updateFile();
          }}>
          Update File
        </button>
      </div>
      <SaveFilePopUp />
      {/* <LoginPopUp /> */}
    </section>
  )
}

export default Dashboard