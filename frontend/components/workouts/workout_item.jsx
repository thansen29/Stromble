import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';
import LikeIndex from './like_index';
import WorkoutItemContent from './workout_item_content';

const WorkoutItem = (props) => {
  const key = props.workout.key;
  return (
    <section className="workout-item-container">
      <li key={key} className="workout-item">

        <WorkoutItemContent workout={props.workout} />

        <LikeIndex
          workout={props.workout}
          currentUser={props.currentUser}
          isOpen={props.isOpen}
          openModal={props.openModal}
          likeWorkout={props.likeWorkout}
          createComment={props.createComment}
          closeModal={props.closeModal}/>

      </li>
    </section>
  );
};

export default WorkoutItem;
