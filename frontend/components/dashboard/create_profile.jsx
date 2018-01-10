import React from 'react';

class CreateProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = { open: false };
  }

  componentWillMount(){
    if(this.props.newUser){
      // this.setState({ open: true });
      this.props.openModal();
    }
  }
  render(){
    return (
      <section className="modal-container">
        {this.props.ui ?
          <CreateProfileForm /> : null
          }
        </section>
      );
  }
}

export default CreateProfile;
