import React from 'react'
import { signInWithGooglePopup } from './../../utils/firebase/firebase.utils'

const SignIn = () => {

  const logGoogleUser = async () => { 
    try {
      const response = await signInWithGooglePopup()
      console.log(response)
    } catch (error) {
      console.error('Error on google SignIn with PopUp: ', error)
    }
  }

  return (
    <div>
      <h2>SignIn</h2>
      <button
        onClick={logGoogleUser}
      >SignIn With Google PopUp</button>
    </div>
  )
}

export default SignIn
