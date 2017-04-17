import React from 'react'
import axios from 'axios'
import Map from './Map'
import Header from './Header'
import Footer from './Footer'
import ProjectSideBar from './ProjectSideBar'

class Home extends React.Component {

  static defaultProps = {
  }

  constructor(props) {
      super(props);
      this.state = {projects: []};
  }

  componentDidMount() {
      axios.get('/api/projects')
      .then((res) => this.setState({ projects: res.data }))
      .catch((e) => console.log(e))
  }

  render () {

    const styleMain = {minHeight: '595px'}

    const { projects } = this.state

    return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Header />
      <main className="mdl-layout__content">
        <div className="page-content">
            <div className="mdl-grid" style={styleMain}>
                <div className="mdl-cell mdl-cell--3-col">
                    <ProjectSideBar projects={projects} />
                </div>
                <div className="mdl-cell mdl-cell--9-col">
                    <Map projects={projects} />
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
    )
  }

}

export default Home
