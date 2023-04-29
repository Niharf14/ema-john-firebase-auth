import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { authContext } from '../providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {signUpUser} = useContext(authContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(email, password, confirmPassword);
        

        if(password !== confirmPassword){
            setError('your password didn\'t match');
            return;
        }
        else if(password.length < 6){
            setError('password should be at least 6 characters long');
            return;
        }
        

        signUpUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('Sign up successful!!!');
            event.target.reset();
        })
        .catch(error => {
            console.log(error.message);
            // setError('Already signed up!! please login now.');
            setError(error.message);
        })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter Password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirm-password" placeholder='Enter Password' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already have an account? please <Link to='/login'>Login</Link></p>
            <p className='text-info'>{error}</p>
            <p className='text-info'>{success}</p>
        </div>
    );
};

export default SignUp;