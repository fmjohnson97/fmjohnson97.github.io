import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/about.md');

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main
    title="About"
    description="Learn about Michael D'Angelo"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      <h1>Oral Presentation</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nUbhBZTb3j4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default About;
