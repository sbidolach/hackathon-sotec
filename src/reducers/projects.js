import { RECEIVE_PROJECTS, ADD_PROJECT_SUCCESS } from '../constants/ActionTypes'

export const projects = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return (action.projects) ? action.projects : state
    case ADD_PROJECT_SUCCESS:
      return state.concat(action.project)
    default:
      return state
  }
}
