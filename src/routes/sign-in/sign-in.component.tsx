import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from './../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import './sign-in.styles.scss'

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
    <div className="signin-container">
      <div className="signin-content">
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser} className="signin-button">
          Sign in with Google Popup
        </button>
      </div>
      <div className="signup-form-wrapper">
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignIn
