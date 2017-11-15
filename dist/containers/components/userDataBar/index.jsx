import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { FormattedNumber } from 'react-intl';
import { Paper, Button } from 'material-ui';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { userData } from '../../../store/actionCreators';
import { store } from '../../../store/store';


// import { Button } from 'react-bootstrap';
import AA from  '../../../styles/img/me.jpg';


const Block = styled(Paper)`
display:flex;
padding:5px 10px;
justify-content:space-between;
width:100%;
margin-bottom:10px;
background: #ffc047!important;
`;
const Avatar = styled(Paper)`
display:flex;
align-items:center;
padding:2px;
img{
  width:50px;
  border-radius:50%;
}
h4{
  margin:0 0 0 5px;
}
`;
const PFF = styled(Paper)`
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
width:100%;
h4{
  margin:0 5px;
}
`;
const UserNetwork=styled.div`
display:flex;
width:40%;
`;
const StContainer = styled.div`
  display:flex;
  align-items: center;
`;
const Btn = styled(Button)`
background: tomato!important;
&:hover {
  background-color: transparent!important;
  color:white;
  border: 1px solid black;
}
`;
const StLink = styled(Link)`
text-decoration:none!important;
margin:5px;
`;

class UserDataBar extends Component {
  static propTypes = {
    userName:PropTypes.string.isRequired,
    userLogin:PropTypes.bool.isRequired
  }
  componentDidMount(){
    axios.get('http://localhost:3000/api/auth/me',{
      headers:{
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-access-token': localStorage.token
      }
    })
    .then( res => {
      store.dispatch(userData(res.data.user));
    });
  }
  render() {
    const {
      userName,
      userLogin
    }= this.props;
    if(userLogin === undefined){
      return(
        <Block>
          <h1>Social-Test</h1>
          <StContainer>
            <StLink to="/login" replace>
              <Btn>Login</Btn>
            </StLink>
            <StLink to="/signup" replace>
              <Btn>Signin</Btn>
            </StLink>
          </StContainer>
        </Block>
      );
    }
    return (
      <Block>
        <Avatar>
          <img src={AA} alt="" />
          <h4>{userName}</h4>
        </Avatar>
        <UserNetwork>
          <PFF>
            <FormattedNumber value={1000} />
            <h4>Posts</h4>
          </PFF>
          <PFF>
            <FormattedNumber value={10000} />
            <h4>Followers</h4>
          </PFF>
          <PFF>
            <FormattedNumber value={100010} />
            <h4>Following</h4>
          </PFF>
        </UserNetwork>
        <Button>edit your profile </Button>
      </Block>
    );
  }
}

const mapStateToProps = state => ({
  userName:state.rootReducer.userName,
  userLogin:state.rootReducer.userLogin
});

export default connect(mapStateToProps)(UserDataBar);