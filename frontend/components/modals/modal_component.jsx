import React from 'react';

class ModalComponent extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <section className="modal-screen"></section>
          { this.props.children }
      </section> 
    );
  }
}
export default ModalComponent;
