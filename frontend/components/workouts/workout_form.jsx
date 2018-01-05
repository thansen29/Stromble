import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DropdownComponent from '../dropdowns/dropdown_component';

class WorkoutForm extends React.Component {
  constructor(props){
    super(props);
    //careful of the state currently string and coming in as something else
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
    this.handleSelect = this.handleSelect.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

  }

  componentDidMount(){
    const realDate = new Date();
    const date = realDate.toLocaleDateString();
    let time = this.getTime();
    this.setState({
      date: date,
      time: time
    });
  }

  getTime(){
    const date = new Date();
    const time = date.toLocaleTimeString();
    let first = time.substring(0, 4);
    let second = time.slice(-2);
    const fullTime = `${first} ${second}`;
    return fullTime;
  }

  // TODO: change to go to the show page, remove history from containers
  handleSubmit(e){
    e.preventDefault();
    const workout = Object.assign({}, this.state);
    workout['user_id'] = this.props.userId;
    this.props.createWorkout(workout).then((newWorkout) => {
      this.props.history.push("/dashboard"); //change this to show
    });
  }

  handleChange(field){
    return e => {
      this.setState( { [field]: e.target.value } );
    };

  }

  handleSelect(field){
    return e => {
      this.setState({ [field]: e.value });
    };
  }

  handleCheck(){
    this.setState({
      private: !this.state.private
    });
  }

  render(){
    const { distance_unit, elevation_unit, sport, activity_type } = this.state;
  	// const value = selectedOption && selectedOption.value;
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
                <input
                  className="workout-input select"
                  placeholder={distance_unit}
                  value={distance_unit}
                  onChange={this.handleChange('distance_unit')}
                />
              </div>
            </div>






            <div className="field-container">
              <label htmlFor="duration">Duration</label><br/>
              <div className="input-wrapper">
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
                <Select
                  className="select distance-select"
                  value={elevation_unit}
                  onChange={this.handleSelect('elevation_unit')}
                  clearable={false}
                  searchable={false}
                  options={[
                    { value: 'meters', label: 'meters' },
                    { value: 'feet', label: 'feet' }
                  ]}
                />
              </div>
            </div>
          </section>

          {/*TODO: this needs to render at the front*/}
          <section className="mid-row">
            <div className="field-container">
              <label htmlFor="sport">Sport</label><br/>
              <div className="input-wrapper">
                <Select
                  className="select sport-select"
                  value={sport}
                  onChange={this.handleSelect('sport')}
                  clearable={false}
                  searchable={false}
                  options={[
                    { value: 'Run', label: 'Run' },
                    { value: 'Ride', label: 'Ride' }
                  ]}
                />
              </div>
            </div>

            {/*TODO: decision about date and time inputs*/}
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

          {/*TODO: this needs to render at the front*/}
          <section className="workout-row bottom-row">
            <section className="bottom-container">
              <div className="field-container">
                <label htmlFor="activity-type">{this.state.sport} type</label><br/>
                <div className="input-wrapper">
                  <Select
                    className="select sport-select"
                    value={activity_type}
                    onChange={this.handleSelect('activity_type')}
                    clearable={false}
                    searchable={false}
                    options={[
                      { value: 'Race', label: 'Race' },
                      { value: 'Workout', label: 'Workout' }
                    ]}
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

            <div className="privacy">
              <input onClick={this.handleCheck} className="checkbox" type="checkbox" />
              <div className={this.state.private ? "fa fa-lock locked" : "unlocked"}></div>
            </div>
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

// <Select
//   className="select distance-select"
//   value={distance_unit}
//   onChange={this.handleSelect('distance_unit')}
//   clearable={false}
//   searchable={false}
//   options={[
//     { value: 'kilometers', label: 'kilometers' },
//     { value: 'meters', label: 'meters' },
//     { value: 'miles', label: 'miles' },
//     { value: 'yards', label: 'yards' }
//   ]}
// />

export default WorkoutForm;
