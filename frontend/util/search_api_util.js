export const search = (type, text) => {
  return $.ajax({
    method: 'GET',
    url: `api/search/`,
    data: {
      query: text,
      type
    }
  });
};
