import React from 'react'
import { useNavigate } from 'react-router-dom'

const CodeFile = ({snippetId, filename}) => {
  const navigate=useNavigate();

  return (
    <div className='codeFile'
    onClick={()=>{
      navigate(`/snippet/${snippetId}`)
    }}>
      <div className="img">
        <img src="https://i.pinimg.com/736x/c9/9a/b9/c99ab9922ba3f05c7b02eb817cab8fe5.jpg" alt="" />
      </div>
      <div className="name">
        <h1>{filename}</h1>
        <p>{snippetId}</p> 
      </div>
    </div>
  )
}

export default CodeFile
