import React from 'react'
import { Land, About, Skill, Portfolio } from '../../component'

const Home = ({ user }) => {

  return (
    <div>
        <Land/>
        <About/>
        <Skill/>
        <Portfolio/>
    </div>
  )
}

export default Home