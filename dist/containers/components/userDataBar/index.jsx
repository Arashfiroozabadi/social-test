import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Paper, Button} from 'material-ui';
import styled from 'styled-components';
import {FormattedNumber} from 'react-intl';
// import { Button } from 'react-bootstrap';
import AA from  '../../../styles/img/me.jpg';

const Btn = styled(Button)`
color: white!important;
background: tomato!important;
`;
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


class UserDataBar extends Component {
  static propTypes = {
    userName:PropTypes.string.isRequired,
  }
  componentDidMount(){}
  render() {
    const {
      userName
    }= this.props;

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