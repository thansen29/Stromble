import React from 'react';
import Navbar from '../navbar';
import EditProfileContainer from './edit_profile_container';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      clicked: false,
      fname: "",
      lname: ""
    };

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
    //current user, user to follow
    this.props.toggleFollow(this.props.currentUserId, this.props.id);
  }

  render(){
    return (
      <section className="background">
        <Navbar />
        {this.props.id === this.props.currentUserId ?
          <EditProfileContainer /> :

          <section className="profile-container">
            <div className="profile-item h1">{this.state.fname}s Profile</div>
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
                {/*this.props.followed ? 'UnFollow' : 'Follow' */}Follow</button>
            </form>
          </section>
        }

      </section>
    );
  }
}

export default UserProfile;
