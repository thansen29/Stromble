import React from 'react';

//TODO: display the totals in this component
class RideTotalsContent extends React.Component {
  constructor(props){
    super(props);
  }


  // componentWillMount(){
  //   //TODO: look into route resolve?
  //   // debugger
  //   this.props.requestRunDistance();
  //   this.props.requestRideDistance();
  //   this.props.requestLongestDistance();
  //   this.props.requestLongestDuration();
  //   // this.props.requestTotalRuns();
  //   this.props.requestTotalRides();
  //   this.props.requestFastedSpeed;
  // }

  render(){
      // const { runDistance, rideDistance, longestDistance, longestDuration, totalRides } = this.props.stats;
      // const totalDistance = runDistance + rideDistance;
      //TODO: makes the units of measurement relative to what they actaully are ie
        //all stats are in kilometers
      return(
        <div>ride totals</div>
      );
  }
}

export default RideTotalsContent;
