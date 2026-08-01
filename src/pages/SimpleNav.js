import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// const { PUBLIC_URL } = process.env;

const Contact = () => (
  <Main
    title="FeudalNav: A Simple Framework for Visual Navigation"
    description=""
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/simpleNav">FeudalNav: A Simple Framework for Visual Navigation</Link></h2>
          <p> <a href="https://arxiv.org/pdf/2602.06974">Click here </a>
            to read our paper.
          </p>
        </div>
      </header>
      <h1> Abstract </h1>
      <p>
        Visual navigation for robotics is inspired by the human ability to
        navigate environments using visual cues and memory, eliminating the
        need for detailed maps. In unseen, unmapped, or GPS-denied settings,
        traditional metric map-based methods fall short, prompting a shift
        toward learning-based approaches with minimal exploration. In this
        work, we develop a hierarchical framework1 that decomposes the
        navigation decision-making process into multiple levels. Our method
        learns to select subgoals through a simple, transferable waypoint
        selection network. A key component of the approach is a latent-space
        memory module organized solely by visual similarity, as a proxy for
        distance. This alternative to graph-based topological representations
        proves sufficient for navigation tasks, providing a compact, light-weight,
        simple-to-train navigator that can find its way to the goal in novel
        locations. We show competitive results with a suite of SOTA methods
        in Habitat AI environments without using any odometry in training or
        inference. An additional contribution leverages the interpretability
        of the framework for interactive navigation. We consider the
        question: how much direction intervention/interaction is needed
        to achieve success in all trials? We demonstrate that even minimal
        human involvement can significantly enhance overall navigation performance.
      </p>
    </article>
  </Main>
);

export default Contact;
