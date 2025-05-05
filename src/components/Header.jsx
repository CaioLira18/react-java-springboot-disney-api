import React from 'react'
import { Link } from 'react-router-dom'
import logo  from '../../public/images/Disney_logo.png'

const Header = () => {
  return (
        <div className="header">
        <Link to="/">
            <img src={logo} alt="Logo Disney" />
        </Link>

        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Franquias</a></li>
            <li><a href="/">Personagens</a></li>
            <li><a href="/">Perfil</a></li>
        </ul>
</div>
  )
}

export default Header
