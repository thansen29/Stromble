import React from 'react';
import Navbar from '../navbar';
const WorkoutShow = ({workout}) => {
  //TODO: put actual first name and last name on
  //parse time and date
  return (
    <section className="background">
      <Navbar />
      <section className="whole-container">
        <button className="show-delete">
          <i class="fa fa-ban" aria-hidden="true"></i>
        </button>
        
        <section className="show-container">

          <header className="show-header">
            <span className="show-name">Fname Lnameisabitlonger -- </span>
            {workout.activity_type}
            <div className={workout.private ? "fa fa-lock show-locked" : "show-unlocked"}></div>
          </header>

          <section className="show-body">
            <section className="show-leftside">
              <div className="show-avatar"></div>
              <section className="show-leftbody">
                <div className="show-datetime">A Time on {workout.date}</div>
                <div className="show-title">{workout.title}</div>
                <div className="show-description">{workout.description}</div>
              </section>
            </section>

            <section className="show-rightside">
              <section className="show-stats">
                <div className="show-statistic">
                  {workout.distance} {workout.distance_unit.substring(0,2)} <br/>
                  <span className="stat-text">Distance</span>
                </div>
                <div className="show-statistic">
                  {workout.duration_hr}:{workout.duration_min}:{workout.duration_s} <br/>
                  <span className="stat-text">Duration</span>
                </div>
                <div className="show-statistic">
                  {workout.elevation} {workout.elevation ? workout.elevation_unit : null}<br/>
                  {workout.elevation ?
                    <span className="stat-text">Elevation</span> : null }
                </div>
              </section>

            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default WorkoutShow;
