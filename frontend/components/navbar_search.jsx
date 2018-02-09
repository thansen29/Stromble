import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modals/modal_actions';

// const mapStateToProps = state => {
//   debugger
//   return {
//     isOpen: state.ui.modal['isOpen']
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

class NavbarSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e){
    debugger
    e.preventDefault();
    this.props.submitSearch(this.state.content);
  }

  render(){
    return (
      <section className="search-component">
        <form>
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            onChange={this.handleChange('content')} />
          <span onClick={this.handleSubmit} className="search-icon"></span>
          <span onClick={this.props.closeModal} className="close-search">&times;</span>
        </form>
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(NavbarSearch);
