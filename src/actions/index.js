import server from '../api/server'
import * as types from '../constants/ActionTypes'

export const getAllProjects = () => dispatch => {
  server.getProjects((ex, projects) => {
    dispatch({
      type: types.RECEIVE_PROJECTS,
      projects
    })
  })
}

export const addProject = projects => (dispatch, getState) => {
  const { projects } = getState()

  server.addProject(projects, (ex, projects) => {
    dispatch({
      type: types.ADD_PROJECT_SUCCESS,
      projects
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.ADD_PROJECT_FAILURE, projects })
  })
}
