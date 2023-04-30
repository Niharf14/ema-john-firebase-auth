import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../providers/AuthProvider';

const Login = () => {
    const [show, setShow] =useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {signInUser} = useContext(authContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location?.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        setError('');
        setSuccess('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('User login successfull!!!');
            event.target.reset();
            navigate(from, { replace: true });
        })
        .catch(error => {
            setError('Invalid User');
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Enter Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? 'text' : 'password'} name="password" id="password" placeholder='Enter Password' required />
                    <p className='btn-show-hide' onClick={() => setShow(!show)}><button>{show ? 'Hide Password' : 'Show Password'}</button></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New user? please <Link to='/signup'>Sign Up</Link></p>
            <p>{error}</p>
            <p>{success}</p>
            
        </div>
    );
};

export default Login;