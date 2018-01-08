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
    //pass run and bike to tabs component from dashboard?
    let pane = this.props.panes[this.state.selectedPane];

    return (
      <section>
        <div className="tabs">
          <h1>Activity Totals</h1>
          <Headers
            selectedPane={this.state.selectedPane}
            onTabChosen={this.selectTab}
            panes={this.props.panes}/>
        <div className="tab-content">
          <article>
            {pane.content}
          </article>
        </div>
      </div>
    </section>

    );
  }
}

export default Tabs;
