export const fetchUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const updateUser = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${formData.get('id')}`,
    contentType: false,
    processData: false,
    data: formData
  });
};

export const toggleFollow = (otherId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/follows/toggleFollow/${otherId}`
  });
};
