import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modals/modal_actions';
import { fetchUsers } from '../../actions/search/search_actions';

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers())
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
    e.preventDefault();
    this.props.history.push(`/athletes/search/?${this.state.content}`);
  }

  render(){
    return (
      <section className="search-component">
        <form onSubmit={this.handleSubmit}>
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

export default withRouter(connect(null, mapDispatchToProps)(NavbarSearch));
