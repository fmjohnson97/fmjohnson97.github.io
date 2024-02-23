import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Table from './headerTable';

const { PUBLIC_URL } = process.env;
const data = [
  {
    key: 'a',
    label: 'Standing Still',
    value: 'N1:C0; N2:C7; N3:C13',
  },
  {
    key: 'b',
    label: 'Walking Straight',
    value: 'N1:C1-3, 6-9',
  },
  {
    key: 'c',
    label: 'Congregating',
    value: 'N1: C4-5; N2:C6, 8',
  },
  {
    key: 'd',
    label: 'Walking Side-By-Side',
    value: 'N2:C0, 20, 21, 26, 27; N3:C4, 7, 16, 19, 21, 24-25',
  },
  {
    key: '5',
    label: 'Leader-Follower',
    value: 'N2:C1, 15-16, 22-25',
  },
  {
    key: '6',
    label: 'Two Passing in Opposite Directions',
    value: 'N2:C2-5, 9-10',
  },
  {
    key: '7',
    label: 'One Passing, One Standing',
    value: 'N2:C11-14, 17-19',
  },
  {
    key: '8',
    label: 'One Passing a Pair Standing',
    value: 'N3:C0, 10, 15, 20, 23, 26, 30',
  },
  {
    key: '9',
    label: 'Pair Passing One Walking in Opposite Direction',
    value: 'N3:C1, 5-6, 22, 27, 29, 31',
  },
  {
    key: '10',
    label: 'Two Walking in Opposite Directions Passing One Standing',
    value: 'N3:C2, 32',
  },
  {
    key: '11',
    label: 'One Walking Between Pair in Opposite Direction',
    value: 'N3:C3',
  },
  {
    key: '12',
    label: 'Two Still, One Fidgeting',
    value: 'N3:C8',
  },
  {
    key: '13',
    label: 'Two Leader-Follower, One Parallel',
    value: 'N3:C9, 17',
  },
  {
    key: '14',
    label: 'Two Passing Opposite Directions, One Standing',
    value: 'N3:C11',
  },
  {
    key: '15',
    label: 'Pair Walking Past One Standing',
    value: 'N3:C12, 14, 28',
  },
  {
    key: '16',
    label: 'Pair Walking Away From One Walking',
    value: 'N3:C18',
  },
];

