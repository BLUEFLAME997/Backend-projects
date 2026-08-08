import React from 'react'

const FormGroup = ({label,placeholder,id,type,name}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} placeholder={placeholder} />
    </div>
  )
}

export default FormGroup
