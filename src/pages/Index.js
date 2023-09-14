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
        I am a fifth year Ph.D. student at Rutgers Univeristy in the ECE department,
        where I focus on the intersection of computer vision, machine learning, robotics,
        and their impact on society. I&apos;m currently an NSF Fellow on the Reality Aware Networks
        project. I used to be an NSF Fellow on the
        <a href="https://robotics.rutgers.edu/"> SOCRATES NRT</a>. My advisor is
        <a href="https://www.ece.rutgers.edu/~kdana/"> Professor Kristin Dana</a>.
        Before this, I got my bachelor&apos;s degree in Electrical and Computer
        Engineering also from Rutgers University.
      </p>
      <h3> Research </h3>
      <p>
        My current research focus deals with socially cognizant robotic navigation and
        latent topological maps.
      </p>
      <p>
        My previous work pertained to
        social behavior characterization and human-robot interaction under the
        <a href="https://robotics.rutgers.edu/"> SOCRATES NSF NRT</a>. We created a series of networks that
        <a href="/socialbehaviordictionary"> learned a social behavior dictionary </a>
        from aerial images of pedestrians. With this dictionary, we analyzed space usage and social
        behavior patterns,as well as simplifying the pedestrian trajectory prediction problem in
        order to use simple MLPs to achieve near SOTA results.
      </p>
      <p>
        My work with autonomous vehicle steering angle prediction.
        We created a network,
        <a href="/feudalsteering"> Feudal Steering</a>,
        that uses hierarchical networks to exploit the temporal abstraction inherent
        in driving tasks to make predicting steering angles from dash-cam images easier.
      </p>
      <p>
        I&apos;ve also done work on vision‑based, real‑time
        <a href="/albedoanalysis"> cranberry albedo analysis </a>
        for crop ripening predictions, overheating risk analysis, and high throughput phenotyping.
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
      <p>
        At <a href="https://www.apple.com"> Apple </a> in 2022, I enhanced the photos memories experience
        by making it more personalized to the user.
      </p>
      <p>
        At <a href="https://www.apple.com"> Apple </a> in 2023, I led a cross‑team effort that incorporated
        multiple device systems into the photos app for memories and researched factors contributing
        to a users&apos; connection to their photo library.
      </p>
      <h3> Teaching </h3>
      <p>
        I&apos;ve given guest lectures for Robotics and Computer Vision (ECE472) in 2019 and 2021.
        Additionally, I&apos;ve TA-ed for the following courses in the Rutgers ECE department:
        <ul>
          <li>Professionalism and Ethics - 14:332:393 - S&apos;20</li>
          <li>Probability and Random Processes - 14:332:226 - S&apos;21</li>
        </ul>
      </p>
    </article>
  </Main>
);

export default Index;
