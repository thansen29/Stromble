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
      <section className="create-profile-form">
        hi
      </section>
    );
  }

}

export default CreateProfileForm;
