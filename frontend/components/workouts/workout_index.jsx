import React from 'react';
import WorkoutForm from './workout_form';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';

const WorkoutIndex = ({ createWorkout, userId, showDropdown, isOpen, history }) => {
  return (
    <section className="background">
      <Navbar />
      <WorkoutForm
        createWorkout={createWorkout}
        userId={userId}
        showDropdown={showDropdown}
        isOpen={isOpen}
        history={history}
      />

    </section>
  );
};

export default WorkoutIndex;
