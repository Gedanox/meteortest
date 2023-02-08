import React, {useState} from 'react';

export const LogoutButton = () => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
      Meteor.logout();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>

      <button type="submit">Logout</button>
    </form>
  );
};
