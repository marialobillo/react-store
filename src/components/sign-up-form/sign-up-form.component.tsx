import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const user = await createAuthUserWithEmailAndPassword(email, password);
            if (user) {
                await createUserDocumentFromAuth(user, { displayName });
                setFormFields(defaultFormFields);
            } else {
                console.error('Failed to create user');
            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') { 
                alert('Email already in use');
                return;
            }
            console.error('Error creating user: ', (error as Error).message);
        }
    }

    return (
        <div>
            <h1>Sign Up with your Email</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    required
                    name="displayName"
                    onChange={handleChange}
                    value={displayName} />

                <label htmlFor="">Email</label>
                <input
                    type="email"
                    required
                    name="email"
                    onChange={handleChange}
                    value={email} />

                <label htmlFor="">Password</label>
                <input
                    type="password"
                    required
                    name="password"
                    onChange={handleChange}
                    value={password} />

                <label htmlFor="">Confirm Password</label>
                <input
                    type="password"
                    required
                    name="confirmPassword"
                    onChange={handleChange}
                    value={confirmPassword} />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm