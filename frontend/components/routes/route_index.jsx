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
  }

  handleSubmit(e){
    console.log("hello");
    e.preventDefault();
    // debugger
    this.props.getState();
    // const data = MarkerManager.storeData();
  }

  render(){
    return (
      <section>
        <Navbar />
        <section className="route-navbar">
          <button onClick={this.handleSubmit} className="route-save">Save</button>
        </section>

        <RouteMap />

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
