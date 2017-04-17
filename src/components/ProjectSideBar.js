import React from 'react'
import { compose, withState } from 'recompose'
import AddProjectForm from './AddProjectForm'

const enhance = compose(
  withState('modal', 'setModal')
)

class ProjectSideBar extends React.Component {

  render() {
    const {projects, modal, setModal } = this.props

    return (
    <div>
        <form action="#">
            <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" id="search"/>
                <label className="mdl-textfield__label" htmlFor="search">Search...</label>
            </div>
        </form>
        <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            onClick={() => setModal('addProject')}>
          Add charity project
        </button>
        <AddProjectForm open={(modal === 'addProject')} handleClose={() => setModal(null)} />
        <ul className="mdl-list">
        { Object.keys(projects).map((key, index) => {
            const p = projects[key]
            return (
                <li className="mdl-list__item mdl-list__item--two-line" key={ p.id }>
                  <a className="mdl-list__item-primary-content" href={ '/project/' + p.id }>
                    <i className="material-icons mdl-list__item-avatar">{ p.icon }</i>
                    <span>{ p.name }</span>
                    <span className="mdl-list__item-sub-title">Funds: { p.funds }</span>
                  </a>
                </li>
            )
        })}
        </ul>
    </div>
    );
  }
}

export default enhance(ProjectSideBar)
