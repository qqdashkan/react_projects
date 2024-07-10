import { brandsLogos as list } from './listOfLogos';
import { Logo } from './Logo';

import './style.css';

export function Brands() {
  return (
    <div className="logos">
      {list.map((logo) => {
        return <Logo key={logo.id} {...logo} />;
      })}
    </div>
  );
}
