import React from 'react';
//this class is just for the top tabs
const Headers = (props) => {
  const selected = props.selectedPane;
  const headers = props.panes.map((pane, index) => {
    let klass = '';
    if(index === selected){
      klass = 'active';
    } else {
      klass = 'inactive';
    }
    // let title = pane.title;
    let title =  klass === "active" ?
    <span className={`${pane.title}`}></span>
      : <span className={`alt-${pane.title}`}></span>;




    return (
      <li
        key={index}
        className={klass}
        onClick={props.onTabChosen.bind(null, index)}>
        {title}{' '}
      </li>
    );
  });

  return (
    <ul className='tab-header'>
      {headers}
    </ul>
  );
};

export default Headers;
