export const fetchRoutes = (page) => {
  return $.ajax({
    method: 'GET',
    url: 'api/routes',
    data: { page }
  });
};

export const fetchRoute = id => {
  return $.ajax({
    method: 'GET',
    url: `api/routes/${id}`
  });
};

export const createRoute = route => {
  return $.ajax({
    method: 'POST',
    url: 'api/routes',
    data: { route }
  });
};

export const deleteRoute = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/routes/${id}`
  });
};
