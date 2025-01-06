import { signInWithGooglePopup, createUserDocumentFromAuth } from './../../utils/firebase/firebase.utils'

const SignIn = () => {

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup()
      const userDocRef = await createUserDocumentFromAuth(user)
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
