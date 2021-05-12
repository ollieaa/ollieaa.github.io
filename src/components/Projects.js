import React, {useState} from 'react'
import Slideshow from './Slideshow'
import SingleProject from './SingleProject'

import club1 from '../images/club1.png'
import club2 from '../images/club2.png'
import club3 from '../images/club3.png'
import loose1 from '../images/loose1.png'
import loose2 from '../images/loose2.png'
import loose3 from '../images/loose3.png'
import gitcogs1 from '../images/gitcogs1.png'
import gitcogs2 from '../images/gitcogs2.png'
import gitcogs3 from '../images/gitcogs3.png'
import fund1 from '../images/fund1.png'
import fund2 from '../images/fund2.png'
import fund3 from '../images/fund3.png'

const images = [[loose1, loose2, loose3], [fund1, fund2, fund3], [gitcogs1, gitcogs2, gitcogs3], [club1, club2, club3]]

const title = ['Loose End', 'Fünd', 'Gitcogs', 'Club Undead']

export default function Projects() {

  const [project, updateProject] = useState({})

  

  
  return <section id='projects'>

    <h2>PROJECTS</h2>

    {!project.title &&
    <div id='projectsArea'>
      {images.map((array, index) => {
        return <a href='#projects' key={index}>
          <div className="card slideshow">
            <div className="card-content">
              <div className="content">
                <Slideshow images={array}
                           updateProject={updateProject}
                           title={title[index]}/>
              </div>
            </div>
          </div>
        </a>
      })}
    </div>}

    {project.title &&
      <SingleProject project={project}
                     updateProject={updateProject}/>
    }
  </section>
}