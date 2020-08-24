import React, { Component } from "react";
import { Link } from "react-router-dom";
import ball from "../logo.jpeg";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { posts } = this.props;

    const postList = posts.length ? (
      posts.map((card) => {
        return (
          <div className="post card" key={card.id}>
            <div className="image-style">
              <img src={ball} alt="" />
            </div>
            <div className="card-content">
              <Link to={"/" + card.id}>
                <span className="card-title">{card.title}</span>
              </Link>
              <p>{card.body}</p>
            </div>
            {/* <div className="card-action">
              <a href="/">This is a link</a>
              <a href="/">This is a link</a>
            </div> */}
          </div>
        );
      })
    ) : (
      <div className="center">No Posts to show</div>
    );

    return (
      <div className="home container">
        <h3 className="center">Posts</h3>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post,
  };
};
export default connect(mapStateToProps)(Home);
