import React from 'react';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';

class DashboardIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className="dashboard-background">
        <Navbar />

        <button className="signup-submit logout" onClick={this.props.logout}>Log out</button>

      </section>
    );
  }

}

export default DashboardIndex;
