import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Thumbnail from './Thumbnail.js';
import '../App.css';
import cryptaul from '../images/cryptaul.png'
import bedandbones from '../images/bedandbones.png'
import whacamole from '../images/whacamole.png'
import Cryptaulpage from '../projects/cryptaul'
import Bedandbonespage from '../projects/bedandbones'
import Whacamolepage from '../projects/whacamole'

function Projects(props) {
  return (
    <div className="projects">
      <h1>Projects</h1>
        <div className="project-grid">
        <Thumbnail
          link="cryptaul"
          image={cryptaul}
          title="Cryptaul"
          category="Ruby on Rails Web App"
        />
        <Thumbnail
          link="bedandbones"
          image={bedandbones}
          title="Bed & Bones"
          category="Ruby on Rails Web App"
        />
        <Thumbnail
          link="whacamole"
          image={whacamole}
          title="Whac-a-mole"
          category="React game"
        />
        <Routes>
          <Route path="cryptaul" element={<Cryptaulpage />} />
          <Route path="bedandbones" element={<Bedandbonespage />} />
          <Route path="whacamole" element={<Whacamolepage />} />
        </Routes>
        </div>
    </div>
  )
}

export default Projects;
