import _ from 'lodash';
export const checkFollowing = (array, id) => {
  if(array){
    for (let i = 0; i < array.length; i++) {
      if(array[i].followed_id === parseInt(id) ||
      array[i].follower_id === parseInt(id)){
        return true;
      }
    }
    return false;
  }
};

export const toArray = (object) => {
  return _.values(object);
};

export const isFollowing = (following, followers) => {
  if(following){
    for (let i = 0; i < following.length; i++) {
      if(followers.includes(following[i])){
        return true;
      }
    }
    return false;
  }
};
