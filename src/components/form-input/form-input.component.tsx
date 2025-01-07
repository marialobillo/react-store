import React from 'react'
import './form-input.styles.scss'

interface FormInputProps { 
    label: string;
    name: string;
    type: string; // Allow different input types (text, password, email, etc.)
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ label, name, type, value, onChange }: FormInputProps) => {

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.parentElement?.classList.add('shrink');
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            event.target.parentElement?.classList.remove('shrink');
        }
    };
  return (
      <div className="group">
          <input
              className="form-input"
              type={type}
              required
              name={name}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
          />
          <label className="form-input-label" htmlFor={name}>
              {label}
          </label>
      </div>
  )
}

export default FormInput