import React from 'react';

class CreateProfileForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fname: "",
      lname: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createProfile(this.state).then(() => {
      this.props.closeModal();
    });
  }

  render(){
    return (
      <section className="create-profile-container">
        <form className="create-profile-form" onSubmit={this.handleSubmit}>

          <header className="create-header">
            <h1>Create Your Profile</h1>
          </header>

            <input
              type="text"
              className="create-form-input"
              value={this.state.fname}
              onChange={this.handleChange('fname')}
              placeholder="First Name"/>

            <input
              type="text"
              className="create-form-input"
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
