import React from 'react';
import Navbar from '../navbar';
class RouteIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <section>
        <Navbar />
      </section>
    );
  }
}

export default RouteIndex;
