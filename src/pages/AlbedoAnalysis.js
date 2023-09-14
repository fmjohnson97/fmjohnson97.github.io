import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// const { PUBLIC_URL } = process.env;

const Contact = () => (
  <Main
    title="Vision-Based Cranberry Crop Ripening Assessment"
    description=""
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/albedoanalysis">Vision-Based Cranberry Crop Ripening Assessment</Link></h2>
          <p> <a href="https://arxiv.org/abs/2309.00028">Click here </a>
            to read our paper.
          </p>
        </div>
      </header>
      <h1> Abstract </h1>
      <p>
        Agricultural domains are being transformed by recent advances in AI and computer
        vision that support quantitative visual evaluation. Using drone imaging, we develop a
        framework for characterizing the ripening process of cranberry crops. Our method consists
        of drone-based time-series collection over a cranberry growing season, photometric
        calibration for albedo recovery from pixels, and berry segmentation with semi-supervised
        deep learning networks using point-click annotations. By extracting time-series berry
        albedo measurements, we evaluate four different varieties of cranberries and provide a
        quantification of their ripening rates. Such quantification has practical implications
        for 1) assessing real-time overheating risks for cranberry bogs; 2) large scale comparisons
        of progeny in crop breeding; 3) detecting disease by looking for ripening pattern outliers.
        This work is the first of its kind in quantitative evaluation of ripening using computer
        vision methods and has impact beyond cranberry crops including wine grapes, olives,
        blueberries, and maize.
      </p>
    </article>
  </Main>
);

export default Contact;
