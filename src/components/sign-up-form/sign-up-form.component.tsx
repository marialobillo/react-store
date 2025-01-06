import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { name, email, password, confirmPassword } = formFields;

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
            await createAuthUserWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
        } catch (error) {
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
                    name="name"
                    onChange={handleChange}
                    value={name} />

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