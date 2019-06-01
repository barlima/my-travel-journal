import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../context/actions/auth';

const Header = () => {

  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/journal">
        <button>Journal</button>
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Header;