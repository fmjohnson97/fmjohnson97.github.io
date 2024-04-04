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
          <h2 data-testid="heading"><Link to="/presentations">Presentations</Link></h2>
        </div>
      </header>
      <h2>NYC Vision Day 2024</h2>
      <p>
        I presented my work, <Link to="/visualnavigation"> Feudal Networks for Visual Navigation</Link>,
        at <a href="https://cs.nyu.edu/~fouhey/NYCVision2024/">NYC Vision Day 2024 </a> run by
        <a href="https://cs.nyu.edu/~fouhey/"> David Fouhey</a> at NYU.
      </p>
      <div> <p> ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </p></div>
      <h2>Microsoft Future Leaders Seminar</h2>
      <iframe width="840" height="473" src="https://www.youtube.com/embed/cGQtYk70WFs?si=CuCLD42-0gebbXQX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
      <p>
        I presented my work, <Link to="/visualnavigation"> Feudal Networks for Visual Navigation</Link>,
        in the <a href="https://robotics.umd.edu/event/19163/microsoft-future-leaders-in-robotics-and-ai-seminar-series-faith-johnson">Microsoft Future Leaders </a> series done in partnership
        with the <a href="https://robotics.umd.edu/futureleaders">Maryland Robotics Center</a>.
      </p>
      <div> <p> ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </p></div>
      <h2>BMVC 2023 Poster Presentation</h2>
      <iframe width="840" height="473" src="https://www.youtube.com/embed/umcUU7kPB4o?si=H6e-owSud17O-9gP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
      <p>
        I presented my paper, <Link to="/socialbehaviordictionary"> Learning a Pedestrian Social Behavior Dictionary</Link>,
        at BMVC 2023. Watch an overview of the paper above.
      </p>
      <div> <p> ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </p></div>
      <h2> Secretary of Commerce Visits Rutgers </h2>
      <iframe title="Secretary of Commerce Speech" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRepFrankPallone%2Fvideos%2F835227274026204%2F&show_text=false&width=560&t=0" width="840" height="473" scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
      <p>
        I spoke to <a href="https://www.rutgers.edu/news/rutgers-hosts-federal-leaders-research-tour">Secretary of Commerce Raimondo and Congressman Pallone </a>
        about my research under the <a href="https://robotics.rutgers.edu"> SOCRATES NRT</a>.
        I also gave an address about the state of robotics research and federal funding
        that you can watch above.
      </p>
      <div> <p> ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </p></div>
      <h2>CVPR 2020 WAD Oral Presentation</h2>
      <iframe width="840" height="473" src="https://www.youtube.com/embed/nUbhBZTb3j4" title="CVPR 2020 WAD Talk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
      <p>
        I presented my paper, <Link to="/feudalsteering">Feudal Steering: Hierarchical Learning for Steering Angle Prediction</Link>,
        at CVPR WAD 2020. Watch the talk above, and find out more information
        about the paper <a href="https://fmjohnson97.github.io/feudalsteering"> here</a>.
      </p>
      <div> <p> ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ </p></div>
      <h2>N2E Robotics Club</h2>
      <p>
        I presented two modules for the Rutgers University <Link to="https://robotics.rutgers.edu/n2er-workshops/"> N2E Robotics Club</Link>.
        Check them our <Link to="https://robotics.rutgers.edu/n2er-workshops/"> here</Link> and watch the talks below. Or you can find a playlist
        of other modules taught by my colleagues on different topics <Link to="https://www.youtube.com/@n2erobotics729"> here</Link>.
      </p>
      <p> <b>OpenAI Gym Tutorial</b></p>
      <iframe width="840" height="473" src="https://www.youtube.com/embed/FqbqitGRKKQ?si=DSpVPS0hkZD1nUD9" title="Youtube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
      <div> <p> </p> </div>
      <p> <b>Intro to Pytorch</b></p>
      <iframe width="840" height="473" src="https://www.youtube.com/embed/UrqS8_UcqwE?si=7CknLKbh22gYW2Jt" title="Youtube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>

    </article>
  </Main>
);

export default About;
