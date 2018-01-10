import React from 'react';
import RouteMap from './route_map';
import RouteIndex from './route_index';

const Search = (props) => {
  return (
    <section>
      <RouteIndex />
      <RouteMap />
    </section>
  );
};

export default Search;
