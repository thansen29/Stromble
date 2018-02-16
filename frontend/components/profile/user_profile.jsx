import React from 'react';
import Navbar from '../navbar/navbar';
import EditProfileContainer from './edit_profile_container';
import FollowsContainer from './follows_container';
import FollowsItem from './follows_item';
import DropdownComponent from '../dropdowns/dropdown_component';
import WorkoutItems from '../workouts/workout_items';
import Tabs from '../tabs/tabs';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      clicked: false,
      fname: "",
      lname: "",
      follow: "",
      hovered: false,
      page: 1
    };
    this.toggleHover = this.toggleHover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getWorkouts = this.getWorkouts.bind(this);

  }
  //TODO: can only access other users pages if not already on this page
  //if already here, it does not fetch the new user
  componentDidMount(){
    this.props.fetchUser(this.props.id).then(() => {
      this.getWorkouts();
      this.props.fetchUserFollowers(this.props.id);
      this.props.fetchUserFollowing(this.props.id);
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
        imageUrl: newProps.user.avatar_url
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.toggleFollow(this.props.id).then(() => {
      this.props.fetchUser(this.props.id);
    });
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

  extractData(obj){
    let array = [];
    for(let id in obj){
      if(id){
        let user = {
          id,
          fname: obj[id].fname,
          lname: obj[id].lname,
          avatarUrl: obj[id].avatar_url,
          followingIds: obj[id].following_ids,
          followerIds: obj[id].follower_ids,
        };
          array.push(user);
      }
    }
    return array;
  }

  render(){
    let followers;
    let following;
    if(this.props.followers){
      followers = this.extractData(this.props.followers);
      followers = followers.map((user) => {
        return (
            <li key={user.id}>
              <FollowsContainer user={user} />
            </li>
        );
      });
    }

    if(this.props.following){
      following = this.extractData(this.props.following);
      following = following.map((user) => {
        return (
            <li key={user.id}>
              <FollowsContainer user={user} />
            </li>
        );
      });
    }
    // let followComponent =
    //   <main className="other-profile-following">
    //     <h1 className="h1">Following</h1><br />
    //     <div className="sporty-input">
    //       <DropdownComponent
    //         items={[`${this.state.fname + " is Following"}`, `Following ${this.state.fname}`]}
    //         onChange={this.handleSelection('follow')}
    //         initValue={'Following'}/>
    //     </div>
    //       <ul className="search-result-list">
    //         { this.state.follow === `Following ${this.state.fname}` ? followers : following }
    //       </ul>
    //   </main>;

      // let workoutsComponent =
      //   <div className="waypoint">
      //     <WorkoutItems
      //       workouts={this.props.workouts}
      //       currentUser={this.props.currentUser}
      //       getWorkouts={this.getWorkouts}/>
      //   </div>;
      //
      // const tabs = [
      //   { word: "Overview", content: workoutsComponent, title: "profile-header", classs: 'header-bg' },
      //   { word: "Following", content: followComponent, title: "profile-header", classs: 'header-bg' },
      // ];

    //TODO: the follow button doesnt always update when following/unfollowing users

    return (
      <section className="background">
        <Navbar />
        {this.props.id === this.props.currentUserId ?
          <EditProfileContainer /> :

          <section className="profile-background">
            <section className="profile-container">

              <div className="profile-item h1">{this.state.fname}&#39;s Profile</div>

              <form className="profile-form" onSubmit={this.handleSubmit}>

                <div className="profile-title">
                  <div className="offcenter">
                    <img
                      className="profile-avatar"
                      src={this.state.imageUrl} />
                  </div>
                </div>

                <ul className="profile-title">
                  <li>
                    <span>Name</span>
                      <main className="profile-item-content">
                        <span>{this.state.fname} {this.state.lname}</span>
                      </main>
                  </li>
                </ul>

                <button
                  className={this.props.isFollowing ? "following-save" : "follow-save"}
                  onMouseEnter={this.toggleHover}
                  onMouseLeave={this.toggleHover}>
                  { this.props.isFollowing ? this.state.hovered ? "Unfollow" : "Following" : 'Follow' }
                </button>

              </form>
              <div className="profile-tabs">
                <ul>
                  { followers }
                </ul>
                {/*}<Tabs panes={tabs} /> */}
              </div>


            </section>
          </section>
      }
      </section>
    );
  }
}

export default UserProfile;
