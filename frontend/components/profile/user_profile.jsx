import React from 'react';
import Navbar from '../navbar';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className="background">
        <Navbar />
      </section>
    );
  }
}

export default UserProfile;
