import { Meteor } from 'meteor/meteor';
import '/imports/api/tasks';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername('andrei')) {
    Accounts.createUser({
      username: 'andrei',
      password: '12345678'
    });
  }
  if (!Accounts.findUserByUsername('meteor')) {
    Accounts.createUser({
      username: 'meteor',
      password: '12345678'
    });
  }
});
