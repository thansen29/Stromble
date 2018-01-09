export const fetchRunDistance = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/total_run_distance'
  });
};

export const fetchRideDistance = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/total_ride_distance'
  });
};

export const fetchLongestDistance = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/longest_distance'
  });
};

export const fetchLongestDuration = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/longest_duration'
  });
};

export const fetchTotalRuns = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/total_runs'
  });
};

export const fetchTotalRides = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/total_rides'
  });
};

export const fetchFastedSpeed = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/fasted_speed'
  });
};
