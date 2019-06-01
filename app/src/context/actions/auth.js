import { firebase, googleAuthProvider } from '../../firebase/firebase';

export const auth = () => firebase.auth();

export const login  = () => auth().signInWithPopup(googleAuthProvider);
export const logout = () => auth().signOut();