import React, { useContext } from 'react';
import UserContext from '../../context/userContext';

const Journal = () => {
  const [ user, _ ] = useContext(UserContext);

  return (
    <div>
      Journal
      { user.name }
    </div>
  )
}

export default Journal;