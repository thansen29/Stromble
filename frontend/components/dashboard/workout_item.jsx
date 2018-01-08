import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class WorkoutItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { key, activity_type, description, distance, distance_unit, duration_hr, duration_min, duration_s, elevation, elevation_unit, sport, time, title, id} = this.props.workout;
    let pace = distance / (duration_hr + (duration_min/60));
    //TODO: fix average pace?
    pace = pace.toString().substring(0,4);

    let momentDate = moment(time);
    momentDate = momentDate.parseZone();
    const parsedDate = momentDate.format("MMMM D, YYYY");
    const parsedTime = momentDate.format("h:mm A");

    return (
      <section className="workout-item-container">
        <li key={key} className="workout-item">
          <div className="item-top-row">
            <span className="item-avatar"></span>
            <div className="item-body">
              Fname Lname <br/>
            <span className="show-datetime">{ parsedDate } at { parsedTime }</span>
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

              { elevation ?
                <span className="show-datetime item-stat-el">Elevation Gain</span> : null
              }
              <br/>

              <span className="item-stat-value">
                {duration_hr}h {duration_min}m
              </span>

              { distance ?
                <span className="item-stat-value">{distance}{distance_unit}</span> : null
              }

              { distance ?
                <span className="item-stat-value">{pace}:{duration_min}:{duration_s}/{distance_unit}</span> : null
              }

              { elevation ?
                <span className="item-stat-value">
                  {elevation}{elevation_unit}
                </span> : null
              }

            </div>
          </div>
        </li>
      </section>
    );
  }
}

export default WorkoutItem;
