import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Layout.css";
import ChangeLang from '../../translationConfig/ChangeLang';
import { useTranslation } from 'react-i18next';

const Layout = () => {
 let {t} =  useTranslation('common')
  return (
    <div className='main-lang'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{t("ProjectHeading")}</a>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">{t("Home")}</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

  <nav className='right-nav'>
    <ul>
      <li>
        <ChangeLang />
      </li>
    </ul>
  </nav>
  </div>
  )
}

export default Layout