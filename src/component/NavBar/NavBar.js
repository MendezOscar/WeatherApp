import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                 <div className="nav-wrapper blue">
                    <a href="1" className="brand-logo">WeatherApp</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">

                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;