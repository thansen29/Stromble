import React from 'react';
import Navbar from '../navbar';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);

  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", this.props.id);
    if(this.state.imageFile){
      formData.append("user[avatar]", this.state.imageFile);
    }
    this.props.updateAvatar(formData);
  }

  updateAvatar(e){
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
        <form onSubmit={this.handleSubmit}>
          <input type="file" className="file-upload" onChange={this.updateAvatar}/>
          <button>Update Avatar</button>
          <img className="upload-image-preview" src={this.state.imageUrl} />
        </form>
      </section>
    );
  }
}

export default UserProfile;
