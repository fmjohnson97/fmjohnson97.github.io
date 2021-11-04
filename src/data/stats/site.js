import dayjs from 'dayjs';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  {
    label: 'Last updated at',
    key: 'updated_at',
    link: 'https://github.com/fmjohnson97/fmjohnson97.github.io/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
];

export default data;
