import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const WorkoutItemContent = ({workout}) => {
  const { key, activity_type, description, distance, distance_unit,
    duration_hr, duration_min, duration_s, elevation, elevation_unit,
    sport, date, time, title, id, fname, lname, avatar_url, user_id,
  } = workout;

  const pace = ((duration_hr * 60) + duration_min) / distance;
  let momentTime = moment(time);
  let momentDate = moment(date);
  momentDate = momentDate.parseZone();
  momentTime = momentTime.parseZone();
  const day = momentDate.format("dddd");
  const parsedDate = momentDate.format("MMMM Do YYYY");
  const parsedTime = momentTime.format("h:mm A");

  return (
    <section>
      <div className="item-top-row">

        <Link to={`/users/${user_id}`}>
          <img className="nav-avatar" src={ avatar_url } />
        </Link>

        <div className="item-name-date">
          <Link to={`/users/${user_id}`}>{ fname } { lname }</Link> <br/>

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
              { workout.private ?
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
            { duration_hr }h { duration_min }m
          </span>

          { distance ?
            <span className="item-stat-value">{ distance }{ distance_unit }</span> : null
          }

          { distance ?
            <span className="item-stat-value">{ pace } min/{ distance_unit }</span> : null
          }

        </div>
      </div>
    </section>
  );
};

export default WorkoutItemContent;
