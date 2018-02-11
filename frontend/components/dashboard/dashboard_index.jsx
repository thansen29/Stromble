import React from 'react';
import Navbar from '../navbar/navbar';
import moment from 'moment';
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
    this.props.requestTotalRides(id).then();

    this.props.clearWorkouts();
    this.props.requestWorkouts().then(() => {
      window.setTimeout(() => {
        this.props.updateLoading();
      }, 500);
    });
  }

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

    let numActivities = 0;
    if(this.props.stats.totalRides >= 0 && this.props.stats.totalRuns >= 0){
      numActivities = this.props.stats.totalRuns + this.props.stats.totalRides;
    }

    let numFollowers = 0;
    let numFollowing = 0;
    if(this.props.currentUser.followers.length){
      numFollowers = this.props.currentUser.followers.length;
    }
    if(this.props.currentUser.following.length){
      numFollowing = this.props.currentUser.following.length;
    }

    let recent;
    let date;
    if(this.props.workouts.length){
      recent = this.props.workouts[0];
      let momentDate = moment(recent.time);
      date = momentDate.format("MMMM D, YYYY");

    }

    return (
      <section className="dashboard-background">
        <Navbar />

          <section className="dashboard-container">
            { this.props.isOpen ?
              <ModalComponent>
                <CreateProfileContainer />
              </ModalComponent> : null
            }

            <aside className="dashboard-left">
              <section className="profile-card">
                <img className="profile-card-avatar" src={this.props.currentUser.avatar_url} />
                <span className="card-name">
                  <Link to={`/users/${this.props.currentUser.id}`}>
                    {this.props.currentUser.fname} {this.props.currentUser.lname}
                  </Link>
                </span>

                <div className="card-following">
                  <div className="following-titles">
                    <div className='follow-title'>Following</div>
                    <div className='follow-title'>Followers</div>
                    <div className='follow-title'>Activities</div>
                  </div>

                  <div className="following-stats">
                    <div>{ numFollowing }</div>
                    <div>{ numFollowers }</div>
                    <Link to='/workouts'>
                      <div>{numActivities}</div>
                    </Link>
                  </div>
                </div>

                <div className="latest">
                  <div>Latest Activity</div>
                  { recent ?
                    <Link to={`/workouts/${recent.id}`}>
                      <span className="bold">{recent.title}</span> • {date}
                    </Link>
                    : null
                  }
                </div>

                <div className="log">
                  <Link to='/workouts'>
                    <label>
                      <span>Your Training Log</span>
                      <i className="fa fa-angle-right"></i>
                    </label>
                  </Link>
                </div>

              </section>

              <Tabs panes={tabs} />
            </aside>

            <main className="dashboard-main">
              <ul className="dashboard-feed-ul">
                { this.props.workouts ? workoutItems : message }
              </ul>
              {/* message */}
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
