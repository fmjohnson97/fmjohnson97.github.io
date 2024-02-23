import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/fmjohnson97',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/fmjohnson97/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:faith.johnson@rutgers.edu',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://scholar.google.com/citations?user=h2bQ8o4AAAAJ&hl=en',
    label: 'Google Scholar',
    icon: faGoogleScholar,
  },
];

export default data;
