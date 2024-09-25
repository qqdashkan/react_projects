import logo from '../../media/logo.svg';

import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { Search } from '../Search';
import { Autorisation } from '../Autorisation';

import './style.css';

export function Header() {
  return (
    <header className="app-header">
      <div className="header-line">
        <img src={logo} className="App-logo" alt="logo" />
        <Button className="simple-btn">Categories</Button>
        <NavLink className="simple-btn" to="courses">
          Courses
        </NavLink>
        <Search />
        <Button className="simple-btn">Demy Business</Button>
        <Autorisation />
      </div>
    </header>
  );
}
