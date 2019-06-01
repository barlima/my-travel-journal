import React, { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../context/actions/auth';
import { setUser } from '../context/actions/user';
import UserContext from '../context/userContext';
import Header from '../components/Header';

const PrivateRoute = ({ 
  component: Component, 
  ...rest
}) => {
  const [ user, initialising, error ] = useAuthState(auth());
  const [ authenticatedUser, dispatch ] = useContext(UserContext);

  useEffect(() => {
    if(!initialising) {
      if(!authenticatedUser && !error && user) {
        const { uid, email, displayName: name } = user;
        dispatch(setUser({ uid, email, name }));
      }
    }
  }, [user, initialising]);

  if(!authenticatedUser) {
    return <p>Loading...</p>
  }

  return (
    <Route {...rest} component={(props) => (
      user ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/login" />
      )
    )} />
  )
}

export default PrivateRoute;