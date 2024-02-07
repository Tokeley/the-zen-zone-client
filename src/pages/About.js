import React from 'react'
import { useNavbarHeightContext } from '../hooks/useNavbarHeightContext'

const About = () => {
  const {navHeight} = useNavbarHeightContext()
  return (
    <span className="text-6xl">ABOUT</span>
  )
}

export default About