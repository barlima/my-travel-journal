import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { logout } from '../context/actions/auth';

const Menu = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 60px;
background: ${p => p.theme.colors.primary};
border-radius: 8px;
`

const Options = styled.div`
display: flex;
flex-direction: row;
padding: 0 10px;
`

const Option = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
padding: 10px;
width: ${p => p.search ? '40%' : 'auto'}
`

const Button = styled.button`
background: transparent;
border: none;
color: white;
font-size: 18px;
padding: 10px;

&:hover {
  cursor: pointer;
}
`

const Search = styled.input`
border: none;
border-radius: 8px;
width: 100%;
height: 90%;
padding: 0 10px;

&::placeholder {
  color: ${p => p.theme.colors.primary};
  letter-spacing: 1px;
  text-align: center;
  transition: 0.5s;
}

&:focus {
  outline: none;

  &::placeholder {
    opacity: 0;
  }
}
`

const Header = () => {

  return (
    <Menu>
      <Options>
        <Option>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </Option>
        <Option>
          <Link to="/journal">
            <Button>Journal</Button>
          </Link>
        </Option>
        <Option>
          <Button>Filter</Button>
        </Option>
      </Options>

      <Option search>
        <Search type="text" placeholder="Search"/>
      </Option>

      <Options>
        <Option>
          <Button onClick={logout}>Logout</Button>
        </Option>
      </Options>
    </Menu>
  )
}

export default Header;