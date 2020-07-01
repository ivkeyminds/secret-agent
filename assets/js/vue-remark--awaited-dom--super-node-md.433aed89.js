(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{695:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},832:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r(695),a=r(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===o(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:r[e]=function(){return i[e]}}))},c=a.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",l={excerpt:null,title:"SuperNode"};var u=function(e){e.options[h]&&(e.options[h]=l),a.a.util.defineReactive(e.options,h,l),e.options.computed=c.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},p=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"supernode"}},[r("a",{attrs:{href:"#supernode","aria-hidden":"true"}},[e._v("#")]),e._v("SuperNode")]),r("div",{staticClass:"overview"},[r("span",{staticClass:"seoSummary"},[r("strong",[r("code",[e._v("Node")])]),e._v(" is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way.")])]),r("div",{staticClass:"overview"},[e._v("All of the following interfaces inherit the "),r("code",[e._v("Node")]),e._v(" interface's methods and properties: "),r("a",{attrs:{href:"/en-US/docs/Web/API/Document",title:"The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."}},[r("code",[e._v("Document")])]),e._v(", "),r("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[r("code",[e._v("Element")])]),e._v(", "),r("a",{attrs:{href:"/en-US/docs/Web/API/Attr",title:"The Attr interface represents one of a DOM element's attributes as an object. In most DOM methods, you will directly retrieve the attribute as a string (e.g., Element.getAttribute()), but certain functions (e.g., Element.getAttributeNode()) or means of iterating return Attr types."}},[r("code",[e._v("Attr")])]),e._v(", "),r("a",{attrs:{href:"/en-US/docs/Web/API/CharacterData",title:"The CharacterData abstract interface represents a Node object that contains characters. This is an abstract interface, meaning there aren't any object of type CharacterData: it is implemented by other interfaces, like Text, Comment, or ProcessingInstruction which aren't abstract."}},[r("code",[e._v("CharacterData")])]),e._v(" (which "),r("a",{attrs:{href:"/en-US/docs/Web/API/Text",title:"The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children."}},[r("code",[e._v("Text")])]),e._v(", "),r("a",{attrs:{href:"/en-US/docs/Web/API/Comment",title:"The Comment interface represents textual notations within markup; although it is generally not visually shown, such comments are available to be read in the source view."}},[r("code",[e._v("Comment")])]),e._v(", and "),r("a",{attrs:{href:"/en-US/docs/Web/API/CDATASection",title:"The CDATASection interface represents a CDATA section that can be used within XML to include extended portions of unescaped text. The symbols < and & don’t need escaping as they normally do when inside a CDATA section."}},[r("code",[e._v("CDATASection")])]),e._v(" inherit), "),r("a",{attrs:{href:"/en-US/docs/Web/API/ProcessingInstruction",title:"The ProcessingInstruction interface represents a processing instruction; that is, a Node which embeds an instruction targeting a specific application but that can be ignored by any other applications which don't recognize the instruction."}},[r("code",[e._v("ProcessingInstruction")])]),e._v(", "),r("a",{attrs:{href:"/en-US/docs/Web/API/DocumentFragment",title:"The DocumentFragment interface represents a minimal document object that has no parent. It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document."}},[r("code",[e._v("DocumentFragment")])]),e._v(", "),r("a",{attrs:{href:"/en-US/docs/Web/API/DocumentType",title:"The DocumentType interface represents a Node containing a doctype."}},[r("code",[e._v("DocumentType")])]),e._v(", "),r("a",{attrs:{href:"/en-US/docs/Web/API/Notation",title:"Represents a DTD notation (read-only). May declare format of an unparsed entity or formally declare the document's processing instruction targets. Inherits methods and properties from Node. Its nodeName is the notation name. Has no parent."}},[r("code",[e._v("Notation")])]),e._v(", "),r("a",{staticClass:"new",attrs:{href:"/en-US/docs/Web/API/Entity",rel:"nofollow",title:"The documentation about this has not yet been written; please consider contributing!"}},[r("code",[e._v("Entity")])]),e._v(", "),r("a",{staticClass:"new",attrs:{href:"/en-US/docs/Web/API/EntityReference",rel:"nofollow",title:"The documentation about this has not yet been written; please consider contributing!"}},[r("code",[e._v("EntityReference")])])]),r("div",{staticClass:"overview"},[e._v("Those interfaces may return "),r("code",[e._v("null")]),e._v(" in certain cases where the methods and properties are not relevant. They may throw an exception — for example when adding children to a node type for which no children can exist.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"baseURI"}},[r("a",{attrs:{href:"#baseURI","aria-hidden":"true"}},[e._v("#")]),e._v(".baseURI "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" representing the base URL of the document containing the "),r("code",[e._v("Node")]),e._v(".")]),r("h4",{attrs:{id:"type-superdocument"}},[r("a",{attrs:{href:"#type-superdocument","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"childNodes"}},[r("a",{attrs:{href:"#childNodes","aria-hidden":"true"}},[e._v("#")]),e._v(".childNodes "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a live "),r("a",{attrs:{href:"/en-US/docs/Web/API/NodeList",title:"NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()."}},[r("code",[e._v("NodeList")])]),e._v(" containing all the children of this node. "),r("a",{attrs:{href:"/en-US/docs/Web/API/NodeList",title:"NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()."}},[r("code",[e._v("NodeList")])]),e._v(" being live means that if the children of the "),r("code",[e._v("Node")]),e._v(" change, the "),r("a",{attrs:{href:"/en-US/docs/Web/API/NodeList",title:"NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll()."}},[r("code",[e._v("NodeList")])]),e._v(" object is automatically updated.")]),r("h4",{attrs:{id:"type-superdocument-1"}},[r("a",{attrs:{href:"#type-superdocument-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"firstChild"}},[r("a",{attrs:{href:"#firstChild","aria-hidden":"true"}},[e._v("#")]),e._v(".firstChild "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[e._v("Node")])]),e._v(" representing the first direct child node of the node, or "),r("code",[e._v("null")]),e._v(" if the node has no child.")]),r("h4",{attrs:{id:"type-superdocument-2"}},[r("a",{attrs:{href:"#type-superdocument-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"isConnected"}},[r("a",{attrs:{href:"#isConnected","aria-hidden":"true"}},[e._v("#")]),e._v(".isConnected "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A boolean indicating whether or not the Node is connected (directly or indirectly) to the context object, e.g. the "),r("a",{attrs:{href:"/en-US/docs/Web/API/Document",title:"The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."}},[r("code",[e._v("Document")])]),e._v(" object in the case of the normal DOM, or the "),r("a",{attrs:{href:"/en-US/docs/Web/API/ShadowRoot",title:"The ShadowRoot interface of the Shadow DOM API is the root node of a DOM subtree that is rendered separately from a document's main DOM tree."}},[r("code",[e._v("ShadowRoot")])]),e._v(" in the case of a shadow DOM.")]),r("h4",{attrs:{id:"type-superdocument-3"}},[r("a",{attrs:{href:"#type-superdocument-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"lastChild"}},[r("a",{attrs:{href:"#lastChild","aria-hidden":"true"}},[e._v("#")]),e._v(".lastChild "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[e._v("Node")])]),e._v(" representing the last direct child node of the node, or "),r("code",[e._v("null")]),e._v(" if the node has no child.")]),r("h4",{attrs:{id:"type-superdocument-4"}},[r("a",{attrs:{href:"#type-superdocument-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"nextSibling"}},[r("a",{attrs:{href:"#nextSibling","aria-hidden":"true"}},[e._v("#")]),e._v(".nextSibling "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[e._v("Node")])]),e._v(" representing the next node in the tree, or "),r("code",[e._v("null")]),e._v(" if there isn't such node.")]),r("h4",{attrs:{id:"type-superdocument-5"}},[r("a",{attrs:{href:"#type-superdocument-5","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"nodeName"}},[r("a",{attrs:{href:"#nodeName","aria-hidden":"true"}},[e._v("#")]),e._v(".nodeName "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" containing the name of the "),r("code",[e._v("Node")]),e._v(". The structure of the name will differ with the node type. E.g. An "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLElement",title:"The HTMLElement interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it."}},[r("code",[e._v("HTMLElement")])]),e._v(" will contain the name of the corresponding tag, like "),r("code",[e._v("'audio'")]),e._v(" for an "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLAudioElement",title:"The HTMLAudioElement interface provides access to the properties of <audio> elements, as well as methods to manipulate them."}},[r("code",[e._v("HTMLAudioElement")])]),e._v(", a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Text",title:"The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children."}},[r("code",[e._v("Text")])]),e._v(" node will have the "),r("code",[e._v("'#text'")]),e._v(" string, or a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Document",title:"The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."}},[r("code",[e._v("Document")])]),e._v(" node will have the "),r("code",[e._v("'#document'")]),e._v(" string.")]),r("h4",{attrs:{id:"type-superdocument-6"}},[r("a",{attrs:{href:"#type-superdocument-6","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"nodeType"}},[r("a",{attrs:{href:"#nodeType","aria-hidden":"true"}},[e._v("#")]),e._v(".nodeType "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns an "),r("code",[e._v("unsigned short")]),e._v(" representing the type of the node. Possible values are:")]),r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",{pre:!0,attrs:{class:"language-text"}},[e._v('<table class="standard-table">\n\t<thead>\n\t\t<tr>\n\t\t\t<th scope="col">Name</th>\n\t\t\t<th scope="col">Value</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td><code>ELEMENT_NODE</code></td>\n\t\t\t<td><code>1</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>ATTRIBUTE_NODE</code>&nbsp;<span class="icon-only-inline" title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></td>\n\t\t\t<td><code>2</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>TEXT_NODE</code></td>\n\t\t\t<td><code>3</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>CDATA_SECTION_NODE</code></td>\n\t\t\t<td><code>4</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>ENTITY_REFERENCE_NODE</code>&nbsp;<span class="icon-only-inline" title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></td>\n\t\t\t<td><code>5</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>ENTITY_NODE</code>&nbsp;<span class="icon-only-inline" title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></td>\n\t\t\t<td><code>6</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>PROCESSING_INSTRUCTION_NODE</code></td>\n\t\t\t<td><code>7</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>COMMENT_NODE</code></td>\n\t\t\t<td><code>8</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>DOCUMENT_NODE</code></td>\n\t\t\t<td><code>9</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>DOCUMENT_TYPE_NODE</code></td>\n\t\t\t<td><code>10</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>DOCUMENT_FRAGMENT_NODE</code></td>\n\t\t\t<td><code>11</code></td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td><code>NOTATION_NODE</code>&nbsp;<span class="icon-only-inline" title="This deprecated API should no longer be used, but will probably still work."><i class="icon-thumbs-down-alt"> </i></span></td>\n\t\t\t<td><code>12</code></td>\n\t\t</tr>\n\t</tbody>\n</table>')])]),r("h4",{attrs:{id:"type-superdocument-7"}},[r("a",{attrs:{href:"#type-superdocument-7","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"nodeValue"}},[r("a",{attrs:{href:"#nodeValue","aria-hidden":"true"}},[e._v("#")]),e._v(".nodeValue "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns / Sets the value of the current node.")]),r("h4",{attrs:{id:"type-superdocument-8"}},[r("a",{attrs:{href:"#type-superdocument-8","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"ownerDocument"}},[r("a",{attrs:{href:"#ownerDocument","aria-hidden":"true"}},[e._v("#")]),e._v(".ownerDocument "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the "),r("a",{attrs:{href:"/en-US/docs/Web/API/Document",title:"The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree."}},[r("code",[e._v("Document")])]),e._v(" that this node belongs to. If the node is itself a document, returns "),r("code",[e._v("null")]),e._v(".")]),r("h4",{attrs:{id:"type-superdocument-9"}},[r("a",{attrs:{href:"#type-superdocument-9","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"parentElement"}},[r("a",{attrs:{href:"#parentElement","aria-hidden":"true"}},[e._v("#")]),e._v(".parentElement "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns an "),r("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[r("code",[e._v("Element")])]),e._v(" that is the parent of this node. If the node has no parent, or if that parent is not an "),r("a",{attrs:{href:"/en-US/docs/Web/API/Element",title:"Element is the most general base class from which all element objects (i.e. objects that represent elements) in a Document inherit. It only has methods and properties common to all kinds of elements. More specific classes inherit from Element."}},[r("code",[e._v("Element")])]),e._v(", this property returns "),r("code",[e._v("null")]),e._v(".")]),r("h4",{attrs:{id:"type-superdocument-10"}},[r("a",{attrs:{href:"#type-superdocument-10","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"parentNode"}},[r("a",{attrs:{href:"#parentNode","aria-hidden":"true"}},[e._v("#")]),e._v(".parentNode "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[e._v("Node")])]),e._v(" that is the parent of this node. If there is no such node, like if this node is the top of the tree or if doesn't participate in a tree, this property returns "),r("code",[e._v("null")]),e._v(".")]),r("h4",{attrs:{id:"type-superdocument-11"}},[r("a",{attrs:{href:"#type-superdocument-11","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"previousSibling"}},[r("a",{attrs:{href:"#previousSibling","aria-hidden":"true"}},[e._v("#")]),e._v(".previousSibling "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[e._v("Node")])]),e._v(" representing the previous node in the tree, or "),r("code",[e._v("null")]),e._v(" if there isn't such node.")]),r("h4",{attrs:{id:"type-superdocument-12"}},[r("a",{attrs:{href:"#type-superdocument-12","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"textContent"}},[r("a",{attrs:{href:"#textContent","aria-hidden":"true"}},[e._v("#")]),e._v(".textContent "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns / Sets the textual content of an element and all its descendants.")]),r("h4",{attrs:{id:"type-superdocument-13"}},[r("a",{attrs:{href:"#type-superdocument-13","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"appendChild"}},[r("a",{attrs:{href:"#appendChild","aria-hidden":"true"}},[e._v("#")]),e._v(".appendChild"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Adds the specified "),r("code",[r("var",[e._v("childNode")])]),e._v(" argument as the last child to the current node."),r("br"),e._v("\n\tIf the argument referenced an existing node on the DOM tree, the node will be detached from its current position and attached at the new position.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse"}},[r("a",{attrs:{href:"#returns-promiseresponse","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"cloneNode"}},[r("a",{attrs:{href:"#cloneNode","aria-hidden":"true"}},[e._v("#")]),e._v(".cloneNode"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Clone a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[e._v("Node")])]),e._v(", and optionally, all of its contents. By default, it clones the content of the node.")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-1"}},[r("a",{attrs:{href:"#returns-promiseresponse-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"compareDocumentPosition"}},[r("a",{attrs:{href:"#compareDocumentPosition","aria-hidden":"true"}},[e._v("#")]),e._v(".compareDocumentPosition"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Compares the position of the current node against another node in any other document.")]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-2"}},[r("a",{attrs:{href:"#returns-promiseresponse-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"contains"}},[r("a",{attrs:{href:"#contains","aria-hidden":"true"}},[e._v("#")]),e._v(".contains"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[r("code",[e._v("Boolean")])]),e._v(" value indicating whether or not a node is a descendant of the calling node.")]),r("h4",{attrs:{id:"arguments-3"}},[r("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-3"}},[r("a",{attrs:{href:"#returns-promiseresponse-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"getRootNode"}},[r("a",{attrs:{href:"#getRootNode","aria-hidden":"true"}},[e._v("#")]),e._v(".getRootNode"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the context object's root which optionally includes the shadow root if it is available. ")]),r("h4",{attrs:{id:"arguments-4"}},[r("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-4"}},[r("a",{attrs:{href:"#returns-promiseresponse-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"hasChildNodes"}},[r("a",{attrs:{href:"#hasChildNodes","aria-hidden":"true"}},[e._v("#")]),e._v(".hasChildNodes"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[r("code",[e._v("Boolean")])]),e._v(" indicating whether or not the element has any child nodes.")]),r("h4",{attrs:{id:"arguments-5"}},[r("a",{attrs:{href:"#arguments-5","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-5"}},[r("a",{attrs:{href:"#returns-promiseresponse-5","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"insertBefore"}},[r("a",{attrs:{href:"#insertBefore","aria-hidden":"true"}},[e._v("#")]),e._v(".insertBefore"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Inserts a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[e._v("Node")])]),e._v(" before the reference node as a child of a specified parent node.")]),r("h4",{attrs:{id:"arguments-6"}},[r("a",{attrs:{href:"#arguments-6","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-6"}},[r("a",{attrs:{href:"#returns-promiseresponse-6","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"isDefaultNamespace"}},[r("a",{attrs:{href:"#isDefaultNamespace","aria-hidden":"true"}},[e._v("#")]),e._v(".isDefaultNamespace"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Accepts a namespace URI as an argument and returns a "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[r("code",[e._v("Boolean")])]),e._v(" with a value of "),r("code",[e._v("true")]),e._v(" if the namespace is the default namespace on the given node or "),r("code",[e._v("false")]),e._v(" if not.")]),r("h4",{attrs:{id:"arguments-7"}},[r("a",{attrs:{href:"#arguments-7","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-7"}},[r("a",{attrs:{href:"#returns-promiseresponse-7","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"isEqualNode"}},[r("a",{attrs:{href:"#isEqualNode","aria-hidden":"true"}},[e._v("#")]),e._v(".isEqualNode"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[r("code",[e._v("Boolean")])]),e._v(" which indicates whether or not two nodes are of the same type and all their defining data points match.")]),r("h4",{attrs:{id:"arguments-8"}},[r("a",{attrs:{href:"#arguments-8","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-8"}},[r("a",{attrs:{href:"#returns-promiseresponse-8","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"isSameNode"}},[r("a",{attrs:{href:"#isSameNode","aria-hidden":"true"}},[e._v("#")]),e._v(".isSameNode"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",title:"The Boolean object is an object wrapper for a boolean value."}},[r("code",[e._v("Boolean")])]),e._v(" value indicating whether or not the two nodes are the same (that is, they reference the same object).")]),r("h4",{attrs:{id:"arguments-9"}},[r("a",{attrs:{href:"#arguments-9","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-9"}},[r("a",{attrs:{href:"#returns-promiseresponse-9","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"lookupNamespaceURI"}},[r("a",{attrs:{href:"#lookupNamespaceURI","aria-hidden":"true"}},[e._v("#")]),e._v(".lookupNamespaceURI"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Accepts a prefix and returns the namespace URI associated with it on the given node if found (and "),r("code",[e._v("null")]),e._v(" if not). Supplying "),r("code",[e._v("null")]),e._v(" for the prefix will return the default namespace.")]),r("h4",{attrs:{id:"arguments-10"}},[r("a",{attrs:{href:"#arguments-10","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-10"}},[r("a",{attrs:{href:"#returns-promiseresponse-10","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"lookupPrefix"}},[r("a",{attrs:{href:"#lookupPrefix","aria-hidden":"true"}},[e._v("#")]),e._v(".lookupPrefix"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" containing the prefix for a given namespace URI, if present, and "),r("code",[e._v("null")]),e._v(" if not. When multiple prefixes are possible, the result is implementation-dependent.")]),r("h4",{attrs:{id:"arguments-11"}},[r("a",{attrs:{href:"#arguments-11","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-11"}},[r("a",{attrs:{href:"#returns-promiseresponse-11","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"normalize"}},[r("a",{attrs:{href:"#normalize","aria-hidden":"true"}},[e._v("#")]),e._v(".normalize"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Clean up all the text nodes under this element (merge adjacent, remove empty).")]),r("h4",{attrs:{id:"arguments-12"}},[r("a",{attrs:{href:"#arguments-12","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-12"}},[r("a",{attrs:{href:"#returns-promiseresponse-12","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"removeChild"}},[r("a",{attrs:{href:"#removeChild","aria-hidden":"true"}},[e._v("#")]),e._v(".removeChild"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Removes a child node from the current element, which must be a child of the current node.")]),r("h4",{attrs:{id:"arguments-13"}},[r("a",{attrs:{href:"#arguments-13","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-13"}},[r("a",{attrs:{href:"#returns-promiseresponse-13","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"replaceChild"}},[r("a",{attrs:{href:"#replaceChild","aria-hidden":"true"}},[e._v("#")]),e._v(".replaceChild"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Replaces one child "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[e._v("Node")])]),e._v(" of the current one with the second one given in parameter.")]),r("h4",{attrs:{id:"arguments-14"}},[r("a",{attrs:{href:"#arguments-14","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-14"}},[r("a",{attrs:{href:"#returns-promiseresponse-14","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h2",{attrs:{id:"events"}},[r("a",{attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v("Events")])])}),[],!1,null,null,null);"function"==typeof d&&d(p),"function"==typeof u&&u(p);t.default=p.exports}}]);