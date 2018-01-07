import React from 'react';
import Navbar from '../navbar';
import { Link } from 'react-router-dom';

class DashboardIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestWorkouts();
  }

  render(){
    // let workoutItem = this.props.workout.map((workout) => {
    //
    // })
    return (
      <section className="dashboard-background">
        <Navbar />
        <section className="dashboard-container">
          <aside className="dashboard-left">
          </aside>

          <main className="dashboard-main">

          </main>

          <aside className="dashboard-right">

          </aside>

        </section>

      </section>
    );
  }

}

export default DashboardIndex;
