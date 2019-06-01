import React, { useContext } from 'react';
import { useListVals } from 'react-firebase-hooks/database';
import { Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import database from '../../firebase/firebase';

const Journal = () => {
  const [ user, _ ] = useContext(UserContext);
  const [ journeys, loading, error ] = useListVals(database.ref(`users/${user.uid}/locations`));

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      Journal
      <Link to="/journey/new">
        <button>
          Add new journey
        </button>
      </Link>
      {
        journeys.map(journey => (
          <div>
            {journey.name}
          </div>
        ))
      }
    </div>
  )
}

export default Journal;