import React from 'react';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';
import WorkoutItem from './workout_item';

class DashboardIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.clearWorkouts();
    this.props.requestWorkouts();
  }


  render(){
    let workoutItems;
    let message;
    if(this.props.workouts.length > 0){
      workoutItems = this.props.workouts.map((workout) => {
        message =
        <div className="no-workouts">
          You don't have any more workouts!
          <Link to="/workouts/new"> Get moving!</Link>
        </div>;
        return (
          <WorkoutItem workout={workout} key={workout.id} />
        );
      });
    }
    // debugger

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
            { message }
          </main>

          <aside className="dashboard-right">

          </aside>

        </section>

      </section>
    );
  }

}

export default DashboardIndex;
