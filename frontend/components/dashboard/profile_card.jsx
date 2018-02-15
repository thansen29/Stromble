import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ProfileCard = ({ totalRides, totalRuns, currentUser, workouts }) => {
  let numActivities = 0;
  if(totalRides >= 0 && totalRuns >= 0){
    numActivities = totalRuns + totalRides;
  }

  let numFollowers = 0;
  let numFollowing = 0;

  if(currentUser && currentUser.followers.length){
    numFollowers = currentUser.followers.length;
  }
  if(currentUser && currentUser.following.length){
    numFollowing = currentUser.following.length;
  }

  let recent;
  let date;
  if(workouts.length){
    recent = workouts[0];
    let momentDate = moment(recent.date);
    date = momentDate.format("MMMM D, YYYY");
  }

  return (
    <section className="profile-card">
      <img className="profile-card-avatar" src={currentUser.avatar_url} />
      <span className="card-name">
        <Link to={`/users/${currentUser.id}`}>
          {currentUser.fname} {currentUser.lname}
        </Link>
      </span>

      <div className="card-following">
        <div className="following-titles">
          <div className='follow-title'>Following</div>
          <div className='follow-title'>Followers</div>
          <div className='follow-title'>Activities</div>
        </div>

        <div className="following-stats">
          <Link to={`/users/${currentUser.id}`}>
            <div>{ numFollowing }</div>
          </Link>
          <Link to={`/users/${currentUser.id}`}>
            <div>{ numFollowers }</div>
          </Link>
          <Link to='/workouts'>
            <div>{numActivities}</div>
          </Link>
        </div>
      </div>

      <div className="latest">
        <div>Latest Activity</div>
        { recent ?
          <Link to={`/workouts/${recent.id}`}>
            <span className="bold">{recent.title}</span> • {date}
          </Link>
          : null
        }
      </div>

      <div className="log">
        <Link to='/workouts'>
          <label>
            <span>Your Training Log</span>
            <i className="fa fa-angle-right"></i>
          </label>
        </Link>
      </div>

    </section>
  );
};

export default ProfileCard;
