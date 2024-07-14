import './style.css';

import { useState } from 'react';

export function Login() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const userData = {
    name: fullName,
    password,
    email,
  };

  function handleFormSubmit(event) {
    event.preventDefault();

    const field = event.target;
    const formData = new FormData(field);
    const names = Array.from(formData.keys());
    names.forEach((name) => {
      validateField(name, userData[name]);
    });
  }

  function validateField(fieldName, value) {
    let states = {
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      message: '',
    };

    switch (fieldName) {
      case 'name':
        states.nameValid = /^(?!.*\d)[A-Z][a-z]* [A-Z][a-z]*$/i.test(value);
        states.message = states.nameValid ? '' : 'Full name is invalid';
        setMessage(states.message);
        break;
      case 'email':
        states.emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        states.message = states.emailValid ? '' : 'Email is invalid';
        setMessage(states.message);
        break;
      case 'password':
        if (value.length > 7 && value.length < 16) {
          states.passwordValid = true;
        }
        states.message = states.passwordValid ? '' : 'Password is invalid';
        setMessage(states.message);
        break;
      default:
        break;
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Full name:
        <input
          type="text"
          name="name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <p className="message">{message}</p>
      <button type="submit" disabled={''}>
        Registration
      </button>
    </form>
  );
}
