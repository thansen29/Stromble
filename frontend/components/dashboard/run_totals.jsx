import React from 'react';

//TODO: display the totals in this component
class RunTotalsContent extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestRunDistance();
    // this.props.requestRideDistance();
    this.props.requestLongestDistance();
    this.props.requestLongestDuration();
    this.props.requestTotalRuns();
    // this.props.requestTotalRides();
    this.props.requestFastedSpeed;
  }

  render(){
    return(
      <div>hi im run totals</div>
    );
  }
}

export default RunTotalsContent;
