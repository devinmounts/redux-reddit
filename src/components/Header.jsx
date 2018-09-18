import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Redux-it</h1>
      <Link to="/">Home</Link> | <Link to="/newpost">Create a Post</Link>
    </div>
  );
}

export default Header;
