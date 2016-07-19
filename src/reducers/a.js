import { PROJECT_ACTION, ANOTHER_PROJECT_ACTION } from '../actions';

const initialState =  {
  data: [],
  projects:[]
};

export default function SomeReducers(state = initialState, action) {
  switch (action.type) {
    case PROJECT_ACTION:
      return {
        ...state, data: action.payload.body.data
      };
    case ANOTHER_PROJECT_ACTION:
      var arr =[];
      for( var i in action.payload ) {
        if (action.payload.hasOwnProperty(i)){
          arr.push(action.payload[i]);
        }
      }
      return {
        ...state, projects: arr
      };
    default:
      return state;
  }
}
