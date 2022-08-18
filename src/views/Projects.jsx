import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div>
      <h1>My projects</h1>
      <p>I have separated my projects into two categories: games I have designed and developed, and applications I have programmed.</p>
      <button><Link to="/projects/apps">See apps project</Link></button>
     <button><Link to="/projects/games">See games project</Link></button>
     <Outlet/>
    </div>
  )
}
