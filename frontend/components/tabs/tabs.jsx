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
    let pane = this.props.panes[this.state.selectedPane];
    let classs = this.props.panes[0].classs;
    return (
      <section className="tabs-section">
        <div className="tabs">
          <Headers
            selectedPane={ this.state.selectedPane }
            onTabChosen={ this.selectTab }
            classs={ classs }
            panes={ this.props.panes }/>
        <div className="tab-content">
          <article>
            { pane.content }
          </article>
        </div>
      </div>
    </section>

    );
  }
}

export default Tabs;
