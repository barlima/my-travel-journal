import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { login, logout, auth } from '../../context/actions/auth';

const Login = () => {
  const [user, initialising, error] = useAuthState(auth());

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {
        user && <p>{user.email}</p>
      }
    </div>
  )
};

export default Login;