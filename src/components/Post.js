import React, { Component } from "react";
import {connect} from 'react-redux';

class Post extends Component {

  handleDeleteClick=()=>{
    this.props.deletePost(this.props.post.id)
  }

  render() {
    const post = this.props.post ? (
      <div>
        <div className="post">
          <h4>{this.props.post.title}</h4>
          <p>{this.props.post.body}</p>
          <div className="center">
              <button className="btn btn-primary" onClick={this.handleDeleteClick}>Delete Post</button>
          </div>
        </div>
      
      </div>
    ) : (
      <div>Post Not Found !! </div>
    );
    return <div className="container">{post}</div>;
  }
}


const mapStateToProps=(state,ownProps)=>
{
 let id =ownProps.match.params.post_id;
 
 return {
    post:state.post.find(post=>post.id===id)
 }
}


const mapDispatchToProps=(dispatch)=>
{

 return {
    deletePost:(id)=>dispatch({type:'DELETE_POST',id:id})
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);
