import React from 'react';

class WorkoutEditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sport: "",
      title: "",
      activity_type: "",
      description: "",
      private: false,
      user_id: ''
    };
  }

  componentDidMount(){
    this.setState({
      user_id: this.props.userId,
      title: this.props.title,
      sport: this.props.sport,
      description: this.props.description,
      activity_type: this.props.activityType,
    });
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.closeModal();
    this.props.updateWorkout(this.state);
  }

  render(){
    return (
      <section>
        <section className="workout-edit-form">
          <header className="workout-form-header">
            <h1>Edit Activity</h1>
            <button className="edit-form-save" onClick={this.handleSubmit}>Save & View Activity</button>
          </header>

          <main className="workout-edit-body">

            <section className="edit-toprow">
              <div className="input-wrapper-edit">
                <label>Sport</label>
                <input className="edit-form-input edit-sport"
                  onChange={this.handleChange('sport')}
                  value={this.state.sport}/>
              </div>
              <div className="input-wrapper-edit">
                <label>{this.state.sport} Type</label>
                <input className="edit-form-input"
                  onChange={this.handleChange('activity_type')}
                  value={this.state.sport}/>
              </div>
            </section>

            <div className="input-wrapper-edit">
              <label>Title</label>
              <input
                className="edit-form-input"
                onChange={this.handleChange('title')}
                value={this.state.title}/>
            </div>

            <div className="input-wrapper-edit">
              <label>Description</label>
              <textarea
                className='edit-form-input'
                onChange={this.handleChange('description')}
                value={this.state.description}/>
            </div>
          </main>
        </section>
      </section>
    );
  }
}

export default WorkoutEditForm;
