(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,p=d["".concat(i,".").concat(m)]||d[m]||b[m]||n;return a?o.a.createElement(p,l(l({ref:t},u),{},{components:a})):o.a.createElement(p,l({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},117:function(e,t,a){"use strict";var r=a(0),o=a(19);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},118:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var r=a(117),o=a(119);function n(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var n=void 0===r?{}:r,i=n.forcePrependBaseUrl,l=void 0!==i&&i,s=n.absolute,u=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(o.b)(a))return a;if(l)return t+a;var c=!a.startsWith(t)?t+a.replace(/^\//,""):a;return u?e+c:c}(n,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,n().withBaseUrl)(e,t)}},119:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}))},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var r=a(2),o=a(6),n=(a(0),a(116)),i=a(118),l={id:"module-registration",title:"Module Registration"},s={unversionedId:"after/module-registration",id:"after/module-registration",isDocsHomePage:!1,title:"Module Registration",description:"We are preparing a special ModReg guide. Stay tuned!",source:"@site/docs/after/module-registration.mdx",permalink:"/lumina/docs/after/module-registration",editUrl:"https://github.com/benclmnt/study-in-nus/edit/master/docs/after/module-registration.mdx",lastUpdatedAt:1594604134,sidebar:"after",previous:{title:"Hall and Faculty Orientations",permalink:"/lumina/docs/after/hall-fac-ori"},next:{title:"List of CCAs and Clubs",permalink:"/lumina/docs/after/cca/cca-index"}},u=[],c={rightToc:u};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"We are preparing a special ModReg guide. Stay tuned!"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"A brief introduction to the modular system")),Object(n.b)("p",null," Note: this section applies mainly for Engineering, Computing, Science, SDE, FASS, BIZ, some exceptions may apply for different majors. Do double check with seniors from the same major."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Classes/courses in NUS are called \u201cmodules\u201d."),Object(n.b)("li",{parentName:"ul"},"Almost every module will have MCs (modular credits) assigned to them."),Object(n.b)("li",{parentName:"ul"},"Most modules are 4 MCs."),Object(n.b)("li",{parentName:"ul"},"You will need about 160 MCs to graduate, depending on your major."),Object(n.b)("li",{parentName:"ul"},"Out of these ~160 MCs, more than half of them are your Core Modules (Modules associated with your major)"),Object(n.b)("li",{parentName:"ul"},"You will need to clear 5 General Education Modules (20 MCs in total) before you graduate. Students in the UTown college programme will take RC modules instead."),Object(n.b)("li",{parentName:"ul"},"You will have about 32 MCs of Unrestricted Electives (You can take any modules you are interested in, even if it\u2019s from outside of your major/faculty)")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Module Registration process in NUS is done via the ModReg portal in EduRec. It is where you will choose your desired module for the semester.")),Object(n.b)("img",{alt:"ModReg flowchart",src:Object(i.a)("/img/modreg/modreg-flowchart.jpg")}),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Source of info on this page: ","[NUS ModReg website]"," (",Object(n.b)("a",Object(r.a)({parentName:"strong"},{href:"http://www.nus.edu.sg/ModReg/using_modreg_undergraduate.html"}),"http://www.nus.edu.sg/ModReg/using_modreg_undergraduate.html"),")")),Object(n.b)("p",null,"You will receive an email from the Registrar\u2019s Communication when the module registration period is about to begin. The first thing to do before you can choose / select your desired modules, you have to submit your academic plan declaration for the following semester. Do note your own degree requirements before selecting the modules, and make sure you have simulated your desired timetable for the semester to make sure there is no timetable clash. This can be done through NUSMods."),Object(n.b)("p",null,"Module Registration process is divided into 3 rounds."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Round 1",Object(n.b)("br",{parentName:"li"}),"This is a protected round.",Object(n.b)("br",{parentName:"li"}),"Students will be able to select modules that can be used towards:",Object(n.b)("br",{parentName:"li"}),"(i) Programme (Faculty, Major, Specialisation) requirements",Object(n.b)("br",{parentName:"li"}),"(ii) Second Major requirements",Object(n.b)("br",{parentName:"li"}),"(iii) Direct admission/restricted Minor requirements",Object(n.b)("br",{parentName:"li"}),"(iv) Prescribed English requirements (i.e. modules offered by CELC)  "),Object(n.b)("li",{parentName:"ul"},"Round 2",Object(n.b)("br",{parentName:"li"}),"This is an open round where UG students are able to select all modules (including General Education modules) they wish to read for the semester.",Object(n.b)("br",{parentName:"li"}),"Priority for General Education modules will be first accorded to students who have not read a module from a particular pillar (i.e. GEH, GET or GES) before students who are seeking to read a 2nd module from the same pillar.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Round 3",Object(n.b)("br",{parentName:"li"}),"This round is similar to Round 2 except that the balance quotas are merged for all categories of students (GD/UG/NG/CPE) to optimise class enrolment. That is, un-used quota from a particular category of students may be allocated to students from another category")),Object(n.b)("p",null,"After all your modules have been allocated to you, you will have to choose your tutorials and/or labs via ModReg after round 3 is finished. You can refer to the ","[View My Classes]"," function to see the modules allocated to you."),Object(n.b)("p",null,"Tutorial/lab registration is by balloting. The allocation of tutorial groups is an exercise that is separate from the allocation of modules by ","[Select Modules]"," or ","[Submit Module Requests]",". Students should refer to the registration schedule for the dates of the different rounds for Tutorials/Labs registration."),Object(n.b)("p",null,"A tutorial group may be cancelled if enrolment for the group is low. If students cannot find a suitable tutorial group for a module, they may be required to drop the module and be asked to choose an alternative module with vacancies."),Object(n.b)("p",null,"Students who read modules offered by the Faculty of Arts and Social Sciences have to register for tutorial groups for their modules. Otherwise, the Faculty will withdraw the module with a \u2018W\u2019 grade in Week 5 of the semester."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Stages of Tutorial Registration:")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"[Select Tutorials/Labs]"," Function")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"There are 2 ","[Select Tutorials/Labs]"," rounds."),Object(n.b)("li",{parentName:"ul"},"For each round, you can select and rank up to 20 preferred Tutorial/Lab timeslots for all the modules that you are enrolled in, but you must ensure that there are no timetable clashes between the ranked preferences and his/her existing class schedule.")),Object(n.b)("ol",{start:2},Object(n.b)("li",{parentName:"ol"},"[Add/Swap Tutorials/Labs]"," Function")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The add/swap process begins after the last round of tutorial/lab balloting. Students without tutorial class can use this function to add tutorial class as long as there are still vacancies. The add request will be processed at frequent intervals and allocation is on first-come-first-served basis."),Object(n.b)("li",{parentName:"ul"},"If a student has already been successfully allocated a tutorial class but would like to change to another class that is currently full, he/she can post a swap request. The swap request will be processed at frequent intervals and will be effected when there is a corresponding match with another student. Otherwise, the request will be stored in the system until the time when a corresponding match is found. Students may check their tutorial/lab allocation in ","[View My Classes]",".")),Object(n.b)("ol",{start:3},Object(n.b)("li",{parentName:"ol"},"Manual (Walk-In) Registration at Departments")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Appeals to departments should only be filed after the student has tried but failed to secure a suitable tutorial timeslot using the above-listed methods. Students should note that they can appeal only for tutorial groups with vacancies. The departments will not accommodate students who regard manual (walk-in) registration as the first course of action, instead of balloting and add/swap.")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Dropping of modules:"),"\nA student may drop a module he/she is enrolled in so long as the remaining MCs meet the minimum workload requirement. When a module is dropped, all associated classes (e.g. lectures, seminar, tutorial, labs, etc.) will be dropped in tandem."),Object(n.b)("p",null,"When dropping a module, students should be mindful of the \u201cW\u201d and \u201cF\u201d grade period (refer to ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"http://www.nus.edu.sg/registrar/calendar.html"}),"Academic Calendar"),"). \u201cW\u201d stands for withdraw, and \u201cF\u201d stands for fail. In general, students will be able to drop modules via the ","[Drop Classes]"," function before the \u201cF\u201d grade period. A student should approach the module host faculty if he/she has difficulty dropping modules via ModReg@EduRec."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Dropping of tutorial/lab classes:"),"\nStudents may drop a tutorial/lab class they have been successfully allocated if they wish to change to another class. Dropping a tutorial/lab class will not de-enrol a student from his/her module."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Submit appeals"),"\nStudents can submit appeals via the ","[Submit Appeals/Inquiries]"," function to address module/class enrolment issues. To facilitate efficient handling of appeals, students should select the correct appeal type."))}d.isMDXComponent=!0}}]);