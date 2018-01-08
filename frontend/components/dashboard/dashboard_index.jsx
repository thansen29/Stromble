import React from 'react';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';
import WorkoutItem from './workout_item';

class DashboardIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    // debugger
    this.props.requestWorkouts();
  }

  render(){
    let workoutItems;
    if(this.props.workouts.length > 0){
      workoutItems = this.props.workouts.map((workout) => {
        return (
          <WorkoutItem workout={workout} key={workout.id} />
        );
      });
    }

    return (
      <section className="dashboard-background">
        <Navbar />
        <section className="dashboard-container">
          <aside className="dashboard-left">
          </aside>

          <main className="dashboard-main">
            <ul className="dashboard-feed-ul">
              { workoutItems }
            </ul>
          </main>

          <aside className="dashboard-right">

          </aside>

        </section>

      </section>
    );
  }

}

export default DashboardIndex;
