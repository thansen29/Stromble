import React from 'react';
import Navbar from '../navbar/navbar';
import EditProfileContainer from './edit_profile_container';
import SearchResultItemContainer from '../navbar/search_result_item_container';

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

  render(){
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

            <main className="profile-following">
              <h1 className="h1">Following</h1>
            </main>

          </section>
      }
      </section>
    );
  }
}

export default UserProfile;
