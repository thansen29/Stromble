export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';

export const openDropdown = (component) => {
  return {
    type: OPEN_DROPDOWN,
    component
  };
};

export const closeDropdown = () => {
  return {
    type: CLOSE_DROPDOWN
  };
};
