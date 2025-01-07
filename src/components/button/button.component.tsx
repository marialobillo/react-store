import React from 'react'
import './button.styles.scss'

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
};

interface ButtonProps {
    children: React.ReactNode;
    buttonType?: keyof typeof BUTTON_TYPE_CLASSES;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}


const Button = ({ children, buttonType = 'google', ...otherProps }: ButtonProps) => {
  return (
      <button
          className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
          {...otherProps}
      >
          {children}
      </button>
  )
}

export default Button
