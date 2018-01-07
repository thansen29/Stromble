import React from 'react';
import { Link } from 'react-router-dom';

class WorkoutItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let workoutItem = this.props.workouts.map((workout) => {
      return (
        <div></div>
      );
    });
  }
}
