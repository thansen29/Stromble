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

    this.props.requestRunDistance();
    this.props.requestRideDistance();
    this.props.requestLongestRunDistance();
    this.props.requestLongestRideDistance();
    this.props.requestLongestRunDuration();
    this.props.requestLongestRideDuration();
    this.props.requestTotalRuns();
    this.props.requestTotalRides();
  }

  render(){
    let workoutItems;
    let message;
    if(this.props.workouts.length > 0){
      workoutItems = this.props.workouts.map((workout) => {
        return (
          <WorkoutItem workout={workout} key={workout.id} />
        );
      });
    }
    if(!workoutItems){
      message =
      <div className="no-workouts">
        You don't have any workouts! 
        <Link to="/workouts/new"> Get moving!</Link>
      </div>;
    }
    const tabs = [
      { title: "shoe-tab", content: <RunTotalsContent stats={this.props.stats} /> },
      { title: "bike-tab", content: <RideTotalsContent stats={this.props.stats} /> }
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
              { this.props.workouts ? workoutItems : message }
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
