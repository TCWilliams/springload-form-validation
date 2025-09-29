import React from 'react'

import './formField.css'

const FormField: React.FC<{
  label: string
  type: string
  name: string
  value: string
  placeholder?: string
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  error?: string
}> = ({ label, type, name, value, placeholder, required, onChange, onBlur, error }) => {
  const id = `${name}-field`

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input className='text-input'
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        placeholder={placeholder}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
      />
      {
        <p id={`${id}-error`} className="error" role="alert">
          {error}
        </p>
      }
    </div>
  )
}

export { FormField }
