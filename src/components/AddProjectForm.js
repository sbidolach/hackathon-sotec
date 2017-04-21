import React from 'react'
import Modal from 'react-modal'
import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import { addProject } from '../actions'
import Input from './Input'
import TextField from './TextField'

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        padding: '5px',
        transform: 'translate(-50%, -50%)'
    },
    overlay : {
      zIndex: 4
    }
}

const enhance = compose(
  reduxForm({
    form: 'addProject',
    onSubmit: (values, dispatch, ownProps) => {
            dispatch(addProject(values, () => {
                dispatch(ownProps.reset('addProject'))
                ownProps.handleClose()
            }))
        }
    })
)

class AddProjectForm extends React.Component {

    render() {
        const { handleClose, open, handleSubmit } = this.props

        return (
            <Modal
              isOpen={open}
              onRequestClose={handleClose}
              style={customStyles}
              contentLabel="Add Project"
            >
            <form onSubmit={handleSubmit}>
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header sb-modal-form">
                  <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                      <span className="mdl-layout-title">Add Project</span>
                      <div className="mdl-layout-spacer"></div>
                    </div>
                  </header>
                  <main className="mdl-layout__content">
                    <div className="page-content">
                        <Field name="name" label="Project Name" component={Input} />
                        <Field name="description" label="Description" component={TextField} />
                    </div>
                  </main>
                  <footer className="sb-footer">
                    <div className="mdl-mega-footer__bottom-section">
                      <ul className="mdl-mega-footer__link-list">
                        <li><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={handleClose}>Cancel</button></li>
                        <li><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" type="submit">Add</button></li>
                      </ul>
                    </div>
                  </footer>
                </div>
            </form>
            </Modal>
        )
    }
}

export default enhance(AddProjectForm)
