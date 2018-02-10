import React from 'react';
import Navbar from './navbar';
import SearchResultItemContainer from './search_result_item_container';
import clone from 'clone';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: '',
      oldSearch: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({
      content: this.props.name,
      oldSearch: this.props.name
    });
    this.props.search(this.props.searchType, this.props.name);
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.search(this.props.searchType, this.state.content);
    this.props.history.push(`?${this.state.content}`);
    this.setState({ oldSearch: this.state.content });
    //get the url again? force page to re render?
    // this.props.submitSearch(this.state.content);
  }

  render(){
    let items;
    if(this.props.foundUsers.length){
      items = this.props.foundUsers.map((user) => {
        return (
          <li key={user.id}>
            <SearchResultItemContainer user={user} />
          </li>
        );
      });
    } else {
      items = <div className="search-space">No athletes with name <span className="bold">{ this.state.oldSearch } </span>found</div>;
    }

    return (
      <section className="background">
        <Navbar />
        <section className="form-container">
          <h1>Athlete Search</h1>
          <form onSubmit={this.handleSubmit} className="search-result-form">
          <input
            type="text"
            className="search-form-input"
            onChange={this.handleChange('content')}
            value={this.state.content} />

          <button className="search-button">Search</button>
          </form>
          <ul className="search-result-list">
            { items }
          </ul>
        </section>

      </section>
    );
  }
}

export default SearchResults;
