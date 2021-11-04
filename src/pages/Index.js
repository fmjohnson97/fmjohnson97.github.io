import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Faith Johnson's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About Me</Link></h2>
          <p> </p>
        </div>
      </header>
      <p>
        I am a third year Ph.D. student at Rutgers Univeristy in the ECE department,
        where I focus on the intersection of computer vision, machine learning, robotics,
        and their impact on society. I&apos;m an NSF Fellow on the
        <a href="https://robotics.rutgers.edu/"> SOCRATES NRT</a>.
        My advisor is <a href="https://www.ece.rutgers.edu/~kdana/"> Professor Kristin Dana</a>.
        Before that, I got my bachelor&apos;s degree in Electrical and Computer
        Engineering also from Rutgers University.
      </p>
      <h3> Research </h3>
      <p>
        My current research focus deals with socially cognizant robotic navigation,
        social behavior characterization, and human-robot interaction under the
        <a href="https://robotics.rutgers.edu/"> SOCRATES NSF NRT</a>. Stay tuned
        for more details!
      </p>
      <p>
        My previous work deals with autonomous vehicle steering angle prediction.
        We created a network,
        <a href="https://fmjohnson97.github.io/feudalsteering/"> Feudal Steering</a>,
        that uses hierarchical networks to exploit the temporal abstraction inherent
        in driving tasks to make predicting steering angles from dash-cam images easier.
      </p>
      <h3> Internships </h3>
      <p>
        I&apos;ve had the opportunity to work on several different
        projects with other teams. At <a href="https://www.sri.com/computer-vision/"> SRI International </a>
        in 2020, I created baseline agents for the
        <a href="https://www.darpa.mil/program/machine-common-sense"> DARPA Machine Common Sense </a>
        project.
      </p>
      <p>
        At <a href="https://www.nvidia.com/en-us/research/#research-area"> Nvidia </a> in 2021,
        I created an oracle network to produce semantic segmentation pseudo-labels for
        previously unseen data to reduce overall datatset labeling costs.
      </p>
      <h3> Teaching </h3>
      <p>
        I&apos;ve TA-ed for the following courses in the Rutgers ECE department:
        <ul>
          <li>Professionalism and Ethics - S&apos;20</li>
          <li>Probability and Random Processes - S&apos;21</li>
        </ul>
      </p>
    </article>
  </Main>
);

export default Index;
