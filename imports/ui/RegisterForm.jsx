import React, { useState } from 'react';

export const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit2 = (e) => {
    e.preventDefault();

      if (!Accounts.findUserByUsername(username)) {
          Accounts.createUser({
              username: username,
              password: password
          });
      } else {
          console.log("user not created properly")
      }
  };

  return (
    <form onSubmit={submit2} className="login-form">
      <label htmlFor="username"><h1>Register</h1></label>

      <input
          type="text"
          placeholder="New Username"
          name="username"
          required

          onChange={(e) => setUsername(e.currentTarget.value)}
      />

      <label htmlFor="password">Password</label>

      <input
          type="password"
          placeholder="Password"
          name="password"
          required

          onChange={(e) => setPassword(e.currentTarget.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
};
