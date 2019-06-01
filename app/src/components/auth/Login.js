import React from 'react';
import { login } from '../../context/actions/auth';

const Login = ({ history }) => {
  
  const handleLogin = async () => {
    const { user } = await login();
    if(user) history.push('/journal');
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
};

export default Login;