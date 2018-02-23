import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';
import ModalComponent from '../modals/modal_component';
import LikeComponent from './like_component';
import CommentItem from './comment_item';

class WorkoutItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      liked: false,
      anyLikes: false,
      open: false
    };

    this.handleLike = this.handleLike.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeState = this.closeState.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){
    if(this.props.workout.liker_ids.includes(this.props.currentUser.id)){
      this.setState({ liked: true });
    }
    if(this.props.workout.liker_ids.length){
      this.setState({ anyLikes: true });
    }
  }

  handleLike(){
    if(this.props.workout.user_id === this.props.currentUser.id){
      this.openModal();
      return;
    }

    this.props.likeWorkout(this.props.workout.id).then(() => {
      this.setState({ liked: true, anyLikes: true });
    });
  }

  openModal(){
    this.setState({ open: true });
    this.props.openModal();
  }

  closeState(){
    this.setState({ open: false });

  }

  render(){
    const { key, activity_type, description, distance, distance_unit,
      duration_hr, duration_min, duration_s, elevation, elevation_unit,
      sport, date, time, title, id, fname, lname, avatar_url, user_id,
    } = this.props.workout;

    const pace = ((duration_hr * 60) + duration_min) / distance;
    let momentTime = moment(time);
    let momentDate = moment(date);
    momentDate = momentDate.parseZone();
    momentTime = momentTime.parseZone();
    const day = momentDate.format("dddd");
    const parsedDate = momentDate.format("MMMM Do YYYY");
    const parsedTime = momentTime.format("h:mm A");

    let likers;
    let likeText =
        <span
          className="like-text"
          onClick={ this.handleLike }>
          Be the first to give kudos!
        </span>;

    if(this.props.workout.likers){
      const likerArr = _.values(this.props.workout.likers);
      likers = likerArr.map((user) => {
        return (
          <span
            className="likers"
            key={ user.id }>
            <Link to={`/users/${user.id}`}>
              <img className="item-sm-avatar" src={ user.avatarUrl } />
            </Link>
          </span>
        );
      });
    }

    let comments;
    let commentItems;
    if(this.props.workout.comments){
      comments = _.values(this.props.workout.comments);
      commentItems = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <CommentItem comment={comment} />
          </li>

        );
      });
    }

    return (
      <section className="workout-item-container">
        <li key={key} className="workout-item">
          <div className="item-top-row">

            <Link to={`/users/${user_id}`}>
              <img className="nav-avatar" src={avatar_url} />
            </Link>

            <div className="item-name-date">
              <Link to={`/users/${user_id}`}>{fname} {lname}</Link> <br/>

            <span className="show-datetime">
              { parsedDate } at { parsedTime }
            </span>

            </div>
          </div>

          <div className="item-mid-row">
            { sport === "Run" ?
              <span className="shoe"></span> : <span className="bike"></span>
            }
            <div className="item-body">
              <Link to={`/workouts/${id}`}>
                <span className="item-body-title">
                  { title }
                  { this.props.workout.private ?
                    <i className="fa-item fa-lock"></i> : null
                  }
                </span>
              </Link>
            </div>
          </div>

          <div className="item-bottom-row">
            <div className="item-body">
              <span className="show-datetime item-stat">Moving Time</span>
              { distance ?
                <span className="show-datetime item-stat item-stat-el">Distance</span> : null
              }

              { distance ?
                <span className="show-datetime item-stat item-stat-el">Average Pace</span> : null

              }
              <br/>

              <span className="item-stat-value">
                {duration_hr}h {duration_min}m
              </span>

              { distance ?
                <span className="item-stat-value">{distance}{distance_unit}</span> : null
              }

              { distance ?
                <span className="item-stat-value">{pace} min/{distance_unit}</span> : null
              }

            </div>
          </div>

          <div className="item-socials">
            { this.state.anyLikes ||
              this.props.workout.user_id === this.props.currentUser.id
              ? null : likeText
            }

            <div className="social-likers-wrapper">
              <span className="item-social-likers">
                 { likers }
              </span>

              <span className="num-kudos" onClick={this.openModal}>
                { likers ? `${likers.length} kudos` : null }
              </span>

              <span className="num-kudos">
                { comments ? `${comments.length} comments` : null }
              </span>

            </div>

            <span className="item-social-buttons">
              <button
                className="like-button"
                onClick={
                  this.state.liked ?
                  this.openModal :
                  this.handleLike }>
                <i
                  className={ this.state.liked
                    ? "fa fa-thumbs-o-up orange"
                    : "fa fa-thumbs-o-up"
                   }
                  aria-hidden="true">
                </i>
              </button>

              { /*<button
                onClick={this.handleComment}>
                <i className="chat-icon" disabled></i>
              </button> */}
            </span>

          </div>

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
        </li>

        { this.props.isOpen && this.state.open ?
          <ModalComponent closeModal={this.props.closeModal}>
            <LikeComponent
              users={this.props.workout.likers}
              title={this.props.workout.title}
              closeState={this.closeState} />
          </ModalComponent> : null
        }

      </section>
    );
  }
}

export default WorkoutItem;
