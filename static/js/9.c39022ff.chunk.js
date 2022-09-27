(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[9],{63:function(e,t,i){"use strict";i.r(t);var r=i(0),n=(i(1),i(5)),a=i(21),s="";t.default=function(){return Object(r.jsx)(a.a,{title:"Feudal Steering",description:"",children:Object(r.jsxs)("article",{className:"post",id:"contact",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(n.b,{to:"/feudalsteering",children:"Feudal Steering: Hierarchical Learning for Steering Angle Prediction"})}),Object(r.jsxs)("p",{children:[" ",Object(r.jsx)("a",{href:"https://openaccess.thecvf.com/content_CVPRW_2020/papers/w60/Johnson_Feudal_Steering_Hierarchical_Learning_for_Steering_Angle_Prediction_CVPRW_2020_paper.pdf",children:"Click here "}),"to read our paper."]})]})}),Object(r.jsx)("h1",{children:" Abstract "}),Object(r.jsx)("p",{children:"We consider the challenge of automated steering angle prediction for self driving cars using egocentric road images. In this work, we explore the use of feudal networks, used in hierarchical reinforcement learning (HRL), to devise a vehicle agent to predict steering angles from first person, dash-cam images of the Udacity driving dataset. Our method,Feudal Steering, is inspired by recent work in HRL consisting of a manager network and a worker network that operate on different temporal scales and have different goals. The manager works at a temporal scale that is relatively coarse compared to the worker and has a higher level, task-oriented goal space. Using feudal learning to divide the task into manager and worker sub-networks provides more accurate and robust prediction. Temporal abstraction in driving allows more complex primitives than the steering angle at a single time instance. Composite actions comprise a subroutine or skill that can be re-used throughout the driving sequence. The associated subroutine id is the manager network\u2019s goal, so that the manager seeks to succeed at the high level task (e.g. a sharp right turn, a slight right turn, moving straight in traffic, or moving straight unencumbered by traffic). The steering angle at a particular time instance is the worker network output which is regulated by the manager\u2019s high level task. We demonstrate state-of-the art steering angle prediction results on the Udacity dataset."}),Object(r.jsx)("h1",{children:"Oral Presentation"}),Object(r.jsx)("iframe",{width:"500",height:"281",src:"https://www.youtube.com/embed/nUbhBZTb3j4",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,children:" "}),Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("p",{children:" "})]}),Object(r.jsx)("h1",{children:" Network "}),Object(r.jsx)("img",{src:"".concat(s,"/images/publications/Sub_Angle_Diagram.png"),alt:"",width:"100%"}),Object(r.jsxs)("p",{children:["This is our Feudal Steering network. The overall network is comprised of a manager network and a worker network. The worker network (expanded in the red box) acts as the steering angle prediction network. The input to the manager network is a sequence of the previous m predicted steering angles, [a",Object(r.jsx)("sub",{children:"n\u22121\u2212m"}),", a",Object(r.jsx)("sub",{children:"n\u22121\u2212(m\u22121)"}),", ..., a",Object(r.jsx)("sub",{children:"n\u22121"}),"]. The input to the worker network is a sequence of m frames, [i",Object(r.jsx)("sub",{children:"n\u2212m"}),", i",Object(r.jsx)("sub",{children:"n\u2212(m\u22121)"}),", ..., i",Object(r.jsx)("sub",{children:"n"}),"], a goal, g, obtained from the manager network, and the previous steering angle, a",Object(r.jsx)("sub",{children:"n\u22121"}),". The yellow box represents the ELU (exponential linear unit) and group normalization step in the pipeline."]}),Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("p",{children:" "})]}),Object(r.jsx)("h1",{children:" t-SNE Embedding as Subroutine ID "}),Object(r.jsx)("img",{src:"".concat(s,"/images/publications/TSNE_Multi_photo_example.jpeg"),alt:"",width:"75%"}),Object(r.jsx)("p",{children:"Example training images are shown with their corresponding t-SNE centroids. Notice the bottom right of the figure contains sharp right turns. Moving upwards and to the left, the right turn gets less sharp until the vehicle begins to go straight. Eventually this straight behavior starts to become a left turn until the vehicle is making sharp left turns in the upper left hand corner."}),Object(r.jsx)("img",{src:"".concat(s,"/images/publications/clusterVerification.png"),alt:"",width:"60%"}),Object(r.jsx)("p",{children:"The left column of images are a subset of centroid frames from the previous image. The images to the right of each centroid frame come from different, adjacent points in the corresponding cluster for each centroid. Notice that the points in each cluster display similar behavior as their respective centroids."}),Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("p",{children:" "})]}),Object(r.jsx)("h1",{children:" Steering Angle Predictions "}),Object(r.jsx)("img",{src:"".concat(s,"/images/publications/teaserFigure.png"),alt:"",width:"60%"}),Object(r.jsx)("p",{children:"Four frames from the Udacity dataset are shown with their corresponding ground truth (blue) and predicted (orange) steering angles using our Feudal Steering network. The orientation of the lines corresponds to the egocentric steering angle. Our model predicts steering angles within 2.67 degrees of the ground truth angle."}),Object(r.jsx)("p",{children:"Angle (left) and subroutine id (right) prediction results on the Udacity dataset obtained using our Feudal Steering network are shown below. The real angle is pictured in blue and the predicted angle is in orange. The subroutine ids are plotted alone. Notice that the subroutine id\u2019s behavior mimics the real angle behavior, but differs in scale."}),Object(r.jsx)("img",{src:"".concat(s,"/images/publications/angleCompNoDots_1800.png"),alt:"",width:"50%"}),Object(r.jsx)("img",{src:"".concat(s,"/images/publications/subIDNoDots_1800.png"),alt:"",width:"50%"}),Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("p",{children:" "})]}),Object(r.jsx)("h1",{children:" Acknowledgements "}),Object(r.jsx)("p",{children:"We would like to acknowledge Lockheed Martin for their support during this project. We also thank Sanipa Arnold, Jeff Cammerata, and Matthew Purri for their suggestions and comments."})]})})}}}]);
//# sourceMappingURL=9.c39022ff.chunk.js.map