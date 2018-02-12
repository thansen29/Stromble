import React from 'react';
import Navbar from '../navbar/navbar';
import EditProfileContainer from './edit_profile_container';
import FollowsContainer from './follows_container';
import DropdownComponent from '../dropdowns/dropdown_component';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      clicked: false,
      fname: "",
      lname: "",
      follow: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }
  //TODO: can only access other users pages if not already on this page
  //if already here, it does not fetch the new user
  componentDidMount(){
    this.props.fetchUser(this.props.id);
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

  render(){
    let followers;
    let following;
    if(this.props.user){
      following = this.props.user.following.map((user) => {
        return (
          <li key={user.id}>
            <FollowsContainer user={user} />
          </li>
        );
      });
      followers = this.props.user.followers.map((user) => {
        return (
          <li key={user.id}>
            <FollowsContainer user={user} />
          </li>
        );
      });
    }
    return (
      <section className="background">
        <Navbar />
        {this.props.id === this.props.currentUserId ?
          <EditProfileContainer /> :

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

              <button className="profile-form-save">
                { this.props.isFollowing ? 'Unfollow' : 'Follow' }
              </button>
            </form>

            <main className="other-profile-following">
              <h1 className="h1">Following</h1><br />
              <div className="sporty-input">
                <DropdownComponent
                  items={[`${this.state.fname + " is Following"}`, `Following ${this.state.fname}`]}
                  onChange={this.handleSelection('follow')}
                  initValue={'Following'}/>
              </div>
                <ul className="search-result-list">
                  { this.state.follow === `Following ${this.state.fname}` ? followers : following }
                </ul>
            </main>

          </section>
      }
      </section>
    );
  }
}

export default UserProfile;
