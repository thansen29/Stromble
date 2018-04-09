import React from 'react';

const Headers = (props) => {
  const selected = props.selectedPane;
  const headers = props.panes.map((pane, index) => {
    let klass = '';
    if(index === selected){
      klass = 'active';
    } else {
      if(props.classs){
        klass = props.classs;
      } else {
        klass = 'inactive';
      }
    }
    let title = klass === "active" ?
    <span className={ `${pane.title}` }>{ pane.word }</span>
      : <span className={ `alt-${pane.title}` }>{ pane.word }</span>;

    return (
      <li
        key={ index }
        className={ klass }
        onClick={ props.onTabChosen.bind(null, index) }>
        { title }{' '}
      </li>
    );
  });

  return (
    <ul className='tab-header'>
      { headers }
    </ul>
  );
};

export default Headers;
