import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formdata, setFormdata] = useState({});
    const tempNavigate = useNavigate();

    const loginFn = () => {
        console.log('login fn');
        //using formdata
        //call login api
        //on login response
        //if login true - redirect to dashboard
        tempNavigate('/dashboard', {state : {userid: '12345', username: 'Deepak'}});
        //else show error
    }

    return (
        <div>
            <div>
                Userid - <input type="text" name="userid"/><br></br>
                Password - <input type="text" name="password"/><br></br>
                <button onClick={loginFn}>Login</button>
            </div>
        </div>
    )
}

export default Login
