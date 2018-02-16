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

export const followUser = userToFollowId => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userToFollowId}/follow`
  });
};

export const unfollowUser = userToUnfollowId => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${userToUnfollowId}/unfollow`
  });
};

export const fetchUserFollowers = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}/followers`
  });
};

export const fetchUserFollowing = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}/following`
  });
};

// export const toggleFollow = (otherId) => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `api/follows/toggleFollow/${otherId}`
//   });
// };
