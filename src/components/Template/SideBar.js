import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Faith Johnson</h2>
        <p><a href="mailto:fmjohnson97@aol.com">fmjohnson97@aol.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p> Hi, I&apos;m Faith. I am a software engineer on the Photos Intelligence Team at Apple
        responsible for the photos memory feature and other AI advancements in the photos domain.
        I previously was a NSF Fellow and got my Ph.D. studying under Professor Kristin Dana in
        the Rutgers University ECE department where my main focus was the intersection of computer
        vision, machine learning, and robotics. Contact me at fmjohnson97@aol.com
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname.endsWith('/') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
