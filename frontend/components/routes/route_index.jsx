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
      elevation_gain: '0',
      elevation_unit: "meters",
      private: false,
      route_type: "Run",
      duration: '0s'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProps = this.handleProps.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

  }

  handleProps(mapState){
    this.setState({
      start_lat: mapState.startLat,
      start_lng: mapState.startLng,
      end_lat: mapState.endLat,
      end_lng: mapState.endLng,
      distance: mapState.distance,
      elevation_gain: mapState.elevation,
      user_id: this.props.userId,
      duration: mapState.duration
    });
  }

  render(){
    let button;
    button = this.state.user_id !== "" ?
      <button onClick={this.handleSubmit} className="route-save">Save</button> :
        <button className="route-save-disabled" disabled="true">Save</button>;

    return (
      <section>
        <Navbar />
        <section className="route-navbar">
          { button }
        </section>

        <RouteMap onChange={this.handleProps}/>

        <section className="route-bottom-bar">
          <ul>
            <li>
              <strong>{this.state.route_type}</strong>
              <div className="route-label">Route Type</div>
            </li>

            <li>
              <strong>{this.state.distance} {this.state.distance_unit}</strong>
              <div className="route-label">Distance</div>
            </li>

            <li>
              <strong>{this.state.elevation_gain} {this.state.elevation_unit}</strong>
              <div className="route-label">Elevation Gain</div>
            </li>

            <li>
              <strong>{this.state.duration}</strong>
              <div className="route-label">Est. Moving Time</div>
            </li>

          </ul>
        </section>

      </section>
    );
  }
}

export default RouteIndex;
