import React from 'react';

class RideTotalsContent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
      const { runDistance, rideDistance, longestRideDistance, longestRideDuration, totalRides } = this.props.stats;
      const totalDistance = runDistance + rideDistance;
      //TODO: makes the units of measurement relative to what they actaully are ie
        //all stats are in kilometers
      return(
        <main className="stats-content">
          <label className="stats-label">Total Distance Traveled</label>
            <div className="stats-value">{totalDistance} miles</div>

          <label className="stats-label">Total Number of Rides</label>
            <div className="stats-value">{totalRides}</div>

          <label className="stats-label">Accumulated Ride Distance</label>
            <div className="stats-value">{rideDistance} miles</div>

          <label className="stats-label">Longest Ride Distance</label>
            <div className="stats-value">{longestRideDistance} miles</div>

          <label className="stats-label">Longest Ride Duration</label>
            <div className="stats-value">{longestRideDuration} hours</div>
        </main>
      );
  }
}

export default RideTotalsContent;
