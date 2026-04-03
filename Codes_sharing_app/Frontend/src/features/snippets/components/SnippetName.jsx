import React from 'react'
import '../style/snippetName.scss'
import { useContext } from 'react'
import { SnippetsContext } from '../Snippets.context'

const SnippetName = () => {
  const context = useContext(SnippetsContext);
  const {filename,snippetId}=context;

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
