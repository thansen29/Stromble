import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class CommentSpecsItem extends React.Component {
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
        className="comment-spec-item-wrapper"
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}>

        <Link to={`/users/${this.props.comment.userId}`}>
          <img className="item-sm-avatar" src={ this.props.comment.avatarUrl } />
        </Link>

        <div className="comment-spec-item-text">

          <span className="comment-spec-text">
            <Link to={`/users/${this.props.comment.userId}`}>
                { this.props.comment.fname } { this.props.comment.lname}
            </Link>

            <div className="from-now">{ fromNow }</div>
          </span>

          <span className="comment-text">
            { this.props.comment.body }
          </span>

        </div>

        <span
          className={this.state.ownComment ? "comment-right-hov" : "comment-right" }>
          { this.state.ownComment && this.state.hovered ?
              <span
                className="delete-comment"
                onClick={this.handleDelete}>&times;
              </span> : null
          }

        </span>
      </section>
    );
  }
}

export default CommentSpecsItem;
