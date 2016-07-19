import { ABOUT_ACTION, ANOTHER_ABOUT_ACTION } from '../actions';

const initialState =  {
  show: false
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case ABOUT_ACTION:
      return {
        ...state,
        show: true
      };
    case ANOTHER_ABOUT_ACTION:
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
}
