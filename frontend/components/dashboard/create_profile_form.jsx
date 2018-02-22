import React from 'react';

//TODO: make the error handling use the store
//TODO: errors are still a little buggy
class CreateProfileForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fname: "",
      lname: "",
      fnameError: false,
      lnameError: false,
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUser = this.updateUser.bind(this);

  }

  handleChange(field){
    const err = field + "Error";
    return ((e) => {
      this.setState({ [field]: e.target.value, [err]: false });
    }).bind(this);
  }

  updateUser(e){
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

  handleSubmit(e){
    e.preventDefault();
    if(this.state.fname === "" || this.state.lname === ""){
      this.setState({fnameError: true, lnameError: true});
    } else {
      const formData = new FormData();
      formData.append("id", this.props.id);
      formData.append("user[fname]", this.state.fname);
      formData.append("user[lname]", this.state.lname);
      if(this.state.imageFile){
        formData.append("user[avatar]", this.state.imageFile);
      }
      // this.props.updateUser(formData);
      this.props.updateUser(formData).then(() => {
        this.props.closeModal();
        this.props.newUser();
      });
    }
  }

  render(){
    return (
      <section className="create-profile-container">
        <form className="create-profile-form" onSubmit={this.handleSubmit}>

          <header className="create-header">
            <h1>Create Your Profile</h1>
          </header>

          <div className="create-profile-picture">
            <div>Set your profile picture</div>
            <div className="create-profile-content">
              <img className="create-profile-image" src={this.state.imageUrl ? this.state.imageUrl : this.props.avatarUrl} />
            </div>
              <input type="file" className="file-upload" onChange={this.updateUser}/>
          </div>

          {this.state.fnameError || this.state.lnameError ?
            <span className="create-error-message">*All Fields are required</span> :
              <span className="create-error-message"></span>
          }
            <input
              type="text"
              className={this.state.fnameError ? "create-errors" : "create-form-input"}
              value={this.state.fname}
              onChange={this.handleChange('fname')}
              placeholder="First Name"
              />

            <input
              type="text"
              className={this.state.lnameError ? "create-errors" : "create-form-input"}
              value={this.state.lname}
              onChange={this.handleChange('lname')}
              placeholder="Last Name"/>
            <button className="create-form-submit">Submit</button>

        </form>
      </section>
    );
  }

}

export default CreateProfileForm;
