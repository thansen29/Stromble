
import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
// import DistanceUnit from '../select_boxes/distance_unit';
import ElevationUnit from '../select_boxes/elevation_unit';
import Sport from '../select_boxes/sport';
import ActivityType from '../select_boxes/activity_type';
import DropdownComponent from '../dropdowns/dropdown_component';
import moment from 'moment';

//TODO: MAKE THE SELECT FIELDS UPDATE ON SELECT!!

class WorkoutForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      distance: "",
      distance_unit: "miles",
      duration_hr: '01',
      duration_min: '00',
      duration_s: '00',
      elevation: "",
      elevation_unit: "feet",
      sport: "Run",
      date: "",
      time: "",
      title: "Run",
      activity_type: "",
      descripton: "",
      private: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSelection = this.handleSelection.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);

  }
  //TODO: something aint right with the date getting sent to database
  componentDidMount(){
    const momentDate = moment();
    const date = momentDate.format("MM/DD/YYYY");
    const time = momentDate.format("h:mm A");
    this.setState({
      date: date,
      time: time
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const workout = Object.assign({}, this.state);
    workout['user_id'] = this.props.userId;
    this.props.createWorkout(workout).then((() => {
      this.props.history.push(`/workouts/${this.props.workoutId}`);
    }).bind(this));
  }

  handleChange(field){
    return e => {
      this.setState( { [field]: e.target.value } );
    };
  }

  handleCheck(){
    this.setState({
      private: !this.state.private
    });
  }

  handleDropdown(component){
    return e => {
      this.props.openDropdown(component);
    };
  }

  handleSelection(field){
    return e => {
      this.setState({ [field]: e });
      console.log(this);
    };
  }

  render(){
    const { distance_unit, elevation_unit, sport, activity_type } = this.state;

    return (
      <main className="form-container">
        <h1>Manual Entry</h1>
        <form className="workout-form" onSubmit={this.handleSubmit}>
          <section className="workout-row">
            <div className="field-container">
              <label htmlFor="distance">Distance</label><br/>
              <div className="input-wrapper" tabIndex="1">
                <input
                  className="right-line workout-input"
                  type="number"
                  value={this.state.distance}
                  onChange={this.handleChange('distance')} />
                <div className="distance-select">
                  <DropdownComponent
                    items={['kilometers', 'meters', 'miles', 'yards']}
                    onChange={this.handleSelection('distance_unit')}
                    initValue={distance_unit}
                    />
                </div>
              </div>
            </div>

            <div className="field-container">
              <label htmlFor="duration">Duration</label><br/>
              <div className="input-wrapper ">
                <input
                  className="workout-input right-line duration-box hours"
                  type="number"
                  value={this.state.duration_hr}
                  onChange={this.handleChange('duration_hr')} />
                <input
                  className="workout-input right-line duration-box minutes"
                  type="number"
                  value={this.state.duration_min}
                  onChange={this.handleChange('duration_min')} />
                <input
                  className="workout-input duration-box seconds"
                  type="number"
                  value={this.state.duration_s}
                  onChange={this.handleChange('duration_s')} />
              </div>
            </div>

            <div className="field-container">
              <label htmlFor="elevation">Elevation</label><br/>
              <div className="input-wrapper">
                <input
                  className="workout-input right-line"
                  type="number"
                  value={this.state.elevation}
                  onChange={this.handleChange('elevation')} />
                <div className="distance-select">
                  <DropdownComponent
                    items={['feet', 'meters']}
                    onChange={this.handleSelection('elevation_unit')}
                    initValue={elevation_unit}
                    />
                </div>
              </div>
            </div>
          </section>

          <section className="full-mid-row">
            <section className="mid-row">
              <div className="field-container">
                <label htmlFor="sport">Sport</label><br/>
                <div className="input-wrapper sporty-input">
                  <DropdownComponent
                    items={['Run', 'Ride']}
                    onChange={this.handleSelection('sport')}
                    initValue={sport}
                    />
                </div>
              </div>

              {/*TODO: time input leaves off last number sometimes*/}
              <div className="field-container date-container">
                <label htmlFor="date-time">Date &amp; Time</label><br/>
                <div className="input-wrapper">
                  <input
                    className="workout-input right-line datetime"
                    type="text"
                    value={this.state.date}
                    onChange={this.handleChange('date')} />
                  <input
                    className="workout-input datetime"
                    type="text"
                    value={this.state.time}
                    onChange={this.handleChange('time')} />
                </div>
              </div>
            </section>

            <div className="field-container title-input">
              <label htmlFor="title">Title</label><br/>
              <div className="input-wrapper">
                <input
                  className="workout-input title-input left-align"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange('title')} />
              </div>
            </div>
          </section>

          <section className="workout-row bottom-row">
            <section className="bottom-container">
              <div className="field-container">
                <label htmlFor="activity-type">{this.state.sport} type</label><br/>
                <div className="input-wrapper activity-input">
                  <DropdownComponent
                    items={['Race', 'Workout']}
                    onChange={this.handleSelection('activity_type')}
                    initValue={activity_type}
                    />
                </div>
              </div>
            </section>

            <div className="field-container">
              <label htmlFor="description">Description</label><br/>
              <div className="input-wrapper">
                <textarea
                  className="workout-input workout-description title-input"
                  value={this.state.description}
                  onChange={this.handleChange('description')}
                  placeholder="How did it go? Were you tired or rested? How was the weather?" />
              </div>
            </div>

            <label>
              <div className="privacy">
                <input onClick={this.handleCheck} className="checkbox" type="checkbox" />
                <div className={this.state.private ? "fa fa-lock locked" : "unlocked"}></div>
              </div>
            </label>
          </section>

          <div className="workout-submit">
            <button className="workout-create">Create</button>
            <Link to="/dashboard">Cancel</Link>
          </div>
        </form>
      </main>
    );
  }
}

export default WorkoutForm;
