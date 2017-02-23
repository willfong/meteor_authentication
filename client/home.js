import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import PublicPage from './public_page';
import MemberPage from './member_page';


class Home extends Component {
  render() {
    return (
      <div>{this.props.currentUser ? <MemberPage /> : <PublicPage />}</div>
    )
  }
}


export default createContainer(()=>{
  return {
    currentUser: Meteor.user()
  }
}, Home);
