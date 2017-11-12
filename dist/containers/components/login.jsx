import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import styled,{ keyframes } from 'styled-components';
import { Paper, TextField } from 'material-ui';
import { Button } from 'react-bootstrap';


const Container = styled(Paper)`
display:flex;
flex-direction: column;
align-items: center;
width:50%;
`;
const Form = styled.form`
display:flex;
flex-direction: column;
width:75%;
`;
const rotate360 = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`;

const Spinner = styled.div`
color: #333;
font-size: 18px;
font-family: sans-serif;
&::before {
  display: inline-block;
  content: '';
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: solid 2px #ccc;
  border-bottom-color: #66c;
  border-top-color: #66c;
  animation: ${rotate360} 1s linear infinite;
  vertical-align: bottom;
}
`;
const MSG = styled.h4`
margin-top:10px;
padding:1.5rem;
`;

function Loading ({ loading, msg}){
  if(loading){
    return(
      <Spinner />
    );
  }
  else{
    return(
      <MSG>{msg}</MSG>
    );
  }
}
class Login extends Component {
  state={
    userName:'',
    password:'',
    loading:'',
    token:''
  }
  componentDidMount(){
    axios.get('http://localhost:3000/api/auth/me',{
      headers:{
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-access-token': localStorage.token
      }
    })
    .then( res => {
      this.setState({
        token:res.data.msg
      });
    });
  }

  getToken = () => {
    axios.get('http://localhost:3000/api/auth/me',{
      headers:{
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'x-access-token': localStorage.token
      }
    })
    .then( res => {
      this.setState({
        token:res.data.msg
      });
    });
  }
  
  getResp = () => {
    axios.post('http://localhost:3000/api/auth/login',{
      userName:this.state.userName,
      password:this.state.password
    })
    .then(
      response => {
        this.setState({
          loading:false,
          msg:response.data.msg
        },
        this.setToken(response.data.token));
        this.getToken();
      }
    )
    .catch(err => {
      throw err;
    });
  }
  setToken= token => {
    localStorage.setItem('token',token);  
  }
  handleUserInput = e => { 
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }
  submit = () => {
    this.setState({
      loading:true
    },this.getResp());
  }

  render() {
    const {
      loading,
      msg,
      userName,
      password
    } = this.props;
    return (
      <Container>
        <h5>{this.state.token}</h5>
        <Form>
          <TextField 
            label='user name'
            name='userName'
            onChange={this.handleUserInput}
          />
          <TextField 
            label='Password'
            name='password'
            onChange={this.handleUserInput}
          />
          <Button onClick={this.submit}>send</Button>
        </Form>
        <Loading loading={this.state.loading} msg={this.state.msg} />        
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    loading: state.prop
  });

export default connect()(Login);