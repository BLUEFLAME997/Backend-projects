import React, { useEffect, useState } from 'react'
import js from '../assets/js.jpg'
import java from '../assets/java.jpg'
import c from '../assets/c.jpg'
import cPlus from '../assets/cPlus.jpg'
import go from '../assets/go.jpg'
import php from '../assets/php.jpg'
import ts from '../assets/ts.jpg'
import rust from '../assets/rust.jpg'
import python from '../assets/python.jpg'
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

  const imageObject = {
    javascript: js,
    java: java,
    c: c,
  }

  return (
    <section className='all-snippets'>
      <h1>My snippets</h1>
      {codeSnippetsArray.map((elem,idx)=>{
        return <CodeFile key={idx} snippetId={elem.snippetId} filename={elem.fileName}/>
      })}
    </section>
  )
}

export default Snippets
