import React from 'react';

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
      activity_type: "",
      descripton: "",
      private: "false"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  render(){
    return (
      <main className="form-container">
        <h1>Manual Entry</h1>
        <form className="workout-form" onSubmit={this.handleSubmit}>

          <div className="field-container">
            <label htmlFor="distance">Distance</label><br/>
            <input
              className="right-line workout-input"
              type="number"
              value={this.state.distance}
              onChange={this.handleChange('distance')} />
            distance_unit
          </div>

          <div className="field-container">
            <label htmlFor="duration">Duration</label><br/>
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

          <div className="field-container">
            <label htmlFor="elevation">Elevation</label><br/>
            <input
              className="workout-input right-line"
              type="number"
              value={this.state.elevation}
              onChange={this.handleChange('elevation')} />
            elevation_unit
          </div><br/><br/>


        </form>
      </main>
    );
  }

}

export default WorkoutForm;
