import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

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
        Agricultural domains are being transformed by recent advances in AI and computer vision that support
        quantitative visual evaluation. Using drone imaging, we develop a framework for characterizing the ripening
        process of cranberry crops. Our method consists of drone-based time-series collection over a cranberry growing
        season, photometric calibration for albedo recovery from pixels, and berry segmentation with semi-supervised
        deep learning networks using point-click annotations. By extracting time-series berry albedo measurements, we
        evaluate four different varieties of cranberries and provide a quantification of their ripening rates. Such
        quantification has practical implications for 1) assessing real-time overheating risks for cranberry bogs; 2)
        large scale comparisons of progeny in crop breeding; 3) detecting disease by looking for ripening pattern
        outliers. This work is the first of its kind in quantitative evaluation of ripening using computer vision
        methods and has impact beyond cranberry crops including wine grapes, olives, blueberries, and maize.
      </p>
//      <h1>Oral Presentation</h1>
//      <iframe width="500" height="281" src="https://www.youtube.com/embed/nUbhBZTb3j4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
//      <div> <p> </p></div>
//      <h1> Network </h1>
//      <img src={`${PUBLIC_URL}/images/publications/Sub_Angle_Diagram.png`} alt="" width="100%" />
//      <p>
//        This is our Feudal Steering network. The overall network is comprised of a manager
//        network and a worker network. The worker network (expanded in the red box) acts as
//        the steering angle prediction network. The input to the manager network is a sequence
//        of the previous m predicted steering angles, [a<sub>n−1−m</sub>, a<sub>n−1−(m−1)</sub>,
//        ..., a<sub>n−1</sub>]. The input to the worker network is a sequence of m frames,
//        [i<sub>n−m</sub>, i<sub>n−(m−1)</sub>, ..., i<sub>n</sub>], a goal,
//        g, obtained from the manager network, and the previous steering angle, a<sub>n−1</sub>.
//        The yellow box represents the ELU (exponential linear unit) and group normalization step
//        in the pipeline.
//      </p>
//      <div> <p> </p></div>
//      <h1> t-SNE Embedding as Subroutine ID </h1>
//      <img src={`${PUBLIC_URL}/images/publications/TSNE_Multi_photo_example.jpeg`} alt="" width="75%" />
//      <p>
//        Example training images are shown with their corresponding t-SNE centroids. Notice the
//        bottom right of the figure contains sharp right turns. Moving upwards and to the left,
//        the right turn gets less sharp until the vehicle begins to go straight. Eventually this
//        straight behavior starts to become a left turn until the vehicle is making sharp left
//        turns in the upper left hand corner.
//      </p>
//      <img src={`${PUBLIC_URL}/images/publications/clusterVerification.png`} alt="" width="60%" />
//      <p>
//        The left column of images are a subset of centroid frames from the previous image. The
//        images to the right of each centroid frame come from different, adjacent points in the
//        corresponding cluster for each centroid. Notice that the points in each cluster display
//        similar behavior as their respective centroids.
//      </p>
//      <div> <p> </p></div>
//      <h1> Steering Angle Predictions </h1>
//      <img src={`${PUBLIC_URL}/images/publications/teaserFigure.png`} alt="" width="60%" />
//      <p>
//        Four frames from the Udacity dataset are shown with their corresponding ground truth
//        (blue) and predicted (orange) steering angles using our Feudal Steering network. The
//        orientation of the lines corresponds to the egocentric steering angle. Our model
//        predicts steering angles within 2.67 degrees of the ground truth angle.
//      </p>
//      <p>
//        Angle (left) and subroutine id (right) prediction results on the Udacity dataset
//        obtained using our Feudal Steering network are shown below. The real angle is
//        pictured in blue and the predicted angle is in orange. The subroutine ids are plotted
//        alone. Notice that the subroutine id’s behavior mimics the real angle behavior, but
//        differs in scale.
//      </p>
//      <img src={`${PUBLIC_URL}/images/publications/angleCompNoDots_1800.png`} alt="" width="50%" /><img src={`${PUBLIC_URL}/images/publications/subIDNoDots_1800.png`} alt="" width="50%" />
//      <div> <p> </p></div>
//      <h1> Acknowledgements </h1>
//      <p>
//        We would like to acknowledge Lockheed Martin for their support during this project.
//        We also thank Sanipa Arnold, Jeff Cammerata, and Matthew Purri for their suggestions
//        and comments.
//      </p>
    </article>
  </Main>
);

export default Contact;
