import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Users extends Component {
  static propTypes = {

  }
  state= {
    userName:[]
  }
  componentWillMount() {
    const that = this;    
    // axios.get('http://192.168.1.35:3000/user')
    axios.get('http://localhost:3000/user')
    .then(response => {
      that.setState({
        userName:response.data
      });
      console.log(response.data);
    });
  }
  render() {
    const {userName} = this.state;
    return (
      <div>
        <h1>User lists</h1>
        {userName.map( (user, i) => (
          <div key={i}>
            <div>
              <h2>{user.name}</h2>
              <h3>{user.age}</h3>
              <h4 style={{display:'inline'}}>
                {user.skill.map(( t,i) => (
                  <p style={{display:'inline'}} key={i}>
                    {t.skill}{' '}
                  </p>)
                )}
              </h4>
            </div>
          </div>
        ) )}
      </div>  
    );
  }
}

export default Users;

