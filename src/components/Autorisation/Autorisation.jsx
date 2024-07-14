import cart from '../../media/shopping_cart_icon.svg';
import language from '../../media/language_icon.svg';

import { useState } from 'react';

import { Button } from '../Button';
import { Login } from '../Login';

import './style.css';

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
      <Button className="border-btn">Log In</Button>
      <Button type="menu" className="filled-btn" onClick={setActiveModal}>
        Sign Up
      </Button>
      <Button className="border-btn">
        <img src={language} alt="language" />
      </Button>
      {data && (
        <menu className="registrationForm">
          <Login />
        </menu>
      )}
    </div>
  );
}
