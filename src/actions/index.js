let nextProjectId = 0;
let nextAboutId = 0;

export const ADD_PROJECTS = 'ADD_PROJECTS';
export const DEL_PROJECTS = 'DEL_PROJECTS';
export const ADD_ABOUT = 'ADD_ABOUT';
export const DEL_ABOUT = 'DEL_ABOUT';

export const addProject = (text) => {
  return {
    type:ADD_PROJECTS,
    id:nextProjectId++,
    text
  }
}

export const delProject = (index) => {
  return {
    type:DEL_PROJECTS,
    index
  }
}

export const addAbout = (text) => {
    return {
      type:ADD_ABOUT,
      id:nextAboutId++,
      text
    }
}

export const delAbout = (index) => {
    return {
      type:DEL_ABOUT,
      index
    }
}
