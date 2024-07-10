import close from '../../media/close_icon.svg';

import './style.css';

import { useState } from 'react';

export function Modal() {
  const [item, setItem] = useState(true);
  const value = localStorage.length ? false : item;

  return (
    <>
      {value && (
        <section className="modal">
          <ul className="modal-list">
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              dignissimos cum molestiae non!
            </li>
            <li>Ends 12.06.2024</li>
          </ul>
          <img
            onClick={() => {
              localStorage.setItem('modal', false);
              setItem(false);
            }}
            src={close}
            className="close-icon"
            alt="close"
          />
        </section>
      )}
    </>
  );
}
