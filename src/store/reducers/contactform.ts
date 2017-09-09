import { STORE_CONTACT_FORM_DETAILS, CLEAR_CONTACT_FORM_DETAILS } from '../actions';

const contactform = (state = {}, action) => {
  switch (action.type) {
    case STORE_CONTACT_FORM_DETAILS:
      return { ...state, details: action.formData };
    case CLEAR_CONTACT_FORM_DETAILS:
      return { ...state, details: null };
    default:
      return state;
  }
};

export default contactform;