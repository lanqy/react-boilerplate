import { ADD_PROJECTS, DEL_PROJECTS } from '../actions';

export default function projects(state = [], action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ADD_PROJECTS:
      return [...state,{id: action.id, text: action.text}];
    case DEL_PROJECTS:
      state.splice(action.index, 1);
      return [...state];
    default:
      return state;
  }
}
