import _ from 'lodash';
export const checkFollowing = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    if(array[i].followed_id === parseInt(id) || array[i].follower_id === parseInt(id)){
      return true;
    }
  }
  return false;
};

export const toArray = (object) => {
  return _.values(object);
};
