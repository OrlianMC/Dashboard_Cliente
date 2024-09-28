import React from 'react';
import LoginForm from '../../components/forms/loginForm/LoginForm';
import "./login.css";

const Login = ({ onLoginSuccess }) => {
  return (
    <div className='login'>
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </div>
  );
}

export default Login;