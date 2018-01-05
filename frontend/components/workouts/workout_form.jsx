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
      distance_unit: "miles",
      duration_hr: '01',
      duration_min: '00',
      duration_s: '00',
      elevation: "",
      elevation_unit: "feet",
      sport: "Run",
      date: "",
      time: "",
      title: "",
      activity_type: "Type",
      descripton: "",
      private: "false"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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
    let first = time.substring(0,5);
    let second = time.slice(-2);
    const fullTime = `${first} ${second}`;
    return fullTime;
  }

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
                <Select
                  className="select distance-select"
                  value={distance_unit}
                  onChange={this.handleSelect('distance_unit')}
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
                  className="workout-input right-line duration-box"
                  type="number"
                  value={this.state.duration_hr}
                  onChange={this.handleChange('duration_hr')} />
                <input
                  className="workout-input right-line duration-box"
                  type="number"
                  value={this.state.duration_min}
                  onChange={this.handleChange('duration_min')} />
                <input
                  className="workout-input duration-box"
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
          
          {/*TODO: make the input start at the beginning */}
          <div className="field-container title-input">
            <label htmlFor="title">Title</label><br/>
            <div className="input-wrapper">
              <input
                className="workout-input title-input"
                type="text"
                value={this.state.title}
                onChange={this.handleChange('title')} />
            </div>
          </div>


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
              <input className="checkbox" type="checkbox" />
              <div className="unlocked"></div>

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
// <i class="fa fa-lock" aria-hidden="true"></i>

// <select className="workout-input">
//   <option value={this.state.distance_unit}>kilometers</option>
//   <option value={this.state.distance_unit}>meters</option>
//   <option value={this.state.distance_unit}>miles</option>
//   <option value={this.state.distance_unit}>yards</option>
// </select>

export default WorkoutForm;
