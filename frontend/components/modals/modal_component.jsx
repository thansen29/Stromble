import React from 'react';

class ModalComponent extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="animate-opacity">
        <section className="modal-screen animate-opacity" onClick={ this.props.closeModal }></section>
          { this.props.children }
      </section>
    );
  }
}
export default ModalComponent;
