let nextProjectId = 0;
let nextAboutId = 0;

export const ADD_PROJECTS = 'ADD_PROJECTS';
export const DEL_PROJECTS = 'DEL_PROJECTS';
export const ADD_ABOUT = 'ADD_ABOUT';
export const DEL_ABOUT = 'DEL_ABOUT';

export function addProject(text){
  return function(dispatch) {
    dispatch({
        type:ADD_PROJECTS,
        id:nextProjectId++,
        text
    });
  }
}

export function delProject(index){
  return function(dispatch){
    dispatch({
        type:DEL_PROJECTS,
        index
    })
  }
}

export function addAbout(text){
  return function(dispatch){
    dispatch({
      type:ADD_ABOUT,
      id:nextAboutId++,
      text
    })
  }
}
export function delAbout(index){
  return function(dispatch){
    dispatch({
        type:DEL_ABOUT,
        index
    })
  }
}
