# Stromble

[Stromble](https://stromble.herokuapp.com)

Stromble is a full-stack web application inspired by Strava. The stack includes a Ruby-on-Rails backend in conjunction with a PostgreSQL database, and a React-Redux frontend. Google Maps Directions API is leveraged to create and display user created running/biking routes. Google Static Maps API in conjunction with Google Elevation Services is used to generate the map images and obtain necessary route details.

## Key Features

### Workout Creation
Users are greeted with a sleek form when creating their workouts. Some of the form details include the activity's distance, duration, elevation, and specifics of the nature of the activity. Moment.js was used to display the current date and time for the user when they load the page. Custom select boxes were built from scratch in order to maximize efficiency in styling. Upon workout creation, user's are displayed a show page outlining the details of their newly created activity. They are given options to edit and delete the activity, or simply return to their dashboard where they have a feed of their activities.


```
  //WorkoutForm
  <div className="input-wrapper sporty-input">
    <DropdownComponent
      items={['Run', 'Ride']}
      onChange={this.handleSelection('sport')}
      initValue={sport}
      />
  </div>

  //DropdownComponent
  handleSelect(){
    this.setState({ isOpen: true });
    this.sectionElement.focus();

  }

  registerSection(section){
    this.sectionElement = section;
  }

  blurSection(){
    this.setState({isOpen: false});
  }

  selectItem(item){
    return e => {
      this.setState({ selected: item, isOpen: false });
      this.props.onChange(item);
    };
  }

  render(){
    const items = this.props.items.map((item, index) => {
      return (
        <li onClick={this.selectItem(item)} key={index}>{item}</li>
      );
    });
    return (
      <section className="dropdown-section-element" onBlur={this.blurSection}  tabIndex="0" ref={this.registerSection}>
        <div
          className="workout-input select caret">
            {this.state.selected}
        </div>

        { this.state.isOpen ?
          <ul className="selected-fields">
            {items}
          </ul>
          : null }

      </section>
    );
```

### Route Creation
Through Google Maps API, users are greeted with a map zeroed in on midtown Manhattan. User's can simply click any two points on the map, and a line will be drawn detailing the shortest possible route. Details regarding distance, elevation time, and estimated duration are live updated based on the route being drawn. Users can then elect to save the route, where they are prompted with a form asking to title the route and give it a brief description. Upon saving, users are routed to their route index page, where they can view all of their saved routes.

```
  const routeRunRequest = {
    origin: start,
    destination: end,
    travelMode: 'WALKING',
  };
  
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const elevationService = new google.maps.ElevationService();
  directionsRenderer.setMap(this.map);

  directionsService.route(routeRunRequest, ((directionsResult, directionsStatus) => {
    if(directionsStatus === "OK"){
      elevationService.getElevationAlongPath({
        path: this.routePath,
        samples: this.routePath.length
      }, ((elevationResult, elevationStatus) => {
          if(elevationStatus === "OK"){
            elevationResult.forEach((sample) => {
              this.elevations.push(sample.elevation);
            });
            const max = this.elevations.sort()[this.elevations.length-1];
            const min = this.elevations.sort()[0];
            let elevation = max - min;
            this.storeData(distance, start, end, elevation, duration);
          }
      }).bind(this));
    }
  }).bind(this));
```    

## Future Add-ons
One future plan for this app is to turn it into a social media app, much like Strava. User's will be able to connect with others, and follow/be followed by them. Connected users can then view each others' activities, comment, and give them kudos.

Another plan is to improve functionality of the custom route creation. Users should be able to chain markers to increment their route rather than being limited to two end points. Search functionality for locations, as well as dynamic map centering based on the user's current location when loading the app are additional planned features.
