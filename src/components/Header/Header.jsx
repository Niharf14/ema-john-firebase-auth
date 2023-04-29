import React, { useContext, useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { authContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, userSignOut } = useContext(authContext);

    const handleSignOut = () => {
        
        userSignOut()
            .then(() => {})
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <>
                        <span className='text-white'>{user.email}</span>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;