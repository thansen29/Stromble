import React from 'react';
import { Link } from 'react-router-dom';
import DropdownComponent from '../dropdowns/dropdown_component';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const times = [
  '12:00 AM',
  '12:30 AM',
  '1:00 AM',
  '1:30 AM',
  '2:00 AM',
  '2:30 AM',
  '3:00 AM',
  '3:30 AM',
  '4:00 AM',
  '4:30 AM',
  '5:00 AM',
  '5:30 AM',
  '6:00 AM',
  '6:30 AM',
  '7:00 AM',
  '7:30 AM',
  '8:00 AM',
  '8:30 AM',
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
  '9:30 PM',
  '10:00 PM',
  '10:30 PM',
  '11:00 PM',
  '11:30 PM',
]

//TODO: date picker and time scroll
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
      private: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  moveCaret(e) {
    let temp = e.target.value;
    e.target.value = '';
    e.target.value = temp;
  }

  componentWillMount(){
    const momentDate = moment();
    const date = momentDate.format("MM/DD/YYYY");
    const time = momentDate.format("h:mm A");
    const regDate = new Date();
    const hours = regDate.getHours();
    let dayTime;
    if(hours > 5 && hours < 12){
      dayTime = "Morning ";
    } else if (hours >= 12 && hours < 18){
      dayTime = "Afternoon ";
    } else {
      dayTime = "Evening ";
    }
    this.setState({
      date: date,
      time: time,
      title: dayTime + this.state.sport
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const workout = Object.assign({}, this.state);
    workout['user_id'] = this.props.userId;
    delete workout['startDate'];
    this.props.createWorkout(workout).then((() => {
      this.props.history.push(`/workouts/${this.props.workoutId}`);
    }).bind(this));
  }

  handleValueChange(value){
    this.setState({ time: value });
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

  handleSelection(field){
    return e => {
      this.setState({ [field]: e });
    };
  }

  render(){
    const { distance_unit, elevation_unit, sport, activity_type } = this.state;
    return (
      <main className="form-container">
        <h1>Manual Entry</h1>
        <span className="route-error-message">{ this.props.errors.workout }</span>
        <form className="workout-form" onSubmit={ this.handleSubmit }>

          <section className="workout-row">
            <div className="field-container">
              <label htmlFor="distance">Distance</label><br/>

              <div className="input-wrapper" tabIndex="1">
                <input
                  className="right-line workout-input"
                  type="number"
                  value={ this.state.distance }
                  onChange={ this.handleChange('distance') } />

                <div className="distance-select">
                  <DropdownComponent
                    items={['kilometers', 'meters', 'miles', 'yards']}
                    onChange={ this.handleSelection('distance_unit') }
                    initValue={ distance_unit }
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
                  min="0"
                  max="24"
                  value={ this.state.duration_hr }
                  onChange={ this.handleChange('duration_hr') } />
                <input
                  className="workout-input right-line duration-box minutes"
                  type="number"
                  min="0"
                  max="59"
                  value={ this.state.duration_min }
                  onChange={ this.handleChange('duration_min') } />
                <input
                  className="workout-input duration-box seconds"
                  type="number"
                  min="0"
                  max="59"
                  value={ this.state.duration_s }
                  onChange={ this.handleChange('duration_s') } />
              </div>
            </div>

            <div className="field-container">
              <label htmlFor="elevation">Elevation</label><br/>
              <div className="input-wrapper">
                <input
                  className="workout-input right-line"
                  type="number"
                  value={ this.state.elevation }
                  onChange={ this.handleChange('elevation') } />

                <div className="distance-select">
                  <DropdownComponent
                    items={['feet', 'meters']}
                    onChange={ this.handleSelection('elevation_unit') }
                    initValue={ elevation_unit }
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
                    onChange={ this.handleSelection('sport') }
                    initValue={ sport }
                    />
                </div>
              </div>

              <div className="field-container date-container">
                <label htmlFor="date-time">Date &amp; Time</label><br/>
                <div className="input-wrapper">
                  <input
                    className="workout-input right-line datetime"
                    type="text"
                    value={ this.state.date }
                    onChange={ this.handleChange('date') } />

                  <div className="datetime input-wrapper">
                    <DropdownComponent
                      items={ times }
                      onChange={ this.handleSelection('time') }
                      initValue={ this.state.time }
                      time={ 'time' }
                      />
                  </div>

                </div>
              </div>
            </section>

            <div className="field-container title-input">
              <label htmlFor="title">Title</label><br/>
              <div className="input-wrapper">
                <input
                  autoFocus
                  onFocus={ this.moveCaret }
                  className={ this.props.errors.workout ? "title-input left-align workout-errors"
                    : "workout-input title-input left-align" }
                  type="text"
                  value={ this.state.title }
                  onChange={ this.handleChange('title') } />
              </div>
            </div>
          </section>

          <section className="workout-row bottom-row">
            <section className="bottom-container">
              <div className="field-container">
                <label htmlFor="activity-type">{ this.state.sport } type</label><br/>
                <div className="input-wrapper activity-input">
                  <DropdownComponent
                    items={['Race', 'Workout']}
                    onChange={ this.handleSelection('activity_type') }
                    initValue={ activity_type }
                    />
                </div>
              </div>
            </section>

            <div className="field-container">
              <label htmlFor="description">Description</label><br/>
              <div className="input-wrapper">
                <textarea
                  className="workout-input workout-description title-input"
                  value={ this.state.description }
                  onChange={ this.handleChange('description') }
                  placeholder="How did it go? Were you tired or rested? How was the weather?" />
              </div>
            </div>

            <label>
              <div className="privacy">
                <input onClick={ this.handleCheck } className="checkbox" type="checkbox" />
                <div className={ this.state.private ? "fa fa-lock locked" : "unlocked" }></div>
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
