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

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const context=useContext(SnippetsContext);
  const {savePopUp,setSavePopUp}=context;

  useEffect(() => {
    if (user === null) {
      console.log(user)
      navigate('/login')
    }
  }, [user])

  if (user === undefined) {
    return (
      <main><h1>Loading...</h1></main>
    )
  }

  const handleSaveFile=()=>{
    setSavePopUp(true);
    console.log(savePopUp);
  }

  return (
    <section className='dashboard-page'>
      <Navbar />
      <Controls />
      <CodeEditor />
      <div className="save-button-section">
        <button className='save-button'
        onClick={handleSaveFile}>Save File</button>
      </div>
      <SaveFilePopUp/>
    </section>
  )
}

export default Dashboard