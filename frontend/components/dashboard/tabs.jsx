import React from 'react';
import Headers from './headers';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = { selectedPane: 0 };

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num){
    this.setState({ selectedPane: num });
  }

  

  render(){
    return (
      <div>hi</div>
    );
  }
}
