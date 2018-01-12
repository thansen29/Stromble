# Stromble

[Stromble](https://stromble.herokuapp.com)

Stromble is a full-stack web application inspired by Strava. The stack includes a Ruby-on-Rails backend in conjunction with a PostgreSQL database, and a React-Redux frontend. Google Maps API is leveraged to create and display user created running/biking routes. Google Static Maps API in conjunction with Google Elevation Services generated the map images and obtained necessary route details.

## Key Features

### Workout Creation
Users are greeted with a sleek form when creating their workouts. Some of the details include the activity's distance, duration, elevation, and specifics of the nature of the activity. Custom select boxes were built from scratch in order to maximize efficiency in styling. Upon workout creation, user's are displayed a show page outlining the details of their newly created activity. They are given options to edit and delete the activity, or simply return to their dashboard.

code snippet of dropdown implementation

### Route Creation
Through Google Maps API, users are greeted with a map zeroing in on midtown Manhattan. User's can simply click any two points on the map, and a line will be drawn detailing the shortest possible route. Details regarding distance, elevation time, and estimated duration are live updated upon the route being drawn. Users can then elect to save the route, where they are prompted with a form asking to title the route and give a brief description of it. Upon saving, users are routed to their route index page, where they can view all of their saved routes.

code snippet of google maps api request/response handling

## Future Add-ons
One future plan for this app are the turn it into a social media app, much like Strava. User's will be able to connect with other users and follow-be followed by them. Connected users can then view each others' activities, comment, and give them kudos.

Another plan is to improve functionality of the custom route creation. Users should be able to chain markers to increment their route rather than being limited to two end points. Search functionality for locations, as well as dynamic map centering based on the user's current location when loading the app are additional planned features.
