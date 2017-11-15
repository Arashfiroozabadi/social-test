import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled,{ keyframes } from 'styled-components';
import { FormattedDate, FormattedTime } from 'react-intl';
import {
  withStyles,
  Button,
  Card,
  CardContent, 
  CardMedia,
  Typography,
  Divider
} from 'material-ui';
import {Favorite} from 'material-ui-icons';

import {getApiDataPost} from '../../store/actionCreators';
import '../../styles/img/test.svg';
import {store} from '../../store/store';

const styles = {
  card: {
    maxWidth: 345,
  },
  cardContent: {
    display:"flex",
    justifyContent: "space-between",
    padding:'2.5px'   
  },
  media: {
    height: 200,
  },
  description:{
    padding:'10px'
  },
  actions:{
    display:'flex',
    alignItems: "center",
    padding:'2px 10px'
  },
  cardFooter: {
    display:"flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding:'0px 10px'
  },
  autherAvatar:{
    display:"flex",
  },
  follow:{
    backgroundColor:"#ffc047"
  },
  container:{
    margin:'10px auto'
  }
};

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

function Home ({ classes, posts, getApiPost }){
  if(!posts){
    return (
      <Spinner onLoad={store.dispatch(getApiDataPost())} />
    );
  }
  return(
    <div>
      {posts.map( (posts, i) => (
        <div className={classes.container} key={i}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <div className={classes.autherAvatar}>
                <img src={posts.authorAvatar} alt="" style={{width:"40px",height:"40px"}} />
                <h4>{posts.authorPost}</h4>
              </div>
              <Button className={classes.follow}>{posts.follow ? 'unfollow' :'follow'}</Button>
            </CardContent>
            <Divider />
            <CardMedia
              className={classes.media}
              image={posts.image}
            />
            <Divider />        
            <CardContent className={classes.description}>
              <Typography type="headline" component="h2">
                {posts.description}
              </Typography>
            </CardContent>
            <Divider />
            <CardContent className={classes.actions}>
              <Favorite />
            </CardContent>
            <CardContent className={classes.cardFooter}>
              <div>
                <h5>{`Liks ${posts.liks.length}`}</h5>
                <FormattedTime
                  value={posts.date}
                />
              </div>
              <FormattedDate
                value={posts.date}
                year='numeric'
                month='long'
                day='2-digit'
              />
            </CardContent>
          </Card>
        </div>
    ) )}
    </div>
  );
}

const Homee = withStyles(styles)(Home);
const mapStateToProps = (state, ownProps) => ({
  posts:state.apiPosts.posts
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    getApiPost:() => {
      setTimeout( (() => {
      dispatch(getApiDataPost());
      }), 2000);      
    }
  });

export default connect(mapStateToProps,mapDispatchToProps)(Homee);
