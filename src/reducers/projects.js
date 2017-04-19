import { RECEIVE_PROJECTS, ADD_PROJECT } from '../constants/ActionTypes'

export const projects = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return (action.projects) ? action.projects : state
    case ADD_PROJECT:
      return state.concat(action.projects)
    default:
      return state
  }
}
