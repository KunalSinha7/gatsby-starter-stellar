import React from 'react'

import icon from '../assets/images/icon.png';
import parkingicon from '../assets/images/parking-icon.gif'

const Header = (props) => (
    <header id="header" className="alt">
        <h1>Slot</h1>
        <span className="logo"><img src={parkingicon} alt="" width="95px" height="95px" marginTop="2px" /></span>
        <p>Parking made easy <br/> For the people, by the people</p>
    </header>
)

export default Header
