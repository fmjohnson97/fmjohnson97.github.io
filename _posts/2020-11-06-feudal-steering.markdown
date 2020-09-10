---
layout: post
title: Fuedal Steering - Hierarchical Learning for Steering Angle Prediction
date: 2020-06-11 00:00:00 +0300
description: CVPR WAD Paper
img:  feudalSteeringTeaser.gif # Add image post (optional)
fig-caption:   # Add figcaption (optional)
youtubeId: b0_5JLlgzA4
tags: [Feudal Networks, Steering Angle Prediction]
---
# Authors
## Faith Johnson and Kristin Dana

## Abstract 
We consider the challenge of automated steering angle prediction for self driving cars using egocentric road images. In this work, we explore the use of feudal networks, used in hierarchical reinforcement learning (HRL), to devise a vehicle agent to predict steering angles from first person, dash-cam images of the Udacity driving dataset. Our method, Feudal Steering, is inspired by recent work in HRL consisting of a manager network and a worker network that operate on different temporal scales and have different goals. The manager works at a temporal scale that is relatively coarse compared to the worker and has a higher level, task-oriented goal space. Using feudal learning to divide the task into manager and worker sub-networks provides more accurate and robust prediction. Temporal abstraction in driving allows more complex primitives than the steering angle at a single time instance. Composite actions comprise a subroutine or skill that can be re-used throughout the driving sequence. The associated subroutine id is the manager network’s goal, so that the manager seeks to succeed at the high level task (e.g. a sharp right turn, a slight right turn, moving straight in traffic, or moving straight unencumbered by traffic). The steering angle at a particular time instance is the worker network output which is regulated by the manager’s high level task. We demonstrate state-of-the art steering angle prediction results on the Udacity dataset.


## Video
{% include youtubePlayer.html id=page.youtubeId %}


## Network
![Network]({{site.baseurl}}/assets/img/Sub_Angle_Diagram.png)

This is our Feudal Steering network. The overall network is comprised of a manager network and a worker network. The worker network (expanded in the red box) acts as the steering angle prediction network. The input to the manager network is a sequence of the previous m predicted steering angles, [an−1−m,an−1−(m−1),...,an−1]. The input to the worker network is a sequence of m frames, [in−m, in−(m−1), ..., in], a goal, g, obtained from the manager network, and the previous steering angle, an−1. The yellow box represents the ELU (exponential linear unit) and group normalization step in the pipeline.


## t-SNE Embedding as Subroutine ID
![tsneMegaPhoto]({{site.baseurl}}/assets/img/TSNE_Multi_photo_example.jpeg)

Example training images are shown with their corresponding t-SNE centroids. Notice the bottom right of the figure contains sharp right turns. Moving upwards and to the left, the right turn gets less sharp until the vehicle begins to go straight. Eventually this straight behavior starts to become a left turn until the vehicle is making sharp left turns in the upper left hand corner.

![tsneVerification]({{site.baseurl}}/assets/img/clusterVerification.png)

The left column of images are a subset of centroid frames from the previous image. The images to the right of each centroid frame come from different, adjacent points in the corresponding cluster for each centroid. Notice that the points in each cluster display similar behavior as their respective centroids.


## Steering Angle Prediction Results
![teaserResults]({{site.baseurl}}/assets/img/teaserFigure.png){:height="80%" width="70%"}

Four frames from the Udacity dataset are shown with their corresponding ground truth (blue) and predicted (orange) steering angles using our Feudal Steering network. The orientation of the lines corresponds to the egocentric steering angle. Our model predicts steering angles within 2.67 degrees of the ground truth angle.

Angle (left) and subroutine id (right) prediction results on the Udacity dataset obtained using our Feudal Steering network are shown below. The real angle is pictured in blue and the predicted angle is in orange. The subroutine ids are plotted alone. Notice that the subroutine id’s behavior mimics the real angle behavior, but differs in scale.

![angResults]({{site.baseurl}}/assets/img/angleCompNoDots_1800.png){:height="60%" width="60%"}
![subIDResults]({{site.baseurl}}/assets/img/subIDNoDots_1800.png){:height="60%" width="60%"}


## Paper

with link to bibtex

## Acknowledgements
We would like to acknowledge Lockheed Martin for their support during this project. We also thank Sanipa Arnold, Jeff Cammerata, and Matthew Purri for their suggestions and comments.
