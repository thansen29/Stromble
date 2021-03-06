import React from 'react';
import Navbar from '../navbar/navbar';
import EditProfileContainer from './edit_profile_container';
import FollowComponent from './follow_component';
import WorkoutItems from '../workouts/workout_items';
import Tabs from '../tabs/tabs';
import { isFollowing } from '../../reducers/selectors';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      fname: "",
      lname: "",
      hovered: false,
      page: 1,
      isFollowing: null
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getWorkouts = this.getWorkouts.bind(this);

  }

  componentDidMount(){
    this.props.fetchUser(this.props.id).then(() => {
      this.props.clearWorkouts();
      this.props.fetchUserFollowers(this.props.id);
      this.props.fetchUserFollowing(this.props.id);
      this.setState({
        isFollowing: isFollowing(this.props.currentUser.following_ids, this.props.user.follower_ids)
      });
      if (!this.props.workouts.length) {
        this.getWorkouts();
      }
    });
  }

  getWorkouts(){
    if(this.props.user){
      this.props.requestWorkouts(this.state.page, this.props.user.id);
      this.setState({ page: this.state.page += 1 });
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.user){
      this.setState({
        fname: newProps.user.fname,
        lname: newProps.user.lname,
        imageUrl: newProps.user.avatar_url,
        isFollowing: isFollowing(newProps.currentUser.following_ids, newProps.user.follower_ids)
      });
      if(this.props.user && this.props.user.id !== newProps.user.id){
        this.props.clearWorkouts();
        this.props.requestWorkouts(1, newProps.user.id);
        this.setState({ page: 2 });
      }
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if(e.target.classList.value === "follow-save"){
      this.props.followUser(this.props.id).then(() => {
        this.props.fetchUser(this.props.id).then(() => {
          this.setState({
            isFollowing: isFollowing(this.props.currentFollows, this.props.otherFollows)
          });
        });
      });
    } else {
      this.props.unfollowUser(this.props.id).then(() => {
        this.props.fetchUser(this.props.id).then(() => {
          this.setState({
            isFollowing: isFollowing(this.props.currentFollows, this.props.otherFollows)
          });
        });
      });
    }
  }

  handleSelection(field){
    return e => {
      this.setState({ [field]: e });
    };
  }

  toggleHover(){
    this.setState({
      hovered: !this.state.hovered
    });
  }

  render(){
    let followComponent =
    <FollowComponent
      followers={ this.props.followers }
      following={ this.props.following } />;

    let workoutsComponent;
    if(this.props.user){
      workoutsComponent =
        <div className="waypoint">
          <WorkoutItems
            workouts={ this.props.workouts }
            currentUser={ this.props.currentUser }
            getWorkouts={ this.getWorkouts }
            likeWorkout={ this.props.likeWorkout }
            openModal={ this.props.openModal }
            closeModal={ this.props.closeModal }
            isOpen={ this.props.isOpen }
            createComment={ this.props.createComment }
            deleteComment={ this.props.deleteComment } />
        </div>;
    }

      const tabs = [
        { word: "Overview", content: workoutsComponent, title: "profile-header", classs: 'header-bg' },
        { word: "Following", content: followComponent, title: "profile-header", classs: 'header-bg' },
      ];

    return (
      <section className="background" key="all">
        <Navbar />
        {this.props.id === this.props.currentUserId ?
          <EditProfileContainer key="edit"/> :

          <section className="profile-background">
            <section className="profile-container">

              <div className="profile-item h1">{ this.state.fname }&#39;s Profile</div>

              <form className="profile-form">

                <div className="profile-title">
                  <div className="offcenter">
                    <img
                      className="profile-avatar"
                      src={ this.state.imageUrl } />
                  </div>
                </div>

                <ul className="profile-title">
                  <li>
                    <span>Name</span>
                      <main className="profile-item-content">
                        <span>{ this.state.fname } { this.state.lname }</span>
                      </main>
                  </li>
                </ul>

                <button
                  className={ this.state.isFollowing ? "following-save" : "follow-save" }
                  onMouseEnter={ this.toggleHover }
                  onMouseLeave={ this.toggleHover }
                  onClick={ this.handleSubmit }>
                  { this.state.isFollowing ? this.state.hovered ? "Unfollow" : "Following" : 'Follow' }
                </button>

              </form>
              <div className="profile-tabs">

                <Tabs panes={ tabs } />
              </div>


            </section>
          </section>
      }
      </section>
    );
  }
}

export default UserProfile;
