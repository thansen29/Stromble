import React from 'react';
import Navbar from '../navbar/navbar';
import Waypoint from 'react-waypoint';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Tabs from '../tabs/tabs';
import RunTotalsContent from './run_totals';
import RideTotalsContent from './ride_totals';
import StatsContainer from './stats_container';
import ModalComponent from '../modals/modal_component';
import CreateProfileContainer from './create_profile_container';
import WorkoutItems from '../workouts/workout_items';
import ProfileCard from './profile_card';
import DropdownComponent from '../dropdowns/dropdown_component';

class DashboardIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newUser: null,
      ready: false,
      page: 1,
      selected: 'Your Activities',
      hidden: 'Following',
      clicked: true
    };
    this.getWorkouts = this.getWorkouts.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount(){
    const id = this.props.currentUser.id;
    if(this.props.newUser){
      this.props.openModal();
    }

    this.props.requestRunDistance(id);
    this.props.requestRideDistance(id);
    this.props.requestLongestRunDistance(id);
    this.props.requestLongestRideDistance(id);
    this.props.requestLongestRunDuration(id);
    this.props.requestLongestRideDuration(id);
    this.props.requestTotalRuns(id);
    this.props.requestTotalRides(id);

    this.props.clearWorkouts();
    this.getWorkouts();
  }

  getWorkouts(){
    this.props.requestWorkouts(this.state.page, this.props.currentUser.id).then(() =>{
      this.setState({ page: this.state.page += 1, ready: true });
    });
  }

  handleSelection(){
    let selected = this.state.selected;
    let hidden = this.state.hidden;
    // let clicked = this.state.clicked;
    this.setState({
      selected: hidden,
      hidden: selected,
      clicked: !this.state.clicked
    });
  }

  hide(){
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render(){
    let workoutItems =
      <WorkoutItems
        workouts={this.props.workouts}
        currentUser={this.props.currentUser}
        getWorkouts={this.getWorkouts} />;

    const message =
      <div className="no-workouts">
        You don't have any workouts!
        <Link to="/workouts/new"> Get moving!</Link>
      </div>;

    const tabs = [
      { title: "shoe-tab", content: <RunTotalsContent stats={this.props.stats} /> },
      { title: "bike-tab", content: <RideTotalsContent stats={this.props.stats} /> }
    ];

    return (
      <section className="dashboard-background">
        <Navbar />

        <header tabIndex='0' className="dash-header">
          <div tabIndex='0' className="dash-container" onClick={this.hide}>
            <span>
              { this.state.selected }
            </span>
            <span className="fa fa-angle-down"></span>
            <span
              className={ this.state.clicked ? 'hidden dash-content' : "dash-content" }
              onClick={this.handleSelection}>
              { this.state.hidden }
            </span>
          </div>
        </header>

          <section className="dashboard-container">
            { this.props.isOpen ?
              <ModalComponent>
                <CreateProfileContainer />
              </ModalComponent> : null
            }

            <aside className="dashboard-left">
              <ProfileCard
                totalRides={ this.props.stats.totalRides }
                totalRuns={ this.props.stats.totalRuns }
                currentUser={ this.props.currentUser }
                workouts={ this.props.workouts } />

              <Tabs panes={tabs} />
            </aside>

            <main className="dashboard-main">
              <ul className="dashboard-feed-ul">
                { this.props.workouts.length ? workoutItems : null }
              </ul>

              <div className={!this.props.workouts.length && this.state.ready ? 'visible' : 'none'}>
                { message }
              </div>

              <Waypoint
                onEnter={this.getWorkouts} />
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
