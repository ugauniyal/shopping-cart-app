import React, { Component } from 'react'

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="https://github.com/ugauniyal">
                    Cart <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
                </a>
            </nav>
        );
    }
}

export default Navbar;