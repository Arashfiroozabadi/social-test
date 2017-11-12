import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { userData } from '../../store/actionCreators';
import { store } from '../../store/store';


class Form extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
          name:'',
          tell:'',
          email: '',
          password: '',
          rePassword:'',
          userLogin:false,
          formErrors: {
            name:'',
            tell:'',
            email: '',
            password: '', 
            rePassword:''
          },
          nameValid:false,
          tellValid:false,
          emailValid: false,
          passwordValid: false,
          rePasswordValid:false,
          formValid: false
        };
      }
    
      handleUserInput = e => { 
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value); });
      }
    
      validateField(fieldName, value) {
        const fieldValidationErrors = this.state.formErrors;
        let {
          nameValid, 
          tellValid, 
          emailValid, 
          passwordValid, 
          rePasswordValid
        } = this.state;
        const passValue = this.state.password;
    
        switch(fieldName) {
          case 'name':
            nameValid = value.length>= 3;
            fieldValidationErrors.name = nameValid ? '' : ' is invalid';
            break;
          case 'tell':
            tellValid = value.match(/^0\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
            fieldValidationErrors.tell = tellValid ? '' : ' is invalid';
            break;
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          case 'rePassword':
            rePasswordValid = passValue && value.length >= 6 && value === passValue ;
            fieldValidationErrors.rePassword = rePasswordValid ? '': ' not match';
            break;

          default:
            break;
        }
        this.setState({
          formErrors: fieldValidationErrors,	
          nameValid,	
          tellValid,
          emailValid,
          passwordValid,
          rePasswordValid
        }, this.validateForm);
      }
    
      validateForm() {
        this.setState({formValid:
          this.state.nameValid &&
          this.state.tellValid &&
          this.state.emailValid &&
          this.state.rePasswordValid &&
          this.state.passwordValid});
      }

      handleSubmit= e => {
        e.preventDefault();
        // axios.post('http://192.168.1.34:3000/signup'
        axios.post('http://localhost:3000/api/users'
        ,{
          userName:this.state.name,
          tell:this.state.tell,
          email: this.state.email,
          password: this.state.password
        })
        .then( response => {
          localStorage.setItem('token', response.data.token);
          alert(response.data.msg);
          if(response.data.auth){
            store.dispatch(userData(response.data.userData));
            console.log('auth true');
          }
        })
        .catch( err => {
          throw err;
        });
      }

  render(){
    const {userLogin} = this.props;
    if(userLogin){
      return(
        <Redirect to='/' />
      );
    }
    return(
      <Paper className="form" >
        <form onSubmit={this.handleSubmit}>    
          <h3>form</h3>
          <TextField
            error={!this.state.nameValid}
            label={this.state.nameValid ?'name':`name ${this.state.formErrors.name}`}
            name="name"
            type="text" 
            required
            onChange={this.handleUserInput}
          />
          <br />
          <TextField
            error={!this.state.tellValid}
            label={this.state.tellValid ?'tell':`tell ${this.state.formErrors.tell}`}
            name="tell"
            type="text"
            required
            onChange={this.handleUserInput}
          />
          <br />
          <TextField
            error={!this.state.emailValid}
            label={this.state.emailValid ?'email':`email ${this.state.formErrors.email}`}
            name="email"
            type="email" 
            required
            onChange={this.handleUserInput}
          />
          <br />
          <TextField
            error={!this.state.passwordValid}
            label={this.state.passwordValid ?'password':`password ${this.state.formErrors.password}`}
            name="password"
            type="password"
            required
            onChange={this.handleUserInput}
          />
          <br />   
          <TextField
            error={!this.state.rePasswordValid}
            label={this.state.rePasswordValid ?'rePassword':`rePassword ${this.state.formErrors.rePassword}`}
            name="rePassword"
            type="password"
            required
            onChange={this.handleUserInput}
          />
          <br />
          <button disabled={!this.state.formValid}> send</button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  userLogin:state.userData.userLogin,
  userName:state.userData.userName
});

export default connect(mapStateToProps)(Form);