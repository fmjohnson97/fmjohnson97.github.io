import React from 'react';
import { Link } from 'react-router-dom';
// import ReactMarkdown from 'react-markdown';
// import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
// const markdown = raw('../data/about.md');

// const count = markdown.split(/\s+/)
//  .map((s) => s.replace(/\W/g, ''))
//  .filter((s) => s.length).length;

// Make all hrefs react router links
// const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main
    title="Presentations"
    description=""
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">Presentations</Link></h2>
        </div>
      </header>
      <h1> Secretary of Commerce Visits Rutgers </h1>
      <iframe title="Secretary of Commerce Speech" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRepFrankPallone%2Fvideos%2F835227274026204%2F&show_text=false&width=560&t=0" width="560" height="314" scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
      <p>
        I spoke to <a href="https://www.rutgers.edu/news/rutgers-hosts-federal-leaders-research-tour">Secretary of Commerce Raimundo and Congressman Pallone </a>
        about my research under the <a href="https://robotics.rutgers.edu"> SOCRATES NRT</a>.
        I also gave an address about the state of robotics research and federal funding
        that you can watch above.
      </p>
      <div> <p> </p> </div>
      <h1>CVPR 2020 WAD Oral Presentation</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/nUbhBZTb3j4" title="CVPR 2020 WAD Talk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
      <p>
        I presented my paper, Feudal Steering: Hierarchical Learning for Steering Angle
        Prediction, at CVPR WAD 2020. Watch the talk above, and find out more information
        about the paper <a href="https://fmjohnson97.github.io/feudalsteering"> here</a>.
      </p>
    </article>
  </Main>
);

export default About;
