import React from 'react';
import WorkoutItemContent from './workout_item_content';
import LikeIndex from './likes/like_index';

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
          closeModal={props.closeModal}
          deleteComment={props.deleteComment}/>

      </li>
    </section>
  );
};

export default WorkoutItem;
