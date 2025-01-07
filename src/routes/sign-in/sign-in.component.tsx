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
    <div>
      <h2>SignIn</h2>
      <button
        onClick={logGoogleUser}
      >SignIn With Google PopUp</button>

      <SignUpForm />
    </div>
  )
}

export default SignIn
