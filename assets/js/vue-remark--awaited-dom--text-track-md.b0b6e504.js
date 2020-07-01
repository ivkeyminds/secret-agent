(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{695:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},817:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a(695),i=a(0);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var o={VueRemarkRoot:s.a},d=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(o).forEach((function(e){"object"===n(o[e])&&"function"==typeof o[e].render?t[e]=o[e]:a[e]=function(){return o[e]}}))},c=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",h={excerpt:null,title:"TextTrack"};var v=function(e){e.options[u]&&(e.options[u]=h),i.a.util.defineReactive(e.options,u,h),e.options.computed=c.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},p=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"texttrack"}},[a("a",{attrs:{href:"#texttrack","aria-hidden":"true"}},[e._v("#")]),e._v("TextTrack")]),a("div",{staticClass:"overview"},[e._v("The "),a("code",[e._v("TextTrack")]),e._v(" interface—part of the API for handling WebVTT (text tracks on media presentations)—describes and controls the text track associated with a particular "),a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/track",title:"The HTML <track> element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks or&nbsp;Timed Text Markup Language (TTML)."}},[a("code",[e._v("<track>")])]),e._v(" element.")]),a("h2",{attrs:{id:"properties"}},[a("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),a("h3",{attrs:{id:"activeCues"}},[a("a",{attrs:{href:"#activeCues","aria-hidden":"true"}},[e._v("#")]),e._v(".activeCues "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("A "),a("a",{staticClass:"new",attrs:{href:"/en-US/docs/Web/API/TextTrackCueList",rel:"nofollow",title:"The documentation about this has not yet been written; please consider contributing!"}},[a("code",[e._v("TextTrackCueList")])]),e._v(" object listing the currently active set of text track cues. Track cues are active if the current playback position of the media is between the cues' start and end times. Thus, for displayed cues such as captions or subtitles, the active cues are currently being displayed.")]),a("h4",{attrs:{id:"type-superdocument"}},[a("a",{attrs:{href:"#type-superdocument","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("SuperDocument")])]),a("h3",{attrs:{id:"cues"}},[a("a",{attrs:{href:"#cues","aria-hidden":"true"}},[e._v("#")]),e._v(".cues "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("A "),a("a",{staticClass:"new",attrs:{href:"/en-US/docs/Web/API/TextTrackCueList",rel:"nofollow",title:"The documentation about this has not yet been written; please consider contributing!"}},[a("code",[e._v("TextTrackCueList")])]),e._v(" which contains all of the track's cues.")]),a("h4",{attrs:{id:"type-superdocument-1"}},[a("a",{attrs:{href:"#type-superdocument-1","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("SuperDocument")])]),a("h3",{attrs:{id:"id"}},[a("a",{attrs:{href:"#id","aria-hidden":"true"}},[e._v("#")]),e._v(".id "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[a("code",[e._v("DOMString")])]),e._v(" which identifies the track, if it has one. If it doesn't have an ID, then this value is an empty string ("),a("code",[e._v('""')]),e._v("). If the "),a("code",[e._v("TextTrack")]),e._v(" is associated with a "),a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/track",title:"The HTML <track> element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks or&nbsp;Timed Text Markup Language (TTML)."}},[a("code",[e._v("<track>")])]),e._v(" element, then the track's ID matches the element's ID.")]),a("h4",{attrs:{id:"type-superdocument-2"}},[a("a",{attrs:{href:"#type-superdocument-2","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("SuperDocument")])]),a("h3",{attrs:{id:"inBandMetadataTrackDispatchType"}},[a("a",{attrs:{href:"#inBandMetadataTrackDispatchType","aria-hidden":"true"}},[e._v("#")]),e._v(".inBandMetadataTrackDispatchType "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("Returns a "),a("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[a("code",[e._v("DOMString")])]),e._v(" which indicates the track's in-band metadata track dispatch type. "),a("em",[a("strong",[e._v("needs details")])])]),a("h4",{attrs:{id:"type-superdocument-3"}},[a("a",{attrs:{href:"#type-superdocument-3","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("SuperDocument")])]),a("h3",{attrs:{id:"kind"}},[a("a",{attrs:{href:"#kind","aria-hidden":"true"}},[e._v("#")]),e._v(".kind "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("Returns a "),a("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[a("code",[e._v("DOMString")])]),e._v(" indicating what kind of text track the "),a("code",[e._v("TextTrack")]),e._v(" describes. The value must be one of those in the TextTrackKind enum.")]),a("h4",{attrs:{id:"type-superdocument-4"}},[a("a",{attrs:{href:"#type-superdocument-4","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("SuperDocument")])]),a("h3",{attrs:{id:"label"}},[a("a",{attrs:{href:"#label","aria-hidden":"true"}},[e._v("#")]),e._v(".label "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("A human-readable "),a("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[a("code",[e._v("DOMString")])]),e._v(" which contains the text track's label, if one is present; otherwise, this is an empty string ("),a("code",[e._v('""')]),e._v("), in which case a custom label may need to be generated by your code using other attributes of the track, if the track's label needs to be exposed to the user.")]),a("h4",{attrs:{id:"type-superdocument-5"}},[a("a",{attrs:{href:"#type-superdocument-5","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("SuperDocument")])]),a("h3",{attrs:{id:"language"}},[a("a",{attrs:{href:"#language","aria-hidden":"true"}},[e._v("#")]),e._v(".language "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[a("code",[e._v("DOMString")])]),e._v(" which specifies the text language in which the text track's contents is written. The value must adhere to the format specified in the "),a("a",{staticClass:"external",attrs:{href:"https://tools.ietf.org/html/bcp47",rel:"noopener"}},[e._v("Tags for Identifying Languages")]),e._v(" ("),a("a",{staticClass:"external",attrs:{href:"https://tools.ietf.org/html/bcp47",rel:"noopener"}},[e._v("BCP 47")]),e._v(") document from the IETF, just like the HTML "),a("code",[a("a",{attrs:{href:"/en-US/docs/Web/HTML/Global_attributes#attr-lang"}},[e._v("lang")])]),e._v(" attribute. For example, this can be "),a("code",[e._v('"en-US"')]),e._v(" for United States English or "),a("code",[e._v('"pt-BR"')]),e._v(" for Brazilian Portuguese.")]),a("h4",{attrs:{id:"type-superdocument-6"}},[a("a",{attrs:{href:"#type-superdocument-6","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("SuperDocument")])]),a("h3",{attrs:{id:"mode"}},[a("a",{attrs:{href:"#mode","aria-hidden":"true"}},[e._v("#")]),e._v(".mode "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("A "),a("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[a("code",[e._v("DOMString")])]),e._v(" specifying the track's current mode. Changing this property's value changes the track's current mode to match. Permitted values are listed under "),a("a",{attrs:{href:"/en-US/docs/Web/API/TextTrack/mode#Text_track_mode_constants"}},[e._v("Text track mode constants")]),e._v(". The default is "),a("code",[e._v("disabled")]),e._v(", unless the "),a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/track",title:"The HTML <track> element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks or&nbsp;Timed Text Markup Language (TTML)."}},[a("code",[e._v("<track>")])]),e._v(" element's "),a("code",[a("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/track#attr-default"}},[e._v("default")])]),e._v(" Boolean attribute is specified, in which case the default mode is "),a("code",[e._v("started")]),e._v(".")]),a("h4",{attrs:{id:"type-superdocument-7"}},[a("a",{attrs:{href:"#type-superdocument-7","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("SuperDocument")])]),a("h3",{attrs:{id:"oncuechange"}},[a("a",{attrs:{href:"#oncuechange","aria-hidden":"true"}},[e._v("#")]),e._v(".oncuechange "),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("Needs content.")]),a("h4",{attrs:{id:"type-superdocument-8"}},[a("a",{attrs:{href:"#type-superdocument-8","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Type")]),e._v(": "),a("code",{pre:!0},[e._v("SuperDocument")])]),a("h2",{attrs:{id:"methods"}},[a("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),a("h3",{attrs:{id:"addCue"}},[a("a",{attrs:{href:"#addCue","aria-hidden":"true"}},[e._v("#")]),e._v(".addCue"),a("em",[e._v("(requestInput, requestInit)")]),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("Adds a cue (specified as a "),a("a",{attrs:{href:"/en-US/docs/Web/API/TextTrackCue",title:"TextTrackCue is an abstract class which is used as the basis for the various derived cue types, such as VTTCue; you will instead work with those derived types."}},[a("code",[e._v("TextTrackCue")])]),e._v(" object to the track's list of cues.")]),a("h4",{attrs:{id:"arguments"}},[a("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("none")])]),a("h4",{attrs:{id:"returns-promiseresponse"}},[a("a",{attrs:{href:"#returns-promiseresponse","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<Response>")])]),a("h3",{attrs:{id:"removeCue"}},[a("a",{attrs:{href:"#removeCue","aria-hidden":"true"}},[e._v("#")]),e._v(".removeCue"),a("em",[e._v("(requestInput, requestInit)")]),a("div",{staticClass:"specs"},[a("i",[e._v("W3C")])])]),a("p",[e._v("Removes a cue (specified as a "),a("a",{attrs:{href:"/en-US/docs/Web/API/TextTrackCue",title:"TextTrackCue is an abstract class which is used as the basis for the various derived cue types, such as VTTCue; you will instead work with those derived types."}},[a("code",[e._v("TextTrackCue")])]),e._v(" object from the track's list of cues.")]),a("h4",{attrs:{id:"arguments-1"}},[a("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Arguments")]),e._v(":")]),a("ul",[a("li",[e._v("none")])]),a("h4",{attrs:{id:"returns-promiseresponse-1"}},[a("a",{attrs:{href:"#returns-promiseresponse-1","aria-hidden":"true"}},[e._v("#")]),a("strong",[e._v("Returns")]),e._v(": "),a("code",{pre:!0},[e._v("Promise<Response>")])]),a("h2",{attrs:{id:"events"}},[a("a",{attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v("Events")])])}),[],!1,null,null,null);"function"==typeof d&&d(p),"function"==typeof v&&v(p);t.default=p.exports}}]);