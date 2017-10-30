import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import styled, { css, injectGlobal } from 'styled-components';
import { Button } from 'react-bootstrap';

import {setSearch, store} from '../../reducers';

injectGlobal`
body {
  margin: 0;
}
`;
const Btn = Button;

const Buttoon = styled.button`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;
Buttoon.propTypes = {
  className:PropTypes.string,
  children:PropTypes.string
};
Buttoon.defaultProps = {
  className:null
};

const TomatoButton = Buttoon.extend`
background: tomato;
padding:1rem;
color: ${props => props.b ? 'white':'black'};
transition: all 2s;
transform:${props => props.b ? 'rotate(0deg)':'rotate(360deg)'};
`;

const complexMixin = css`
color: ${props => props.whiteColor ? 'white': 'red'}
`;

const StyledComp = styled.div`
/* This is an example of a nested interpolation */
${props => props.complex ? complexMixin : 'color: blue;'}
`;

class AddList extends Component {
  static propTypes = {
    searchTerm:PropTypes.string.isRequired,
    status:PropTypes.bool,
    handleSearch:PropTypes.func.isRequired,
    handleC:PropTypes.func.isRequired
  }
  static defaultProps = {
    status:false
  }
  componentDidMount(){
    console.log(store.getState());    
  }
  componentWillReceiveProps(){
    console.log(store.getState());   
  }
  
  
  render(){
    const {searchTerm, status, handleSearch, handleC} = this.props;
    return(
      <Paper className="list">
        <TomatoButton b={status} onClick={handleC}>false</TomatoButton>
        <input onChange={handleSearch} type="text" />
        <TomatoButton b={!status} onClick={handleC}>true</TomatoButton>
        <StyledComp complex whiteColor>
          <h1>h</h1>
        </StyledComp>
        <h1>{searchTerm}</h1>
        <Button bsStyle="primary">test</Button>
        <Btn >sdjsk</Btn>
      </Paper>
    );
  }
}



const mapStateToProps = state => ({
  searchTerm: state.rootReducer.searchTerm,
  status:state.rootReducer.status
});
const mapDispatchToProps = dispatch => ({
  handleSearch(e){
    dispatch(setSearch(e.target.value));
  },
  handleC(){
    dispatch(setSearch('salam',true));
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(AddList);
