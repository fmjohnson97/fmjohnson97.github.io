import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// const { PUBLIC_URL } = process.env;

const Contact = () => (
  <Main
    title="Agtech Framework for Cranberry-Ripening Analysis Using Vision Foundation Models"
    description=""
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/albedoanalysis">Agtech Framework for Cranberry-Ripening Analysis Using Vision Foundation Models</Link></h2>
          <p> <a href="https://ieeexplore.ieee.org/abstract/document/10943328">Click here </a>
            to read our paper.
          </p>
        </div>
      </header>
      <h1> Abstract </h1>
      <p>
        Agricultural domains are being transformed by recent advances in AI and computer
        vision that support quantitative visual evaluation. Using aerial and ground imaging
        over a time series, we develop a framework for characterizing the ripening process
        of cranberry crops, a crucial component for precision agriculture tasks such as
        comparing crop breeds (high-throughput phenotyping) and detecting disease. Using
        drone imaging, we capture images from 20 waypoints across multiple bogs, and using
        ground-based imaging (hand-held camera), we image same bog patch using fixed
        fiducial markers. Both imaging methods are repeated to gather a multi-week time
        series spanning the entire growing season. Aerial imaging provides multiple samples
        to compute a distribution of albedo values. Ground imaging enables tracking of
        individual berries for a detailed view of berry appearance changes. Using vision
        transformers (ViT) for feature detection after segmentation, we extract a high
        dimensional feature descriptor of berry appearance. Interpretability of appearance
        is critical for plant biologists and cranberry growers to support crop breeding
        decisions (e.g. comparison of berry varieties from breeding programs). For
        interpretability, we create a 2D manifold of cranberry appearance by using a UMAP
        dimensionality reduction on ViT features. This projection enables quantification
        of ripening paths and a useful metric of ripening rate. We demonstrate the comparison
        of four cranberry varieties based on our ripening assessments. This work is the
        first of its kind and has future impact for cranberries and for other crops including
        wine grapes, olives, blueberries, and maize. Aerial and ground datasets are made
        publicly available.
      </p>
    </article>
  </Main>
);

export default Contact;
