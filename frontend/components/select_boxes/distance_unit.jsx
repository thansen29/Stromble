import React from 'react';

const DistanceUnit = () => {

  somehelperfunction(item) {
    this.setState({selected: item});
    this.props.onChange(item);
  }
  let stuff;
  for('elements in array') {
    stuff += (<li onClick="somehelperfunction('key')">curEl</li>)
  }
  return (
    <ul>
      <li key="1">kilometers</li>
      <li key="2">meters</li>
      <li key="3">miles</li>
      <li key="4">yards</li>
    </ul>
  );
};

export default DistanceUnit;
