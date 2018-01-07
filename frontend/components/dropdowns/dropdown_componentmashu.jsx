import React from 'react';

const DropdownComponentmashu = (props) => {
    if(props.component){
      return null;
    } else {
      return (
        <div className="dropdown-backdrop" onClick={props.hideDropdown}>
          <div className="dropdown" onClick={ (e) => e.stopPropagation() }>
            {props.component}
          </div>
        </div>
      );
    }
};

export default DropdownComponentmashu;
