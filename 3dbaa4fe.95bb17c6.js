(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},121:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},122:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(121),r=n(123);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,s=void 0!==i&&i,u=o.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return c?e+l:l}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},123:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(120)),i=n(122),s={id:"genus",title:"NUS Guitar Ensemble"},u={unversionedId:"cca/genus",id:"cca/genus",isDocsHomePage:!1,title:"NUS Guitar Ensemble",description:"About CCA",source:"@site/docs/cca/genus.mdx",permalink:"/lumina/docs/cca/genus",editUrl:"https://github.com/benclmnt/study-in-nus/edit/master/docs/cca/genus.mdx",sidebar:"CCAs and Clubs",previous:{title:"NUSChoir",permalink:"/lumina/docs/cca/choir"},next:{title:"NUS Symphony Orchestra",permalink:"/lumina/docs/cca/nusso"}},c=[{value:"About CCA",id:"about-cca",children:[]},{value:"Why Should You Join?",id:"why-should-you-join",children:[]},{value:"Activites/Events",id:"activitesevents",children:[]},{value:"Testimonials",id:"testimonials",children:[]},{value:"How to Sign Up?",id:"how-to-sign-up",children:[]},{value:"CCA Contact Details",id:"cca-contact-details",children:[]},{value:"Senior Contact Details",id:"senior-contact-details",children:[]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("img",{alt:"NUS Guitar Ensemble logo",src:Object(i.a)("/img/cca/genus.png"),style:{maxWidth:"400px",maxHeight:"300px"}}),Object(o.b)("h2",{id:"about-cca"},"About CCA"),Object(o.b)("p",null,"Established in 1981 by Cultural Medallion recipient Mr Alex Abisheganaden, NUS Guitar Ensemble (GENUS) is the region\u2019s first Niibori guitar ensemble. Previously comprising only classical prime guitars, GENUS was later modelled after the Niibori Orchestra in Japan, becoming the pioneering guitar ensemble in Singapore to showcase the distinctive and diverse musical possibilities of the Niibori method."),Object(o.b)("p",null,"Under the directorship of our conductor Dr Robert Casteels, GENUS is proud to have performed a diverse repertoire featuring pieces from different musical cultures, ranging from major classical Western works to contemporary Japanese pieces. As a pioneer in the Singapore guitar ensemble scene, GENUS aims to uphold a strong musical standard befitting of our status, in order to set the benchmark of musical excellence for ensembles in Singapore while establishing connections with international ensembles. Moving forward, GENUS is working towards promoting a greater love for guitar ensemble music in Singapore so as to establish the guitar art form as an integral part of the local arts landscape."),Object(o.b)("p",null,"In our pursuit of musical excellence and continued improvement, GENUS offers its members an environment that is both nurturing and challenging. Beginning with a structured workshop programme for newcomers, each member\u2019s journey promises ample performance and learning opportunities \u2014 through our annual concerts, external performances and overseas exchanges. Notably, GENUS has embarked on tours to Japan and Germany, attained awards in local and international competitions, and performed for external events ranging from Esplanade\u2019s In Youthful Company performance series to the ASEAN University Games."),Object(o.b)("p",null,"Source: NUS CFA Website "),Object(o.b)("h2",{id:"why-should-you-join"},"Why Should You Join?"),Object(o.b)("p",null,"Smaller-scale concert (sem 1)\nExxonMobil Concert series\nAnnual Concert (usually in sem 2)\nGENUS Camp (usually around 4-5 days)\nOverseas Trip for musical groups exchange (potentially halted due to COVID-19)\nLet\u2019s Play Guitar by GENUS (internal concert)"),Object(o.b)("h2",{id:"activitesevents"},"Activites/Events"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Concert performed:")),Object(o.b)("p",null,"Dreamscape (ExxonMobil Concert 2019)\nKaleidoscope (Annual Concert 2019)\nGrande de Bal (Annual Concert 2018)\nNUS Arts Festival 2016 - Reverie\nJapanese cultural and concert with the Niibori Group (2014)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Notable pieces played previously:")),Object(o.b)("p",null,"Flower Dance by DJ Okawari (Check it out on our Youtube!)\nA Cruel Angel\u2019s Thesis by Hidetoshi Satou (Check it out on our Youtube!)\nTsubasa by Kengo Momose (Check it out on our Youtube!)\nZenzenzense by RADWIMPS (mini ensemble)\nRain - Fantasia of water and light by Kengo Momose (Check it out on Spotify!)\nHoshizukuyo Ni Omou (Inspired by Tanabata and the legends of Orihime and Hikiboshi)  by Kengo Momose (Check it out on Spotify!)\nBrandenburg Concerto No. 2 in F Major (First Movement) by Bach"),Object(o.b)("h2",{id:"testimonials"},"Testimonials"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Testimonial #1")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Name: Stanley Jeremy"),Object(o.b)("li",{parentName:"ul"},"Current Role: Member of Contrabass, Bass and Guitarron Section (Bass)"),Object(o.b)("li",{parentName:"ul"},"Past Role: Member of Alto Section (Alto 2)"),Object(o.b)("li",{parentName:"ul"},"Testimony: I have played in my secondary school guitar ensemble previously and have known NUS Guitar Ensemble for a while. I was already planning to join at least one musical group just to try and have a bit of fun in university. I ended up being in GENUS (Initially wanted to join NUS Wind Symphony but my saxophone was only loaned until the end of JC so I didn\u2019t instrument to do so). However, I didn\u2019t regret the decision to do so and actually enjoyed my time in GENUS a lot so far. Despite some challenges as I didn\u2019t play guitar for 2 years (I played saxophone in JC haha) but, the musical choices and the seniors support actually gave me the motivation to be better every day. Our group may not be as big as NUSSO or NUSWS but, we are a closely-knitted group and despite coming from the various faculties of NUS, we are united by our love and appreciation for guitars. Come and join GENUS to witness how guitar can actually match the strength of an ensemble or even an orchestra and change your view of guitars beyond an individual-based instrument.")),Object(o.b)("h2",{id:"how-to-sign-up"},"How to Sign Up?"),Object(o.b)("p",null,"We are opening recruitment and hosting open classes for new members to learn more about GENUS. The details are as of below"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Open Classes:"),"\nLearn more about GENUS and what we do. Witness the magic of Niibori guitars and join a Q&A session with the seniors :)"),Object(o.b)("p",null,"01 August 2020 - 1600 to 1700, Register at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://bit.ly/genus-aug-1"}),"https://bit.ly/genus-aug-1"),"\n04 August 2020 - 2000 to 2100, Register at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://bit.ly/genus-aug-4"}),"https://bit.ly/genus-aug-4")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Guitar Audition:"),"\nPrepare a piece of your choice (at least about 2 mins) and undergo a short-sighted reading test + rhythm segment. The piece can be in any musical instruments, preferably in guitar"),Object(o.b)("p",null,"19 August 2020 - 25 August 2020 (conducted online)\nSign Up at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://bit.ly/genusaudition"}),"https://bit.ly/genusaudition")),Object(o.b)("h2",{id:"cca-contact-details"},"CCA Contact Details"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Email Address: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"mailto:nusguitarensemble@gmail.com"}),"nusguitarensemble@gmail.com")),Object(o.b)("li",{parentName:"ul"},"Facebook page: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.facebook.com/NUSGuitarEnsemble"}),"https://www.facebook.com/NUSGuitarEnsemble")),Object(o.b)("li",{parentName:"ul"},"Instagram page: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.instagram.com/nusguitarensemble/?hl=en"}),"https://www.instagram.com/nusguitarensemble/?hl=en")),Object(o.b)("li",{parentName:"ul"},"Youtube page: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/NUSGuitarEnsemble"}),"https://www.youtube.com/NUSGuitarEnsemble"))),Object(o.b)("h2",{id:"senior-contact-details"},"Senior Contact Details"),Object(o.b)("p",null,"Stanley Jeremy, Amelia Regina"))}b.isMDXComponent=!0}}]);