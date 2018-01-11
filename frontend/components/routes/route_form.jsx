import React from 'react';

class RouteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: '',
      title: '',
      start_lat: '',
      start_lng: '',
      end_lat: '',
      end_lng: '',
      distance: 0,
      distance_unit: "miles",
      elevation_gain: '0',
      elevation_unit: "meters",
      private: false,
      route_type: "Run",
      duration: '0s',
      description: ''
    };
  }

  render(){
    return (
      <div>hi</div>

    );
  }

}

export default RouteForm;
