import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/publications';

const Projects = () => (
  <Main
    title="Publications"
    description="Learn about Faith Johnson's publications."
  >
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/publications">Publications and Projects</Link></h2>
          <p> </p>
          <p>Find my Google Scholar <a href="https://scholar.google.com/citations?user=h2bQ8o4AAAAJ&hl=en">here</a>.</p>
        </div>
      </header>
      {data.map((publications) => (
        <Cell
          data={publications}
          key={publications.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
