import React, { useEffect, useState } from 'react'
import useAuth from '../../auth/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import '../style/snippets.scss'
import CodeFile from '../components/CodeFile'
import { useSnippets } from '../hooks/useSnippet'

const Snippets = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const {handleAllCodeSnippet}=useSnippets();
  const [codeSnippetsArray,setCodeSnippetsArray]=useState([]);

  useEffect(() => {
    if (user === null) {
      navigate('/login')
    }
  })

  useEffect(()=>{
    const runSnippet = async()=>{
      const response = await handleAllCodeSnippet();
      console.log("All file: ",response.data.allFiles);
      const elemArray=response.data.allFiles
      setCodeSnippetsArray([...elemArray])
      console.log("All data :" , codeSnippetsArray)
      return response
    }
    runSnippet();
  },[])

  return (
    <section className='all-snippets'>
      <h1>My Snippets</h1>
      {codeSnippetsArray.map((elem,idx)=>{
        return <CodeFile key={idx} snippetId={elem.snippetId} filename={elem.fileName}/>
      })}
    </section>
  )
}

export default Snippets
