(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[7],{48:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(49);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},49:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},65:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),a=n(5),s=n(21),c=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},o=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(c,{data:e},e.school)}))]})};o.defaultProps={data:[]};var l=o,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Technical Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d,h=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"leadership"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Leadership Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};h.defaultProps={data:[]};var m=h;function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var i=y(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return j(this,n)}}var O=n(49),k=n(48),w=function(e){var t=e.handleClick,n=e.active,i=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},x=function(e){var t=e.data,n=e.categories,i=t.category,a=t.competency,s=t.title,c={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},o=Object(k.a)(Object(k.a)({},c),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:c,children:Object(r.jsx)("span",{children:s})}),Object(r.jsx)("div",{className:"skillbar-bar",style:o}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};x.defaultProps={categories:[]};var S=x,R=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(s,e);var t,n,i,a=v(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(k.a)(Object(k.a)({},n),{},Object(O.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(k.a)(Object(k.a)({},e),{},Object(O.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=s,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(S,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(w,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),i&&b(t,i),s}(i.Component);R.defaultProps={skills:[],categories:[]};var N=R,C=function(e){var t=e.data,n=e.last;return Object(r.jsxs)("li",{className:"course-container",children:[Object(r.jsxs)("a",{href:t.link,children:[Object(r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(r.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(r.jsx)("div",{className:"course-dot",children:Object(r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};C.defaultProps={last:!1};var P=C,D=function(e){var t,n=e.data;return Object(r.jsxs)("div",{className:"courses",children:[Object(r.jsx)("div",{className:"link-to",id:"courses"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Selected Courses"})}),Object(r.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(r.jsx)(P,{data:e,last:n===t.length-1},e.title)})))})]})};D.defaultProps={data:[]};var A=D,M=function(){return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"references"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(a.b,{to:"/contact",children:Object(r.jsx)("h3",{children:"References are available upon request"})})})]})},U=[{title:"Robotics & Society",number:"16:332:640",link:"https://robotics.rutgers.edu/curriculum/",university:"Rutgers University"},{title:"Socially Cognizant Robotics",number:"16:332:590",link:"https://robotics.rutgers.edu/curriculum/",university:"Rutgers University "},{title:"Stochastic Signals & Systems",number:"16:332:541",link:"http://www.winlab.rutgers.edu/~ryates/ece541/",university:"Rutgers University"},{title:"Machine Vision",number:"16:332:561",link:"https://www.ece.rutgers.edu/graduate-course-descriptions",university:"Rutgers University"},{title:"Linear Algebra & Applications",number:"16:642:550",link:"https://www.math.rutgers.edu/academics/graduate-program/course-descriptions/1030-642-550-linear-algebra-and-applications",university:"Rutgers University"},{title:"Convex Optimization",number:"16:332:509",link:"https://www.ece.rutgers.edu/graduate-course-descriptions",university:"Rutgers University"},{title:"Intro to Deep Learning",number:"16:332:579:06",link:"https://www.ece.rutgers.edu/new-classes-and-topics-electrical-computer-engineering-14332435-436-445-446-493-494",university:"Rutgers University"},{title:"System Analysis",number:"16:332:501",link:"https://www.ece.rutgers.edu/graduate-course-descriptions",university:"Rutgers University"},{title:"Comp Arch 1",number:"16:332:563",link:"https://www.ece.rutgers.edu/graduate-course-descriptions",university:"Rutgers University"},{title:"Machine Learning for IOT",number:"16:332:579",link:"https://www.ece.rutgers.edu/new-classes-and-topics-electrical-computer-engineering-14332435-436-445-446-493-494",university:"Rutgers University"},{title:"Digital Signal Processing",number:"14:332:346",link:"https://www.ece.rutgers.edu/14332346-digital-signal-processing",university:"Rutgers University"},{title:"ECE Capstone Design",number:"14:332:448",link:"https://www.ece.rutgers.edu/14332448-capstone-design-ece",university:"Rutgers University"},{title:"Robotics & Computer Vision",number:"14:332:472",link:"https://www.ece.rutgers.edu/14332472-introduction-robotics-and-computer-vision",university:"Rutgers University"}],L=[{school:"Rutgers University",degree:"Ph.D. Computer Engineering",link:"https://www.ece.rutgers.edu",year:2024,gpa:4},{school:"Rutgers University",degree:"B.S. Electrical & Computer Engineering",link:"https://www.ece.rutgers.edu",year:2019,gpa:3.5}],T=[{company:"Rutgers University",position:"NSF Fellow & Graduate Research Assistant",link:"https://robotics.rutgers.edu",daterange:"January 2019 - Present",points:["Funded by the SOCRATES (Socially Cognizant Robotics for a Technologically Enhanced Society) NSF NRT grant","Research socially cognizant robotic navigation and pedestrian social behavior characterization","Conducted computer vision and reinforcement learning research in the lab of Professor Kristin Dana","Researched hierarchical and multi-scale reinforcement learning for visuomotor skills","Focused on the intersection of Feudal Reinforcement Learning and Autonomous Vehicles","Research conducted under a grant from Lockheed Martin"]},{company:"Nvidia",position:"Deep Learning Intern",link:"https://www.nvidia.com/en-us/research/computer-vision/",daterange:"May 2021 - August 2021",points:["Created a transformer based semantic segmentation oracle network for labeling previously unseen images","Reduced dataset labeling costs companywide by integrating the generated pseudo labels into existing datasets"]},{company:"SRI International",position:"Computer Vision Intern",link:"https://www.sri.com/computer-vision/",daterange:"May 2020 - August 2020",points:["Developed baseline agents for the Darpa Machine Common Sense project","Created an agent that uses graph networks and abductive reasoning to motivate environment exploration"]},{company:"Rutgers University",position:"Robotics & Computer Vision Guest Lecturer",link:"",daterange:"November 2019",points:["Explained the concepts of hierarchical reinforcement learning to a class of 50 students","Demonstrated how to apply these concepts to the field of computer vision with autonomous driving"]},{company:"Rutgers Honors College Maker Space",position:"Manager",link:"https://honorscollege.rutgers.edu/features/new-makerspace-honors-college",daterange:"August 2016 - May 2019",points:["Assembled and mastered the use of an X-carve engraver, 3-D printers, vinyl cutter, and sewing machine","Created a system for keeping track of 200+ inventory items when they are checked out","Assisted students and faculty in the use of the machines and the creation of projects"]},{company:"Rutgers University",position:"Astronomy Research Assistant",link:"",daterange:"June 2016 - Jan 2019",points:["Studied the role of dark matter and HII regions in galaxy formation","Used Python to analyze and manipulate galaxy formation simulation data"]},{company:"Bank of America",position:"Technology Analyst Intern",link:"https://campus.bankofamerica.com/teams.html",daterange:"June 2018 - August 2018",points:["Used machine learning principles and sci-kit learn in python to create a predictive model for stock market trades","Created a pipeline for data cleaning and prediction result interpretation in python"]},{company:"Bank of America",position:"Technology Analyst Intern",link:"https://campus.bankofamerica.com/teams.html",daterange:"June 2017 - August 2017",points:["Created a regression test for their trade reporting system using python","Followed the regression test through the SDLC including analysis and release"]},{company:"Bank of America",position:"Front End Development Intern",link:"https://campus.bankofamerica.com/teams.html",daterange:"June 2015 - August 2015",points:["Modified 2 GUIs for an in-house market analytics program using ASP.Net, C++, HTML, and Javascript","Followed 3 software projects through the SDLC"]}],E=[{company:"Rutgers University",position:"Novice 2 Expert Club Founder",link:"https://robotics.rutgers.edu/n2e-robotics/",daterange:"January 2021 - Present",points:["Started club for students to teach each other key robotics concepts in a non-intimidating environment","Organized club events, recruited student teachers, taught modules, and coordinated with university faculty"]},{company:"Rutgers/HTHS",position:"High Tech High School  Mentorship Program Mentor",link:"",daterange:"September 2019 - January 2020, September 2018 - January 2019",points:["Mentored two female, high school seniors weekly in Professor Kristin Dana\u2019s research lab at Rutgers University","Created and facilitated programming to help them learn computer vision and machine learning techniques"]},{company:"Theta Tau - Omicron Delta Chapter",position:"Treasurer",link:"https://thetatau.rutgers.edu",daterange:"December 2017 - December 2018",points:["Managed the budget and supervised the collection of dues for the 2018 calendar year","Collaborated with the different chairs to come up with a fiscally feasible spending plan"]},{company:"Theta Tau - Omicron Delta Chapter",position:"Dance Marathon Liaison",link:"https://thetatau.rutgers.edu",daterange:"September 2017 - March 2018",points:["Organized fundraising events for the team members to reach their charity goals","Facilitated communication between the Dance Marathon main offices and the Omicron Delta chapter of Theta Tau"]}],I=n(17);var J=n(24);var F,H=[{title:"Numpy",competency:4,category:["Data Science","Python"]},{title:"HTML + SASS/SCSS/CSS",competency:1,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C++",competency:1,category:["Languages"]},{title:"Java",competency:1,category:["Languages"]},{title:"MATLAB",competency:3,category:["Languages"]},{title:"Pandas",competency:4,category:["Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Science","Python"]},{title:"Scikit-Learn",competency:3,category:["Data Science","Python"]},{title:"OpenCV",competency:4,category:["Data Science","Python"]},{title:"Pytorch",competency:4,category:["Data Science","Python"]}].map((function(e){return Object(k.a)(Object(k.a)({},e),{},{category:e.category.sort()})})),z=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],_=(F=new Set(H.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(I.a)(e)}(F)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(F)||Object(J.a)(F)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:z[t]}})),B=["Education","Experience","Leadership","Skills","Courses","References"];t.default=function(){return Object(r.jsx)(s.a,{title:"Resume",description:"Faith Johnson's Resume",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:B.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:L}),Object(r.jsx)(p,{data:T}),Object(r.jsx)(m,{data:E}),Object(r.jsx)(N,{skills:H,categories:_}),Object(r.jsx)(A,{data:U}),Object(r.jsx)(M,{})]})})}}}]);
//# sourceMappingURL=7.ea020d9b.chunk.js.map