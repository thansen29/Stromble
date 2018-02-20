import React from 'react';
import Tabs from '../tabs/tabs';
import WorkoutItems from '../workouts/workout_items';
import FollowComponent from './follow_component';

class EditProfileForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      imageFile: null,
      imageUrl: null,
      fname: "",
      lname: "",
      page: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
    this.getWorkouts = this.getWorkouts.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.id).then(() => {
      this.props.clearWorkouts();
      // this.getWorkouts();
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

  handleSelection(field){
    return e => {
      this.setState({ [field]: e });
    };
  }

  render(){

    let followComponent =
      <FollowComponent
        followers={this.props.followers}
        following={this.props.following} />;

    let workoutsComponent =
      <div className="waypoint">
        <WorkoutItems
          workouts={this.props.workouts}
          currentUser={this.props.currentUser}
          getWorkouts={this.getWorkouts}/>
      </div>;

    const tabs = [
      { word: "Overview", content: workoutsComponent, title: "profile-header", classs: 'header-bg' },
      { word: "Following", content: followComponent, title: "profile-header", classs: 'header-bg' },
    ];


    return (
      <section className="profile-background">
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

          <div className="profile-tabs">


            <Tabs panes={tabs} />
          </div>

        </section>
      </section>
    );
  }


}

export default EditProfileForm;
