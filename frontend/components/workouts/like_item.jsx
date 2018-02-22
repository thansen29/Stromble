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

  render(){
    return (
      <div></div>
    );
  }
}

export default LikeItem;
