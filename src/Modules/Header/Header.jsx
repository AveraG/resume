import React from 'react'
import Navigation from '../Navigation/Navigation'
import AGLogo from '../../Shared/Images/AGLogo.png'
import './header.scss'

export default function Header() {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img className='logo' src={AGLogo} alt='logo' />
          <h2 className='sub-title'>Where passion meets triumph.</h2>
      </div>
      <Navigation />
    </div>
  )
}
