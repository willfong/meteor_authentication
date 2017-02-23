import React from 'react';
import Accounts from './accounts';

export default (props) => {
  return (
    <div>
      <h1>Meteor/React Authentication</h1>
      <p>This page should have all the wrapper stuff, like headers
      and footers.</p>
      <Accounts />
      {props.children}
    </div>
  )
};
