import React, {useState, useEffect} from 'react'
import Slideshow from './Slideshow'

export default function SingleProject(props) {

  const images = props.project.images
  const [data, updateData] = useState({
    title: props.project.title,
    description: '',
    url: '',
    github: ''
  })

  useEffect(()=> {
    if (data.title === 'Loose End') {
      updateData({
        ...data,
        description: 'A platorm for city visitors to browse local attractions and arrange meetups, made using the MERN stack. I created and styled all of the meetup related pages, along with their respective models, schemas, and controllers on the back-end. I also created the navbar, and helped to set up the back-end environment.',
        url: 'https://loose-end.herokuapp.com/',
        github: 'https://github.com/ollieaa/project-3'
      })
    } else if (data.title === 'Gitcogs') {
      updateData({
        ...data,
        description: 'A simple music database drawing data from the AudioDB API, displaying artist information and trending tracks across a selection of countries. This was a single page React app made over 48 hours; using Mapbox GL, React-Redux, and Bulma for styling. I took ownership of the artist data page, as well as the Youtube player widget, and implementing Redux to store global state variables.',
        url: 'https://lebaneseblonde.github.io/project_2/',
        github: 'https://github.com/LebaneseBlonde/project_4'
      })
    } else if (data.title === 'Fünd') {
      updateData({
        ...data,
        description: 'A full-stack crowd funding platform for local independent businesses; made with a Python, Flask, and PostgreSQL back-end, and a React front-end. I created the models, serialisers, controllers and seed data for the business related aspects on the back end. I made the user related pages on the front-end, along with the homepage, business search, and some of the fund page sections.',
        url: 'https://upkeep-p4.herokuapp.com/',
        github: 'https://github.com/LebaneseBlonde/project_4'
      })
    } else if (data.title === 'Club Undead') {
      updateData({
        ...data,
        description: "A grid based game made using HTML, CSS, and vanilla JavaScript, modelled on the classic game 'Space Invaders'. My first ever coding project, this was a great opportunity to get comfortable with the programming fundamentals taught early on in the course at General Assembly.",
        url: 'https://ollieaa.github.io/project-1/',
        github: 'https://github.com/ollieaa/project-1'
      })
    }
  }, [])
  

  return <div id='singleProjectArea'>
    <div className="card singleProject">
      <div className="card-content">
        <div className="content" id='projectCard'>
          <div id='singleSlideshow'>
            <Slideshow images={images} 
                       updateProject={props.updateProject}/>
          </div>
          <div id='projectDetails'>
            <div id='projectText'>
              <h2>{data.title}</h2>
              <p id='singleText'>{data.description}</p>
            </div>
            <div id='projectLinks'>
              <a href={data.url} target='_blank'><button className='button is-link'>View online</button></a>
              <a href={data.github} target='_blank'><button className='button is-link'>View on Github</button></a>
            </div>
          </div>     
        </div>
      </div>
    </div>
  </div>

}