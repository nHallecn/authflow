import React from 'react'

const FormField = ({label, type, value, placeholder, onChange}) => {
  return (
    <div>
        <label htmlFor={label}>{label}</label>
        <input 
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            value={value}
        />
    </div>
  )
}

export default FormField