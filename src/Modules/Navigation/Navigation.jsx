import React from 'react'
import './navigation.scss'

export default function Navigation() {
  return (
    <div className='navigation-container'>
      <tab>Home</tab>
      <tab>About Me</tab>
      <tab>The Horses</tab>
      <tab>Schedule a Lesson</tab>
      <tab>Past Olympic Winners</tab>
    </div>
  )
}
