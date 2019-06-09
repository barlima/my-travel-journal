import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserContext from '../../context/userContext';
import database from '../../firebase/firebase';
import { Modal } from 'semantic-ui-react'

const Button = styled.button`
background: ${p => p.theme.colors.primary};
border: none;
border-radius: 8px;
color: white;
font-size: 18px;
padding: 10px 20px;
outline:none;

&:hover {
  cursor: pointer;
}
`

const NewJourney = ({ children }) => {
  const [ user, _ ] = useContext(UserContext);
  const [ journey, setJourney ] = useState({});

  const addNewJourney = e => {
    e.preventDefault();
    database
      .ref(`users/${user.uid}/locations`)
      .push(journey)
  }

  return (
    <Modal trigger={children}>
      <Modal.Header>New Journey</Modal.Header>
      <Modal.Content>
        <form>
          <input type="text" onChange={e => setJourney({ name: e.target.value })} />
          <button
            type="submit"
            onClick={addNewJourney}
          >
            Save
          </button>
        </form>
      </Modal.Content>
      <Modal.Actions>
        <Button>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

NewJourney.propTypes = {
  children: PropTypes.element.isRequired
}

export default NewJourney;