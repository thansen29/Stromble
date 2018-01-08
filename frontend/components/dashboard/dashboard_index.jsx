import React from 'react';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';
import WorkoutItem from './workout_item';

class DashboardIndex extends React.Component {
  constructor(props){
    super(props);
  }

  // componentWillMount(){
  //   this.props.requestWorkouts();
  // }

  render(){
    return (
      <section className="dashboard-background">
        <Navbar />
        <section className="dashboard-container">
          <aside className="dashboard-left">
          </aside>

          <main className="dashboard-main">
            <ul className="dashboard-feed-ul">
              <WorkoutItem workout={this.props.workout} />
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
