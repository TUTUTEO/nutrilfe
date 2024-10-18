import React, { useState } from 'react';
import './login.scss';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);

        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <img src="./logo.png" alt="logozinha"  />
            <h2>Login</h2>
            <form onSubmit={login}>
                <div>
                    <label htmlFor="username">Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="login-button">Entrar</button>
            </form>
        </div>
    );
};
