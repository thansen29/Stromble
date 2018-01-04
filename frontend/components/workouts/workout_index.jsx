import React from 'react';
import WorkoutForm from './workout_form';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';

const WorkoutIndex = (props) => {
  return (
    <section className="background">
      <Navbar />
      <WorkoutForm />

    </section>
  );
};

export default WorkoutIndex;
