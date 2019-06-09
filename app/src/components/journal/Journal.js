import React, { useContext } from 'react';
import styled from 'styled-components';
import { useListVals } from 'react-firebase-hooks/database';
// import { Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import database from '../../firebase/firebase';
import JourneyCard from '../journeys/JourneyCard';

const Content = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
`

const Journal = () => {
  const [ user, _ ] = useContext(UserContext);
  const [ journeys, loading, error ] = useListVals(database.ref(`users/${user.uid}/locations`));

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <Content>
      {
        journeys.map(journey => <JourneyCard journey={journey} />)
      }
    </Content>
  )
}

export default Journal;