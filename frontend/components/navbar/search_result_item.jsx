import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultItem = ({user}) => {
  return (
    <main className="search-result-item">
      <div>
        <img className="route-avatar"src={user.avatarUrl} />
      </div>
      <div className="search-result-wrapper">
        <div>
          <Link to={`/users/${user.id}`}>{user.fname} {user.lname}</Link>
        </div>
        <button className="search-result-follow">Follow</button>
      </div>
    </main>
  );
};

export default SearchResultItem;
