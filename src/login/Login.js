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


// link for forgot password - 
// new page for forgot password - new React Component with one input field
// email/username - click on CTA - API Call / generate otp and send to email/mobile - store that otp in database linked to user
// link on email / page display - enter otp - new page to enter otp - form with one input field - CTA - API Call (otp entered) - match with stored otp
// new page to create new password - CTA - form with two input fields - CTA - API Call (new password) - database stored
// reset done - login with new credentials