import React from 'react';

class RunTotalsContent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { runDistance, rideDistance, longestRunDistance, longestRunDuration, totalRuns } = this.props.stats;
    const totalDistance = runDistance + rideDistance;

    return(
        <main className="stats-content">
          <label className="stats-label follow-title">Total Distance Traveled</label>
            <div className="stats-value">{ totalDistance } miles</div>

          <label className="stats-label">Total Number of Runs</label>
            <div className="stats-value">{ totalRuns }</div>

          <label className="stats-label">Accumulated Run Distance</label>
            <div className="stats-value">{ runDistance } miles</div>

          <label className="stats-label">Longest Run Distance</label>
            <div className="stats-value">{ longestRunDistance } miles</div>

          <label className="stats-label">Longest Run Duration</label>
            <div className="stats-value">{ longestRunDuration } hours</div>
        </main>
    );
  }
}

export default RunTotalsContent;
