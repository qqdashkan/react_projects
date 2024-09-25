import cart from '../../media/shopping_cart_icon.svg';
import language from '../../media/language_icon.svg';

import { useState } from 'react';

import { Button } from '../Button';

import './style.css';
import { NavLink } from 'react-router-dom';

export function Autorisation() {
  const [data, setData] = useState(false);

  const setActiveModal = () => {
    setData(true);
  };

  return (
    <div className="autorisation">
      <Button className="simple-btn">
        <img src={cart} alt="cart" />
      </Button>
      <NavLink className="border-btn" to="login">
        Log In
      </NavLink>
      <NavLink className="filled-btn" to="registration">
        Sign Up
      </NavLink>
      <NavLink className="border-btn">
        <img src={language} alt="language" />
      </NavLink>
    </div>
  );
}
