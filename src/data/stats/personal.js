import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1997-05-20T10:30:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };
  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const Graduation = () => {
  const [grad, setGrad] = useState();

  const tickGrad = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const gradTime = new Date('2024-12-18T10:30:00');
    setGrad(((Date.now() - gradTime) / divisor).toFixed(11));
  };
  useEffect(() => {
    const timerGrad = setInterval(() => tickGrad(), 25);
    return () => {
      clearInterval(timerGrad);
    };
  }, []);
  return <>{grad}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current Age',
    value: <Age />,
  },
  {
    key: 'graduation',
    label: 'Years Since PhD Graduation',
    value: <Graduation />,
  },
  {
    key: 'location',
    label: 'Current Location',
    value: 'San Francisco Bay Area',
  },
  {
    key: 'countries',
    label: 'Countries Visited',
    value: 13,
    link: '',
  },
  {
    key: 'states',
    label: 'States Visited',
    value: 19,
    link: '',
  },
];

export default data;
