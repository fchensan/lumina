(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?r.a.createElement(d,c(c({ref:t},u),{},{components:n})):r.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},123:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},124:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(123),r=n(125);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return u?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},125:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},58:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(122)),o=n(124),c={id:"kdt",title:"NUS Korean Cultural Interest Group Dance Team (KDT)"},s={unversionedId:"cca/kdt",id:"cca/kdt",isDocsHomePage:!1,title:"NUS Korean Cultural Interest Group Dance Team (KDT)",description:"About CCA",source:"@site/docs/cca/kdt.mdx",permalink:"/lumina/docs/cca/kdt",editUrl:"https://github.com/benclmnt/study-in-nus/edit/master/docs/cca/kdt.mdx",sidebar:"CCAs and Clubs",previous:{title:"NUS Symphony Orchestra",permalink:"/lumina/docs/cca/nusso"},next:{title:"NUSSU Committee for Information Technology (commIT)",permalink:"/lumina/docs/cca/commit"}},u=[{value:"About CCA",id:"about-cca",children:[]},{value:"Why Should You Join?",id:"why-should-you-join",children:[]},{value:"Activites/Events",id:"activitesevents",children:[]},{value:"Testimonials",id:"testimonials",children:[]},{value:"How to Sign Up?",id:"how-to-sign-up",children:[]},{value:"CCA Contact Details",id:"cca-contact-details",children:[]},{value:"Senior Contact Details",id:"senior-contact-details",children:[]}],l={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("img",{alt:"NUS Korean Cultural Interest Group Dance Team (KDT) logo",src:Object(o.a)("/img/cca/kdt.png"),style:{maxWidth:"400px",maxHeight:"300px"}}),Object(i.b)("h2",{id:"about-cca"},"About CCA"),Object(i.b)("p",null,"NUS Korean Cultural Interest Group was established in 2009 to promote awareness of Korean culture among NUS\u2019 student population. It strives to cultivate a deeper sense of appreciation towards Korean culture. NUS KCIG consists of Korean Cultural Society (KCS) and KCIG Dance Team (KDT). "),Object(i.b)("p",null,"KCS organises activities that focus on the cultural aspect of Korea. Its activities are weekly sessions, hosting incoming exchange students from South Korea, and organising Buddy Program. Check KCS 2019 out: ","[NUS Korean Cultural Interest Group | KCS]"," (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=HoTG_3I5ALw"}),"https://www.youtube.com/watch?v=HoTG_3I5ALw"),"). "),Object(i.b)("p",null,"KDT\u2019s activities include dance covers and an annual concert. Check KDT 2019 mashup out: ","[NUS Korean Cultural Interest Group | KDT]"," (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=mH70XvqfS2Y"}),"https://www.youtube.com/watch?v=mH70XvqfS2Y"),")."),Object(i.b)("h2",{id:"why-should-you-join"},"Why Should You Join?"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Skills and benefits you'll gain")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Meet people who share the same interests as you"),Object(i.b)("li",{parentName:"ol"},"Learn to dance and participate in dance covers and/or concert")),Object(i.b)("h2",{id:"activitesevents"},"Activites/Events"),Object(i.b)("p",null,"NUS KDT\u2019s official practices are usually held every Saturday (10am-2pm), excluding recess, reading, examination, and vacation weeks. KDT members practice either for dance cover filming or annual concert, which is KDT\u2019s biggest event. The annual concert is usually held in semester 2 (usually February or March). "),Object(i.b)("img",{alt:"TB6 Concert",src:Object(o.a)("/img/cca/kdt/TB6.jpg"),style:{maxWidth:"400px",maxHeight:"300px"}}),Object(i.b)("img",{alt:"RBB Concert",src:Object(o.a)("/img/cca/kdt/RBB.jpg"),style:{maxWidth:"400px",maxHeight:"300px"}}),Object(i.b)("p",null,"NUS KCS\u2019 activities include weekly sessions (activities vary every year),and Buddy Program, where members are usually paired with a Korean exchange student (usually in a group of 2-3 people)."),Object(i.b)("h2",{id:"testimonials"},"Testimonials"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Testimonial #1")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Name: Geoffrey Bryan Lion"),Object(i.b)("li",{parentName:"ul"},"Current Role: member at algorithmic trading research team"),Object(i.b)("li",{parentName:"ul"},"Past Role: member of training wing"),Object(i.b)("li",{parentName:"ul"},"Testimony: during my time at the training wing, I\u2019ve explored several topics such as sentiment analysis, fraud analytics, and time series analysis. After going through the trainings, I am currently a member of the algorithmic trading team since I am passionate in trading and investments. People who are interested in financial technology should join this interest group!")),Object(i.b)("h2",{id:"how-to-sign-up"},"How to Sign Up?"),Object(i.b)("p",null,"Recruitment will likely start soon. Keep a lookout at the NUS FinTech Instagram page (@nusfintech) or the official website (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.fintechsociety.comp.nus.edu.sg/"}),"https://www.fintechsociety.comp.nus.edu.sg/"),")!"),Object(i.b)("h2",{id:"cca-contact-details"},"CCA Contact Details"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Website: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.fintechsociety.comp.nus.edu.sg/"}),"https://www.fintechsociety.comp.nus.edu.sg/")),Object(i.b)("li",{parentName:"ul"},"Email Address: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:nusfintech@gmail.com"}),"nusfintech@gmail.com")),Object(i.b)("li",{parentName:"ul"},"Instagram page: @nusfintech"),Object(i.b)("li",{parentName:"ul"},"LinkedIn page: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.linkedin.com/company/nus-fintech-society/?originalSubdomain=sg"}),"https://www.linkedin.com/company/nus-fintech-society/?originalSubdomain=sg"))),Object(i.b)("h2",{id:"senior-contact-details"},"Senior Contact Details"),Object(i.b)("p",null,"Geoffrey Bryan Lion"))}p.isMDXComponent=!0}}]);