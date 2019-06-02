import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';
import { firebase } from './firebase/firebase';
import UserContext from './context/userContext';
import userReducer from './context/reducers/userReducer';
import AppRouter, { history } from './router/AppRouter';
import { theme } from './style/theme';
import 'semantic-ui-css/semantic.min.css';
import './style/style.css';

const App = () => (
  <UserContext.Provider value={useReducer(userReducer)}>
    <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
  </UserContext.Provider>
)

ReactDOM.render(<App/>, document.getElementById('root'));

firebase.auth().onAuthStateChanged(user => {
  if(!user) {
    history.push('/login');
  }
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
