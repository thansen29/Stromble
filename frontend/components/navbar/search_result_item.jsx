import React from 'react';
import { Link } from 'react-router-dom';
import { checkFollowing } from '../../reducers/selectors';


class SearchResultItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFollowing: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({
      isFollowing: checkFollowing(this.props.user.followers, this.props.currentUserId)
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.toggleFollow(this.props.user.id).then(() => {
      this.props.search(this.props.searchType, this.props.name).then(() => {
        this.setState({
          isFollowing: checkFollowing(this.props.user.followers, this.props.currentUserId)
        });
      });
    });
  }

  render(){
    return (
      <main className="search-result-item">

        <div>
          <img className="route-avatar"src={this.props.user.avatarUrl} />
        </div>

        <div className="search-result-wrapper">
          <div>
            <Link to={`/users/${this.props.user.id}`}>
              {this.props.user.fname} {this.props.user.lname}
            </Link>
          </div>

          <button
            onClick={this.handleSubmit}
            className="search-result-follow">
          { this.state.isFollowing ? 'Unfollow' : 'Follow' }
          </button>
          
        </div>
      </main>
    );
  }

}

export default SearchResultItem;
