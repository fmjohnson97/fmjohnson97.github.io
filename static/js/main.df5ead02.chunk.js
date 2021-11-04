(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),s=n(16),l=n(3),a=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&a.a.initialize(j);var b=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},u=n(5),h=n(22),d=[{index:!0,label:"Faith Johnson",path:"/"},{label:"Resume",path:"/resume"},{label:"Publications",path:"/publications"},{label:"Presentations",path:"/presentations"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(4).then(n.t.bind(null,64,7))})),x=function(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return s(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return s(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return s(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Faith Johnson"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:faith.johnson@rutgers.edu",children:"faith.johnson@rutgers.edu"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:" Hi, I'm Faith. I am a third year, NSF Fellow, Ph.D. student studying under Professor Kristin Dana in the Rutgers University ECE department. My main focus is the intersection of computer vision, machine learning, and robotics. Contact me at faith.johnson@rutgers.edu"}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Michael D'Angelo ",Object(c.jsx)(u.b,{to:"/",children:"mldangelo.com"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(s.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(s.a,{titleTemplate:"%s | Faith Johnson",defaultTitle:"Faith Johnson",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Faith Johnson's personal website."};t.a=v},25:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(29)),s=n(30),l=n(31),a=n(32),r=[{link:"https://github.com/fmjohnson97",label:"Github",icon:s.faGithub},{link:"https://www.linkedin.com/in/faith-johnson-2950b4100/",label:"LinkedIn",icon:l.faLinkedinIn},{link:"mailto:faith.johnson@rutgers.edu",label:"Email",icon:a.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:r.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),l=n(15),a=n(5),r=n(3),o=n(21),j=(n(45),Object(i.lazy)((function(){return n.e(8).then(n.bind(null,59))}))),b=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,67))})),u=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,60))})),h=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,61))})),d=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,68))})),O=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,65))})),x=Object(i.lazy)((function(){return Promise.all([n.e(3),n.e(13)]).then(n.bind(null,66))})),m=Object(i.lazy)((function(){return n.e(12).then(n.bind(null,62))})),p=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,63))})),f=function(){return Object(c.jsx)(a.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/publications",component:b}),Object(c.jsx)(r.a,{path:"/presentations",component:m}),Object(c.jsx)(r.a,{path:"/projects",component:d}),Object(c.jsx)(r.a,{path:"/stats",component:x}),Object(c.jsx)(r.a,{path:"/contact",component:j}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{path:"/feudalsteering",component:p}),Object(c.jsx)(r.a,{component:h,status:404})]})})})},g=function(){return Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})})},v=document.getElementById("root");v.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(g,{}),v):Object(l.render)(Object(c.jsx)(g,{}),v)}},[[46,1,2]]]);
//# sourceMappingURL=main.df5ead02.chunk.js.map