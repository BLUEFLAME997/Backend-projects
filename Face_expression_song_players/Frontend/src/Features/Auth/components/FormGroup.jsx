import React from 'react'

const FormGroup = ({ label, placeholder, id, type, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input 
      type={type} 
      id={id} name={name} 
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
      required
      />
    </div>
  )
}

export default FormGroup
