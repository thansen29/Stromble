import React from 'react';
import * as _ from 'lodash';

class DropdownComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = { isOpen: false, selected: this.props.initValue };
    this.handleSelect = this.handleSelect.bind(this);
    this.blurSection = this.blurSection.bind(this);
  }

  handleSelect(){
    this.setState({ isOpen: true });
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
    const items = _.map(this.props.items, (item, index) => {
      return (
        <li onClick={ this.selectItem(item) } key={ index }>{ item }</li>
      );
    });
    return (
      <section className="dropdown-section-element" onBlur={ this.blurSection }  tabIndex="0">
        <div
          className="workout-input select caret"
          onClick={ this.handleSelect }>
            { this.state.selected }
        </div>

        { this.state.isOpen ?
          <ul className="selected-fields">
            { items }
          </ul>
          : null }

      </section>
    );
  }
}

export default DropdownComponent;
