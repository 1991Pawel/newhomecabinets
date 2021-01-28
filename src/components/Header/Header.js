import React from 'react'
import {Navigation} from '../Navigation/Navigation'
import '../Header/Header.scss'
import logo from '../../images/logo.png'


export const Header = () => {
  return (
      <header className="header">
      <div className="logo">
          <img src={logo} alt="logo"/>
      </div>
        <Navigation/>
      </header>
  )
}