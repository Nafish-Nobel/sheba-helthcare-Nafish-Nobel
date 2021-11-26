import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2 className="fw-bold text-warning bg-dark p-2" >Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-warning fw-bold m-1">Google</button>
            <img className="img-fluid" src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg" alt=""/>
        </div>
    );
};

export default Login;