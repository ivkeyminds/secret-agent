(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{695:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},815:function(e,t,r){"use strict";r.r(t);var s=r(1),o=r(695),n=r(0);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var a={VueRemarkRoot:o.a},u=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(a).forEach((function(e){"object"===i(a[e])&&"function"==typeof a[e].render?t[e]=a[e]:r[e]=function(){return a[e]}}))},d=n.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",v={excerpt:null,title:"SuperNodeList"};var p=function(e){e.options[c]&&(e.options[c]=v),n.a.util.defineReactive(e.options,c,v),e.options.computed=d.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},l=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"supernodelist"}},[r("a",{attrs:{href:"#supernodelist","aria-hidden":"true"}},[e._v("#")]),e._v("SuperNodeList")]),r("div",{staticClass:"overview"},[r("span",{staticClass:"seoSummary"},[r("strong",[r("code",[e._v("NodeList")])]),e._v(" objects are collections of "),r("a",{attrs:{href:"/en-US/docs/Glossary/Node/DOM"}},[e._v("nodes")]),e._v(", usually returned by properties such as "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node/childNodes",title:"The Node.childNodes read-only property returns a live NodeList of child nodes of the given element where the first child node is assigned index 0."}},[r("code",[e._v("Node.childNodes")])]),e._v(" and methods such as "),r("a",{attrs:{href:"/en-US/docs/Web/API/Document/querySelectorAll",title:"The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors."}},[r("code",[e._v("document.querySelectorAll()")])]),e._v(".")])]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"length"}},[r("a",{attrs:{href:"#length","aria-hidden":"true"}},[e._v("#")]),e._v(".length "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The number of nodes in the "),r("code",[e._v("NodeList")]),e._v(".")]),r("h4",{attrs:{id:"type-superdocument"}},[r("a",{attrs:{href:"#type-superdocument","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"entries"}},[r("a",{attrs:{href:"#entries","aria-hidden":"true"}},[e._v("#")]),e._v(".entries"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns an "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Iteration_protocols",title:"A couple of additions to ECMAScript 2015 aren't new built-ins or syntax, but protocols. These protocols can be implemented by any object respecting some conventions."}},[r("code",[e._v("iterator")])]),e._v(", allowing code to go through all key/value pairs contained in the collection. (In this case, the keys are numbers starting from "),r("code",[e._v("0")]),e._v(" and the values are nodes.)")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse"}},[r("a",{attrs:{href:"#returns-promiseresponse","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"forEach"}},[r("a",{attrs:{href:"#forEach","aria-hidden":"true"}},[e._v("#")]),e._v(".forEach"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Executes a provided function once per "),r("code",[e._v("NodeList")]),e._v(" element, passing the element as an argument to the function.")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-1"}},[r("a",{attrs:{href:"#returns-promiseresponse-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"item"}},[r("a",{attrs:{href:"#item","aria-hidden":"true"}},[e._v("#")]),e._v(".item"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns an item in the list by its index, or "),r("code",[e._v("null")]),e._v(" if the index is out-of-bounds.")]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-2"}},[r("a",{attrs:{href:"#returns-promiseresponse-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"keys"}},[r("a",{attrs:{href:"#keys","aria-hidden":"true"}},[e._v("#")]),e._v(".keys"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns an "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Iteration_protocols",title:"A couple of additions to ECMAScript 2015 aren't new built-ins or syntax, but protocols. These protocols can be implemented by any object respecting some conventions."}},[r("code",[e._v("iterator")])]),e._v(", allowing code to go through all the keys of the key/value pairs contained in the collection. (In this case, the keys are numbers starting from "),r("code",[e._v("0")]),e._v(".)")]),r("h4",{attrs:{id:"arguments-3"}},[r("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-3"}},[r("a",{attrs:{href:"#returns-promiseresponse-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"values"}},[r("a",{attrs:{href:"#values","aria-hidden":"true"}},[e._v("#")]),e._v(".values"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns an "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Iteration_protocols",title:"A couple of additions to ECMAScript 2015 aren't new built-ins or syntax, but protocols. These protocols can be implemented by any object respecting some conventions."}},[r("code",[e._v("iterator")])]),e._v(" allowing code to go through all values (nodes) of the key/value pairs contained in the collection.")]),r("h4",{attrs:{id:"arguments-4"}},[r("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-4"}},[r("a",{attrs:{href:"#returns-promiseresponse-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h2",{attrs:{id:"events"}},[r("a",{attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v("Events")])])}),[],!1,null,null,null);"function"==typeof u&&u(l),"function"==typeof p&&p(l);t.default=l.exports}}]);