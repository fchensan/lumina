(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},121:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},122:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(121),a=n(123);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},123:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(120)),i=n(122),c={id:"dsc",title:"Developer Student Club NUS"},l={unversionedId:"cca/dsc",id:"cca/dsc",isDocsHomePage:!1,title:"Developer Student Club NUS",description:"About CCA",source:"@site/docs/cca/dsc.mdx",permalink:"/lumina/docs/cca/dsc",editUrl:"https://github.com/benclmnt/study-in-nus/edit/master/docs/cca/dsc.mdx",sidebar:"CCAs and Clubs",previous:{title:"Bridges for Enterprise",permalink:"/lumina/docs/cca/bridges-enterprise"},next:{title:"NUS Hackers",permalink:"/lumina/docs/cca/hackers"}},s=[{value:"About CCA",id:"about-cca",children:[]},{value:"Why Should You Join?",id:"why-should-you-join",children:[]},{value:"Activites/Events",id:"activitesevents",children:[]},{value:"Testimonials",id:"testimonials",children:[]},{value:"How to Sign Up?",id:"how-to-sign-up",children:[]},{value:"CCA Contact Details",id:"cca-contact-details",children:[]},{value:"Senior Contact Details",id:"senior-contact-details",children:[]}],u={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{alt:"DSC NUS Club logo",src:Object(i.a)("/img/cca/dsc.jpeg"),style:{maxWidth:"400px",maxHeight:"300px"}}),Object(o.b)("h2",{id:"about-cca"},"About CCA"),Object(o.b)("p",null,"Developer Student Club (DSC) NUS is a student-run organization, driven by an initiative led by Google Developers. Consisting of members who share a passion for #TechForGood, the club leverages technology to create real impact solutions for social communities. "),Object(o.b)("h2",{id:"why-should-you-join"},"Why Should You Join?"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Skills/Benefits you'll gain"),"\nExternal"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Engage on real, pro-bono tech projects with nonprofits and social enterprises "),Object(o.b)("li",{parentName:"ul"},"Receive hands-on-training on technical skills in app/web development (tech)"),Object(o.b)("li",{parentName:"ul"},"Liaise with non-profits to gather problems & provide them the best solutions"),Object(o.b)("li",{parentName:"ul"},"Meet like-minded people who are passionate about using technology to create social impact")),Object(o.b)("p",null,"Internal"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You\u2019ll receive the chance to learn on how to liaise with professionals from the tech industry"),Object(o.b)("li",{parentName:"ul"},"You\u2019ll receive the chance to learn on how to prepare a workshop and curriculum to be delivered")),Object(o.b)("h2",{id:"activitesevents"},"Activites/Events"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"External Team:"),"\nEmbark on tech projects in collaboration with several nonprofits, in a social cause of your own choice!\n",Object(o.b)("strong",{parentName:"p"},"Internal Team"),"\nPlanning, Organizing and Executing Events such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Tech for Good Workshops: Educational workshops for all NUS students run by members of the internal team. Last semester, the club ran two workshops focusing on Data Analytics and Web Development skills."),Object(o.b)("li",{parentName:"ul"},"Tech for Good Career Talk: Career exposure event for all NUS students by inviting professionals from the tech/start-up/social enterprise sector."),Object(o.b)("li",{parentName:"ul"},"Hack for Good Hackathon: Hackathon competition for all NUS students")),Object(o.b)("h2",{id:"testimonials"},"Testimonials"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Testimonial #1")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Name: Matthew Alexander"),Object(o.b)("li",{parentName:"ul"},"Current Role: Project Lead (Tech)"),Object(o.b)("li",{parentName:"ul"},"Testimony: Being in DSC presents me with an opportunity that is unique to none. As the tech lead of the project, my work impacts real people that need these solutions the most. The experience offers an experience to \u2018taste\u2019 leading a software engineering project from gathering use-cases to develop the actual prototype. If you want to pick-up tech skills (UI/UX, Backend, Frontend), meet like-minded people & help those; definitely check out DSC NUS.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Testimonial #2"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Name: Jovita Suryawinata"),Object(o.b)("li",{parentName:"ul"},"Current Role: Project Lead (Business)"),Object(o.b)("li",{parentName:"ul"},"Testimony: Interested in learning more about tech, I decided to join DSC and contribute with my business knowledge, and am glad to be partnered with my tech lead who is really keen in letting me learn and explore tech better. I feel that DSC is an inclusive and friendly community, in which non-tech students can connect with tech students and share their knowledge with others, whilst creating social impact together.")),Object(o.b)("h2",{id:"how-to-sign-up"},"How to Sign Up?"),Object(o.b)("p",null,"Recruitment will likely open in August. Keep a lookout at their IG: @dscnus for updates on recruitment sessions."),Object(o.b)("h2",{id:"cca-contact-details"},"CCA Contact Details"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Website: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://dscnustech.github.io/"}),"https://dscnustech.github.io/")),Object(o.b)("li",{parentName:"ul"},"Email Address: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:dsc@comp.nus.edu.sg"}),"dsc@comp.nus.edu.sg")),Object(o.b)("li",{parentName:"ul"},"Facebook page: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.facebook.com/DevSpaceSG/"}),"https://www.facebook.com/DevSpaceSG/")),Object(o.b)("li",{parentName:"ul"},"Instagram page: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.instagram.com/dscnus/"}),"https://www.instagram.com/dscnus/")),Object(o.b)("li",{parentName:"ul"},"LinkedIn page: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.linkedin.com/company/dscnus/?originalSubdomain=sg"}),"https://www.linkedin.com/company/dscnus/?originalSubdomain=sg")),Object(o.b)("li",{parentName:"ul"},"Github: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/dscnustech"}),"https://github.com/dscnustech"))),Object(o.b)("h2",{id:"senior-contact-details"},"Senior Contact Details"),Object(o.b)("p",null,"Matthew Alexander, Jovita Suryawinata"))}b.isMDXComponent=!0}}]);