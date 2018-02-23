import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class CommentItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { hovered: false, ownComment: false };
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount(){
    if(this.props.currentUser.id === this.props.comment.userId){
      this.setState({ ownComment: true });
    }
  }

  handleHover(){
    this.setState({ hovered: !this.state.hovered });
  }

  render(){
    const fromNow = moment(this.props.comment.createdAt).fromNow();

    return (
      <section
        className="comment-item-wrapper"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handelHover}>

        <Link to={`/users/${this.props.comment.userId}`}>
          <img className="item-sm-avatar" src={ this.props.comment.avatarUrl } />
        </Link>

        <div className="comment-item-text">

          <span className="comment-text">
            <Link to={`/users/${this.props.comment.userId}`}>
                { this.props.comment.fname } { this.props.comment.lname}
            </Link>
          </span>

          <span className="comment-text">
            { this.props.comment.body }
          </span>

        </div>

        <span className="comment-right">
          <span
            className="delete-comment"
            onClick={this.handleDelete}>&times;
          </span>

          <span className="time-ago">{ fromNow }</span>


        </span>
      </section>
    );
  }
}

export default CommentItem;
