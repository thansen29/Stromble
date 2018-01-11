import React from 'react';

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
  }

  render(){
    let startLat;
    let startLng;
    let endLat;
    let endLng;
    let url;
    if(this.props.route){
      startLat = this.props.route.start_lat;
      startLng = this.props.route.start_lng;
      endLat = this.props.route.end_lat;
      endLng = this.props.route.end_lng;

      url = `https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=800x450&path=color:0x0000ff|weight:5|${startLat},${startLng}|${endLat},${endLng}`;
    }
    return (
      <section className="route-show-container">
        <img src={url} alt="image preview" />


      </section>
    );
  }

}

export default RouteShow;
