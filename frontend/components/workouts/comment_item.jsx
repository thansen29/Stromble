import React from 'react';
import { Link } from 'react-router-dom';

class CommentItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className="comment-item-wrapper">
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

      </section>
    );
  }
}

export default CommentItem;
