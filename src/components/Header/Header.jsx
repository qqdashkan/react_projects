import logo from '../../media/logo.svg';

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
        <Search />
        <Button className="simple-btn">Demy Business</Button>
        <Autorisation />
      </div>
    </header>
  );
}
