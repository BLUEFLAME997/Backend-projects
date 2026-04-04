import React, { useEffect } from 'react'
import '../style/snippetName.scss'
import { useContext } from 'react'
import { SnippetsContext } from '../Snippets.context'
import { useParams } from 'react-router-dom'

const SnippetName = () => {
  const context = useContext(SnippetsContext);
  const {filename}=context;
  const {snippetId}=useParams();

  return (
    <div className='snippet-name'>
      <div className="filename">
        <h1>{filename}</h1>
      </div>
      <p>SnippetId:<span>{snippetId}</span></p>
    </div>
  )
}

export default SnippetName
