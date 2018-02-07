import React from 'react';
import Navbar from '../navbar';

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
    this.updateAvatar = this.updateAvatar.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
  }

  componentDidMount(){
    this.setState({
      fname: this.props.fname,
      lname: this.props.lname
    });
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
    this.props.updateAvatar(formData).then(() => {
      this.props.history.push("/dashboard");
    });
  }

  updateAvatar(e){
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
    return (
      <section className="background">
        <Navbar />
        <section className="profile-container">
          <div className="profile-item h1">My Profile</div>
          <form className="profile-form" onSubmit={this.handleSubmit}>
            <div className="profile-title">
              <div className="offcenter">
                <span>Current Photo</span>
                <label>
                  <img
                    className="profile-avatar"
                    src={this.state.imageUrl ? this.state.imageUrl : this.props.avatarUrl} />
                  <input className="hidden-input" type="file" onChange={this.updateAvatar} />
                  <span className="grey-plus"></span>
                </label>
              </div>
            </div>

            <ul className="profile-title" onClick={this.state.clicked ? null : this.triggerChange}>
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
      </section>
    );
  }
}

export default UserProfile;
