import React from 'react';
import axios from 'axios';
import { TextField } from 'material-ui';
import {store} from '../../store/store';


class PostForm extends React.Component{
  state = {
    description:''
  }
  componentDidMount(){}
  handleInput= e => {
    this.setState({
      description:e.target.value
    });
  }
  handleSubmit = e => {
    const authorID = store.getState().userData.userData._id;
    const { description } = this.state;
    e.preventDefault();
    console.log(authorID);
    axios.post('http://localhost:3000/api/posts',{description ,authorID})
    .then( res => {
      alert(res.data.msg);
    })
    .catch( err => {
      throw err;
    });
  }
  render (){
    return(
      <form onSubmit={this.handleSubmit}>
        <TextField
          label='sharh'
          name='description'
          onChange={this.handleInput}
        />
        <br />
        <button >SEND </button>
        <br />
      </form>
    );
  }
}

export default PostForm;