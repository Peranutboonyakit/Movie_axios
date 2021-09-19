import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import Yellow from "../../images/Yellow.jpg"

const Header = () => {
    return (
        <div className="header">
            <Link to="/" style={{textDecoration:"none"}}>
                <div className="header__logo">Movie App</div>
            </Link>
            <div className="header__user">
                <img src={Yellow} alt="user"/>
            </div>

        </div>
    )
}

export default Header
