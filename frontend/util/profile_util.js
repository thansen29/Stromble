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
  $.ajax({
    method: 'PATCH',
    url: `api/users/${userToFollowId}/follow`
  });
};

export const unfollowUser = userToUnfollowId => {
  $.ajax({
    method: 'PATCH',
    url: `api/users/${userToUnfollowId}/unfollow`
  });
};

export const fetchUserFollowers = id => {
  $.ajax({
    method: 'GET',
    url: `api/users/${id}/followers`
  });
};

export const fetchUserFollowing = id => {
  $.ajax({
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
