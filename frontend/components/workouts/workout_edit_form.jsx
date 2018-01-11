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
    this.props.updateWorkout(this.state);
  }

  render(){
    debugger
    return (
      <div></div>
    );
  }
}

export default WorkoutEditForm;
