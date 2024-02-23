import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
// const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Publications = lazy(() => import('./pages/Publications'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
// const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
const Presentations = lazy(() => import('./pages/Presentations'));
const FeudalSteering = lazy(() => import('./pages/FeudalSteering'));
const SocialBehaviorDictionary = lazy(() => import('./pages/SocialBehaviorDictionary'));
const AlbedoAnalysis = lazy(() => import('./pages/AlbedoAnalysis'));
const VisualNavigation = lazy(() => import('./pages/VisualNavigation'));
const HumNavData = lazy(() => import('./pages/HumanNavDataset'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/presentations" element={<Presentations />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/feudalsteering" element={<FeudalSteering />} />
        <Route path="/socialbehaviordictionary" element={<SocialBehaviorDictionary />} />
        <Route path="/albedoanalysis" element={<AlbedoAnalysis />} />
        <Route path="/visualnavigation" element={<VisualNavigation />} />
        <Route path="/humannavdataset" element={<HumNavData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
