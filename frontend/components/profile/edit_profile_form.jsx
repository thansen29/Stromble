import React from 'react';
import SearchResultItemContainer from '../navbar/search_result_item_container';
import FollowsContainer from './follows_container';

class EditProfileForm extends React.Component {
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
    this.updateUser = this.updateUser.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
  }

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

  triggerChange(e){
    e.preventDefault();
    this.setState({
      clicked: !this.state.clicked
    });
  }

  handleChange(field){
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", this.props.id);
    formData.append("user[fname]", this.state.fname);
    formData.append("user[lname]", this.state.lname);
    if(this.state.imageFile){
      formData.append("user[avatar]", this.state.imageFile);
    }
    this.props.updateUser(formData).then(() => {
      this.props.history.push("/dashboard");
    });
  }

  updateUser(e){
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        imageFile: file,
        imageUrl: fileReader.result
      });
    };
    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  render(){
    // let followers;
    // let following;
    // if(this.props.user){
    //   following = this.props.user.following.map((user) => {
    //     return (
    //       <li key={user.id}>
    //         <SearchResultItemContainer user={user} />
    //       </li>
    //     );
    //   });
    // }
    // else if(this.props.user.followers.length){
    //   followers = this.props.user.followers.map((user) => {
    //     return (
    //       <li key={user.id}>
    //         <SearchResultItemContainer user={user} />
    //       </li>
    //     );
    //   });
    // }

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
    }
    // debugger
    return (
      <section className="background">
        <section className="profile-container">
          <div className="profile-item h1">My Profile</div>
          <form className="profile-form" onSubmit={this.handleSubmit}>
            <div className="edit-profile-title">
              <div className="offcenter">
                <span>Current Photo</span>
                <label>
                  <img
                    className="edit-profile-avatar"
                    src={this.state.imageUrl} />
                  <input className="hidden-input" type="file" onChange={this.updateUser} />
                  <span className="grey-plus"></span>
                </label>
              </div>
            </div>

            <ul className="edit-profile-title" onClick={this.state.clicked ? null : this.triggerChange}>
              <li>
                <span>Name</span>
                {this.state.clicked ?
                  <div className="profile-inputs-container">
                    <input
                      type="text"
                      className="profile-inputs"
                      value={this.state.fname}
                      onChange={this.handleChange('fname')} />
                    <input
                      type="text"
                      className="profile-inputs"
                      value={this.state.lname}
                      onChange={this.handleChange('lname')} />
                  </div> :
                  <main className="profile-item-content"><span>{this.state.fname} {this.state.lname}</span>
                    <span className="edit-pencil"></span>
                  </main>
                }
                {this.state.clicked ? <span onClick={this.triggerChange} className="close-form">&times;</span> : null}
              </li>
            </ul>

            <button className="profile-form-save">Save</button>

          </form>
        </section>

        <main className="profile-following">
          <h1 className="h1">Following</h1>
            <ul className="search-result-list">
              { following }
            </ul>
        </main>

      </section>
    );
  }


}

export default EditProfileForm;
