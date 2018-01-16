// http://maps.googleapis.com/maps/api/staticmap?size=400x400&path=color:0x0000ff|weight:5|40.7507682204469,-73.9744663238525|40.7608783063089,-73.9870834350586
import React from 'react';
import { Link } from 'react-router-dom';
import RouteItem from './route_item';
import Navbar from '../navbar';

class AllRoutes extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestRoutes();
  }


  render(){
    let routes;
    if(this.props.routes.length > 0){
      routes = this.props.routes.map((route) => {
        return (
          <RouteItem route={route} key={route.id} />
        );
    });
  }
    return (
      <section>
        <Navbar />
        <section className="all-routes-container">
          <header className="all-routes-header">
            <h1>My Routes</h1>
            <Link to="/routes/new"><button className="edit-form-save">Create New Route</button></Link>
          </header>

          <section className="route-items-container">
            <ul className="all-routes-list">
              { routes }
            </ul>
          </section>
        </section>
      </section>
    );
  }
}

export default AllRoutes;
