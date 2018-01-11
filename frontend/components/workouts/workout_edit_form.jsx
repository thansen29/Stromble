import React from 'react';

class WorkoutEditForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sport: "",
      title: "",
      activity_type: "",
      descripton: "",
      private: false,
      user_id: ''
    };
  }

  componentDidMount(){
    this.setState({
      user_id: this.props.userId,
      title: this.props.state.title,
      sport: this.props.state.sport,
      activity_type: this.props.state.activity_type,
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
    return (
      <div></div>
    );
  }
}

export default WorkoutEditForm;
