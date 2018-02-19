import React from 'react';
import DropdownComponent from '../dropdowns/dropdown_component';
import FollowsContainer from './follows_container';

class FollowComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      follow: "Following",
      clicked: false,
    };

  }

  handleSelection(field){
    return e => {
      this.setState({ [field]: e });
    };
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

    return (
      <main className="profile-following">
        <h1 className="h1">{ this.state.follow }</h1>
        <br />
        <div className="distance-select">
          <DropdownComponent
            items={[`${"Following"}`, 'Followers']}
            onChange={this.handleSelection('follow')}
            initValue={`${"Following"}`} />
        </div>
        <ul className="search-result-list">
          { this.state.follow === "Followers" ? followers : following }
        </ul>
      </main>
    );
  }
}

export default FollowComponent;
