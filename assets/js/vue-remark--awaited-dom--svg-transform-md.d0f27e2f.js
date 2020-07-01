(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{695:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},826:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r(695),n=r(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var i={VueRemarkRoot:s.a},_=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===o(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:r[e]=function(){return i[e]}}))},v=n.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",d={excerpt:null,title:"SVGTransform"};var h=function(e){e.options[c]&&(e.options[c]=d),n.a.util.defineReactive(e.options,c,d),e.options.computed=v.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},p=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"svgtransform"}},[r("a",{attrs:{href:"#svgtransform","aria-hidden":"true"}},[e._v("#")]),e._v("SVGTransform")]),r("div",{staticClass:"overview"},[r("code",[e._v("SVGTransform")]),e._v(" is the interface for one of the component transformations within an "),r("a",{attrs:{href:"/en-US/docs/Web/API/SVGTransformList",title:"The SVGTransformList defines a list of SVGTransform objects."}},[r("code",[e._v("SVGTransformList")])]),e._v("; thus, an "),r("code",[e._v("SVGTransform")]),e._v(" object corresponds to a single component (e.g., "),r("code",[e._v("scale(…)")]),e._v(" or "),r("code",[e._v("matrix(…)")]),e._v(") within a "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/SVG/Attribute/transform"}},[e._v("transform")])]),e._v(" attribute.")]),r("div",{staticClass:"overview"},[e._v("An "),r("code",[e._v("SVGTransform")]),e._v(" object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"angle"}},[r("a",{attrs:{href:"#angle","aria-hidden":"true"}},[e._v("#")]),e._v(".angle "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("A convenience attribute for "),r("code",[e._v("SVG_TRANSFORM_ROTATE")]),e._v(", "),r("code",[e._v("SVG_TRANSFORM_SKEWX")]),e._v(" and "),r("code",[e._v("SVG_TRANSFORM_SKEWY")]),e._v(". It holds the angle that was specified."),r("br"),r("br"),e._v("\n    For "),r("code",[e._v("SVG_TRANSFORM_MATRIX")]),e._v(", "),r("code",[e._v("SVG_TRANSFORM_TRANSLATE")]),e._v(" and "),r("code",[e._v("SVG_TRANSFORM_SCALE")]),e._v(", "),r("code",[e._v("angle")]),e._v(" will be zero.")]),r("h4",{attrs:{id:"type-superdocument"}},[r("a",{attrs:{href:"#type-superdocument","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"matrix"}},[r("a",{attrs:{href:"#matrix","aria-hidden":"true"}},[e._v("#")]),e._v(".matrix "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The matrix that represents this transformation. The matrix object is live, meaning that any changes made to the "),r("code",[e._v("SVGTransform")]),e._v(" object are immediately reflected in the matrix object and vice versa. In case the matrix object is changed directly (i.e., without using the methods on the "),r("code",[e._v("SVGTransform")]),e._v(" interface itself) then the type of the "),r("code",[e._v("SVGTransform")]),e._v(" changes to "),r("code",[e._v("SVG_TRANSFORM_MATRIX")]),e._v(".")]),r("ul",[r("li",[e._v("For "),r("code",[e._v("SVG_TRANSFORM_MATRIX")]),e._v(", the matrix contains the a, b, c, d, e, f values supplied by the user.")]),r("li",[e._v("For "),r("code",[e._v("SVG_TRANSFORM_TRANSLATE")]),e._v(", e and f represent the translation amounts (a=1, b=0, c=0 and d=1).")]),r("li",[e._v("For "),r("code",[e._v("SVG_TRANSFORM_SCALE")]),e._v(", a and d represent the scale amounts (b=0, c=0, e=0 and f=0).")]),r("li",[e._v("For "),r("code",[e._v("SVG_TRANSFORM_SKEWX")]),e._v(" and "),r("code",[e._v("SVG_TRANSFORM_SKEWY")]),e._v(", a, b, c and d represent the matrix which will result in the given skew (e=0 and f=0).")]),r("li",[e._v("For "),r("code",[e._v("SVG_TRANSFORM_ROTATE")]),e._v(", a, b, c, d, e and f together represent the matrix which will result in the given rotation. When the rotation is around the center point (0, 0), e and f will be zero.")])]),r("h4",{attrs:{id:"type-superdocument-1"}},[r("a",{attrs:{href:"#type-superdocument-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h3",{attrs:{id:"type"}},[r("a",{attrs:{href:"#type","aria-hidden":"true"}},[e._v("#")]),e._v(".type "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The type of the value as specified by one of the SVG"),r("em",[e._v("TRANSFORM")]),e._v("* constants defined on this interface.")]),r("h4",{attrs:{id:"type-superdocument-2"}},[r("a",{attrs:{href:"#type-superdocument-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("SuperDocument")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"setMatrix"}},[r("a",{attrs:{href:"#setMatrix","aria-hidden":"true"}},[e._v("#")]),e._v(".setMatrix"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the transform type to "),r("code",[e._v("SVG_TRANSFORM_MATRIX")]),e._v(", with parameter matrix defining the new transformation. Note that the values from the parameter "),r("code",[e._v("matrix")]),e._v(" are copied.")]),r("p",[r("strong",[e._v("Exceptions:")])]),r("ul",[r("li",[e._v("a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMException",title:"The DOMException interface represents an abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API."}},[r("code",[e._v("DOMException")])]),e._v(" with code "),r("code",[e._v("NO_MODIFICATION_ALLOWED_ERR")]),e._v(" is raised when attempting to modify a read only attribute or when the object itself is read only.")])]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse"}},[r("a",{attrs:{href:"#returns-promiseresponse","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"setRotate"}},[r("a",{attrs:{href:"#setRotate","aria-hidden":"true"}},[e._v("#")]),e._v(".setRotate"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the transform type to "),r("code",[e._v("SVG_TRANSFORM_ROTATE")]),e._v(", with parameter "),r("code",[e._v("angle")]),e._v(" defining the rotation angle and parameters "),r("code",[e._v("cx")]),e._v(" and "),r("code",[e._v("cy")]),e._v(" defining the optional center of rotation.")]),r("p",[r("strong",[e._v("Exceptions:")])]),r("ul",[r("li",[e._v("a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMException",title:"The DOMException interface represents an abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API."}},[r("code",[e._v("DOMException")])]),e._v(" with code "),r("code",[e._v("NO_MODIFICATION_ALLOWED_ERR")]),e._v(" is raised when attempting to modify a read only attribute or when the object itself is read only.")])]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-1"}},[r("a",{attrs:{href:"#returns-promiseresponse-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"setScale"}},[r("a",{attrs:{href:"#setScale","aria-hidden":"true"}},[e._v("#")]),e._v(".setScale"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the transform type to "),r("code",[e._v("SVG_TRANSFORM_SCALE")]),e._v(", with parameters "),r("code",[e._v("sx")]),e._v(" and "),r("code",[e._v("sy")]),e._v(" defining the scale amounts.")]),r("p",[r("strong",[e._v("Exceptions:")])]),r("ul",[r("li",[e._v("a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMException",title:"The DOMException interface represents an abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API."}},[r("code",[e._v("DOMException")])]),e._v(" with code "),r("code",[e._v("NO_MODIFICATION_ALLOWED_ERR")]),e._v(" is raised when attempting to modify a read only attribute or when the object itself is read only.")])]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-2"}},[r("a",{attrs:{href:"#returns-promiseresponse-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"setSkewX"}},[r("a",{attrs:{href:"#setSkewX","aria-hidden":"true"}},[e._v("#")]),e._v(".setSkewX"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the transform type to "),r("code",[e._v("SVG_TRANSFORM_SKEWX")]),e._v(", with parameter "),r("code",[e._v("angle")]),e._v(" defining the amount of skew.")]),r("p",[r("strong",[e._v("Exceptions:")])]),r("ul",[r("li",[e._v("a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMException",title:"The DOMException interface represents an abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API."}},[r("code",[e._v("DOMException")])]),e._v(" with code "),r("code",[e._v("NO_MODIFICATION_ALLOWED_ERR")]),e._v(" is raised when attempting to modify a read only attribute or when the object itself is read only.")])]),r("h4",{attrs:{id:"arguments-3"}},[r("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-3"}},[r("a",{attrs:{href:"#returns-promiseresponse-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"setSkewY"}},[r("a",{attrs:{href:"#setSkewY","aria-hidden":"true"}},[e._v("#")]),e._v(".setSkewY"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the transform type to "),r("code",[e._v("SVG_TRANSFORM_SKEWY")]),e._v(", with parameter "),r("code",[e._v("angle")]),e._v(" defining the amount of skew.")]),r("p",[r("strong",[e._v("Exceptions:")])]),r("ul",[r("li",[e._v("a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMException",title:"The DOMException interface represents an abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API."}},[r("code",[e._v("DOMException")])]),e._v(" with code "),r("code",[e._v("NO_MODIFICATION_ALLOWED_ERR")]),e._v(" is raised when attempting to modify a read only attribute or when the object itself is read only.")])]),r("h4",{attrs:{id:"arguments-4"}},[r("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-4"}},[r("a",{attrs:{href:"#returns-promiseresponse-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h3",{attrs:{id:"setTranslate"}},[r("a",{attrs:{href:"#setTranslate","aria-hidden":"true"}},[e._v("#")]),e._v(".setTranslate"),r("em",[e._v("(requestInput, requestInit)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Sets the transform type to "),r("code",[e._v("SVG_TRANSFORM_TRANSLATE")]),e._v(", with parameters "),r("code",[e._v("tx")]),e._v(" and "),r("code",[e._v("ty")]),e._v(" defining the translation amounts.")]),r("p",[r("strong",[e._v("Exceptions:")])]),r("ul",[r("li",[e._v("a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMException",title:"The DOMException interface represents an abnormal event (called an exception) which occurs as a result of calling a method or accessing a property of a web API."}},[r("code",[e._v("DOMException")])]),e._v(" with code "),r("code",[e._v("NO_MODIFICATION_ALLOWED_ERR")]),e._v(" is raised when attempting to modify a read only attribute or when the object itself is read only.")])]),r("h4",{attrs:{id:"arguments-5"}},[r("a",{attrs:{href:"#arguments-5","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promiseresponse-5"}},[r("a",{attrs:{href:"#returns-promiseresponse-5","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<Response>")])]),r("h2",{attrs:{id:"events"}},[r("a",{attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v("Events")])])}),[],!1,null,null,null);"function"==typeof _&&_(p),"function"==typeof h&&h(p);t.default=p.exports}}]);