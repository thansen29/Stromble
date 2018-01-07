import React from 'react';

class DropdownComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = { isOpen: false, selected: this.props.initValue };
    this.handleSelect = this.handleSelect.bind(this);
    this.registerSection = this.registerSection.bind(this);
    this.blurSection = this.blurSection.bind(this);
    this.sectionElement = null;
  }

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
          className="workout-input select caret"
          onClick={this.handleSelect}>
            {this.state.selected}
        </div>

        { this.state.isOpen ?
          <ul className="selected-fields">
            {items}
          </ul>
          : null }

      </section>
    );
  }
}

export default DropdownComponent;
