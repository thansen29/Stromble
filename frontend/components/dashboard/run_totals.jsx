import React from 'react';

//TODO: display the totals in this component
class RunTotalsContent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { runDistance, rideDistance, longestRunDistance, longestDuration, totalRuns } = this.props.stats;
    const totalDistance = runDistance + rideDistance;
    //TODO: makes the units of measurement relative to what they actaully are ie
      //all stats are in kilometers
    return(
        <main className="stats-content">
          <label className="stats-label">Total Distance Traveled</label>
            <div className="stats-value">{totalDistance} miles</div>

          <label className="stats-label">Total Number of Runs</label>
            <div className="stats-value">{totalRuns}</div>

          <label className="stats-label">Accumulated Run Distance</label>
            <div className="stats-value">{runDistance} miles</div>

          <label className="stats-label">Longest Run Distance</label>
            <div className="stats-value">{longestRunDistance} miles</div>

          <label className="stats-label">Longest Duration</label>
            <div className="stats-value">{longestDuration} hours</div>
        </main>
    );
  }
}

export default RunTotalsContent;
