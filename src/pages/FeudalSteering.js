import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

// https://openaccess.thecvf.com/content_CVPRW_2020/papers/w60/Johnson_Feudal_Steering_Hierarchical_Learning_for_Steering_Angle_Prediction_CVPRW_2020_paper.pdf

const Contact = () => (
  <Main
    title="Feudal Steering"
    description=""
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
