import React from 'react';
import { Link } from 'react-router-dom';
import { isFollowing } from '../../reducers/selectors';

class FollowsItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFollowing: null,
      hovered: false,
      page: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.fetchNewUser = this.fetchNewUser.bind(this);
  }

  componentDidMount(){
    this.setState({
      isFollowing: isFollowing(this.props.currentUser.following_ids, this.props.user.followerIds)
    });
  }

  fetchNewUser(){

    this.props.fetchUser(this.props.user.id);
    this.props.fetchUserFollowers(this.props.user.id);
    this.props.fetchUserFollowing(this.props.user.id);
    this.props.requestWorkouts(this.state.page, this.props.user.id);

  }

  handleSubmit(e){
    e.preventDefault();
    if(e.target.classList.value === "following-btn"){
      this.props.unfollowUser(this.props.user.id).then(() => {
        this.setState({
          isFollowing: isFollowing(this.props.currentFollows, this.props.otherFollows)
        });
      });
    } else {
      this.props.followUser(this.props.user.id).then(() => {
        this.setState({
          isFollowing: isFollowing(this.props.currentFollows, this.props.otherFollows)
        });
      });
    }
  }

  toggleHover(){
    this.setState({
      hovered: !this.state.hovered
    });
  }

  render(){
    return (
      <main className="profile-follow-item">

        <div>
          <img className="profile-follow-avatar"src={this.props.user.avatarUrl} />
        </div>

        <div className="follow-wrapper">
          <div className="search-row">
            <Link to={`/users/${this.props.user.id}`}
               onClick={this.fetchNewUser}>
              {this.props.user.fname} {this.props.user.lname}
            </Link>

          </div>
          { this.props.currentUser.id.toString() !== this.props.user.id ?
            <button
              onClick={this.handleSubmit}
              className={this.state.isFollowing ? "following-btn" : "follow-btn"}
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}>
              { this.state.isFollowing ? this.state.hovered ? "Unfollow" : "Following" : 'Follow' }

            </button>
          : null }

        </div>
      </main>
    );
  }

}

export default FollowsItem;
