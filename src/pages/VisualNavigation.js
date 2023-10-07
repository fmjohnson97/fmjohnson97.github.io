import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// const { PUBLIC_URL } = process.env;

const Contact = () => (
  <Main
    title="Hierarchical Visual Navigation with Latent Topological Maps"
    description=""
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/visualnavigation">Hierarchical Visual Navigation with Latent Topological Maps</Link></h2>
        </div>
      </header>
      <h1> Abstract </h1>
      <p>
        Work in Progress!
      </p>
    </article>
  </Main>
);

export default Contact;
