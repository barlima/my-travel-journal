import React, { useContext, useState } from 'react';
import UserContext from '../../context/userContext';
import database from '../../firebase/firebase';

const NewJourney = () => {
  const [ user, _ ] = useContext(UserContext);
  const [ journey, setJourney ] = useState({});

  const addNewJourney = e => {
    e.preventDefault();
    database
      .ref(`users/${user.uid}/locations`)
      .push(journey)
  }

  return (
    <form>
      <input type="text" onChange={e => setJourney({ name: e.target.value })} />
      <button
        type="submit"
        onClick={addNewJourney}
      >
        Save
      </button>
    </form>
  )
}

export default NewJourney;