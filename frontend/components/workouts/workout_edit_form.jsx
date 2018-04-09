import React from 'react';
import DropdownComponent from '../dropdowns/dropdown_component';

class WorkoutEditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sport: "",
      title: "",
      activity_type: "",
      description: "",
      private: false,
      user_id: '',
      id: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }

  componentWillMount(){
    this.setState({
      user_id: this.props.userId,
      title: this.props.title,
      sport: this.props.sport,
      description: this.props.description,
      activity_type: this.props.activityType,
      id: this.props.id,
      private: this.props.private
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

  handleSelection(field){
    return e => {
      this.setState({ [field]: e });
    };
  }

  handleCheck(){
    this.setState({
      private: !this.state.private
    });
  }

  render(){
    let description;
    if(this.state.description === null){
      description = "";
    } else {
      description = this.state.description;
    }

    return (
      <section>
        <section className="workout-edit-form">
          <header className="workout-form-header">
            <h1>Edit Activity</h1>
            <button className="edit-form-save" onClick={ this.handleSubmit }>Save & View Activity</button>
          </header>

          <main className="workout-edit-body">

            <section className="edit-toprow">
              <div className="input-wrapper-edit">
                <label>Sport</label>
                <DropdownComponent
                  items={['Run', 'Ride']}
                  onChange={ this.handleSelection('sport') }
                  initValue={ this.state.sport }
                  />
              </div>
              <div className="input-wrapper-edit">
                <label>{ this.state.sport } Type</label>
                <DropdownComponent
                  items={['Race', 'Workout']}
                  onChange={ this.handleSelection('activity_type') }
                  initValue={ this.state.activity_type }
                  />
              </div>
            </section>

            <div className="input-wrapper-edit">
              <label>Title</label>
              <input
                className="edit-form-input"
                onChange={ this.handleChange('title') }
                value={ this.state.title } />
            </div>

            <div className="input-wrapper-edit">
              <label>Description</label>
              <textarea
                className='edit-form-input'
                onChange={ this.handleChange('description') }
                value={ description } />
            </div>
          </main>

          <div className="edit-form-privacy">
            <label>
              <div className="privacy">
                <input onClick={ this.handleCheck } className="checkbox" type="checkbox" defaultChecked={ this.state.private } />
                <span>Private</span>
              </div>
            </label>
          </div>
        </section>
      </section>
    );
  }
}

export default WorkoutEditForm;
