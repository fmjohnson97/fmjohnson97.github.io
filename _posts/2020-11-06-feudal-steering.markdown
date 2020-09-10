---
layout: post
title: Fuedal Steering - Hierarchical Learning for Steering Angle Prediction
date: 2020-06-11 00:00:00 +0300
description: CVPR WAD Paper
img:  9-teaser.gif # Add image post (optional)
fig-caption:  Results for our Feudal Steering network on example driving scenes from the Udacity dataset. # Add figcaption (optional)
tags: [Feudal Networks, Steering Angle Prediction]
---

## Abstract 
We consider the challenge of automated steering angle prediction for self driving cars using egocentric road im- ages. In this work, we explore the use of feudal networks, used in hierarchical reinforcement learning (HRL), to de- vise a vehicle agent to predict steering angles from first person, dash-cam images of the Udacity driving dataset. Our method, Feudal Steering, is inspired by recent work in HRL consisting of a manager network and a worker net- work that operate on different temporal scales and have dif- ferent goals. The manager works at a temporal scale that is relatively coarse compared to the worker and has a higher level, task-oriented goal space. Using feudal learning to divide the task into manager and worker sub-networks pro- vides more accurate and robust prediction. Temporal ab- straction in driving allows more complex primitives than the steering angle at a single time instance. Composite actions comprise a subroutine or skill that can be re-used throughout the driving sequence. The associated subrou- tine id is the manager network’s goal, so that the manager seeks to succeed at the high level task (e.g. a sharp right turn, a slight right turn, moving straight in traffic, or moving straight unencumbered by traffic). The steering angle at a particular time instance is the worker network output which is regulated by the manager’s high level task. We demon- strate state-of-the art steering angle prediction results on the Udacity dataset.

## Results
![Results]({{site.baseurl}}/assets/img/teaserFigure.png)
Results for our Feudal Steering network on example driving scenes from the Udacity dataset.

