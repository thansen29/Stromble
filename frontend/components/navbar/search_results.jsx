import React from 'react';
import Navbar from './navbar';
import SearchResultItem from './search_result_item';

class SearchResults extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({
      content: this.props.name
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
    //get the url again? force page to re render?
    // this.props.submitSearch(this.state.content);
  }

  render(){
    let items;
    if(this.props.foundUsers){
      items = this.props.foundUsers.map((user) => {
        return (
          <li key={user.id}>
            <SearchResultItem
              user={user}
              toggleFollow={this.props.toggleFollow}
              currentUserId={this.props.currentUserId}
              search={this.props.search}
              searchType={this.props.searchType}
              name={this.props.name} />
            {/* might need to give fetch users too */}
          </li>
        );
      });
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
