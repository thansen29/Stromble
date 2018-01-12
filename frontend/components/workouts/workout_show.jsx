import React from 'react';
import Navbar from '../navbar';
import moment from 'moment';
import WorkoutEditContainer from './workout_edit_container';
import ModalComponent from '../modals/modal_component';
//TODO: private needs to be checked if its private, dropdowns not initially loaded either
//TODO: tool tips for buttons
class WorkoutShow extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount(){
    this.props.requestWorkout(this.props.match.params.id);
  }

  handleDelete(){
    this.props.history.push("/dashboard");
    this.props.deleteWorkout(this.props.workout.id);
  }

  handleEdit(e){
    e.preventDefault();
    this.props.openModal();
  }

  render(){
    if(this.props.workout){
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

            <button onClick={this.handleEdit} className="show-edit tooltip">
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>

            <button onClick={this.handleDelete} className="show-delete">
              <i className="fa fa-ban" aria-hidden="true"></i>
            </button>

            {this.props.isOpen ?
              <ModalComponent closeModal={this.props.closeModal}>
                <WorkoutEditContainer
                   title={this.props.workout.title}
                   description={this.props.workout.description}
                   activityType={this.props.workout.activity_type}
                   sport={this.props.workout.sport}
                   id={this.props.workout.id}
                   private={this.props.workout.private}/>
              </ModalComponent> : null
            }

            <section className="show-container">

              <header className="show-header">
                <span className="show-name">{this.props.currentUser.fname} {this.props.currentUser.lname} -- </span>
                {this.props.workout.activity_type}
                <div className={this.props.workout.private ? "fa fa-lock show-locked" : "show-unlocked"}></div>
              </header>

              <section className="show-body">
                <div className="show-avatar"></div>
                <section className="show-leftside">
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


    } else {
      return (
        <div></div>
      );
    }



  }
}

export default WorkoutShow;
