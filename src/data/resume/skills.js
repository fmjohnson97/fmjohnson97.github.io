// TODO: Add Athletic Skills, Office Skills,
// ToDo: Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Numpy',
    competency: 4,
    category: ['Libraries/Frameworks'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Objective-C',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Libraries/Frameworks'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Libraries/Frameworks'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Libraries/Frameworks'],
  },
  {
    title: 'OpenCV',
    competency: 4,
    category: ['Libraries/Frameworks'],
  },
  {
    title: 'Pytorch',
    competency: 4,
    category: ['Libraries/Frameworks'],
  },
  {
    title: 'Torchvision',
    competency: 4,
    category: ['Libraries/Frameworks'],
  },
  {
    title: 'Pillow',
    competency: 2,
    category: ['Libraries/Frameworks'],
  },
  {
    title: 'CometML',
    competency: 2,
    category: ['Libraries/Frameworks'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools/Platforms'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Tools/Platforms'],
  },
  {
    title: 'Anaconda',
    competency: 3,
    category: ['Tools/Platforms'],
  },
  {
    title: 'Microsoft Office',
    competency: 5,
    category: ['Tools/Platforms'],
  },
  {
    title: 'Deep Learning',
    competency: 4,
    category: ['Topics'],
  },
  {
    title: 'Machine Learning',
    competency: 4,
    category: ['Topics'],
  },
  {
    title: 'Computer Vision',
    competency: 4,
    category: ['Topics'],
  },
  {
    title: 'Human-Computer Interaction',
    competency: 2,
    category: ['Topics'],
  },
  {
    title: 'Temporal Sequence Modeling',
    competency: 3,
    category: ['Topics'],
  },
  {
    title: 'Socially Cognizant Robotics',
    competency: 2,
    category: ['Topics'],
  },
  {
    title: 'Pedestrian Trajectory Prediction',
    competency: 4,
    category: ['Topics'],
  },
  {
    title: 'Autonomous Driving',
    competency: 3,
    category: ['Topics'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
