import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { authService } from "../../../services/authService";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        
        authService.login({ username, password })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    return (
        <form onSubmit={loginUser}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>

            <div className="form-group">
                <input type="submit" id="submit" value="Log in" />
            </div>
        </form>
    );
};

export default Login;