import React from 'react';
import { Link } from 'react-router-dom';
import { isFollowing } from '../../reducers/selectors';

class LikeItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFollowing: null,
      hovered: false
    };

    // this.toggleHover = this.toggleHover.bind(this);
  }

  componentDidMount(){
    // this.setState({
    //   isFollowing: isFollowing(this.props.currentUser.following_ids, this.props.user.follower_ids)
    // });
  }

  componentWillUnmount(){
    this.props.closeState();
  }

  render(){
    const { user, title } = this.props;

    return (
      <section className="like-item-container">
        <div className="like-item-left">
          <img className="nav-avatar" src={ user.avatarUrl } />
          <span className="like-item-name">
            <Link to={`/users/${user.id}`}>
              { user.fname } { user.lname}
            </Link>
          </span>
        </div>
      </section>
    );
  }
}

export default LikeItem;