const Contact = () => (
  <Main
    title="Learning a Pedestrian Social Behavior Dictionary"
    description=""
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/socialbehaviordictionary">Learning a Pedestrian Social Behavior Dictionary</Link></h2>
          <p> <a href="https://papers.bmvc2023.org/0040.pdf">Click here </a>
            to read our paper.
          </p>
        </div>
      </header>
      <h1> Abstract </h1>
      <p>
        Understanding pedestrian behavior patterns is a key component to building autonomous
        agents that can navigate among humans. We seek a learned dictionary of pedestrian
        behavior to obtain a semantic description of pedestrian trajectories. Supervised
        methods for dictionary learning are impractical since pedestrian behaviors may be
        unknown a priori and the process of manually generating behavior labels is prohibitively
        time consuming. We instead utilize a novel, unsupervised framework to create a taxonomy
        of pedestrian behavior observed in a specific space. First, we learn a trajectory latent
        space that enables unsupervised clustering to create an interpretable pedestrian behavior
        dictionary. We show the utility of this dictionary for building pedestrian
        behavior maps to visualize space usage patterns and for computing the distributions of
        behaviors. We demonstrate a simple but effective trajectory prediction by conditioning on
        these behavior labels. While many trajectory analysis methods rely on RNNs or transformers,
        we develop a lightweight, low-parameter approach and show results
        comparable to SOTA on the ETH and UCY datasets.
      </p>
      <h1>Oral Presentation</h1>
      <iframe width="840" height="473" src="https://www.youtube.com/embed/umcUU7kPB4o?si=H6e-owSud17O-9gP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe>
      <div> <p> </p></div>
      <h1> Goal </h1>
      <img src={`${PUBLIC_URL}/images/publications/lpsbd_teaser.png`} alt="" width="80%" />
      <p>
        Predicting pedestrian trajectories becomes easier when there is an understanding of the
        underlying social behaviors taking place. We create PT-Net to predict these social
        behaviors given a set of historical pedestrian locations. Each behavior maps to a different
        location in an embedding space, which allows for the characterization of a spectrum of
        pedestrian behavior.
      </p>
      <div> <p> </p></div>
      <h1> Network </h1>
      <img src={`${PUBLIC_URL}/images/publications/lpsbd_network.png`} alt="" width="90%" />
      <p>
        To make the pedestrian behavior dictionary, trajectories for small groups of nearby
        pedestrians are extracted from the datasets in overlapping windows of a fixed length.
        Velocity-based and proximity-based features are computed from these trajectories.
        During training, these processed trajectories are input to the t-SNE algorithm to
        create a 2D trajectory latent space embedding. PT-net takes in the processed
        trajectories and directly predicts the corresponding latent space coordinates from the
        ground truth t-SNE embedding. This learned coordinate embedding separates distinct
        pedestrian behavior into clusters in the space, each of which comprises a social
        behavior to form a pedestrian behavior dictionary. During inference, the processed
        trajectories are directly input to PT-net to get the embedding coordinates which are
        matched to the closest social behavior cluster.
      </p>
      <div> <p> </p></div>
      <h1> Predicting Future Pedestrian Trajectories </h1>
      <img src={`${PUBLIC_URL}/images/publications/lpsbd_trajPred.png`} alt="" width="90%" />
      <p>
        For pedestrian trajectory prediction, PT-net predicts the social behavior cluster
        assignment corresponding to the behavior of the pedestrians in the scene. This
        assignment dictates which of the MLPs will be used to predict the future trajectories
        of the pedestrians. We train one MLP per cluster in the pedestrian behavior dictionary
        and deterministically condition the prediction upon the social behaviors of the
        pedestrians in the scene.
      </p>
      <div> <p> </p></div>
      <h1> Learned TSNE Embeddings </h1>
      <img src={`${PUBLIC_URL}/images/publications/N1_picture_labels.png`} alt="" width="33%" />
      <img src={`${PUBLIC_URL}/images/publications/N2_picture_labels2.png`} alt="" width="33%" />
      <img src={`${PUBLIC_URL}/images/publications/N3_picture_labels.png`} alt="" width="33%" />
      <p>
        Each dot represents the t-SNE embedding of a 3.2 second trajectory. The colored
        clusters denote distinct social be- haviors for N=1,2,3 people (corresponding colors
        across the three graphs do not denote related behaviors) along with trajectory diagrams,
        showing simplified sketches of the behaviors from the table below.
      </p>
      <h3>
        Semantic Behavior &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        # People (N), Cluster # (C)
      </h3>
      <Table data={data} />
      <p>
        A summary of the observed semantic behaviors for N=1,2,3 people with the corresponding
        cluster indices (C). Be- haviors with different N or executed in different directions with
        the same semantic description are grouped together. Refer to the figure above for a visual
        characterization of each behavior.
      </p>
      <div> <p> </p></div>
      <h1> Pedestrian Behavior Maps </h1>
      <img src={`${PUBLIC_URL}/images/publications/1_9_overlay_heatmap.png`} alt="" width="33%" />
      <img src={`${PUBLIC_URL}/images/publications/6_22_overlay_heatmap.png`} alt="" width="33%" />
      <img src={`${PUBLIC_URL}/images/publications/5_8_overlay_heatmap.png`} alt="" width="33%" />
      <p>
        Colored boxes indicate select pedestrian behaviors occurring over the entirety of the
        data collection period for ETH. We can infer a rich story about environment usage for
        varying numbers of pedestrians (N) and social behavior clusters (C). <b>Left:</b> (Green)
        Person entering the building; (Orange) Person leaving the building. Notice that people
        leave the building in a more narrowed and constrained path, indicating they are giving
        right-of-way to those entering. <b>Middle:</b> (Yellow) Two people standing still
        together; (Red) Two people leaving the building to the left in a leader-follower
        formation. Notice that the people standing still tend to congregate off to the sides,
        or at an island in the middle of the walkway, and the people exiting fit into the gaps
        left behind. <b>Right:</b> (Purple) Two people walking side by side to exit the building
        passing one person entering the building; (Blue) Three people standing still. Notice
        there is a bottleneck around the door that prevents pedestrians from moving, but it
        becomes easier to move freely further from the door.
      </p>
      <div> <p> </p></div>
      <h1> Pedestrian Behavior Histograms </h1>
      <img src={`${PUBLIC_URL}/images/publications/histogramStory4.png`} alt="" width="90%" />
      <p>
        The histogram of behaviors in each environment (left to right: ETH, ETH Hotel,
        UCY Zara1, UCY Zara2) for N = 2, 3 people (top to bottom:N=2, N=3). From the histograms,
        it is evident that pedestrians utilize a different distribution of behaviors in ETH as
        opposed to all other environments. Because ETH depicts people walking in and out of a
        building, it is a much more constrained space than the open sidewalks in the other
        environments. Even between UCY Zara1 and UCY Zara 2, which take place in the same
        environment at different times, there is still variation due to differing numbers of
        pedestrians and different pedestrian behavior patterns as the day progresses.
      </p>
      <div> <p> </p></div>
      <h1> Pedestrian Trajectory Prediction </h1>
      <img src={`${PUBLIC_URL}/images/publications/2_18_2.png`} alt="" width="25%" />
      <img src={`${PUBLIC_URL}/images/publications/2_27_3.png`} alt="" width="25%" />
      <img src={`${PUBLIC_URL}/images/publications/3_1_2.png`} alt="" width="25%" />
      <img src={`${PUBLIC_URL}/images/publications/3_4_4.png`} alt="" width="25%" />
      <img src={`${PUBLIC_URL}/images/publications/3_12_1.png`} alt="" width="25%" />
      <img src={`${PUBLIC_URL}/images/publications/3_14_3.png`} alt="" width="25%" />
      <img src={`${PUBLIC_URL}/images/publications/3_17_1.png`} alt="" width="25%" />
      <img src={`${PUBLIC_URL}/images/publications/3_29_3.png`} alt="" width="25%" />
      <p>
        Example trajectory predictions from a selection of the predicted pedestrian behavior
        dictionary clusters. The input trajectories are in blue, the ground truth future
        trajectories are in green, and the predictions are in orange. The arrows in each
        diagram show the relative movement directions of the pedestrians. Our framework
        provides accurate trajectory prediction by conditioning on learned behaviors.
      </p>
      <div> <p> </p></div>
      <img src={`${PUBLIC_URL}/images/publications/pedTrajTable.png`} alt="" width="60%" />
      <p>
        Comparison of the ADE/FDE of PT-net and SOTA for the ETH and UCY datasets. For
        SOTA methods, each network is trained with the leave one out strategy and tested
        on the remaining dataset with k = 20 samples. PT-net learns scene-specific features,
        so it is trained on 80% of the total trajectory set (4 environments) and tested on
        the remaining 20%. PT-Net performance is comparable to SOTA.
      </p>
      <div> <p> </p></div>
      <h1> Acknowledgements </h1>
      <p>
        This work was supported by grant NSF NRT-FW-HTF: Socially Cognizant Robotics for
        a Technology Enhanced Society (SOCRATES), No. 2021628.
      </p>
    </article>
  </Main>
);

export default Contact;
