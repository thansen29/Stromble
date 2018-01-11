import React from 'react';

//TODO: make the error handling use the store
class CreateProfileForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fname: "",
      lname: "",
      fnameError: false,
      lnameError: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(field){
    const err = field + "Error";
    return ((e) => {
      this.setState({ [field]: e.target.value, [err]: false });
    }).bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.fname === "" || this.state.lname === ""){
      this.setState({fnameError: true, lnameError: true});
    } else {
      this.props.updateUser(this.state).then(() => {
        this.props.closeModal();
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
