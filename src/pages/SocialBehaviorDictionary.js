import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// const { PUBLIC_URL } = process.env;

const Contact = () => (
  <Main
    title="Learning a Pedestrian Social Behavior Dictionary"
    description=""
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/socialbehaviordictionary">Learning a Pedestrian Social Behavior Dictionary</Link></h2>
          <p> <a href="https://arxiv.org/abs/2212.01426">Click here </a>
            to read our paper.
          </p>
        </div>
      </header>
      <h1> Abstract </h1>
      <p>
        Understanding pedestrian behavior patterns is a key component to building autonomous
        agents that can navigate among humans. We seek a learned dictionary of pedestrian
        behavior to obtain a semantic description of pedestrian trajectories. Supervised
        methods for dictionary learning are impractical since pedestrian behaviors may be
        unknown a priori and the process of manually generating behavior labels is prohibitively
        time consuming. We instead utilize a novel, unsupervised framework to create a taxonomy
        of pedestrian behavior observed in a specific space. First, we learn a trajectory latent
        space that enables unsupervised clustering to create an interpretable pedestrian behavior
        dictionary. We show the utility of this dictionary for building pedestrian
        behavior maps to visualize space usage patterns and for computing the distributions of
        behaviors. We demonstrate a simple but effective trajectory prediction by conditioning on
        these behavior labels. While many trajectory analysis methods rely on RNNs or transformers,
        we develop a lightweight, low-parameter approach and show results
        comparable to SOTA on the ETH and UCY datasets.
      </p>
    </article>
  </Main>
);

export default Contact;
