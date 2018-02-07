import React from 'react';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';
import WorkoutItem from './workout_item';
import Tabs from './tabs';
import RunTotalsContent from './run_totals';
import RideTotalsContent from './ride_totals';
import StatsContainer from './stats_container';
import ModalComponent from '../modals/modal_component';
import CreateProfileContainer from './create_profile_container';

//TODO: infinite scroll on dashboard index
//TODO: loading ui to not flash that message before workouts get loaded
class DashboardIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newUser: null
    };
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

  // componentDidMount(){
  //   debugger
  //   if(this.props.newUser){
  //     this.setState({ newUser: true });
  //     this.props.openModal();
  //   }
  // }

  // openModal(){
  //   this.props.openModal();
  // }

  render(){
    let workoutItems;
    let message;
    if(this.props.workouts.length > 0){
      workoutItems = this.props.workouts.map((workout) => {
        return (
          <WorkoutItem workout={workout} key={workout.id} currentUser={this.props.currentUser} />
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

          {/* this.props.newUser ? this.props.openModal() : null */}

          { this.props.newUser ?
            <ModalComponent>
              <CreateProfileContainer />
            </ModalComponent> : null
          }

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
            <a href="http://github.com/thansen29/">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="http://www.linkedin.com/in/thomas-hansen-1a0a51132/">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="http://www.tomhansen.io">
              <i className="www"></i>
            </a>
          </aside>

        </section>

      </section>
    );
  }

}

export default DashboardIndex;
