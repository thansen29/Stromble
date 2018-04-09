import React from 'react';
import { Link } from 'react-router-dom';

class LikeItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFollowing: null,
      ready: false,
      own: null
    };

    this.followUser = this.followUser.bind(this);
  }

  componentDidMount(){
    this.props.fetchUserFollowers(this.props.user.id).then(() => {
      this.setState({
        isFollowing: this.isFollowing(this.props.currentUser.id, this.props.followers),
        ready: true
      });
    });
  }

  isFollowing(id, array2){
    return array2.includes(id.toString());
  }

  followUser(){
    this.props.followUser(this.props.user.id).then(() => {
      this.setState({ isFollowing: true });
    });
  }

  render(){
    const { user, title } = this.props;
    return (
      <section className="like-item-container">

        <div className="like-item-left">
          <Link to={`/users/${user.id}`}>
            <img className="nav-avatar" src={ user.avatarUrl } />
          </Link>

          <span className="like-item-name">
            <Link to={`/users/${user.id}`}>
              { user.fname } { user.lname}
            </Link>
          </span>
        </div>

        { !this.state.ready ? null :
           this.state.isFollowing ? null :
            <button className="follow-btn" onClick={ this.followUser }>
              Follow
            </button>
        }

      </section>
    );
  }
}

export default LikeItem;
