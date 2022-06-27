import React from 'react';

const Login = () => {
    return (
        <div style={{"border":"1px solid black", "margin":"0 auto", "width":"200px", "textAlign":"center", "padding":"20px"}}>
        Login
            <form action="">
                <input style={{"margin":"10px 0 5px 0"}} type="text" placeholder='username' />
                <br />
                <input style={{"margin":"5px 0 10px 0"}} type="password" placeholder='password' />
                <br />
                <button type='submit'>LOGIN</button>
            </form>
        </div>
    );
}

export default Login;
