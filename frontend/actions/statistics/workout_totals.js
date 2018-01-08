import * as StatsAPIUtil from '../../util/stats_api_util';
export const RECEIVE_RUN_DISTANCE = 'RECEIVE_RUN_DISTANCE';
export const RECEIVE_RIDE_DISTANCE = 'RECEIVE_RIDE_DISTANCE';
export const RECEIVE_LONGEST_DISTANCE = 'RECEIVE_LONGEST_DISTANCE';
export const RECEIVE_LONGEST_DURATION = 'RECEIVE_LONGEST_DURATION';
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

export const receiveLongestDistance = (distance) => {
  return {
    type: RECEIVE_LONGEST_DISTANCE,
    distance
  };
};

export const receiveLongestDuration = (duration) => {
  return {
    type: RECEIVE_LONGEST_DURATION,
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


export const requestRunDistance = () => dispatch => {
  return StatsAPIUtil.fetchRunDistance().then((distance) => {
    dispatch(receiveRunDistance(distance));
  });
};

export const requestRideDistance = () => dispatch => {
  return StatsAPIUtil.fetchRideDistance().then((distance) => {
    dispatch(receiveRideDistance(distance));
  });
};

export const requestLongestDistance = () => dispatch => {
  return StatsAPIUtil.fetchLongestDistance().then((distance) => {
    dispatch(receiveLongestDistance(distance));
  });
};

export const requestLongestDuration = () => dispatch => {
  return StatsAPIUtil.fetchLongestDuration().then((duration) => {
    dispatch(receiveLongestDuration(duration));
  });
};

export const requestTotalRuns = () => dispatch => {
  return StatsAPIUtil.fetchTotalRuns().then((total) => {
    dispatch(receiveTotalRuns(total));
  });
};

export const requestTotalRides = () => dispatch => {
  return StatsAPIUtil.fetchTotalRides().then((total) => {
    dispatch(receiveTotalRides(total));
  });
};

export const requestFastedSpeed = () => dispatch => {
  return StatsAPIUtil.fetchFastedSpeed().then((speed) => {
    dispatch(receiveFastedSpeed(speed));
  });
};
