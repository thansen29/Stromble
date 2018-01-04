import React from 'react';
import { Link } from 'react-router-dom';

class DashboardIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section className="dashboard-background">
        <nav className="dashboard-nav">
          <ul>
            <li>
              <button className="signup-submit logout" onClick={this.props.logout}>Log out</button>
            </li>
          </ul>

        </nav>


      </section>
    );
  }

}

export default DashboardIndex;
