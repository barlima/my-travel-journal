import React, { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../context/actions/auth';
import { setUser } from '../context/actions/user';
import UserContext from '../context/userContext';

const PrivateRoute = ({ 
  component: Component, 
  ...rest
}) => {
  const [ user, initialising, error ] = useAuthState(auth());
  const [ currentUser, dispatch ] = useContext(UserContext);

  useEffect(() => {
    if(!initialising) {
      if(!currentUser && user) {
        const { email, displayName: name } = user;
        dispatch(setUser({ email, name }));
      }
    }
  }, [user, initialising]);


  if(initialising && !currentUser) {
    return <p>Loading...</p>
  }

  return (
    <Route {...rest} component={(props) => (
      user ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/login" />
      )
    )} />
  )
}

export default PrivateRoute;