import React from 'react';
import Navbar from '../navbar';
import moment from 'moment';

//TODO: make it so the positioning on the inside isnt absolute and pixels
//TODO:VERY IMPORTANT MAKE IT GET THE INFO ON PAGE LOAD
class WorkoutShow extends React.Component {
  constructor(props){
    super(props);

    this.state;
    this.handleDelete = this.handleDelete.bind(this);
  }
  //TODO: get the workout in this components state so it doesnt break on refresh
  // componentWillMount(){
  //   // const workout = this.props.requestWorkout(this.props.match.params.id);
  //   const workout = this.props.workout;
  //   debugger
  // }

  //TODO: make this go to the index page
  handleDelete(){
    this.props.history.push("/dashboard");
    this.props.deleteWorkout(this.props.workout.id);
  }

  render(){
    //TODO: put actual first name and last name on
    let momentDate = moment(this.props.workout.time);
    momentDate = momentDate.parseZone();
    const date = momentDate.format("MMMM D, YYYY");
    const time = momentDate.format("h:mm A");
    let durationHr = this.props.workout.duration_hr;
    let durationMin = this.props.workout.duration_min;
    let durationS = this.props.workout.duration_s;

    if(durationHr.toString().length < 2){
      durationHr = `0${durationHr}`;
    }
    if(durationMin.toString().length < 2){
      durationMin = `0${durationMin}`;
    }
    if(durationS.toString().length < 2){
      durationS = `0${durationS}`;
    }

    return (
      <section className="background">
        <Navbar />
        <section className="whole-container">
          <button onClick={this.handleDelete} className="show-delete">
            <i className="fa fa-ban" aria-hidden="true"></i>
          </button>

          <section className="show-container">

            <header className="show-header">
              <span className="show-name">Fname Lnameisabitlonger -- </span>
              {this.props.workout.activity_type}
              <div className={this.props.workout.private ? "fa fa-lock show-locked" : "show-unlocked"}></div>
            </header>

            <section className="show-body">
              <section className="show-leftside">
                <div className="show-avatar"></div>
                <section className="show-leftbody">
                  <div className="show-datetime">{time} on {date}</div>
                  <div className="show-title">{this.props.workout.title}</div>
                  <div className="show-description">{this.props.workout.description}</div>
                </section>
              </section>

              <section className="show-rightside">
                <section className="show-stats">
                  <div className="show-statistic">
                    {this.props.workout.distance}
                    {this.props.workout.distance ? this.props.workout.distance_unit.substring(0,2) : null} <br/>
                  {this.props.workout.distance ?
                          <span className="stat-text">Distance</span> : null }
                  </div>
                  <div className="show-statistic">
                    {durationHr}:{durationMin}:{durationS} <br/>
                    <span className="stat-text">Duration</span>
                  </div>
                  <div className="show-statistic">
                    {this.props.workout.elevation} {this.props.workout.elevation ? this.props.workout.elevation_unit : null}<br/>
                  {this.props.workout.elevation ?
                      <span className="stat-text">Elevation</span> : null }
                  </div>
                </section>

              </section>
            </section>
          </section>
        </section>
      </section>
    );

  }
}

export default WorkoutShow;
