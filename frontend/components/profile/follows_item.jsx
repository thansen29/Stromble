import React from 'react';
import { Link } from 'react-router-dom';
import { checkFollowing } from '../../reducers/selectors';


class FollowsItem extends React.Component {
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
    this.setState({
      isFollowing: checkFollowing(this.props.user.followers, this.props.currentUserId),
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
    this.props.toggleFollow(this.props.user.id).then(() => {
      this.props.search(this.props.searchType, this.props.name).then(() => {
        this.setState({
          isFollowing: checkFollowing(this.props.user.followers, this.props.currentUserId)
        });
      });
    });
  }

  toggleHover(){
    this.setState({
      hovered: !this.state.hovered
    });
  }

  //something is wrong with the flow of rendering each item - refactor
  //to have its own container then figure out
  render(){
    return (
      <main className="profile-follow-item">

        <div>
          <img className="profile-follow-avatar"src={this.props.user.avatarUrl} />
        </div>

        <div className="follow-wrapper">
          <div className="search-row">
            <Link to={`/users/${this.props.user.id}`}>
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
