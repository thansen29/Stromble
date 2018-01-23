import React from 'react';

class RouteForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: '',
      title: '',
      start_lat: '',
      start_lng: '',
      end_lat: '',
      end_lng: '',
      distance: 0,
      distance_unit: "miles",
      elevation_gain: '0',
      elevation_unit: "meters",
      private: false,
      duration: '0s',
      description: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  componentDidMount(){
    this.setState({
      user_id: this.props.state.user_id,
      start_lat: this.props.state.start_lat,
      start_lng: this.props.state.start_lng,
      end_lat: this.props.state.end_lat,
      end_lng: this.props.state.end_lng,
      distance: this.props.state.distance,
      elevation_gain: this.props.state.elevation_gain,
      duration: this.props.state.duration
    });
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createRoute(this.state).then(() => {
      this.props.closeModal();
      this.props.history.push('/routes');
    });
  }

  handleClose(e){
    e.preventDefault();
    this.props.closeModal();
  }

  handleCheck(){
    this.setState({
      private: !this.state.private
    });
  }

  render(){
    return (
      <section className="route-form">
        <header className="route-form-header">
          <h1>Save</h1>
        </header>

        <main className="route-form-body">
          <div>Enter a name and a description for your route below.</div>


          <div className="input-wrapper-route">
            <label>Route Name (required)</label>
            <input
              className='route-form-input'
              onChange={this.handleChange('title')}
              value={this.state.title} />
            <span className="route-error-message">{this.props.errors.route}</span>
          </div>
          <div className="input-wrapper-route">
            <label>Description</label>
            <textarea
              className="route-form-input"
              onChange={this.handleChange('description')}
              value={this.state.description} />
          </div>

          <label className="route-privacy">
            <div className="privacy">
              <input onClick={this.handleCheck} className="checkbox" type="checkbox" />
              <span>Private</span>
            </div>
          </label>
        </main>

        <footer className="route-buttons">
          <button onClick={this.handleClose} className="route-form-cancel">Cancel</button>
          <button onClick={this.handleSubmit} className="route-form-save">Save</button>
        </footer>

      </section>

    );
  }

}

export default RouteForm;
