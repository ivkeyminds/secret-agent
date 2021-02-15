(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{C0i4:function(e,t,r){"use strict";r.r(t);var a=r("Ow4o"),o=r("vu0Y"),n=r("pLV6");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var i={VueRemarkRoot:o.a},c=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===s(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?t[e]=i[e]:r[e]=function(){return i[e]}}))},p=n.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",l={excerpt:null,title:"BrowserEmulators"};var u=function(e){e.options[d]&&(e.options[d]=l),n.a.util.defineReactive(e.options,d,l),e.options.computed=p.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},v=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"browseremulators"}},[r("a",{attrs:{href:"#browseremulators","aria-hidden":"true"}},[e._v("#")]),e._v("BrowserEmulators")]),r("blockquote",[r("p",[e._v("BrowserEmulators are plugins that help SecretAgent disguise itself as different browsers. Changing the user-agent header is barely the beginning. BrowserEmulators have full control over TCP fingerprinting, header order, HTML rendering, audio codecs and thousands of other variables that allow undetectable emulation of any browser you desire.")])]),r("p",[e._v("This interface helps you load and retrieve BrowserEmulator plugins. It in itself is not a plugin, however we have preloaded it with several plugins (see below).")]),r("p",[e._v("This class creates no instances. It is a static singleton containing three methods.")]),r("p",[e._v("NOTE: each BrowserEmulator will download its own rendering engine as needed. To override installing, you can use environmental variables to use a pre-installed version - ie, for use in a docker. Variables follow the pattern "),r("code",{pre:!0},[e._v("<Uppercase Short Id>_BIN")]),e._v(" (all upper case, dashes as underscores). For example, Chrome 83 is: CHROME_83_BIN.")]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"browseremulatorsgetememulatoridem"}},[r("a",{attrs:{href:"#browseremulatorsgetememulatoridem","aria-hidden":"true"}},[e._v("#")]),e._v("BrowserEmulators.get"),r("em",[e._v("(emulatorId)")])]),r("p",[e._v("Retrieve a specific browser emulator from the list of loaded emulators.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("emulatorId "),r("code",{pre:!0},[e._v("string")])])]),r("h4",{attrs:{id:"returns-ibrowseremulator"}},[r("a",{attrs:{href:"#returns-ibrowseremulator","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),r("code",{pre:!0},[e._v("IBrowserEmulator")])]),r("h3",{attrs:{id:"browseremulatorsgetrandomemem"}},[r("a",{attrs:{href:"#browseremulatorsgetrandomemem","aria-hidden":"true"}},[e._v("#")]),e._v("BrowserEmulators.getRandom"),r("em",[e._v("()")])]),r("p",[e._v("Retrieve a random browser emulator from the list of loaded emulators.")]),r("h4",{attrs:{id:"returns-ibrowseremulator-1"}},[r("a",{attrs:{href:"#returns-ibrowseremulator-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),r("code",{pre:!0},[e._v("IBrowserEmulator")])]),r("h3",{attrs:{id:"browseremulatorsloadembrowseremulatorclassem"}},[r("a",{attrs:{href:"#browseremulatorsloadembrowseremulatorclassem","aria-hidden":"true"}},[e._v("#")]),e._v("BrowserEmulators.load"),r("em",[e._v("(BrowserEmulatorClass)")])]),r("p",[e._v("Load a browser emulator into your environment.")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("BrowserEmulatorClass "),r("code",{pre:!0},[e._v("IBrowserEmulatorClass")]),e._v(". A class implementing the BrowserEmulatorClass specification.")])]),r("h4",{attrs:{id:"returns-null"}},[r("a",{attrs:{href:"#returns-null","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),r("code",{pre:!0},[e._v("null")])]),r("h2",{attrs:{id:"preloaded-plugins"}},[r("a",{attrs:{href:"#preloaded-plugins","aria-hidden":"true"}},[e._v("#")]),e._v("Preloaded Plugins")]),r("p",[e._v("We've included a few browser emulators to get you started. These plugins are pre-loaded into the BrowserEmulators interface, and together they represent 70% of the browser market.")]),r("p",{staticClass:"show-table-header"}),r("table",[r("thead",[r("tr",[r("th",[e._v("Name")]),r("th",[e._v("NPM Package Name")]),r("th",[e._v("Short ID")])])]),r("tbody",[r("tr",[r("td",[e._v("Safari 13")]),r("td",[e._v("@secret-agent/emulate-safari-13")]),r("td",[e._v("safari-13")])]),r("tr",[r("td",[e._v("Chrome 80")]),r("td",[e._v("@secret-agent/emulate-chrome-80")]),r("td",[e._v("chrome-80")])]),r("tr",[r("td",[e._v("Chrome 83")]),r("td",[e._v("@secret-agent/emulate-chrome-83")]),r("td",[e._v("chrome-83")])])])]),r("p",[e._v("Note: You can use the full NPM Package Name or Short ID to reference the browser emulator you want when creating a "),r("a",{attrs:{href:"/docs/advanced/handler"}},[e._v("Handler")]),e._v(".")]),r("p",[e._v("For example, here's how to use chrome-80:")]),r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",{pre:!0,attrs:{class:"language-js"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[e._v("Handler")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'secret-agent'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("async")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token arrow operator"}},[e._v("=>")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" handler "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Handler")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" agent "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" handler"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("createAgent")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" \n    browserEmulatorId"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'chrome-80'")]),e._v(" \n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])]),r("h2",{attrs:{id:"building-your-own-emulator"}},[r("a",{attrs:{href:"#building-your-own-emulator","aria-hidden":"true"}},[e._v("#")]),e._v("Building Your Own Emulator")]),r("p",[e._v("An emulator configures settings along the spectrum of settings that can impact an http session.")]),r("p",[e._v("ADVICE: Unless you have access to the exact data that a browser resembles, it's recommended that you extend existing plugins with additional overrides.")]),r("h4",{attrs:{id:"tcp-settings"}},[r("a",{attrs:{href:"#tcp-settings","aria-hidden":"true"}},[e._v("#")]),e._v("TCP settings")]),r("p",[e._v("Some Tcp settings vary based on the Operating System making http requests.\nCurrent supports:")]),r("ul",[r("li",[r("code",{pre:!0},[e._v("windowSize")])]),r("li",[r("code",{pre:!0},[e._v("ttl")])])]),r("h4",{attrs:{id:"tls-clienthello"}},[r("a",{attrs:{href:"#tls-clienthello","aria-hidden":"true"}},[e._v("#")]),e._v("TLS ClientHello")]),r("p",[e._v("Emulate the ClientHello signature, which can vary between browser versions")]),r("h4",{attrs:{id:"dns-over-tls-provider"}},[r("a",{attrs:{href:"#dns-over-tls-provider","aria-hidden":"true"}},[e._v("#")]),e._v("Dns over Tls Provider")]),r("p",[e._v("Configures the DNS over Tls connection that Chrome defaults to using if your DNS provider supports it.")]),r("h4",{attrs:{id:"sockets-per-origin"}},[r("a",{attrs:{href:"#sockets-per-origin","aria-hidden":"true"}},[e._v("#")]),e._v("Sockets Per Origin")]),r("p",[e._v("Configures the number of sockets per origin that should be allocated.")]),r("h4",{attrs:{id:"http-request-headers"}},[r("a",{attrs:{href:"#http-request-headers","aria-hidden":"true"}},[e._v("#")]),e._v("HTTP Request Headers")]),r("p",[e._v("A callback is provided for each HTTP request where you are given the opportunity to re-order, re-case, and add or remove headers so that they resemble real browser requests. Headless Chrome is known to provide headers is different order on occasion from headed. See "),r("a",{attrs:{href:"https://github.com/ulixee/double-agent",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://github.com/ulixee/double-agent")]),e._v(" for details.")]),r("h4",{attrs:{id:"http-cookies"}},[r("a",{attrs:{href:"#http-cookies","aria-hidden":"true"}},[e._v("#")]),e._v("HTTP Cookies")]),r("p",[e._v("Callbacks on each cookie set, and to return the valid list of cookies. This callback can be used to simulate cookie behavior that varies from the underlying browser - for instance Safari 13.")]),r("h4",{attrs:{id:"http-origin-first-party-interaction"}},[r("a",{attrs:{href:"#http-origin-first-party-interaction","aria-hidden":"true"}},[e._v("#")]),e._v("HTTP Origin First Party Interaction")]),r("p",[e._v('Callback to indicate a domain has "first-party" interaction. Some browsers, like Safari 13.1, started granting cookie storage to websites only after a user has directly interacted with them.')]),r("h4",{attrs:{id:"new-document-injected-scripts"}},[r("a",{attrs:{href:"#new-document-injected-scripts","aria-hidden":"true"}},[e._v("#")]),e._v("New Document Injected Scripts")]),r("p",[e._v("Browser Emulators provide a way to configure 1 or more script to be run on each new document and iframe. The scripts are used to override, add and remove properties and functions that differ in headless vs headed browsers.")]),r("p",[e._v("To \"add\" overrides that are missing from the DOM, it's recommended that your fork and edit existing BrowserEmulators, or extend an existing one. We've structured the included Browser emulators so that you can quickly see what has been overridden, and you can override the "),r("code",{pre:!0},[e._v("loadDomOverrides")]),e._v(" function as below to add additional overrides.")]),r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",{pre:!0,attrs:{class:"language-js"}},[e._v("  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("protected")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("loadDomOverrides")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" domOverrides "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token property-access"}},[e._v("domOverrides")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    domOverrides"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("add")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Error.captureStackTrace'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    domOverrides"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("add")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Error.constructor'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    domOverrides"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token method function property-access"}},[e._v("add")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'navigator.webdriver'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token spread operator"}},[e._v("...")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),r("h2",{attrs:{id:"dom-manipulation-methods"}},[r("a",{attrs:{href:"#dom-manipulation-methods","aria-hidden":"true"}},[e._v("#")]),e._v("DOM Manipulation Methods")]),r("p",[e._v('A DOM override itself has access to 3 primary "Proxy" functions to invisibly override functionality:')]),r("h3",{attrs:{id:"proxyfunctiontargetobject-functionname-overridefn-overrideonlyforinstance"}},[r("a",{attrs:{href:"#proxyfunctiontargetobject-functionname-overridefn-overrideonlyforinstance","aria-hidden":"true"}},[e._v("#")]),e._v("proxyFunction*(targetObject, functionName, overrideFn, overrideOnlyForInstance)")]),r("p",[e._v("This function overrides a function and correctly masks the changed "),r("code",{pre:!0},[e._v("toString")]),e._v(" signature.")]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("targetObject "),r("code",{pre:!0},[e._v("object")]),e._v(". The containing object, function or prototype.")]),r("li",[e._v("functionName "),r("code",{pre:!0},[e._v("string")]),e._v(". A function defined on the targetObject (or prototype hierarchy).")]),r("li",[e._v("overrideFn "),r("code",{pre:!0},[e._v("Function")]),e._v(". A callback function adhering to the "),r("code",{pre:!0},[e._v("ProxyHandler.apply")]),e._v(" specification for the given function. If you return "),r("code",{pre:!0},[e._v("ProxyOverride.callOriginal")]),e._v(" from this function, it will default to calling the native function. You might do this, for instance, to trigger built-in errors in the case where parameters are invalid, or you only wish to override for a select set of parameters.")]),r("li",[e._v("overrideOnlyForInstance "),r("code",{pre:!0},[e._v("boolean")]),e._v(" (default "),r("code",{pre:!0},[e._v("false")]),e._v("). A property indicating that this override only applies to the "),r("code",{pre:!0},[e._v("targetObject")]),e._v(" instance.")])]),r("h3",{attrs:{id:"proxygettertargetobject-propertyname-overridefn-overrideonlyforinstance"}},[r("a",{attrs:{href:"#proxygettertargetobject-propertyname-overridefn-overrideonlyforinstance","aria-hidden":"true"}},[e._v("#")]),e._v("proxyGetter*(targetObject, propertyName, overrideFn, overrideOnlyForInstance)")]),r("p",[e._v("This function overrides a property getter and correctly masks the changed "),r("code",{pre:!0},[e._v("toString")]),e._v(" signature.")]),r("h4",{attrs:{id:"arguments-3"}},[r("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("targetObject "),r("code",{pre:!0},[e._v("object")]),e._v(". The containing object, function or prototype.")]),r("li",[e._v("propertyName "),r("code",{pre:!0},[e._v("string")]),e._v(". A property defined on the targetObject (or prototype hierarchy).")]),r("li",[e._v("overrideFn "),r("code",{pre:!0},[e._v("Function")]),e._v(". A callback function adhering to the "),r("code",{pre:!0},[e._v("ProxyHandler.apply")]),e._v(" specification for the given getter. If you return "),r("code",{pre:!0},[e._v("ProxyOverride.callOriginal")]),e._v(" from this function, it will default to calling the native function.")]),r("li",[e._v("overrideOnlyForInstance "),r("code",{pre:!0},[e._v("boolean")]),e._v(" (default "),r("code",{pre:!0},[e._v("false")]),e._v("). A property indicating that this override only applies to the "),r("code",{pre:!0},[e._v("targetObject")]),e._v(" instance.")])]),r("h3",{attrs:{id:"proxysettertargetobject-propertyname-overridefn-overrideonlyforinstance"}},[r("a",{attrs:{href:"#proxysettertargetobject-propertyname-overridefn-overrideonlyforinstance","aria-hidden":"true"}},[e._v("#")]),e._v("proxySetter*(targetObject, propertyName, overrideFn, overrideOnlyForInstance)")]),r("p",[e._v("This function overrides a property setter and correctly masks the changed "),r("code",{pre:!0},[e._v("toString")]),e._v(" signature.")]),r("h4",{attrs:{id:"arguments-4"}},[r("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("targetObject "),r("code",{pre:!0},[e._v("object")]),e._v(". The containing object, function or prototype.")]),r("li",[e._v("propertyName "),r("code",{pre:!0},[e._v("string")]),e._v(". A property defined on the targetObject (or prototype hierarchy).")]),r("li",[e._v("overrideFn "),r("code",{pre:!0},[e._v("Function")]),e._v(". A callback function adhering to the "),r("code",{pre:!0},[e._v("ProxyHandler.apply")]),e._v(" specification for the given getter. If you return "),r("code",{pre:!0},[e._v("ProxyOverride.callOriginal")]),e._v(" from this function, it will default to calling the native function.")]),r("li",[e._v("overrideOnlyForInstance "),r("code",{pre:!0},[e._v("boolean")]),e._v(" (default "),r("code",{pre:!0},[e._v("false")]),e._v("). A property indicating that this override only applies to the "),r("code",{pre:!0},[e._v("targetObject")]),e._v(" instance.")])])])}),[],!1,null,null,null);"function"==typeof c&&c(v),"function"==typeof u&&u(v);t.default=v.exports},vu0Y:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);