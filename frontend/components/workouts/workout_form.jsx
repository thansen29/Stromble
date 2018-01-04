import React from 'react';

class WorkoutForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      distance: "",
      distance_unit: "miles",
      duration_hr: 1,
      duration_min: 0,
      duration_s: 0,
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
      <form className="workout-form" onSubmit={this.handleSubmit}>
        <h1>Manual Entry</h1>

        <div className="distance-container">
          <label htmlFor="distance">Distance</label>
          <input
            className="workout-input"
            type="number"
            value={this.state.distance}
            onChange={this.handleChange('distance')} />
          distance_unit
        </div>


      </form>
    );
  }

}

export default WorkoutForm;
