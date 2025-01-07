import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from './../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {


  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup()
      const userDocRef = await createUserDocumentFromAuth(user, {})
    } catch (error) {
      console.error('Error on google SignIn with PopUp: ', error)
    }
  }

  return (
    <div className="auth-container">
      <div className="sign-in-section">
        <h2>Sign In</h2>
        <button onClick={logGoogleUser}>Sign In With Google Pop-Up</button>
      </div>

      <SignUpForm />
    </div>
  )
}

export default SignIn
