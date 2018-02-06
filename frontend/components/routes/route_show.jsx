import React from 'react';
import Navbar from '../navbar';
import moment from 'moment';

class RouteShow extends React.Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    this.props.requestRoute(this.props.match.params.id);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteRoute(this.props.match.params.id);
    this.props.history.push("/routes");
  }

  render(){
    let startLat;
    let startLng;
    let endLat;
    let endLng;
    let url;
    let distance;
    let elevationGain;
    let date;
    let duration;
    let title;
    let description;
    let privacy;
    if(this.props.route){
      startLat = this.props.route.start_lat;
      startLng = this.props.route.start_lng;
      endLat = this.props.route.end_lat;
      endLng = this.props.route.end_lng;
      distance = this.props.route.distance;
      elevationGain = this.props.route.elevation_gain;
      let currentDate = moment(this.props.route.created_at);
      date = currentDate.format("MMMM, DD, YYYY");
      duration = parseInt(this.props.route.duration);
      description = this.props.route.description;
      title = this.props.route.title;
      privacy = this.props.route.private;
      url = `http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=800x450&path=color:0x0000ff|weight:5|${startLat},${startLng}|${endLat},${endLng}&key=AIzaSyAzqV02RQ3R5tDuhiUPlhww_AhPN0rukT0`;
    }
    return (
      <section className="background">
        <Navbar />
        <section className="route-show-container">
          <div className="route-show-leftside">
            <header>
              <h1>{title} {privacy ? <i className="fa fa-lock"></i> : null}</h1>
            </header>
            <div className="route-image-container">
              <img src={url} alt="image preview" />
            </div>
          </div>

          <aside className="route-show-details">
            <div className="route-show-user-info">
              <img className="route-avatar" src={this.props.currentUser.avatar_url} />
              <span className="route-name-details">
                <div className="route-show-name">By {this.props.currentUser.fname} {this.props.currentUser.lname}</div>
                <div className="show-datetime">Created on {date}</div>
              </span>
            </div>

            <div className="route-show-item-body">
              <div>
                <span className="item-stat-value">{distance}mi</span>
                <span className="item-stat-value">{elevationGain}meters</span>
              </div>
              <div>
                <span className="show-datetime route-show-el">Distance</span>
                <span className="show-datetime route-show-el">Elevation Gain</span>
              </div>

              <div className="show-datetime route-show-el moving-time">
                Est. Moving Time {duration} mins
              </div>
            </div>

            <span className="route-show-desc">{description}</span>

            <div className="route-show-delete">
              <button onClick={this.handleDelete}className="route-show-delete-btn">Delete Route</button>
            </div>
          </aside>


        </section>
      </section>
    );
  }

}

export default RouteShow;
