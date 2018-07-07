import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">
Home
            </Link>
          </li>
        </ul>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
