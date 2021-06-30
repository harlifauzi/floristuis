import React from 'react';
import './MyNavbar.css';

const MyNavbar = () => {
    return (
        <div className="mynavbar-container">
            <div className="mynavbar-wrapper">
                <h1 className="mynavbar-logo">floristuis</h1>
                <label for="check">
                    <i className='bx bx-menu-alt-right'></i>
                </label>
                <input type="checkbox" id="check" />
                <ul className="mynavbar-nav">
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ul className="mynavbar-nav-auth">
                    <li>Signup</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default MyNavbar
