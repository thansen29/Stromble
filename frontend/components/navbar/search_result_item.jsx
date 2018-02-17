import React from 'react';
import { Link } from 'react-router-dom';
import { isFollowing } from '../../reducers/selectors';

class SearchResultItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFollowing: null,
      totalRuns: null,
      totalRides: null,
      hovered: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  componentDidMount(){
    // this.props.requestTotalRuns(this.props.user.id);
    // this.props.requestTotalRides(this.props.user.id);
    // debugger
    this.setState({
      isFollowing: isFollowing(this.props.currentUser.following_ids, this.props.user.follower_ids)
    });
  }

  // componentWillReceiveProps(newProps){
  //   this.setState({
  //     totalRuns: newProps.stats.totalRuns,
  //     totalRides: newProps.stats.totalRides
  //   });
  //   // newProps.requestTotalRuns(newProps.user.id);
  //   // newProps.requestTotalRides(newProps.user.id);
  // }

  handleSubmit(e){
    e.preventDefault();
    if(e.target.classList.value === "search-result-follow"){
      this.props.followUser(this.props.user.id).then(() => {
        this.setState({
          isFollowing: isFollowing(this.props.currentFollows, this.props.otherFollows)
        });
      });
    } else {
      this.props.unfollowUser(this.props.user.id).then(() => {
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
      <main className="search-result-item">

        <div>
          <img className="route-avatar"src={this.props.user.avatarUrl} />
        </div>

        <div className="search-result-wrapper">
          <div className="search-row">
            <Link to={`/users/${this.props.user.id}`}>
              {this.props.user.fname} {this.props.user.lname}
            </Link>

          </div>
          { this.props.currentUserId !== this.props.user.id ?
            <button
              onClick={this.handleSubmit}
              className={this.state.isFollowing ? "search-result-following" : "search-result-follow"}
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

export default SearchResultItem;
