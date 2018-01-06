import React from 'react';
import Navbar from '../navbar';
const WorkoutShow = ({workout}) => {

  return (
    <section className="background">
      <Navbar />
      <section className="whole-container">
        <section className="show-container">

          <header className="show-header">
            <span className="show-name">Fname Lnameisabitlonger -- </span>
            {workout.activity_type}
            <div className={workout.private ? "fa fa-lock show-locked" : "show-unlocked"}></div>
          </header>

          <section className="show-body">
            <section className="show-leftside">
              <div className="show-datetime">A Time on {workout.date}</div>
              <div className="show-title">{workout.title}</div>
              <div className="show-description">{workout.description}</div>

            </section>

            <section className="show-rightside">

            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default WorkoutShow;
