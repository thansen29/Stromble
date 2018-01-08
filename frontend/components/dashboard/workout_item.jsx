import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class WorkoutItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let momentDate = moment(this.props.workout.time);
    momentDate = momentDate.parseZone();
    const date = momentDate.format("MMMM D, YYYY");
    const time = momentDate.format("h:mm A");

    return (
      <section className="workout-item-container">
        <li className="workout-item">
          <div className="item-top-row">
            <span className="item-avatar"></span>
            <div className="item-body">
              Fname Lname <br/>
              <span className="show-datetime">{ date } at { time }</span>
            </div>
          </div>

          <div className="item-mid-row">
            {this.props.workout.sport === "Run" ?
              <span className="shoe"></span> : <span className="bike"></span>
            }
            <div className="item-body">
              <Link to={`/workouts/${this.props.workout.id}`}>
                <h1 className="item-body-title">{ this.props.workout.title }</h1>
              </Link>
            </div>
          </div>

          <div className="item-bottom-row">

          </div>
        </li>
      </section>
    );
  }
}

export default WorkoutItem;
