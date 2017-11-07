import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled,{ keyframes } from 'styled-components';
import { FormattedDate } from 'react-intl';
import {
  Paper,
  withStyles,
  Button,
  Card,
  CardActions, 
  CardContent, 
  CardMedia,
  Typography,
  IconButton,
  Divider
} from 'material-ui';
import {Favorite} from 'material-ui-icons';

import Intel from './userProfile';
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

function Home ({classes,posts,getApiPost}){
  if(posts === undefined){
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
                <img src={posts.avatar} alt="" style={{width:"40px",height:"40px"}} />
                <h4>{posts.authorPost}</h4>
              </div>
              <Button className={classes.follow}>{posts.follow ? 'unfollow' :'follow'}</Button>
            </CardContent>
            <Divider />
            <CardMedia
              className={classes.media}
              image={posts.imgPost}
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
                <h5>{`Liks ${posts.likes.length}`}</h5>
              </div>
              <FormattedDate
                value={posts.dataCreate}
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

// class Home extends React.Component{
//   static propTypes = {
//     classes: PropTypes.object,
//     authorPost:PropTypes.string,
//     avatar:PropTypes.string,
//     imgPost:PropTypes.string,
//     description:PropTypes.string,
//     dataCreate:PropTypes.string,
//     likes:PropTypes.array,
//     views:PropTypes.array,
//     follow:PropTypes.bool,
//     unfollow:PropTypes.bool
//   }
//   componentDidMount(){
//     setTimeout( (() => {
//       store.dispatch(getApiDataPost());
//       }), 2000);      
//   }
//   render(){
//     const { 
//       classes,
//       posts, 
//       getApiPost
//     } = this.props;
//     console.log(posts);
//     if(posts === undefined){
//       return <h1 onLoadStart={getApiPost} onClick={getApiPost}>loading...</h1>;
//     }
//     return (
//       <div>
//         <button onClick={getApiPost}>test</button>
//         <Intel />
//         {posts.map( (posts, i) => (
//           <div className={classes.container} key={i}>
//             <Card className={classes.card}>
//               <CardContent className={classes.cardContent}>
//                 <div className={classes.autherAvatar}>
//                   <img src={posts.avatar} alt="" style={{width:"40px",height:"40px"}} />
//                   <h4>{posts.authorPost}</h4>
//                 </div>
//                 <Button className={classes.follow}>{posts.follow ? 'unfollow' :'follow'}</Button>
//               </CardContent>
//               <Divider />
//               <CardMedia
//                 className={classes.media}
//                 image={posts.imgPost}
//               />
//               <Divider />        
//               <CardContent className={classes.description}>
//                 <Typography type="headline" component="h2">
//                   {posts.description}
//                 </Typography>
//               </CardContent>
//               <Divider />
//               <CardContent className={classes.actions}>
//                 <Favorite />
//               </CardContent>
//               <CardContent className={classes.cardFooter}>
//                 <div>
//                   <h5>{`Liks ${posts.likes.length}`}</h5>
//                 </div>
//                 <FormattedDate
//                   value={posts.dataCreate}
//                   year='numeric'
//                   month='long'
//                   day='2-digit'
//                 />
//               </CardContent>
//             </Card>
//           </div>
//         ) )}
//       </div>
//     );
//   }
// }
const Homee = withStyles(styles)(Home);
const mapStateToProps = (state, ownProps) => ({
  posts:state.apiPosts.posts
  // avatar:state.rootReducer,
  // imgPost:state.rootReducer ,
  // description:state.rootReducer,
  // dataCreate:state.rootReducer,
  // likes:state.rootReducer,
  // views:state.rootReducer,
  // follow:state.rootReducer,
  // unfollow:state.rootReducer
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    getApiPost:() => {
      setTimeout( (() => {
      dispatch(getApiDataPost());
      console.log(ownProps);
      }), 2000);      
    }
  });

export default connect(mapStateToProps,mapDispatchToProps)(Homee);
