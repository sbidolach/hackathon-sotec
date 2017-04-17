import React from 'react'

class Header extends React.Component {

  static defaultProps = {
  }

  render () {
    const styleLogo = {paddingLeft: '15px'}

    return (
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row" style={styleLogo}>
        <span className="mdl-layout-title"><a href="/">Charity organizations</a></span>
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation mdl-layout--large-screen-only">
          <a className="mdl-navigation__link" href="/about">About</a>
          <a className="mdl-navigation__link" href="/help">Help</a>
          <a className="mdl-navigation__link" href="/contact">Contact</a>
        </nav>
      </div>
    </header>
    )
  }

}

export default Header
