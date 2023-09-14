import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Leadership from '../components/Resume/Leadership';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import leadership from '../data/resume/leadership';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={positions} />,
  Leadership: () => <Leadership data={leadership} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const linkStyle = { color: 'blue' };

const Resume = () => (
  <Main
    title="Resume"
    description="Faith Johnson's Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="/resume">Resume</Link> [<Link style={linkStyle} to="https://drive.google.com/file/d/1fhdd_T_3Rrmj1I_8axCLGyJeXamAYHlL/view?usp=sharing">pdf</Link>]</h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
