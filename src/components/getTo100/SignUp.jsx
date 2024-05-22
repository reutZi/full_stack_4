import React, { useState } from 'react';
import classes from './GetTo100.module.css';

function SignUp({ submit, openNewGame }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('passwordValid in handle submit: ', passwordValid);
        submit(userName, password, passwordValid);
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

                <label htmlFor="passwordValid">
                    Retype Password:
                </label>
                <input
                    type="password"
                    id="passwordValid"
                    placeholder="Enter your Password"
                    value={passwordValid}
                    onChange={(e) => setPasswordValid(e.target.value)}
                    required
                />

                <div className="wrap">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
            <p>Already have an account?
                <button className={classes.buttonA} onClick={openNewGame}>
                    Sign up
                </button>
            </p>
        </div>
    );
}

export default SignUp;
