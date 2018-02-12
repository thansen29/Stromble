import React from 'react';
import { Link } from 'react-router-dom';
import { checkFollowing } from '../../reducers/selectors';

//TODO: follow list doesnt update properly on click follow
class FollowsItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFollowing: null,
      hovered: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
    this.fetchNewUser = this.fetchNewUser.bind(this);
  }

  componentDidMount(){
    this.setState({
      isFollowing: checkFollowing(this.props.user.followers, this.props.currentUserId),
    });
  }

  fetchNewUser(){
    this.props.fetchUser(this.props.user.id);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.toggleFollow(this.props.user.id).then(() => {
      this.setState({
        isFollowing: checkFollowing(this.props.user.followers, this.props.currentUserId)
      });
    });
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
          { this.props.currentUserId !== this.props.user.id ?
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
