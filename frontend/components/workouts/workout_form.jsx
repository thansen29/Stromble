import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
// import DropdownComponent from './dropdown_component';

class WorkoutForm extends React.Component {
  constructor(props){
    super(props);
    //careful of the state currently string and coming in as something else
    this.state = {
      distance: "",
      distanceUnit: "miles",
      duration_hr: '01',
      duration_min: '00',
      duration_s: '00',
      elevation: "",
      elevation_unit: "feet",
      sport: "Run",
      date: "",
      time: "",
      title: "",
      activity_type: "",
      descripton: "",
      private: "false"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount(){
    //get date and set it to state
    //get time and set it to state
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createWorkout(this.state).then((workout) => {
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
      this.setState({ [field]: e });
    };
  }

  render(){
    const { distanceUnit } = this.state;
  	// const value = selectedOption && selectedOption.value;
    // debugger
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
                <Select
                  tabIndex="0"
                  className="distance-select"
                  value={distanceUnit}
                  onChange={this.handleSelect('distanceUnit')}
                  clearable={false}
                  searchable={false}
                  options={[
                    { value: 'kilometers', label: 'kilometers' },
                    { value: 'meters', label: 'meters' },
                    { value: 'miles', label: 'miles' },
                    { value: 'yards', label: 'yards' }
                  ]}
                />
              </div>
            </div>

            <div className="field-container">
              <label htmlFor="duration">Duration</label><br/>
              <div className="input-wrapper">
                <input
                  className="workout-input right-line"
                  type="number"
                  value={this.state.duration_hr}
                  onChange={this.handleChange('duration_hr')} />
                <input
                  className="workout-input right-line"
                  type="number"
                  value={this.state.duration_min}
                  onChange={this.handleChange('duration_min')} />
                <input
                  className="workout-input"
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
                elevation_unit
              </div>
            </div>
          </section>

          <section className="workout-row">
            <div className="field-container">
              <label htmlFor="sport">Sport</label><br/>
              <div className="input-wrapper">
                Sport Type
              </div>
            </div>

            <div className="field-container">
              <label htmlFor="date-time">Date &amp; Time</label><br/>
              <div className="input-wrapper">
                <input
                  className="workout-input right-line"
                  type="date"
                  value={this.state.date}
                  onChange={this.handleChange('date')} />
                <input
                  className="workout-input"
                  type="text"
                  value={this.state.date}
                  onChange={this.handleChange('time')} />
              </div>
            </div>

            <div className="field-container">
              <label htmlFor="title">Title</label><br/>
              <div className="input-wrapper">
                <input
                  className="workout-input title-input"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange('title')} />
              </div>
            </div>
          </section>

          <section className="workout-row">
            <div className="field-container">
              <label htmlFor="activity-type">title type</label><br/>
              <div className="input-wrapper">
                Typedropdown
              </div>
            </div>

            <div className="field-container">
              <label htmlFor="description">Description</label><br/>
              <div className="input-wrapper">
                <textarea
                  className="workout-input workout-description"
                  value={this.state.description}
                  onChange={this.handleChange('description')}
                  placeholder="How did it go? Were you tired or rested? How was the weather?" />
              </div>
            </div>

            <input className="checkbox" type="checkbox" />
            <span className="unlocked"></span>
            <span className="private">Private</span>
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
// <i class="fa fa-lock" aria-hidden="true"></i>

// <select className="workout-input">
//   <option value={this.state.distance_unit}>kilometers</option>
//   <option value={this.state.distance_unit}>meters</option>
//   <option value={this.state.distance_unit}>miles</option>
//   <option value={this.state.distance_unit}>yards</option>
// </select>

export default WorkoutForm;
