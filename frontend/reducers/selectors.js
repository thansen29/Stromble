import _ from 'lodash';
export const checkFollowing = (state, ownProps) => {
  const array = state.session.currentUser.following;
  for (let i = 0; i < array.length; i++) {
    if(array[i].followed_id === parseInt(ownProps.match.params.id)){
      return true;
    }
  }
  return false;
};

export const toArray = (object) => {
  return _.values(object);
};
