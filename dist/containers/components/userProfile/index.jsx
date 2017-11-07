import React, { Component } from 'react';
import axios from 'axios';

import {
   FormattedMessage, 
   FormattedDate,
   FormattedTime
 } from 'react-intl';
import { connect } from 'react-redux';
import { addUser } from '../../../store/actionCreators';


class Intel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name       : 'Eric',
        unreadCount: 1000,
    };
  }

  render() {
		const { name, tell, unreadCount, handle, test } = this.props;
    return (
      <p>
        <FormattedMessage
          id="welcome"
          defaultMessage={`Hello {name},
           you have {unreadCount, number}
           {unreadCount, plural,
           one {message}
           other {messages}
          }`}
          values={{name: <b>{name}</b>, unreadCount}}
        />
        <FormattedDate 
          value={new Date()}
        />
        <br />
        <FormattedTime 
          value={Date()}
        />
        <br />
        <button onFocus={test} onClick={handle}>test</button>
      </p>
    );
  }	
}
const mapStateToProps = state => ({
	name:state.rootReducer.name,
  unreadCount:state.rootReducer.unreadCount,
  tell:state.rootReducer.tell
});
const mapDispatchToProps = dispatch => ({
	handle(){
    axios.get('http://localhost:3000/user').then(
      res => (
        dispatch(addUser(res.data)),
        localStorage.setItem('userName',res.data)
      )
    );
  }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Intel);