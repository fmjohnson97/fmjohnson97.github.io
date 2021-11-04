import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// https://openaccess.thecvf.com/content_CVPRW_2020/papers/w60/Johnson_Feudal_Steering_Hierarchical_Learning_for_Steering_Angle_Prediction_CVPRW_2020_paper.pdf
const { PUBLIC_URL } = process.env;

const Contact = () => (
  <Main
    title="Feudal Steering"
    description=""
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/feudalsteering">Feudal Steering</Link></h2>
        </div>
      </header>
      <h1> Abstract </h1>
      <p>
        We consider the challenge of automated steering angle prediction for self driving
        cars using egocentric road images. In this work, we explore the use of feudal
        networks, used in hierarchical reinforcement learning (HRL), to devise a
        vehicle agent to predict steering angles from first person, dash-cam images
        of the Udacity driving dataset. Our method,Feudal Steering, is inspired by
        recent work in HRL consisting of a manager network and a worker network that
        operate on different temporal scales and have different goals. The manager works
        at a temporal scale that is relatively coarse compared to the worker and has a
        higher level, task-oriented goal space. Using feudal learning to divide the task into
        manager and worker sub-networks provides more accurate and robust prediction. Temporal
        abstraction in driving allows more complex primitives than the steering angle at a single
        time instance. Composite actions comprise a subroutine or skill that can be re-used
        throughout the driving sequence. The associated subroutine id is the manager network’s
        goal, so that the manager seeks to succeed at the high level task (e.g. a sharp right
        turn, a slight right turn, moving straight in traffic, or moving straight unencumbered
        by traffic). The steering angle at a particular time instance is the worker network
        output which is regulated by the manager’s high level task. We demonstrate
        state-of-the art steering angle prediction results on the Udacity dataset.
      </p>
      <h1>Oral Presentation</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nUbhBZTb3j4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
      <div> <p> </p></div>
      <h1> Network </h1>
      <img src={`${PUBLIC_URL}/images/publications/Sub_Angle_Diagram.png`} alt="" width="1000" />
      <p>
        This is our Feudal Steering network. The overall network is comprised of a manager
        network and a worker network. The worker network (expanded in the red box) acts as
        the steering angle prediction network. The input to the manager network is a sequence
        of the previous m predicted steering angles, [a<sub>n−1−m</sub>, a<sub>n−1−(m−1)</sub>,
        ..., a<sub>n−1</sub>]. The input to the worker network is a sequence of m frames,
        [i<sub>n−m</sub>, i<sub>n−(m−1)</sub>, ..., i<sub>n</sub>], a goal,
        g, obtained from the manager network, and the previous steering angle, a<sub>n−1</sub>.
        The yellow box represents the ELU (exponential linear unit) and group normalization step
        in the pipeline.
      </p>
    </article>
  </Main>
);

export default Contact;
