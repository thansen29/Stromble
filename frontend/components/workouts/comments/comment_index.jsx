import React from 'react';
import CommentItem from './comment_item';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      open: false,
      commentField: false,
      body: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps){
    this.setState({ commentField: newProps.commentField });
  }

  componentDidMount(){
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(this.props.workout.id, this.state.body)
    .then(() => {
      this.setState({ body: "" });
    });
  }

  render(){
    let comments;
    let commentItems;
    if(this.props.workout.comments){
      comments = _.values(this.props.workout.comments);
      commentItems = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <CommentItem
              comment={comment}
              currentUser={this.props.currentUser} />
          </li>

        );
      });
    }

    return (
      <section>
        <div className="comment-section">
          <ul>
            { commentItems }
          </ul>
        </div>

        { comments ? comments.length > 2 ?
          <span className="see-all">
            See all { comments.length } comments
          </span> : null : null
        }

        { this.state.commentField ?
          <form className="comment-form" onSubmit={ this.handleSubmit }>
            <img
              className="item-sm-avatar"
              src={ this.props.currentUser.avatar_url } />

            <input
              className="comment-input"
              placeholder="Add a comment..."
              onChange={this.handleChange('body')}
              value={this.state.body} />

            <button
              onClick={this.handleSubmit}
              className="comment-button">
              Post
            </button>

          </form>
          : null
        }
      </section>
    );
  }

}

export default CommentIndex;
