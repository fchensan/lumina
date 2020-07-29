(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},118:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(117),a=n(119);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},119:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),o=(n(0),n(116)),i=n(118),c={id:"esport",title:"NUS Esport Gaming"},u={unversionedId:"after/cca/esport",id:"after/cca/esport",isDocsHomePage:!1,title:"NUS Esport Gaming",description:"About CCA",source:"@site/docs/after/cca/esport.mdx",permalink:"/lumina/docs/after/cca/esport",editUrl:"https://github.com/benclmnt/study-in-nus/edit/master/docs/after/cca/esport.mdx",sidebar:"after",previous:{title:"NUSS Taekwondo",permalink:"/lumina/docs/after/cca/taekwondo"},next:{title:"Bank Accounts",permalink:"/lumina/docs/after/bank-accounts"}},s=[{value:"About CCA",id:"about-cca",children:[]},{value:"Why Should You Join?",id:"why-should-you-join",children:[]},{value:"Activites/Events",id:"activitesevents",children:[]},{value:"Testimonials",id:"testimonials",children:[]},{value:"How to Sign Up?",id:"how-to-sign-up",children:[]},{value:"CCA Contact Details",id:"cca-contact-details",children:[]},{value:"Senior Contact Details",id:"senior-contact-details",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{alt:"NUS ISE Club logo",src:Object(i.a)("/img/cca/esport.png"),style:{maxWidth:"400px",maxHeight:"300px"}}),Object(o.b)("h2",{id:"about-cca"},"About CCA"),Object(o.b)("p",null,"NUSEG organises gaming competitions in NUS, ranging from Mobile Legends, DotA, LOL, Hearthstone, and Overwatch. We also play the video games mentioned. This CCAis created by gamers for gamers."),Object(o.b)("h2",{id:"why-should-you-join"},"Why Should You Join?"),Object(o.b)("p",null,"If you like to play games, need friends to push rank together with or even getting recommendation letter out of game in NUS, here is the place"),Object(o.b)("h2",{id:"activitesevents"},"Activites/Events"),Object(o.b)("p",null,"Weekly playing specific game that you choose (30 mins session weekly, can be player or spectator)"),Object(o.b)("h2",{id:"testimonials"},"Testimonials"),Object(o.b)("p",null,"Testimonial #1"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Name: Eric Santoso "),Object(o.b)("li",{parentName:"ul"},"Current Role: Just a normal member"),Object(o.b)("li",{parentName:"ul"},"Past Role: new for 1 month"),Object(o.b)("li",{parentName:"ul"},"Testimony: slack activity tbh, I join their Mobile Legends sub-group and only required to play with other members once in a week.")),Object(o.b)("h2",{id:"how-to-sign-up"},"How to Sign Up?"),Object(o.b)("p",null,"Fill-up this form: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://l.instagram.com/?u=http%3A%2F%2Fbit.ly%2Fnusegaming&e=ATN92ezH77RLDKLj86T-CxVyL98kTuZcVabikrV6hC1aAoChBdR1p-DcdzOw-RHPcNRPriFT0qxn6jP0M-Cl0Q&s=1"}),"https://l.instagram.com/?u=http%3A%2F%2Fbit.ly%2Fnusegaming&e=ATN92ezH77RLDKLj86T-CxVyL98kTuZcVabikrV6hC1aAoChBdR1p-DcdzOw-RHPcNRPriFT0qxn6jP0M-Cl0Q&s=1"),"\nAvailable on NUSEG Instagram bio below"),Object(o.b)("h2",{id:"cca-contact-details"},"CCA Contact Details"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Email Address: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"mailto:sean.heng@u.nus.edu"}),"sean.heng@u.nus.edu")),Object(o.b)("li",{parentName:"ul"},"Facebook page: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.facebook.com/NUSEGaming/about"}),"https://www.facebook.com/NUSEGaming/about")),Object(o.b)("li",{parentName:"ul"},"Instagram page: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.instagram.com/nusegaming/"}),"https://www.instagram.com/nusegaming/"))),Object(o.b)("h2",{id:"senior-contact-details"},"Senior Contact Details"),Object(o.b)("p",null,"Eric (93548691)"))}b.isMDXComponent=!0}}]);