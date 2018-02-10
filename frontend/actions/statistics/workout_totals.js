import * as StatsAPIUtil from '../../util/stats_api_util';
export const RECEIVE_RUN_DISTANCE = 'RECEIVE_RUN_DISTANCE';
export const RECEIVE_RIDE_DISTANCE = 'RECEIVE_RIDE_DISTANCE';
export const RECEIVE_LONGEST_RUN_DISTANCE = 'RECEIVE_LONGEST_RUN_DISTANCE';
export const RECEIVE_LONGEST_RIDE_DISTANCE = 'RECEIVE_LONGEST_RIDE_DISTANCE';
export const RECEIVE_LONGEST_RUN_DURATION = 'RECEIVE_LONGEST_RUN_DURATION';
export const RECEIVE_LONGEST_RIDE_DURATION = 'RECEIVE_LONGEST_RIDE_DURATION';
export const RECEIVE_TOTAL_RUNS = 'RECEIVE_TOTAL_RUNS';
export const RECEIVE_TOTAL_RIDES = 'RECEIVE_TOTAL_RIDES';
export const RECEIVE_FASTED_SPEED = 'RECEIVE_FASTED_SPEED';

export const receiveRunDistance = (distance) => {
  return {
    type: RECEIVE_RUN_DISTANCE,
    distance
  };
};

export const receiveRideDistance = (distance) => {
  return {
    type: RECEIVE_RIDE_DISTANCE,
    distance
  };
};

export const receiveLongestRunDistance = (distance) => {
  return {
    type: RECEIVE_LONGEST_RUN_DISTANCE,
    distance
  };
};

export const receiveLongestRideDistance = (distance) => {
  return {
    type: RECEIVE_LONGEST_RIDE_DISTANCE,
    distance
  };
};

export const receiveLongestRunDuration = (duration) => {
  return {
    type: RECEIVE_LONGEST_RUN_DURATION,
    duration
  };
};

export const receiveLongestRideDuration = (duration) => {
  return {
    type: RECEIVE_LONGEST_RIDE_DURATION,
    duration
  };
};

export const receiveTotalRuns = (total) => {
  return {
    type: RECEIVE_TOTAL_RUNS,
    total
  };
};

export const receiveTotalRides = (total) => {
  return {
    type: RECEIVE_TOTAL_RIDES,
    total
  };
};

export const receiveFastedSpeed = (speed) => {
  return {
    type: RECEIVE_FASTED_SPEED,
    speed
  };
};


export const requestRunDistance = (id) => dispatch => {
  return StatsAPIUtil.fetchRunDistance(id).then((distance) => {
    dispatch(receiveRunDistance(distance));
  });
};

export const requestRideDistance = (id) => dispatch => {
  return StatsAPIUtil.fetchRideDistance(id).then((distance) => {
    dispatch(receiveRideDistance(distance));
  });
};

export const requestLongestRunDistance = (id) => dispatch => {
  return StatsAPIUtil.fetchLongestRunDistance(id).then((distance) => {
    dispatch(receiveLongestRunDistance(distance));
  });
};

export const requestLongestRideDistance = (id) => dispatch => {
  return StatsAPIUtil.fetchLongestRideDistance().then((distance) => {
    dispatch(receiveLongestRideDistance(distance));
  });
};

export const requestLongestRunDuration = (id) => dispatch => {
  return StatsAPIUtil.fetchLongestRunDuration().then((duration) => {
    dispatch(receiveLongestRunDuration(duration));
  });
};

export const requestLongestRideDuration = (id) => dispatch => {
  return StatsAPIUtil.fetchLongestRideDuration(id).then((duration) => {
    dispatch(receiveLongestRideDuration(duration));
  });
};

export const requestTotalRuns = (id) => dispatch => {
  return StatsAPIUtil.fetchTotalRuns(id).then((total) => {
    dispatch(receiveTotalRuns(total));
  });
};

export const requestTotalRides = (id) => dispatch => {
  return StatsAPIUtil.fetchTotalRides(id).then((total) => {
    dispatch(receiveTotalRides(total));
  });
};

export const requestFastedSpeed = (id) => dispatch => {
  return StatsAPIUtil.fetchFastedSpeed(id).then((speed) => {
    dispatch(receiveFastedSpeed(speed));
  });
};
