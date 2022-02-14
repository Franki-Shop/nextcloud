/*! For license information please see dav-settings-personal-availability.js.LICENSE.txt */
!function(){var t,n={13836:function(t,n,e){"use strict";var r=e(20144),a=e(9944),o=e(69643),i=e.n(o),s=e(81063),l=e(4820),d=e(56580),c=e.n(d),u=e(79753),p=e(22200),A=c()((function(t){return l.default.defaults.headers["X-Requested-With"]="XMLHttpRequest",s.getPatcher().patch("request",l.default),s.createClient((0,u.generateRemoteUrl)("dav/".concat(t,"/").concat((0,p.getCurrentUser)().uid)))})),v=e(18350),f=e.n(v),m=(0,e(17499).getLoggerBuilder)().setApp("dav").detectUser().build(),y=e(7582),b=e(245),C=e(72045);function g(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?g(Object(e),!0).forEach((function(n){x(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):g(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function x(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function w(t){return function(t){if(Array.isArray(t))return k(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return k(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?k(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function S(t,n,e,r,a,o,i){try{var s=t[o](i),l=s.value}catch(t){return void e(t)}s.done?n(l):Promise.resolve(l).then(r,a)}function O(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function i(t){S(o,r,a,i,s,"next",t)}function s(t){S(o,r,a,i,s,"throw",t)}i(void 0)}))}}function P(){return D.apply(this,arguments)}function D(){return(D=O(regeneratorRuntime.mark((function t(){var n,e,r,a,o,i,s,l,d,c,u,p,v,b;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=A("calendars"),t.next=3,a.customRequest("inbox",{method:"PROPFIND",data:'<?xml version="1.0"?>\n\t\t\t<x0:propfind xmlns:x0="DAV:">\n\t\t\t  <x0:prop>\n\t\t\t\t<x1:calendar-availability xmlns:x1="urn:ietf:params:xml:ns:caldav"/>\n\t\t\t  </x0:prop>\n\t\t\t</x0:propfind>'});case 3:return o=t.sent,t.next=6,(0,y.parseXML)(o.data);case 6:if(i=t.sent){t.next=9;break}return t.abrupt("return",void 0);case 9:if(s=null==i||null===(n=i.multistatus)||void 0===n||null===(e=n.response[0])||void 0===e||null===(r=e.propstat)||void 0===r?void 0:r.prop["calendar-availability"]){t.next=12;break}return t.abrupt("return",void 0);case 12:return l=f().parse(s),d=new(f().Component)(l),c=d.getFirstSubcomponent("vavailability"),(p=d.getFirstSubcomponent("vtimezone"))&&(u=p.getFirstProperty("tzid").getFirstValue()),v=c.getAllSubcomponents("available"),b={MO:[],TU:[],WE:[],TH:[],FR:[],SA:[],SU:[]},v.forEach((function(t){var n=t.getFirstProperty("dtstart").getFirstValue().toJSDate(),e=t.getFirstProperty("dtend").getFirstValue().toJSDate(),r=t.getFirstProperty("rrule");"WEEKLY"===r.getFirstValue().freq?r.getFirstValue().getComponent("BYDAY").forEach((function(t){b[t].push({start:n,end:e})})):m.warn("rrule not supported",{rrule:r.toICALString()})})),t.abrupt("return",{slots:b,timezoneId:u});case 21:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t,n){return _.apply(this,arguments)}function _(){return(_=O(regeneratorRuntime.mark((function t(n,e){var r,a,o,i,s,l,d,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=w(Object.keys(n).flatMap((function(t){return n[t].map((function(n){return h(h({},n),{},{day:t})}))}))),(a=new(f().Component)("vcalendar")).addPropertyWithValue("prodid","Nextcloud DAV app"),(o=(0,b.Fq)(e))?(i=new(f().Component)(f().parse(o)),a.addSubcomponent(i)):((s=new(f().Component)("vtimezone")).addPropertyWithValue("tzid",e),a.addSubcomponent(s)),l=new(f().Component)("vavailability"),d=r.reduce((function(t,n){var e,r=[n.start.getHours(),n.start.getMinutes(),n.end.getHours(),n.end.getMinutes()].join("-");return h(h({},t),{},x({},r,[].concat(w(null!==(e=t[r])&&void 0!==e?e:[]),[n])))}),{}),Object.keys(d).map((function(t){var n=d[t],r=n[0].start,a=n[0].end,o=n.map((function(t){return t.day})).filter((function(t,n,e){return e.indexOf(t)===n})),i=new(f().Component)("available");return i.addPropertyWithValue("dtstart",f().Time.fromJSDate(r,!1)).setParameter("tzid",e),i.addPropertyWithValue("dtend",f().Time.fromJSDate(a,!1)).setParameter("tzid",e),i.addPropertyWithValue("uid",(0,C.Z)()),i.addPropertyWithValue("rrule",{freq:"WEEKLY",byday:o}),i})).map(l.addSubcomponent.bind(l)),a.addSubcomponent(l),m.debug("New availability ical created",{asObject:a,asString:a.toString()}),c=A("calendars"),t.next=13,c.customRequest("inbox",{method:"PROPPATCH",data:'<?xml version="1.0"?>\n\t\t\t<x0:propertyupdate xmlns:x0="DAV:">\n\t\t\t  <x0:set>\n\t\t\t\t<x0:prop>\n\t\t\t\t  <x1:calendar-availability xmlns:x1="urn:ietf:params:xml:ns:caldav">'.concat(a.toString(),"</x1:calendar-availability>\n\t\t\t\t</x0:prop>\n\t\t\t  </x0:set>\n\t\t\t</x0:propertyupdate>")});case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var j=e(55586),B=e.n(j),T=e(48254),z=e.n(T);function $(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function F(t,n,e,r,a,o,i){try{var s=t[o](i),l=s.value}catch(t){return void e(t)}s.done?n(l):Promise.resolve(l).then(r,a)}function W(t){return function(){var n=this,e=arguments;return new Promise((function(r,a){var o=t.apply(n,e);function i(t){F(o,r,a,i,s,"next",t)}function s(t){F(o,r,a,i,s,"throw",t)}i(void 0)}))}}var R={name:"Availability",components:{DatetimePicker:i(),TimezonePicker:z()},data:function(){var t=B().determine(),n=t?t.name():"UTC",e=[{id:"MO",displayName:this.$t("dav","Monday"),slots:[]},{id:"TU",displayName:this.$t("dav","Tuesday"),slots:[]},{id:"WE",displayName:this.$t("dav","Wednesday"),slots:[]},{id:"TH",displayName:this.$t("dav","Thursday"),slots:[]},{id:"FR",displayName:this.$t("dav","Friday"),slots:[]},{id:"SA",displayName:this.$t("dav","Saturday"),slots:[]}],r={id:"SU",displayName:this.$t("dav","Sunday"),slots:[]};return{loading:!0,saving:!1,timezone:n,daysOfTheWeek:1===(0,a.getFirstDay)()?[].concat(e,[r]):[r].concat(e)}},mounted:function(){var t=this;return W(regeneratorRuntime.mark((function n(){var e,r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,P();case 3:e=n.sent,r=e.slots,a=e.timezoneId,r&&t.daysOfTheWeek.forEach((function(t){var n,e;(n=t.slots).push.apply(n,function(t){if(Array.isArray(t))return $(t)}(e=r[t.id])||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,n){if(t){if("string"==typeof t)return $(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?$(t,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})),a&&(t.timezone=a),console.info("availability loaded",t.daysOfTheWeek),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.error("could not load existing availability",n.t0);case 14:return n.prev=14,t.loading=!1,n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})))()},methods:{addSlot:function(t){var n=new Date;n.setHours(9),n.setMinutes(0),n.setSeconds(0);var e=new Date;e.setHours(17),e.setMinutes(0),e.setSeconds(0),t.slots.push({start:n,end:e})},deleteSlot:function(t,n){t.slots.splice(n,1)},save:function(){var t=this;return W(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.saving=!0,e={MO:[],TU:[],WE:[],TH:[],FR:[],SA:[],SU:[]},t.daysOfTheWeek.forEach((function(t){t.slots.forEach((function(n){return e[t.id].push(n)}))})),n.next=6,E(e,t.timezone);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error("could not save availability",n.t0);case 11:return n.prev=11,t.saving=!1,n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))()}}},M=e(93379),U=e.n(M),V=e(7795),I=e.n(V),N=e(90569),q=e.n(N),H=e(3565),Y=e.n(H),L=e(19216),Z=e.n(L),J=e(44589),X=e.n(J),K=e(59044),G={};G.styleTagTransform=X(),G.setAttributes=Y(),G.insert=q().bind(null,"head"),G.domAPI=I(),G.insertStyleElement=Z(),U()(K.Z,G),K.Z&&K.Z.locals&&K.Z.locals;var Q=(0,e(51900).Z)(R,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section"},[e("h2",[t._v(t._s(t.$t("dav","Availability")))]),t._v(" "),e("p",[t._v("\n\t\t"+t._s(t.$t("dav","If you configure your working hours, other users will see when you are out of office when they book a meeting."))+"\n\t")]),t._v(" "),e("div",{staticClass:"time-zone"},[e("strong",[t._v("\n\t\t\t"+t._s(t.$t("dav","Time zone:"))+"\n\t\t")]),t._v(" "),e("span",{staticClass:"time-zone-text"},[e("TimezonePicker",{model:{value:t.timezone,callback:function(n){t.timezone=n},expression:"timezone"}})],1)]),t._v(" "),e("div",{staticClass:"grid-table"},[t._l(t.daysOfTheWeek,(function(n){return[e("div",{key:"day-label-"+n.id,staticClass:"label-weekday"},[t._v("\n\t\t\t\t"+t._s(n.displayName)+"\n\t\t\t")]),t._v(" "),e("div",{key:"day-slots-"+n.id,staticClass:"availability-slots"},[e("div",{staticClass:"availability-slot-group"},[t._l(n.slots,(function(r,a){return[e("div",{key:"slot-"+n.id+"-"+a,staticClass:"availability-slot"},[e("DatetimePicker",{staticClass:"start-date",attrs:{type:"time",format:"H:mm"},model:{value:r.start,callback:function(n){t.$set(r,"start",n)},expression:"slot.start"}}),t._v(" "),e("span",{staticClass:"to-text"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("dav","to"))+"\n\t\t\t\t\t\t\t")]),t._v(" "),e("DatetimePicker",{staticClass:"end-date",attrs:{type:"time",format:"H:mm"},model:{value:r.end,callback:function(n){t.$set(r,"end",n)},expression:"slot.end"}}),t._v(" "),e("button",{key:"slot-"+n.id+"-"+a+"-btn",staticClass:"icon-delete delete-slot button",attrs:{title:t.$t("dav","Delete slot")},on:{click:function(e){return t.deleteSlot(n,a)}}})],1)]}))],2),t._v(" "),0===n.slots.length?e("span",{staticClass:"empty-content"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("dav","No working hours set"))+"\n\t\t\t\t")]):t._e()]),t._v(" "),e("button",{key:"add-slot-"+n.id,staticClass:"icon-add add-another button",attrs:{disabled:t.loading,title:t.$t("dav","Add slot")},on:{click:function(e){return t.addSlot(n)}}})]}))],2),t._v(" "),e("button",{staticClass:"button primary",attrs:{disabled:t.loading||t.saving},on:{click:t.save}},[t._v("\n\t\t"+t._s(t.$t("dav","Save"))+"\n\t")])])}),[],!1,null,"2534cdc4",null).exports;r.default.prototype.$t=a.translate,new(r.default.extend(Q))({}).$mount("#settings-personal-availability")},59044:function(t,n,e){"use strict";var r=e(94015),a=e.n(r),o=e(23645),i=e.n(o)()(a());i.push([t.id,".availability-day[data-v-2534cdc4]{padding:0 10px 0 10px;position:absolute}.availability-slots[data-v-2534cdc4]{display:flex;white-space:nowrap}.availability-slot[data-v-2534cdc4]{display:flex;flex-direction:row;align-items:center}.availability-slot-group[data-v-2534cdc4]{display:flex;flex-direction:column}[data-v-2534cdc4] .mx-input-wrapper{width:85px}[data-v-2534cdc4] .mx-datepicker{width:97px}[data-v-2534cdc4] .multiselect{border:1px solid var(--color-border-dark);width:120px}.time-zone[data-v-2534cdc4]{padding:32px 12px 12px 0}.grid-table[data-v-2534cdc4]{display:grid;margin-bottom:32px;grid-column-gap:24px;grid-row-gap:6px;grid-template-columns:min-content min-content min-content}.button[data-v-2534cdc4]{align-self:flex-end}.label-weekday[data-v-2534cdc4]{position:relative;display:inline-flex;padding-top:4px}.delete-slot[data-v-2534cdc4]{background-color:transparent;border:none;padding-bottom:12px;opacity:.5}.delete-slot[data-v-2534cdc4]:hover{opacity:1}.add-another[data-v-2534cdc4]{background-color:transparent;border:none;opacity:.5;display:inline-flex;padding:0;margin:0;margin-bottom:3px}.add-another[data-v-2534cdc4]:hover{opacity:1}.to-text[data-v-2534cdc4]{padding-right:12px}.time-zone-text[data-v-2534cdc4]{padding-left:22px}.empty-content[data-v-2534cdc4]{color:var(--color-text-lighter);margin-top:4px}","",{version:3,sources:["webpack://./apps/dav/src/views/Availability.vue"],names:[],mappings:"AA6LA,mCACC,qBAAA,CACA,iBAAA,CAED,qCACC,YAAA,CACA,kBAAA,CAED,oCACC,YAAA,CACA,kBAAA,CACA,kBAAA,CAED,0CACC,YAAA,CACA,qBAAA,CAED,oCACC,UAAA,CAED,iCACC,UAAA,CAED,+BACC,yCAAA,CACA,WAAA,CAED,4BACC,wBAAA,CAED,6BACC,YAAA,CACA,kBAAA,CACA,oBAAA,CACA,gBAAA,CACA,yDAAA,CAED,yBACC,mBAAA,CAED,gCACC,iBAAA,CACA,mBAAA,CACA,eAAA,CAED,8BACC,4BAAA,CACA,WAAA,CACA,mBAAA,CACA,UAAA,CACA,oCACC,SAAA,CAIF,8BACC,4BAAA,CACA,WAAA,CACA,UAAA,CACA,mBAAA,CACA,SAAA,CACA,QAAA,CACA,iBAAA,CAEA,oCACC,SAAA,CAGF,0BACC,kBAAA,CAED,iCACC,iBAAA,CAED,gCACC,+BAAA,CACA,cAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.availability-day {\n\tpadding: 0 10px 0 10px;\n\tposition: absolute;\n}\n.availability-slots {\n\tdisplay: flex;\n\twhite-space: nowrap;\n}\n.availability-slot {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n}\n.availability-slot-group {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n::v-deep .mx-input-wrapper {\n\twidth: 85px;\n}\n::v-deep .mx-datepicker {\n\twidth: 97px;\n}\n::v-deep .multiselect {\n\tborder: 1px solid var(--color-border-dark);\n\twidth: 120px;\n}\n.time-zone {\n\tpadding: 32px 12px 12px 0;\n}\n.grid-table {\n\tdisplay: grid;\n\tmargin-bottom: 32px;\n\tgrid-column-gap: 24px;\n\tgrid-row-gap: 6px;\n\tgrid-template-columns: min-content min-content min-content;\n}\n.button {\n\talign-self: flex-end;\n}\n.label-weekday {\n\tposition: relative;\n\tdisplay: inline-flex;\n\tpadding-top: 4px;\n}\n.delete-slot {\n\tbackground-color: transparent;\n\tborder: none;\n\tpadding-bottom: 12px;\n\topacity: .5;\n\t&:hover {\n\t\topacity: 1;\n\t}\n}\n\n.add-another {\n\tbackground-color: transparent;\n\tborder: none;\n\topacity: .5;\n\tdisplay: inline-flex;\n\tpadding: 0;\n\tmargin: 0;\n\tmargin-bottom: 3px;\n\n\t&:hover {\n\t\topacity: 1;\n\t}\n}\n.to-text {\n\tpadding-right: 12px;\n}\n.time-zone-text{\n\tpadding-left: 22px;\n}\n.empty-content {\n\tcolor: var(--color-text-lighter);\n\tmargin-top: 4px;\n}\n\n"],sourceRoot:""}]),n.Z=i},69862:function(){},40964:function(){}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,loaded:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=n,r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},t=[],r.O=function(n,e,a,o){if(!e){var i=1/0;for(c=0;c<t.length;c++){e=t[c][0],a=t[c][1],o=t[c][2];for(var s=!0,l=0;l<e.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](e[l])}))?e.splice(l--,1):(s=!1,o<i&&(i=o));if(s){t.splice(c--,1);var d=a();void 0!==d&&(n=d)}}return n}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[e,a,o]},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,{a:n}),n},r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},r.j=347,function(){var t={347:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var a,o,i=e[0],s=e[1],l=e[2],d=0;if(i.some((function(n){return 0!==t[n]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var c=l(r)}for(n&&n(e);d<i.length;d++)o=i[d],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(c)},e=self.webpackChunknextcloud=self.webpackChunknextcloud||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var a=r.O(void 0,[874],(function(){return r(13836)}));a=r.O(a)}();
//# sourceMappingURL=dav-settings-personal-availability.js.map?v=2d1a8d450f8bba0eba3c