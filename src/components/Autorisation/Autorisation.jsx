import cart from '../../media/shopping_cart_icon.svg';
import language from '../../media/language_icon.svg';

import { Button } from '../Button';

import './style.css';

export function Autorisation() {
  return (
    <div className="autorisation">
      <Button className="simple-btn">
        <img src={cart} alt="cart" />
      </Button>
      <Button className="border-btn">Log In</Button>
      <Button className="filled-btn">Sign Up</Button>
      <Button className="border-btn">
        <img src={language} alt="language" />
      </Button>
    </div>
  );
}
