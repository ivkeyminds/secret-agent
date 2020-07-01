(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{695:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},904:function(e,t,r){"use strict";r.r(t);var a=r(1),i=r(695),s=r(0);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.a.config.optionMergeStrategies;var o={VueRemarkRoot:i.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(o).forEach((function(e){"object"===n(o[e])&&"function"==typeof o[e].render?t[e]=o[e]:r[e]=function(){return o[e]}}))},c=s.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",p={excerpt:null,title:"HTMLImageElement"};var l=function(e){e.options[h]&&(e.options[h]=p),s.a.util.defineReactive(e.options,h,p),e.options.computed=c.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},u=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"htmlimageelement"}},[r("a",{attrs:{href:"#htmlimageelement","aria-hidden":"true"}},[e._v("#")]),e._v("HTMLImageElement")]),r("div",{staticClass:"overview"},[r("span",{staticClass:"seoSummary"},[e._v("The "),r("strong",[r("code",[e._v("HTMLImageElement")])]),e._v(" interface represents an HTML "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/img",title:"The HTML <img> element embeds an image into the document."}},[r("code",[e._v("<img>")])]),e._v(" element, providing the properties and methods used to manipulate image elements.")])]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"alt"}},[r("a",{attrs:{href:"#alt","aria-hidden":"true"}},[e._v("#")]),e._v(".alt "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" that reflects the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/img#attr-alt"}},[e._v("alt")])]),e._v(" HTML attribute, thus indicating the alternate fallback content to be displayed if the image has not been loaded.")]),r("h4",{attrs:{id:"type-superdocument"}},[r("a",{attrs:{href:"#type-superdocument","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"complete"}},[r("a",{attrs:{href:"#complete","aria-hidden":"true"}},[e._v("#")]),e._v(".complete "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Boolean",title:"REDIRECT Boolean [en-US]"}},[r("code",[e._v("Boolean")])]),e._v(" that is "),r("code",[e._v("true")]),e._v(" if the browser has finished fetching the image, whether successful or not. That means this value is also "),r("code",[e._v("true")]),e._v(" if the image has no "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLImageElement/src",title:"The HTMLImageElement property src, which reflects the HTML src attribute, specifies the image to display in the <img> element."}},[r("code",[e._v("src")])]),e._v(" value indicating an image to load.")]),r("h4",{attrs:{id:"type-superdocument-1"}},[r("a",{attrs:{href:"#type-superdocument-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"crossOrigin"}},[r("a",{attrs:{href:"#crossOrigin","aria-hidden":"true"}},[e._v("#")]),e._v(".crossOrigin "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" specifying the CORS setting for this image element. See "),r("a",{attrs:{href:"/en-US/docs/HTML/CORS_settings_attributes"}},[e._v("CORS settings attributes")]),e._v(" for further details. This may be "),r("code",[e._v("null")]),e._v(" if CORS is not used.")]),r("h4",{attrs:{id:"type-superdocument-2"}},[r("a",{attrs:{href:"#type-superdocument-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"currentSrc"}},[r("a",{attrs:{href:"#currentSrc","aria-hidden":"true"}},[e._v("#")]),e._v(".currentSrc "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/USVString",title:"USVString corresponds to the set of all possible sequences of unicode scalar values. USVString maps to a String when returned in JavaScript; it's generally only used for APIs that perform text processing and need a string of unicode scalar values to operate on. USVString is equivalent to DOMString except for not allowing unpaired surrogate codepoints. Unpaired surrogate codepoints present in USVString are converted by the browser to Unicode 'replacement character' U+FFFD, (�)."}},[r("code",[e._v("USVString")])]),e._v(" representing the URL from which the currently displayed image was loaded. This may change as the image is adjusted due to changing conditions, as directed by any "),r("a",{attrs:{href:"/en-US/docs/Web/CSS/Media_Queries"}},[e._v("media queries")]),e._v(" which are in place.")]),r("h4",{attrs:{id:"type-superdocument-3"}},[r("a",{attrs:{href:"#type-superdocument-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"decoding"}},[r("a",{attrs:{href:"#decoding","aria-hidden":"true"}},[e._v("#")]),e._v(".decoding "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("An optional "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" representing a hint given to the browser on how it should decode the image. If this value is provided, it must be one of the possible permitted values: "),r("code",[e._v("sync")]),e._v(" to decode the image synchronously, "),r("code",[e._v("async")]),e._v(" to decode it asynchronously, or "),r("code",[e._v("auto")]),e._v(" to indicate no preference (which is the default). Read the "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLImageElement/decoding",title:"The decoding property of the HTMLImageElement interface represents a hint given to the browser on how it should decode the image."}},[r("code",[e._v("decoding")])]),e._v(" page for details on the implications of this property's values.")]),r("h4",{attrs:{id:"type-superdocument-4"}},[r("a",{attrs:{href:"#type-superdocument-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"height"}},[r("a",{attrs:{href:"#height","aria-hidden":"true"}},[e._v("#")]),e._v(".height "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("An integer value that reflects the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/img#attr-height"}},[e._v("height")])]),e._v(" HTML attribute, indicating the rendered height of the image in CSS pixels.")]),r("h4",{attrs:{id:"type-superdocument-5"}},[r("a",{attrs:{href:"#type-superdocument-5","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"isMap"}},[r("a",{attrs:{href:"#isMap","aria-hidden":"true"}},[e._v("#")]),e._v(".isMap "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A "),r("a",{attrs:{href:"/en-US/docs/Web/API/Boolean",title:"REDIRECT Boolean [en-US]"}},[r("code",[e._v("Boolean")])]),e._v(" that reflects the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/img#attr-ismap"}},[e._v("ismap")])]),e._v(" HTML attribute, indicating that the image is part of a server-side image map. This is different from a client-side image map, specified using an "),r("code",[e._v("<img>")]),e._v(" element and a corresponding "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/map",title:"The HTML <map> element is used with <area> elements to define an image map (a clickable link area)."}},[r("code",[e._v("<map>")])]),e._v(" which contains "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/area",title:"The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."}},[r("code",[e._v("<area>")])]),e._v(" elements indicating the clickable areas in the image. The image "),r("em",[e._v("must")]),e._v(" be contained within an "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/a",title:"The HTML <a> element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address."}},[r("code",[e._v("<a>")])]),e._v(" element; see the "),r("code",[e._v("ismap")]),e._v(" page for details.")]),r("h4",{attrs:{id:"type-superdocument-6"}},[r("a",{attrs:{href:"#type-superdocument-6","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"naturalHeight"}},[r("a",{attrs:{href:"#naturalHeight","aria-hidden":"true"}},[e._v("#")]),e._v(".naturalHeight "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns an integer value representing the intrinsic height of the image in CSS pixels, if it is available; else, it shows "),r("code",[e._v("0")]),e._v(". This is the height the image would be if it were rendered at its natural full size.")]),r("h4",{attrs:{id:"type-superdocument-7"}},[r("a",{attrs:{href:"#type-superdocument-7","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"naturalWidth"}},[r("a",{attrs:{href:"#naturalWidth","aria-hidden":"true"}},[e._v("#")]),e._v(".naturalWidth "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("An integer value representing the intrinsic width of the image in CSS pixels, if it is available; otherwise, it will show "),r("code",[e._v("0")]),e._v(". This is the width the image would be if it were rendered at its natural full size.")]),r("h4",{attrs:{id:"type-superdocument-8"}},[r("a",{attrs:{href:"#type-superdocument-8","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"referrerPolicy"}},[r("a",{attrs:{href:"#referrerPolicy","aria-hidden":"true"}},[e._v("#")]),e._v(".referrerPolicy "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" that reflects the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/img#attr-referrerpolicy"}},[e._v("referrerpolicy")])]),e._v(" HTML attribute, which tells the "),r("a",{staticClass:"glossaryLink",attrs:{href:"/en-US/docs/Glossary/user_agent",title:"user agent: A user agent is a computer program representing a person, for example, a browser in a Web context."}},[e._v("user agent")]),e._v(" how to decide which referrer to use in order to fetch the image. Read this article for details on the possible values of this string.")]),r("h4",{attrs:{id:"type-superdocument-9"}},[r("a",{attrs:{href:"#type-superdocument-9","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"sizes"}},[r("a",{attrs:{href:"#sizes","aria-hidden":"true"}},[e._v("#")]),e._v(".sizes "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" reflecting the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/img#attr-sizes"}},[e._v("sizes")])]),e._v(" HTML attribute. This string specifies a list of comma-separated conditional sizes for the image; that is, for a given viewport size, a particular image size is to be used. Read the documentation on the "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLImageElement/sizes",title:"The HTMLImageElement property sizes allows you to specify the layout width of the image for each of a list of media conditions. This provides the ability to automatically select among different images—even images of different orientations or aspect ratios—as the document state changes to match different media conditions."}},[r("code",[e._v("sizes")])]),e._v(" page for details on the format of this string.")]),r("h4",{attrs:{id:"type-superdocument-10"}},[r("a",{attrs:{href:"#type-superdocument-10","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"src"}},[r("a",{attrs:{href:"#src","aria-hidden":"true"}},[e._v("#")]),e._v(".src "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A "),r("a",{attrs:{href:"/en-US/docs/Web/API/USVString",title:"USVString corresponds to the set of all possible sequences of unicode scalar values. USVString maps to a String when returned in JavaScript; it's generally only used for APIs that perform text processing and need a string of unicode scalar values to operate on. USVString is equivalent to DOMString except for not allowing unpaired surrogate codepoints. Unpaired surrogate codepoints present in USVString are converted by the browser to Unicode 'replacement character' U+FFFD, (�)."}},[r("code",[e._v("USVString")])]),e._v(" that reflects the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/img#attr-src"}},[e._v("src")])]),e._v(" HTML attribute, which contains the full URL of the image including base URI. You can load a different image into the element by changing the URL in the "),r("code",[e._v("src")]),e._v(" attribute.")]),r("h4",{attrs:{id:"type-superdocument-11"}},[r("a",{attrs:{href:"#type-superdocument-11","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"srcset"}},[r("a",{attrs:{href:"#srcset","aria-hidden":"true"}},[e._v("#")]),e._v(".srcset "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A "),r("a",{attrs:{href:"/en-US/docs/Web/API/USVString",title:"USVString corresponds to the set of all possible sequences of unicode scalar values. USVString maps to a String when returned in JavaScript; it's generally only used for APIs that perform text processing and need a string of unicode scalar values to operate on. USVString is equivalent to DOMString except for not allowing unpaired surrogate codepoints. Unpaired surrogate codepoints present in USVString are converted by the browser to Unicode 'replacement character' U+FFFD, (�)."}},[r("code",[e._v("USVString")])]),e._v(" reflecting the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/img#attr-srcset"}},[e._v("srcset")])]),e._v(" HTML attribute. This specifies a list of candidate images, separated by commas ("),r("code",[e._v("',', U+002C COMMA")]),e._v("). Each candidate image is a URL followed by a space, followed by a specially-formatted string indicating the size of the image. The size may be specified either the width or a size multiple. Read the "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLImageElement/srcset",title:"The HTMLImageElement property srcset is a string which identifies one or more image candidate strings, separated using commas (,) each specifying image resources to use under given circumstances."}},[r("code",[e._v("srcset")])]),e._v(" page for specifics on the format of the size substring.")]),r("h4",{attrs:{id:"type-superdocument-12"}},[r("a",{attrs:{href:"#type-superdocument-12","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"useMap"}},[r("a",{attrs:{href:"#useMap","aria-hidden":"true"}},[e._v("#")]),e._v(".useMap "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[e._v("DOMString")])]),e._v(" reflecting the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/img#attr-usemap"}},[e._v("usemap")])]),e._v(" HTML attribute, containing the page-local URL of the "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/map",title:"The HTML <map> element is used with <area> elements to define an image map (a clickable link area)."}},[r("code",[e._v("<map>")])]),e._v(" element describing the image map to use. The page-local URL is a pound (hash) symbol ("),r("code",[e._v("#")]),e._v(") followed by the ID of the "),r("code",[e._v("<map>")]),e._v(" element, such as "),r("code",[e._v("#my-map-element")]),e._v(". The "),r("code",[e._v("<map>")]),e._v(" in turn contains "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/area",title:"The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element."}},[r("code",[e._v("<area>")])]),e._v(" elements indicating the clickable areas in the image.")]),r("h4",{attrs:{id:"type-superdocument-13"}},[r("a",{attrs:{href:"#type-superdocument-13","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"width"}},[r("a",{attrs:{href:"#width","aria-hidden":"true"}},[e._v("#")]),e._v(".width "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("An integer value that reflects the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/img#attr-width"}},[e._v("width")])]),e._v(" HTML attribute, indicating the rendered width of the image in CSS pixels.")]),r("h4",{attrs:{id:"type-superdocument-14"}},[r("a",{attrs:{href:"#type-superdocument-14","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"x"}},[r("a",{attrs:{href:"#x","aria-hidden":"true"}},[e._v("#")]),e._v(".x "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("An integer indicating the horizontal offset of the left border edge of the image's CSS layout box relative to the origin of the "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/html",title:"The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element."}},[r("code",[e._v("<html>")])]),e._v(" element's containing block.")]),r("h4",{attrs:{id:"type-superdocument-15"}},[r("a",{attrs:{href:"#type-superdocument-15","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"y"}},[r("a",{attrs:{href:"#y","aria-hidden":"true"}},[e._v("#")]),e._v(".y "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The integer vertical offset of the top border edge of the image's CSS layout box relative to the origin of the "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/html",title:"The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element."}},[r("code",[e._v("<html>")])]),e._v(" element's containing block.")]),r("h4",{attrs:{id:"type-superdocument-16"}},[r("a",{attrs:{href:"#type-superdocument-16","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"decode"}},[r("a",{attrs:{href:"#decode","aria-hidden":"true"}},[e._v("#")]),e._v(".decode"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value."}},[r("code",[e._v("Promise")])]),e._v(" that resolves when the image is decoded and it's safe to append the image to the DOM. This prevents rendering of the next frame from having to pause to decode the image, as would happen if an undecoded image were added to the DOM.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse"}},[r("a",{attrs:{href:"#returns-promiseresponse","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h2",{attrs:{id:"events"}},[r("a",{attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v("Events")])])}),[],!1,null,null,null);"function"==typeof d&&d(u),"function"==typeof l&&l(u);t.default=u.exports}}]);