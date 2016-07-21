import { ADD_ABOUT, DEL_ABOUT } from '../actions';

const initialState =  {
  show: false
};

export default function abouts(state = [], action) {
  switch (action.type) {
    case ADD_ABOUT:
      return [...state,{id: action.id, text: action.text}];
    case DEL_ABOUT:
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
}
