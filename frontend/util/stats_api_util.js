export const fetchRunDistance = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/total_run_distance/${id}`
  });
};

export const fetchRideDistance = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/total_ride_distance/${id}`
  });
};

export const fetchLongestRunDistance = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/longest_run_distance/${id}`
  });
};

export const fetchLongestRideDistance = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/longest_ride_distance/${id}`
  });
};

export const fetchLongestRunDuration = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/longest_run_duration/${id}`
  });
};

export const fetchLongestRideDuration = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/longest_ride_duration/${id}`
  });
};

export const fetchTotalRuns = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/total_runs/${id}`
  });
};

export const fetchTotalRides = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/total_rides/${id}`
  });
};

export const fetchFastedSpeed = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/fasted_speed/${id}`
  });
};
