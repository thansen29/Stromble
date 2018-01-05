import * as WorkoutAPIUtil from '../../util/workout_api_util';
export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_WORKOUT = 'RECEIVE_WORKOUT';
export const REMOVE_WORKOUT = 'REMOVE_WORKOUT';
export const RECEIVE_WORKOUT_ERRORS = 'RECEIVE_WORKOUT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const SHOW_DROPDOWN = 'SHOW_DROPDOWN;';
export const HIDE_DROPDOWN = 'HIDE_DROPDOWN;';

export const receiveWorkouts = workouts => {
  return {
    type: RECEIVE_WORKOUTS,
    workouts
  };
};

export const receiveWorkout = workout => {
  return {
    type: RECEIVE_WORKOUT,
    workout
  };
};

export const removeWorkout = id => {
  return {
    type: REMOVE_WORKOUT,
    workoutId: id
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_WORKOUT_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const showDropdown = () => {
  return {
    type: SHOW_DROPDOWN
  };
};

export const hideDropdown = () => {
  return {
    type: HIDE_DROPDOWN
  };
};



export const requestWorkouts = () => dispatch => {
  return WorkoutAPIUtil.fetchWorkouts().then((workouts) => {
    dispatch(receiveWorkouts(workouts));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const requestWorkout = id => dispatch => {
  return WorkoutAPIUtil.fetchWorkout(id).then((workout) => {
    dispatch(receiveWorkout(workout));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const createWorkout = workout => dispatch => {
  return WorkoutAPIUtil.createWorkout(workout).then((response) => {
    dispatch(receiveWorkout(response));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const updateWorkout = workout => dispatch => {
  debugger
  return WorkoutAPIUtil.updateWorkout(workout).then((response) => {
    dispatch(receiveWorkout(response));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};

export const deleteWorkout = id => dispatch => {
  return WorkoutAPIUtil.deleteWorkout(id).then(() => {
    dispatch(removeWorkout(id));
  }, (errors) => {
    dispatch(receiveErrors(errors));
  });
};