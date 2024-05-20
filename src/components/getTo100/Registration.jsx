import React, { useState } from 'react';
import classes from './GetTo100.module.css';

function Registration({ submit }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        submit(userName, password);
    };

    return (
        <div className={classes.registration}>
            <h3>Sign In For the Game</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">
                    Username:
                </label>
                <input
                    type="text"
                    id="userName"
                    placeholder="Enter your Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />

                <label htmlFor="password">
                    Password:
                </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <div className="wrap">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
            <p>Don't have an account?
                <a href="#">
                    Create new one
                </a>
            </p>
        </div>
    );
}

export default Registration;
