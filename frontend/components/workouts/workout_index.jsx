import React from 'react';
import WorkoutForm from './workout_form';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';

const WorkoutIndex = ({ createWorkout, userId, openDropdown, component, history }) => {
  return (
    <section className="background">
      <Navbar />
      <WorkoutForm
        createWorkout={createWorkout}
        userId={userId}
        openDropdown={openDropdown}
        component={component}
        history={history}
      />

    </section>
  );
};

export default WorkoutIndex;
