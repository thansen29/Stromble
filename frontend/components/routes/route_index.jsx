import React from 'react';
import Navbar from '../navbar';
import RouteMap from './route_map';

class RouteIndex extends React.Component {
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
      elevation_gain: '',
      elevation_unit: "meters",
      private: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProps = this.handleProps.bind(this);
  }

  handleSubmit(e){
    debugger
    console.log("hello");
    e.preventDefault();
    // debugger
    // this.props.getState();
    // const data = MarkerManager.storeData();
  }

  handleProps(mapState){
    // debugger
    this.setState({
      start_lat: mapState.startLat,
      start_lng: mapState.startLng,
      end_lat: mapState.endLat,
      end_lng: mapState.endLng,
      distance: mapState.distance,
      elevation_gain: mapState.elevation
    });
  }

  render(){
    return (
      <section>
        <Navbar />
        <section className="route-navbar">
          <button onClick={this.handleSubmit} className="route-save">Save</button>
        </section>

        <RouteMap onChange={this.handleProps}/>

        <section className="route-bottom-bar">
          <ul>
            <li>
              <strong>data</strong>
              <div className="route-label">Route Type</div>
            </li>

            <li>
              <strong>data</strong>
              <div className="route-label">Distance</div>
            </li>

            <li>
              <strong>data</strong>
              <div className="route-label">Elevation Gain</div>
            </li>

            <li>
              <strong>data</strong>
              <div className="route-label">Est. Moving Time</div>
            </li>

          </ul>
        </section>

      </section>
    );
  }
}

export default RouteIndex;
