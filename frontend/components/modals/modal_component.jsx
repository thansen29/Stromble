import React from 'react';

class ModalComponent extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <section className="modal-screen" onClick={this.props.closeModal}></section>
          { this.props.children }
      </section>
    );
  }
}
export default ModalComponent;
