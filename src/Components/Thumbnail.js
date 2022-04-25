import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Thumbnail(props) {
  return (
    <div className="project"
    style={{
      backgroundImage: `url(${props.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      <Link to={props.link}>
        {/* <div className="project-image"> */}
          {/* <img src={props.image} alt="Project" /> */}
        {/* </div> */}
        <div class="project-title">
          <h2>{props.title}</h2>
          <h3>{props.category}</h3>
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
