import React, { useState, useEffect } from 'react'
import './Skill.scss'
import { client } from '../../client'
import SkillCard from './skillCard/SkillCard'

const Skill = () => {

  const [skills, setSkills] = useState([
    {
      detail: ['',],
      imgUrl: {
        asset: {
          _ref: "image-7a7c5978254af47382852e8458cdd8488f21322e-58x46-png",
          _type: "reference"
        },
        _type: "image"
      },
      title: '',
    }
  ])

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setSkills(data)
    });
  }, []);

  return (
    <div className='skill'>
      <div className="wrapper">
        <h1>SKILL</h1>
        <div className="line"></div>
        <div className="skill_card">
          {skills.map((Skill, index) => (
            <SkillCard className='card' data = {Skill} index = {index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill