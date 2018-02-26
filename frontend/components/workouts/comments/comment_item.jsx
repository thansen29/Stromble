import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class CommentItem extends React.Component {
  constructor(props){
    super(props);
    this.state = { hovered: false, ownComment: false };
    this.handleHover = this.handleHover.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    if(this.props.currentUser.id === this.props.comment.userId){
      this.setState({ ownComment: true });
    }
  }

  handleHover(){
    this.setState({ hovered: !this.state.hovered });
  }

  componentWillReceiveProps(newProps){
    // if(newProps.comment.id === this.props.comment.id){
      this.setState({ hovered: false });
    // }
  }

  handleDelete(){
    this.props.deleteComment(this.props.comment.id);
  }
  //TODO: fix hover fading
  render(){
    const fromNow = moment(this.props.comment.createdAt).fromNow();

    return (
      <section
        className="comment-item-wrapper"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}>

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
          { !this.state.ownComment ?
            <span className="static-time-ago">{ fromNow }</span>
            :
              this.state.hovered ?
                <span
                  onClick={this.handleDelete}
                  className="delete-comment">&times;</span>
              :
                <span className="time-ago">{ fromNow }</span>
          }
        </span>


      </section>
    );
  }
}

export default CommentItem;
