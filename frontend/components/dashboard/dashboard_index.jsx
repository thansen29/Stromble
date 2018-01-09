import React from 'react';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';
import WorkoutItem from './workout_item';
import Tabs from './tabs';
import RunTotalsContent from './run_totals';
import RideTotalsContent from './ride_totals';
import StatsContainer from './stats_container';


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
      message =
      <div className="no-workouts">
        You don't have any more workouts!
        <Link to="/workouts/new"> Get moving!</Link>
      </div>;
      workoutItems = this.props.workouts.map((workout) => {
        return (
          <WorkoutItem workout={workout} key={workout.id} />
        );
      });
    }
    const tabs = [
      { title: "shoe-tab", content: <StatsContainer /> },
      { title: "bike-tab", content: <RideTotalsContent /> }
    ];
    return (
      <section className="dashboard-background">
        <Navbar />
        <section className="dashboard-container">
          <aside className="dashboard-left">
            <Tabs panes={tabs} />
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
