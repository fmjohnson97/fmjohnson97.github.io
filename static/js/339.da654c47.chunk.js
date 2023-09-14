"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[339],{2339:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var i=r(9439),n=r(2791),s=r(1087),a=r(6842),o=r(184),c=function(e){var t=e.data;return(0,o.jsx)("article",{className:"degree-container",children:(0,o.jsxs)("header",{children:[(0,o.jsx)("h4",{className:"degree",children:t.degree}),(0,o.jsxs)("p",{className:"school",children:[(0,o.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},l=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"education",children:[(0,o.jsx)("div",{className:"link-to",id:"education"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,o.jsx)(c,{data:e},e.school)}))]})};l.defaultProps={data:[]};var u=l,d=r(7892),h=r.n(d),m=r(5745),p=function(e){var t=e.data,r=t.name,i=t.position,n=t.url,s=t.startDate,a=t.endDate,c=t.summary,l=t.highlights;return(0,o.jsxs)("article",{className:"jobs-container",children:[(0,o.jsxs)("header",{children:[(0,o.jsxs)("h4",{children:[(0,o.jsx)("a",{href:n,children:r})," - ",i]}),(0,o.jsxs)("p",{className:"daterange",children:[" ",h()(s).format("MMMM YYYY")," - ",a?h()(a).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,o.jsx)(m.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,l?(0,o.jsx)("ul",{className:"points",children:l.map((function(e){return(0,o.jsx)("li",{children:e},e)}))}):null]})},g=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"experience",children:[(0,o.jsx)("div",{className:"link-to",id:"experience"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Technical Experience"})}),t.map((function(e){return(0,o.jsx)(p,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};g.defaultProps={data:[]};var y=g,f=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"experience",children:[(0,o.jsx)("div",{className:"link-to",id:"leadership"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Leadership Experience"})}),t.map((function(e){return(0,o.jsx)(p,{data:e},e.company)}))]})};f.defaultProps={data:[]};var v=f,b=r(4942),w=r(1413),k=function(e){var t=e.handleClick,r=e.active,i=e.label;return(0,o.jsx)("button",{className:"skillbutton ".concat(r[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},j=function(e){var t=e.data,r=e.categories,i=t.category,n=t.competency,s=t.title,a={background:r.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},c=(0,w.Z)((0,w.Z)({},a),{},{width:"".concat(String(Math.min(100,Math.max(n/5*100,0))),"%")});return(0,o.jsxs)("div",{className:"skillbar clearfix",children:[(0,o.jsx)("div",{className:"skillbar-title",style:a,children:(0,o.jsx)("span",{children:s})}),(0,o.jsx)("div",{className:"skillbar-bar",style:c}),(0,o.jsxs)("div",{className:"skill-bar-percent",children:[n," / 5"]})]})};j.defaultProps={categories:[]};var x=j,D=function(e){var t=e.skills,r=e.categories,s=Object.fromEntries([["All",!1]].concat(r.map((function(e){return[e.name,!1]})))),a=(0,n.useState)(s),c=(0,i.Z)(a,2),l=c[0],u=c[1],d=function(e){var t=Object.keys(l).reduce((function(t,r){return(0,w.Z)((0,w.Z)({},t),{},(0,b.Z)({},r,e===r&&!l[r]))}),{});t.All=!Object.keys(l).some((function(e){return t[e]})),u(t)};return(0,o.jsxs)("div",{className:"skills",children:[(0,o.jsx)("div",{className:"link-to",id:"skills"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Skills"})}),(0,o.jsx)("div",{className:"skill-button-container",children:Object.keys(l).map((function(e){return(0,o.jsx)(k,{label:e,active:l,handleClick:d},e)}))}),(0,o.jsx)("div",{className:"skill-row-container",children:function(){var e=Object.keys(l).reduce((function(e,t){return l[t]?t:e}),"All");return t.sort((function(e,t){var r=0;return e.competency>t.competency?r=-1:e.competency<t.competency?r=1:e.category[0]>t.category[0]?r=-1:e.category[0]<t.category[0]||e.title>t.title?r=1:e.title<t.title&&(r=-1),r})).filter((function(t){return"All"===e||t.category.includes(e)})).map((function(e){return(0,o.jsx)(x,{categories:r,data:e},e.title)}))}()})]})};D.defaultProps={skills:[],categories:[]};var N=D,R=function(e){var t=e.data,r=e.last;return(0,o.jsxs)("li",{className:"course-container",children:[(0,o.jsxs)("a",{href:t.link,children:[(0,o.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,o.jsx)("p",{className:"course-name",children:t.title})]}),!r&&(0,o.jsx)("div",{className:"course-dot",children:(0,o.jsx)("p",{className:"course-name",children:" \u2022"})})]})};R.defaultProps={last:!1};var C=R,S=function(e){return e.sort((function(e,t){var r=0;return e.university>t.university?r=-1:e.university<t.university||e.number>t.number?r=1:e.number<t.number&&(r=-1),r})).map((function(t,r){return(0,o.jsx)(C,{data:t,last:r===e.length-1},t.title)}))},L=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"courses",children:[(0,o.jsx)("div",{className:"link-to",id:"courses"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Selected Courses"})}),(0,o.jsx)("ul",{className:"course-list",children:S(t)})]})};L.defaultProps={data:[]};var T=L,M=function(){return(0,o.jsxs)("div",{className:"references",children:[(0,o.jsx)("div",{className:"link-to",id:"references"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)(s.rU,{to:"/contact",children:(0,o.jsx)("h3",{children:"References are available upon request"})})})]})},A=[{title:"Learning in Humans and Machines",number:"16:185:601:01",link:"https://qiongzhang.github.io/LEARNINGINHUMANSMACHINES.PDF",university:"Rutgers University"},{title:"Proseminar in Cognitive Science",number:"16:185:500",link:"https://ruccs.rutgers.edu/33-graduate/graduate-courses/645-graduate-courses-fall-2019",university:"Rutgers University"},{title:"Socially Cognizant Robotics Design",number:"16:332:595",link:"https://robotics.rutgers.edu/curriculum/",university:"Rutgers University"},{title:"Robotics & Society",number:"16:332:640",link:"https://robotics.rutgers.edu/curriculum/",university:"Rutgers University"},{title:"Socially Cognizant Robotics",number:"16:332:590",link:"https://robotics.rutgers.edu/curriculum/",university:"Rutgers University "},{title:"Stochastic Signals & Systems",number:"16:332:541",link:"http://www.winlab.rutgers.edu/~ryates/ece541/",university:"Rutgers University"},{title:"Machine Vision",number:"16:332:561",link:"https://www.ece.rutgers.edu/graduate-course-descriptions",university:"Rutgers University"},{title:"Linear Algebra & Applications",number:"16:642:550",link:"https://www.math.rutgers.edu/academics/graduate-program/course-descriptions/1030-642-550-linear-algebra-and-applications",university:"Rutgers University"},{title:"Convex Optimization",number:"16:332:509",link:"https://www.ece.rutgers.edu/graduate-course-descriptions",university:"Rutgers University"},{title:"Intro to Deep Learning",number:"16:332:579:06",link:"https://www.ece.rutgers.edu/new-classes-and-topics-electrical-computer-engineering-14332435-436-445-446-493-494",university:"Rutgers University"},{title:"System Analysis",number:"16:332:501",link:"https://www.ece.rutgers.edu/graduate-course-descriptions",university:"Rutgers University"},{title:"Comp Arch 1",number:"16:332:563",link:"https://www.ece.rutgers.edu/graduate-course-descriptions",university:"Rutgers University"},{title:"Machine Learning for IOT",number:"16:332:579",link:"https://www.ece.rutgers.edu/new-classes-and-topics-electrical-computer-engineering-14332435-436-445-446-493-494",university:"Rutgers University"},{title:"Digital Signal Processing",number:"14:332:346",link:"https://www.ece.rutgers.edu/14332346-digital-signal-processing",university:"Rutgers University"},{title:"ECE Capstone Design",number:"14:332:448",link:"https://www.ece.rutgers.edu/14332448-capstone-design-ece",university:"Rutgers University"},{title:"Robotics & Computer Vision",number:"14:332:472",link:"https://www.ece.rutgers.edu/14332472-introduction-robotics-and-computer-vision",university:"Rutgers University"}],U=[{school:"Rutgers University",degree:"Ph.D. Computer Engineering",link:"https://www.ece.rutgers.edu",year:2024,gpa:4},{school:"Rutgers University",degree:"B.S. Electrical & Computer Engineering",link:"https://www.ece.rutgers.edu",year:2019,gpa:3.45}],P=[{name:"Rutgers University",position:"NSF Fellow & Graduate Research Assistant",url:"https://robotics.rutgers.edu",startDate:"2019-1-15",highlights:["Conducted computer vision and reinforcement learning research in the lab of Professor Kristin Dana","Researched socially cognizant robotic navigation Funded by the Reality Aware Networks NSF Grant","Researched unsupervised learning of social behaviors for pedestrian trajectory prediction funded by the SOCRATES (Socially Cognizant Robotics for a Technologically Enhanced Society) NSF NRT grant","Researched hierarchical and multi-scale reinforcement learning for visuomotor skills and the intersection of Feudal Reinforcement Learning and Autonomous Vehicles under a grant from Lockheed Martin","Other Work in vision-based, real-time cranberry albedo analysis for crop ripening predictions, overheating risk analysis, and high throughput phenotyping"]},{name:"Apple",position:"PhD Storytelling Intern",url:"https://www.apple.com",startDate:"2023-5-1",endDate:"2023-8-31",highlights:["Led a cross-team effort that incorporated multiple device systems into the photos app for memories","Researched factors contributing to a users' connection to their photo library"]},{name:"Apple",position:"PhD Storytelling Intern",url:"https://www.apple.com",startDate:"2022-5-1",endDate:"2022-8-31",highlights:["Wrote production level Objective-C code for the memories feature of the photos app","Increased personalization of the memories selection process using multimodal signal fusion","Networked across company departments to define project requirements and integrate multiple data streams"]},{name:"Nvidia",position:"Deep Learning Intern",url:"https://www.nvidia.com/en-us/research/computer-vision/",startDate:"2021-5-1",endDate:"2021-8-31",highlights:["Created a transformer based semantic segmentation oracle network for labeling previously unseen images","Reduced dataset labeling costs companywide by integrating the generated pseudo labels into existing datasets"]},{name:"SRI International",position:"Computer Vision Intern",url:"https://www.sri.com/computer-vision/",startDate:"2020-5-1",endDate:"2020-8-31",highlights:["Developed baseline agents for the Darpa Machine Common Sense project","Created an agent that uses graph networks and abductive reasoning to motivate environment exploration"]},{name:"Rutgers University",position:"Robotics & Computer Vision Guest Lecturer",url:"https://www.ece.rutgers.edu/14332472-introduction-robotics-and-computer-vision",startDate:"2021-11-1",endDate:"2021-11-1",highlights:["Taught a class of 50 students about socially cognizant robotics and pedestrian trajectory prediction","Demonstrated the importance of interdisciplinary research in creating more complete and long-lasting technical solutions"]},{name:"Rutgers University",position:"Robotics & Computer Vision Guest Lecturer",url:"https://www.ece.rutgers.edu/14332472-introduction-robotics-and-computer-vision",startDate:"2019-11-1",endDate:"2019-11-1",highlights:["Explained the concepts of hierarchical reinforcement learning to a class of 50 students","Demonstrated how to apply these concepts to the field of computer vision with autonomous driving"]},{name:"Rutgers Honors College Maker Space",position:"Manager",url:"https://honorscollege.rutgers.edu/features/new-makerspace-honors-college",startDate:"2016-8-1",endDate:"2019-5-1",highlights:["Assembled and mastered the use of an X-carve engraver, 3-D printers, vinyl cutter, and sewing machine","Created a system for keeping track of 200+ inventory items when they are checked out","Assisted students and faculty in the use of the machines and the creation of projects"]},{name:"Rutgers University",position:"Astronomy Research Assistant",url:"",startDate:"2016-6-1",endDate:"2019-1-1",highlights:["Studied the role of dark matter and HII regions in galaxy formation","Used Python to analyze and manipulate galaxy formation simulation data"]},{name:"Bank of America",position:"Technology Analyst Intern",url:"https://campus.bankofamerica.com/teams.html",startDate:"2018-6-1",endDate:"2018-8-1",highlights:["Used machine learning principles and sci-kit learn in python to create a predictive model for stock market trades","Created a pipeline for data cleaning and prediction result interpretation in python"]},{name:"Bank of America",position:"Technology Analyst Intern",url:"https://campus.bankofamerica.com/teams.html",startDate:"2017-6-1",endDate:"2017-8-1",highlights:["Created a regression test for their trade reporting system using python","Followed the regression test through the SDLC including analysis and release"]},{name:"Bank of America",position:"Front End Development Intern",url:"https://campus.bankofamerica.com/teams.html",startDate:"2015-6-1",endDate:"2015-8-1",highlights:["Modified 2 GUIs for an in-house market analytics program using ASP.Net, C++, HTML, and Javascript","Followed 3 software projects through the SDLC"]}],F=[{name:"Rutgers University",position:"Novice 2 Expert Club Founder",url:"https://robotics.rutgers.edu/n2e-robotics/",startDate:"2021-1-1",endDate:"2022-12-1",highlights:["Started club for students to teach each other key robotics concepts in a non-intimidating environment","Organized club events, recruited student teachers, taught modules, and coordinated with university faculty"]},{name:"Rutgers/HTHS",position:"High Tech High School  Mentorship Program Mentor",url:"",startDate:"2019-9-1",endDate:"2021-1-1",highlights:["Mentored two female, high school seniors weekly in Professor Kristin Dana\u2019s research lab at Rutgers University","Created and facilitated programming to help them learn computer vision and machine learning techniques"]},{company:"Theta Tau - Omicron Delta Chapter",position:"Treasurer",link:"https://thetatau.rutgers.edu",startDate:"2017-12-1",endDate:"2018-12-1",highlights:["Managed the budget and supervised the collection of dues for the 2018 calendar year","Collaborated with the different chairs to come up with a fiscally feasible spending plan"]},{company:"Theta Tau - Omicron Delta Chapter",position:"Dance Marathon Liaison",link:"https://thetatau.rutgers.edu",startDate:"2017-9-1",endDate:"2018-3-1",highlights:["Organized fundraising events for the team members to reach their charity goals","Facilitated communication between the Dance Marathon main offices and the Omicron Delta chapter of Theta Tau"]}],E=r(3433),O=[{title:"Numpy",competency:4,category:["Libraries/Frameworks"]},{title:"HTML + SASS/SCSS/CSS",competency:1,category:["Languages"]},{title:"Python",competency:5,category:["Languages"]},{title:"C++",competency:1,category:["Languages"]},{title:"Java",competency:1,category:["Languages"]},{title:"MATLAB",competency:3,category:["Languages"]},{title:"Objective-C",competency:2,category:["Languages"]},{title:"Pandas",competency:4,category:["Libraries/Frameworks"]},{title:"Matplotlib",competency:3,category:["Libraries/Frameworks"]},{title:"Scikit-Learn",competency:3,category:["Libraries/Frameworks"]},{title:"OpenCV",competency:4,category:["Libraries/Frameworks"]},{title:"Pytorch",competency:4,category:["Libraries/Frameworks"]},{title:"Torchvision",competency:4,category:["Libraries/Frameworks"]},{title:"Pillow",competency:2,category:["Libraries/Frameworks"]},{title:"CometML",competency:2,category:["Libraries/Frameworks"]},{title:"Git",competency:3,category:["Tools/Platforms"]},{title:"Linux",competency:4,category:["Tools/Platforms"]},{title:"Anaconda",competency:3,category:["Tools/Platforms"]},{title:"Microsoft Office",competency:5,category:["Tools/Platforms"]},{title:"Deep Learning",competency:4,category:["Topics"]},{title:"Machine Learning",competency:4,category:["Topics"]},{title:"Computer Vision",competency:4,category:["Topics"]},{title:"Human-Computer Interaction",competency:2,category:["Topics"]},{title:"Temporal Sequence Modeling",competency:3,category:["Topics"]},{title:"Socially Cognizant Robotics",competency:2,category:["Topics"]},{title:"Pedestrian Trajectory Prediction",competency:4,category:["Topics"]},{title:"Autonomous Driving",competency:3,category:["Topics"]}].map((function(e){return(0,w.Z)((0,w.Z)({},e),{},{category:e.category.sort()})})),I=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],z=(0,E.Z)(new Set(O.flatMap((function(e){return e.category})))).sort().map((function(e,t){return{name:e,color:I[t]}})),H={Education:function(){return(0,o.jsx)(u,{data:U})},Experience:function(){return(0,o.jsx)(y,{data:P})},Leadership:function(){return(0,o.jsx)(v,{data:F})},Skills:function(){return(0,o.jsx)(N,{skills:O,categories:z})},Courses:function(){return(0,o.jsx)(T,{data:A})},References:function(){return(0,o.jsx)(M,{})}},Z=function(){return(0,o.jsx)(a.Z,{title:"Resume",description:"Faith Johnson's Resume",children:(0,o.jsxs)("article",{className:"post",id:"resume",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{children:(0,o.jsx)(s.rU,{to:"resume",children:"Resume"})}),(0,o.jsx)("div",{className:"link-container",children:Object.keys(H).map((function(e){return(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object.entries(H).map((function(e){var t=(0,i.Z)(e,2),r=t[0],n=t[1];return(0,o.jsx)(n,{},r)}))]})})}}}]);
//# sourceMappingURL=339.da654c47.chunk.js.map