(function(){var DEPS_GRAPH={'dcmenablermodule':[],'$weak$':['dcmenablermodule']};window.STUDIO_SDK_START=+new Date();/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var e,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},m=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},n="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ca=function(a){a=
["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},da=ca(this),r=function(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&n(c,a,{configurable:!0,writable:!0,value:b})}},ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={ga:!0},ia={};try{ia.__proto__=ha;fa=ia.ga;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=ea,ka=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.fa=b.prototype};
r("Symbol",function(a){if(a)return a;var b=function(f,g){this.a=f;n(this,"description",{configurable:!0,writable:!0,value:g})};b.prototype.toString=function(){return this.a};var c=0,d=function(f){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new b("jscomp_symbol_"+(f||"")+"_"+c++,f)};return d});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&n(d.prototype,a,{configurable:!0,writable:!0,value:function(){return la(aa(this))}})}return a});
var la=function(a){a={next:a};a[Symbol.iterator]=function(){return this};return a},t=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
r("WeakMap",function(a){function b(){}function c(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}function d(k){if(!t(k,g)){var l=new b;n(k,g,{value:l})}}function f(k){var l=Object[k];l&&(Object[k]=function(p){if(p instanceof b)return p;Object.isExtensible(p)&&d(p);return l(p)})}if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),p=new a([[k,2],[l,3]]);if(2!=p.get(k)||3!=p.get(l))return!1;p.delete(k);p.set(l,4);return!p.has(k)&&4==p.get(l)}catch(C){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var q=0,h=function(k){this.a=(q+=Math.random()+1).toString();if(k){k=m(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}};h.prototype.set=function(k,l){if(!c(k))throw Error("Invalid WeakMap key");d(k);if(!t(k,g))throw Error("WeakMap key fail: "+k);k[g][this.a]=l;return this};h.prototype.get=function(k){return c(k)&&t(k,g)?k[g][this.a]:void 0};h.prototype.has=function(k){return c(k)&&t(k,g)&&t(k[g],this.a)};
h.prototype.delete=function(k){return c(k)&&t(k,g)&&t(k[g],this.a)?delete k[g][this.a]:!1};return h});
r("Map",function(a){if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(m([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),p=l.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=l.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!l.next().done?!1:!0}catch(C){return!1}}())return a;var b=new WeakMap,c=function(h){this.b={};this.a=g();
this.size=0;if(h){h=m(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}};c.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.b[l.id]=[]);l.f?l.f.value=k:(l.f={next:this.a,h:this.a.h,head:this.a,key:h,value:k},l.list.push(l.f),this.a.h.next=l.f,this.a.h=l.f,this.size++);return this};c.prototype.delete=function(h){h=d(this,h);return h.f&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.b[h.id],h.f.h.next=h.f.next,h.f.next.h=h.f.h,h.f.head=null,this.size--,
!0):!1};c.prototype.clear=function(){this.b={};this.a=this.a.h=g();this.size=0};c.prototype.has=function(h){return!!d(this,h).f};c.prototype.get=function(h){return(h=d(this,h).f)&&h.value};c.prototype.entries=function(){return f(this,function(h){return[h.key,h.value]})};c.prototype.keys=function(){return f(this,function(h){return h.key})};c.prototype.values=function(){return f(this,function(h){return h.value})};c.prototype.forEach=function(h,k){for(var l=this.entries(),p;!(p=l.next()).done;)p=p.value,
h.call(k,p[1],p[0],this)};c.prototype[Symbol.iterator]=c.prototype.entries;var d=function(h,k){var l=k&&typeof k;"object"==l||"function"==l?b.has(k)?l=b.get(k):(l=""+ ++q,b.set(k,l)):l="p_"+k;var p=h.b[l];if(p&&t(h.b,l))for(h=0;h<p.length;h++){var C=p[h];if(k!==k&&C.key!==C.key||k===C.key)return{id:l,list:p,index:h,f:C}}return{id:l,list:p,index:-1,f:void 0}},f=function(h,k){var l=h.a;return la(function(){if(l){for(;l.head!=h.a;)l=l.h;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,
value:void 0}})},g=function(){var h={};return h.h=h.next=h.head=h},q=0;return c});
var u=this||self,v=function(a,b,c){a=a.split(".");c=c||u;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b},ma=function(){},w=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},x=function(a,b){function c(){}c.prototype=b.prototype;a.fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oa=function(d,f,g){for(var q=Array(arguments.length-2),
h=2;h<arguments.length;h++)q[h-2]=arguments[h];return b.prototype[f].apply(d,q)}};var na=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},oa=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&b.call(c,f[g],g,a)};
function pa(a){return Array.prototype.concat.apply([],arguments)}function qa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var ra=function(a){this.a=a};ra.prototype.toString=function(){return(this.a&2?"b":"t")+(this.a&1?"r":"l")};v("studio.common.mde.Direction",ra,void 0);ra.Corner={ma:0,na:1,ia:2,ja:3};var sa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ta=function(a,b){return a<b?-1:a>b?1:0};var y;a:{var ua=u.navigator;if(ua){var va=ua.userAgent;if(va){y=va;break a}}y=""};var z=function(){},xa=function(a){A=a|6;wa(A)},wa=function(a){B(a,2,1);B(a,1,2);B(a,4,8);B(a,8,4);B(a,128,64);B(a,64,128);B(a,256,2)},B=function(a,b,c){(a&b)==b&&(A|=b,A&=~c)};v("studio.common.Environment",z,void 0);z.Type={LIVE:1,LOCAL:2,BROWSER:4,IN_APP:8,LAYOUTS_PREVIEW:16,CREATIVE_TOOLSET:32,RENDERING_STUDIO:64,RENDERING_TEST:128,PREVIEW:256};var A=6;z.addType=function(a){A|=a;wa(a)};z.setType=xa;z.hasType=function(a){return(A&a)==a};z.getValue=function(){return A};var ya=function(a){ya[" "](a);return a};ya[" "]=ma;var za=-1!=y.indexOf("Opera"),D=-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"),Aa=-1!=y.indexOf("Edge"),Ba=-1!=y.indexOf("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&-1==y.indexOf("Edge"))&&!(-1!=y.indexOf("Trident")||-1!=y.indexOf("MSIE"))&&-1==y.indexOf("Edge"),Ca=-1!=y.toLowerCase().indexOf("webkit")&&-1==y.indexOf("Edge"),Da=function(){var a=u.document;return a?a.documentMode:void 0},Ea;
a:{var Fa="",Ga=function(){var a=y;if(Ba)return/rv:([^\);]+)(\)|;)/.exec(a);if(Aa)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ca)return/WebKit\/(\S+)/.exec(a);if(za)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Ga&&(Fa=Ga?Ga[1]:"");if(D){var Ha=Da();if(null!=Ha&&Ha>parseFloat(Fa)){Ea=String(Ha);break a}}Ea=Fa}var Ia=Ea,Ja={},Ka;if(u.document&&D){var La=Da();Ka=La?La:parseInt(Ia,10)||void 0}else Ka=void 0;var Ma=Ka;var E=function(a,b){this.width=a;this.height=b};E.prototype.aspectRatio=function(){return this.width/this.height};E.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};E.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};E.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Na={ka:"dcm",la:"studio"};v("studio.sdk.ContainerState",{COLLAPSING:"collapsing",COLLAPSED:"collapsed",EXPANDING:"expanding",EXPANDED:"expanded",FS_COLLAPSING:"fs_collapsing",FS_EXPANDING:"fs_expanding",FS_EXPANDED:"fs_expanded"},void 0);var Oa=function(){};var Pa;(Pa=!D)||(Pa=9<=Number(Ma));var Qa=Pa,Ra;
if(Ra=D){var Sa;if(Object.prototype.hasOwnProperty.call(Ja,"9"))Sa=Ja["9"];else{for(var F=0,Ta=sa(String(Ia)).split("."),Ua=sa("9").split("."),Va=Math.max(Ta.length,Ua.length),G=0;0==F&&G<Va;G++){var Wa=Ta[G]||"",Xa=Ua[G]||"";do{var H=/(\d*)(\D*)(.*)/.exec(Wa)||["","","",""],I=/(\d*)(\D*)(.*)/.exec(Xa)||["","","",""];if(0==H[0].length&&0==I[0].length)break;F=ta(0==H[1].length?0:parseInt(H[1],10),0==I[1].length?0:parseInt(I[1],10))||ta(0==H[2].length,0==I[2].length)||ta(H[2],I[2]);Wa=H[3];Xa=I[3]}while(0==
F)}Sa=Ja["9"]=0<=F}Ra=!Sa}var Ya=Ra,Za=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{u.addEventListener("test",ma,b),u.removeEventListener("test",ma,b)}catch(c){}return a}();var J=function(a,b){this.type=a;this.a=this.target=b;this.defaultPrevented=!1};J.prototype.c=function(){this.defaultPrevented=!0};var K=function(a,b){J.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.b=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(Ba){a:{try{ya(b.nodeName);var f=!0;break a}catch(g){}f=!1}f||(b=
null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=
a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:$a[a.pointerType]||"";this.b=a;a.defaultPrevented&&this.c()}};x(K,J);var $a={2:"touch",3:"pen",4:"mouse"};K.prototype.c=function(){K.fa.c.call(this);var a=this.b;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ya)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var L="closure_listenable_"+(1E6*Math.random()|0),ab=0;var bb=function(a,b,c,d,f){this.listener=a;this.a=null;this.src=b;this.type=c;this.capture=!!d;this.b=f;this.key=++ab;this.o=this.v=!1},cb=function(a){a.o=!0;a.listener=null;a.a=null;a.src=null;a.b=null};var M=function(a){this.src=a;this.a={};this.b=0};M.prototype.add=function(a,b,c,d,f){var g=a.toString();a=this.a[g];a||(a=this.a[g]=[],this.b++);var q=db(a,b,d,f);-1<q?(b=a[q],c||(b.v=!1)):(b=new bb(b,this.src,g,!!d,f),b.v=c,a.push(b));return b};
var eb=function(a,b){var c=b.type;if(c in a.a){var d=a.a[c],f=na(d,b),g;(g=0<=f)&&Array.prototype.splice.call(d,f,1);g&&(cb(b),0==a.a[c].length&&(delete a.a[c],a.b--))}},db=function(a,b,c,d){for(var f=0;f<a.length;++f){var g=a[f];if(!g.o&&g.listener==b&&g.capture==!!c&&g.b==d)return f}return-1};var fb="closure_lm_"+(1E6*Math.random()|0),gb={},hb=0,N=function(a,b,c,d,f){if(d&&d.once)return ib(a,b,c,d,f);if(Array.isArray(b)){for(var g=0;g<b.length;g++)N(a,b[g],c,d,f);return null}c=jb(c);return a&&a[L]?a.a.add(String(b),c,!1,w(d)?!!d.capture:!!d,f):kb(a,b,c,!1,d,f)},kb=function(a,b,c,d,f,g){if(!b)throw Error("Invalid event type");var q=w(f)?!!f.capture:!!f,h=O(a);h||(a[fb]=h=new M(a));c=h.add(b,c,d,q,g);if(c.a)return c;d=lb();c.a=d;d.src=a;d.listener=c;if(a.addEventListener)Za||(f=q),void 0===
f&&(f=!1),a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(mb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");hb++;return c},lb=function(){var a=nb,b=Qa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},ib=function(a,b,c,d,f){if(Array.isArray(b)){for(var g=0;g<b.length;g++)ib(a,b[g],c,d,f);return null}c=jb(c);return a&&
a[L]?a.a.add(String(b),c,!0,w(d)?!!d.capture:!!d,f):kb(a,b,c,!0,d,f)},ob=function(a,b,c,d,f){if(Array.isArray(b))for(var g=0;g<b.length;g++)ob(a,b[g],c,d,f);else(d=w(d)?!!d.capture:!!d,c=jb(c),a&&a[L])?(a=a.a,b=String(b).toString(),b in a.a&&(g=a.a[b],c=db(g,c,d,f),-1<c&&(cb(g[c]),Array.prototype.splice.call(g,c,1),0==g.length&&(delete a.a[b],a.b--)))):a&&(a=O(a))&&(b=a.a[b.toString()],a=-1,b&&(a=db(b,c,d,f)),(c=-1<a?b[a]:null)&&pb(c))},pb=function(a){if("number"!==typeof a&&a&&!a.o){var b=a.src;
if(b&&b[L])eb(b.a,a);else{var c=a.type,d=a.a;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(mb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);hb--;(c=O(b))?(eb(c,a),0==c.b&&(c.src=null,b[fb]=null)):cb(a)}}},mb=function(a){return a in gb?gb[a]:gb[a]="on"+a},rb=function(a,b,c,d){var f=!0;if(a=O(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var g=b[a];g&&g.capture==c&&!g.o&&(g=qb(g,d),f=f&&!1!==g)}return f},qb=function(a,b){var c=a.listener,
d=a.b||a.src;a.v&&pb(a);return c.call(d,b)},nb=function(a,b){if(a.o)return!0;if(!Qa){if(!b)a:{b=["window","event"];for(var c=u,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new K(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var f=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(q){f=!0}if(f||void 0==d.returnValue)d.returnValue=!0}d=[];for(f=b.a;f;f=f.parentNode)d.push(f);a=a.type;for(f=d.length-1;0<=f;f--){b.a=d[f];var g=rb(d[f],a,!0,b);c=c&&g}for(f=0;f<d.length;f++)b.a=
d[f],g=rb(d[f],a,!1,b),c=c&&g}return c}return qb(a,new K(b,this))},O=function(a){a=a[fb];return a instanceof M?a:null},sb="__closure_events_fn_"+(1E9*Math.random()>>>0),jb=function(a){if("function"===typeof a)return a;a[sb]||(a[sb]=function(b){return a.handleEvent(b)});return a[sb]};var tb=function(a){this.i=a;this.g={}};x(tb,Oa);var ub=[],vb=function(a,b,c){var d=document.body||window,f={capture:!0,passive:!0};Array.isArray(b)||(b&&(ub[0]=b.toString()),b=ub);for(var g=0;g<b.length;g++){var q=N(d,b[g],c||a.handleEvent,f||!1,a.i||a);if(!q)break;a.g[q.key]=q}};tb.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};var wb=function(){tb.call(this);this.a=new Map;this.b=!1;this.a.set("nx",null);this.a.set("ny",null);this.a.set("dim",null)};ka(wb,tb);wb.prototype.j=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return 2040>b.reduce(function(d,f){return d+f.length},0)};wb.prototype.c=function(a){var b=a.clientX,c=a.clientY;a.changedTouches&&a.changedTouches[0]&&(b=a.changedTouches[0].clientX,c=a.changedTouches[0].clientY);this.a.set("nx",Math.round(b));this.a.set("ny",Math.round(c))};v("studio.sdk.MraidMethod",{GET_CURRENT_POSITION:"getCurrentPosition",GET_DEFAULT_POSITION:"getDefaultPosition",GET_SCREEN_SIZE:"getScreenSize",CREATE_CALENDAR_EVENT:"createCalendarEvent",GET_MAX_SIZE:"getMaxSize",PLAY_VIDEO:"playVideo",STORE_PICTURE:"storePicture",SUPPORTS:"supports",USE_CUSTOM_CLOSE:"useCustomClose"},void 0);var xb=function(){};v("studio.sdk.IEnabler",xb,void 0);e=xb.prototype;e.aa=function(){};e.W=function(){};e.V=function(){};e.ca=function(){};e.ba=function(){};e.isVisible=function(){};e.R=function(){};e.P=function(){};e.O=function(){};e.B=function(){};e.getParameter=function(){};e.A=function(){};e.C=function(){};e.I=function(){};e.counter=function(){};e.da=function(){};e.ea=function(){};e.J=function(){};e.K=function(){};e.Y=function(){};e.F=function(){};e.X=function(){};e.D=function(){};e.close=function(){};
e.M=function(){};e.S=function(){};e.addEventListener=function(){};e.removeEventListener=function(){};e.U=function(){};e.T=function(){};e.$=function(){};e.H=function(){};e.Z=function(){};e.G=function(){};e.L=function(){};e.N=function(){};v("studio.sdk.logger",{}.pa,void 0);v("studio.module.ModuleId",{ENABLER:"enabler",DCM_ENABLER:"dcmenabler",SSR_ENABLER:"ssrenabler",VIDEO:"video",CONFIGURABLE:"configurable",CONFIGURABLE_FILLER:"configurablefiller",LAYOUTS:"layouts",FILLER:"layoutsfiller",RAD_VIDEO:"rad_ui_video",GDN:"gdn"},void 0);/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var P=function(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof P)for(c=a.l(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])};P.prototype.m=function(){yb(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};P.prototype.l=function(){yb(this);return this.a.concat()};
var yb=function(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Q(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var f={};for(c=b=0;b<a.a.length;)d=a.a[b],Q(f,d)||(a.a[c++]=d,f[d]=1),b++;a.a.length=c}};P.prototype.get=function(a,b){return Q(this.b,a)?this.b[a]:b};P.prototype.set=function(a,b){Q(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};P.prototype.forEach=function(a,b){for(var c=this.l(),d=0;d<c.length;d++){var f=c[d],g=this.get(f);a.call(b,g,f,this)}};
var Q=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var R=function(){this.a=new M(this)};x(R,Oa);R.prototype[L]=!0;R.prototype.addEventListener=function(a,b,c,d){N(this,a,b,c,d)};R.prototype.removeEventListener=function(a,b,c,d){ob(this,a,b,c,d)};var S=new P;S.set("enabler","enabler");S.set("dcmenabler","dcm");S.set("video","vid");S.set("configurable","cfg");S.set("configurablefiller","cfg_fill");S.set("layouts","lay");S.set("layoutsfiller","lay_fill");S.set("gdn","gdn");S.set("rad_ui_video","rad");v("goog.exportSymbol",function(a,b,c){v(a,b,c)},this);var zb=function(a){a+="goog.exportSymbol('studioLoader.context.evalInContext', "+zb.toString()+");";eval(a)};v("studioLoader.context.evalInContext",zb,void 0);var Ab=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,Bb=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),f=null;if(0<=d){var g=a[c].substring(0,d);f=a[c].substring(d+1)}else g=a[c];b(g,f?decodeURIComponent(f.replace(/\+/g," ")):"")}}};var Cb=function(){var a=(window.STUDIO_ORIGINAL_ASSET_URL?window.STUDIO_ORIGINAL_ASSET_URL:window.location.href).replace(/%(?![A-Fa-f0-9][A-Fa-f0-9])/g,"%25");this.g=this.u=this.c="";this.s=null;this.i=this.j="";this.a=!1;if(a instanceof Cb){this.a=a.a;Db(this,a.c);this.u=a.u;this.g=a.g;Eb(this,a.s);this.j=a.j;var b=a.b;var c=new T;c.c=b.c;b.a&&(c.a=new P(b.a),c.b=b.b);Fb(this,c);this.i=a.i}else a&&(b=String(a).match(Ab))?(this.a=!1,Db(this,b[1]||"",!0),this.u=U(b[2]||""),this.g=U(b[3]||"",!0),Eb(this,
b[4]),this.j=U(b[5]||"",!0),Fb(this,b[6]||"",!0),this.i=U(b[7]||"")):(this.a=!1,this.b=new T(null,this.a))};
Cb.prototype.toString=function(){var a=[],b=this.c;b&&a.push(V(b,Gb,!0),":");var c=this.g;if(c||"file"==b)a.push("//"),(b=this.u)&&a.push(V(b,Gb,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,null!=c&&a.push(":",String(c));if(c=this.j)this.g&&"/"!=c.charAt(0)&&a.push("/"),a.push(V(c,"/"==c.charAt(0)?Hb:Ib,!0));(c=this.b.toString())&&a.push("?",c);(c=this.i)&&a.push("#",V(c,Jb));return a.join("")};
var Db=function(a,b,c){a.c=c?U(b,!0):b;a.c&&(a.c=a.c.replace(/:$/,""))},Eb=function(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.s=b}else a.s=null},Fb=function(a,b,c){b instanceof T?(a.b=b,Kb(a.b,a.a)):(c||(b=V(b,Lb)),a.b=new T(b,a.a))},U=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},V=function(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,Mb),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Mb=function(a){a=
a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Gb=/[#\/\?@]/g,Ib=/[#\?:]/g,Hb=/[#\?]/g,Lb=/[#\?@]/g,Jb=/#/g,T=function(a,b){this.b=this.a=null;this.c=a||null;this.g=!!b},W=function(a){a.a||(a.a=new P,a.b=0,a.c&&Bb(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))};T.prototype.add=function(a,b){W(this);this.c=null;a=X(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};
var Nb=function(a,b){W(a);b=X(a,b);Q(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Q(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&yb(a)))},Ob=function(a,b){W(a);b=X(a,b);return Q(a.a.b,b)};e=T.prototype;e.forEach=function(a,b){W(this);this.a.forEach(function(c,d){oa(c,function(f){a.call(b,f,d,this)},this)},this)};e.l=function(){W(this);for(var a=this.a.m(),b=this.a.l(),c=[],d=0;d<b.length;d++)for(var f=a[d],g=0;g<f.length;g++)c.push(b[d]);return c};
e.m=function(a){W(this);var b=[];if("string"===typeof a)Ob(this,a)&&(b=pa(b,this.a.get(X(this,a))));else{a=this.a.m();for(var c=0;c<a.length;c++)b=pa(b,a[c])}return b};e.set=function(a,b){W(this);this.c=null;a=X(this,a);Ob(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};e.get=function(a,b){if(!a)return b;a=this.m(a);return 0<a.length?String(a[0]):b};
e.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.l(),c=0;c<b.length;c++){var d=b[c],f=encodeURIComponent(String(d));d=this.m(d);for(var g=0;g<d.length;g++){var q=f;""!==d[g]&&(q+="="+encodeURIComponent(String(d[g])));a.push(q)}}return this.c=a.join("&")};
var X=function(a,b){b=String(b);a.g&&(b=b.toLowerCase());return b},Kb=function(a,b){b&&!a.g&&(W(a),a.c=null,a.a.forEach(function(c,d){var f=d.toLowerCase();d!=f&&(Nb(this,d),Nb(this,f),0<c.length&&(this.c=null,this.a.set(X(this,f),qa(c)),this.b+=c.length))},a));a.g=b};var Y=function(a){N(window,"message",Pb);if(a!=Qb)return!1;R.call(this);this.b=null;this.b||(this.b=new Cb);(a=this.g=this.b.b)&&(a=a.get("e",null))&&xa(parseInt(a,10)||0);a=this.c=new wb;a.b=!0;vb(a,"mousedown",a.c);vb(a,"touchstart",a.c)},Rb;x(Y,R);v("studio.DcmEnabler",Y,void 0);var Qb=Math.random(),Sb=null,Tb={},Ub=function(){Sb||(Sb=new Y(Qb));return Sb};Y.getInstance=Ub;
var Pb=function(a){if("string"===typeof a.b.data){try{var b=JSON.parse(a.b.data)}catch(f){return}if(b.isInitClickTag){if(a=b.clickTags)for(var c=0;c<a.length;c++){var d=a[c];Tb[d.name]=d.url}Rb=b.relegateNavigation}}};Y.prototype.W=function(){};Y.prototype.reportManualClose=Y.prototype.W;Y.prototype.V=function(){};Y.prototype.reportEngagement=Y.prototype.V;Y.prototype.aa=function(){};Y.prototype.setExpandingPixelOffsets=Y.prototype.aa;Y.prototype.ca=function(){};Y.prototype.setStartExpanded=Y.prototype.ca;
Y.prototype.ba=function(){};Y.prototype.setIsMultiDirectional=Y.prototype.ba;Y.prototype.isVisible=function(){return!0};Y.prototype.isVisible=Y.prototype.isVisible;Y.prototype.R=function(){return!0};Y.prototype.isServingInLiveEnvironment=Y.prototype.R;Y.prototype.P=function(){return!0};Y.prototype.isPageLoaded=Y.prototype.P;Y.prototype.O=function(){return!0};Y.prototype.isInitialized=Y.prototype.O;Y.prototype.B=function(){};Y.prototype.callAfterInitialized=Y.prototype.B;
Y.prototype.getParameter=function(a){return this.g.get(a,null)};Y.prototype.getParameter=Y.prototype.getParameter;
Y.prototype.A=function(a,b){if(b=null!=Tb[a]&&"null"!=Tb[a]?Tb[a]:b)if(a=this.c,a.b){var c=window.document;c="CSS1Compat"==c.compatMode?c.documentElement:c.body;c=new E(c.clientWidth,c.clientHeight);a.a.set("dim",c.width+"x"+c.height);c="";for(var d=m(a.a),f=d.next();!f.done;f=d.next()){var g=m(f.value);f=g.next().value;g=g.next().value;c=null==g?c+"&"+f+"=":c+"&"+f+"="+g}d=b.toLowerCase().indexOf("&adurl=");-1<d&&a.j(b,c)&&(b=b.substr(0,d)+c+b.substr(d))}"parent"===Rb?window.parent.postMessage(JSON.stringify({clickTag:b,
isPostClickTag:!0}),"*"):window.open(b)};Y.prototype.exit=Y.prototype.A;Y.prototype.C=function(a,b){this.A(a,b)};Y.prototype.exitOverride=Y.prototype.C;Y.prototype.I=function(a){return a};Y.prototype.formExitUrlFromOverride=Y.prototype.I;Y.prototype.counter=function(){};Y.prototype.counter=Y.prototype.counter;Y.prototype.da=function(){};Y.prototype.startTimer=Y.prototype.da;Y.prototype.ea=function(){};Y.prototype.stopTimer=Y.prototype.ea;Y.prototype.J=function(){return"collapsed"};
Y.prototype.getContainerState=Y.prototype.J;Y.prototype.K=function(){return null};Y.prototype.getExpandDirection=Y.prototype.K;Y.prototype.Y=function(){};Y.prototype.requestExpand=Y.prototype.Y;Y.prototype.F=function(){};Y.prototype.finishExpand=Y.prototype.F;Y.prototype.X=function(){};Y.prototype.requestCollapse=Y.prototype.X;Y.prototype.D=function(){};Y.prototype.finishCollapse=Y.prototype.D;Y.prototype.close=function(){};Y.prototype.close=Y.prototype.close;Y.prototype.M=function(a){return a};
Y.prototype.getUrl=Y.prototype.M;Y.prototype.S=function(){};Y.prototype.loadModule=Y.prototype.S;Y.prototype.addEventListener=function(a,b,c,d){N(this,a,b,c,d)};Y.prototype.addEventListener=Y.prototype.addEventListener;Y.prototype.removeEventListener=function(a,b,c,d){ob(this,a,b,c,d)};Y.prototype.removeEventListener=Y.prototype.removeEventListener;Y.prototype.U=function(){};Y.prototype.queryFullscreenSupport=Y.prototype.U;Y.prototype.T=function(){};Y.prototype.queryFullscreenDimensions=Y.prototype.T;
Y.prototype.$=function(){};Y.prototype.requestFullscreenExpand=Y.prototype.$;Y.prototype.H=function(){};Y.prototype.finishFullscreenExpand=Y.prototype.H;Y.prototype.Z=function(){};Y.prototype.requestFullscreenCollapse=Y.prototype.Z;Y.prototype.G=function(){};Y.prototype.finishFullscreenCollapse=Y.prototype.G;Y.prototype.N=function(){};Y.prototype.invokeMraidMethod=Y.prototype.N;Y.prototype.L=function(){a:{for(a in Na)if("dcm"==Na[a]){var a="dcm";break a}a=null}return a||"dcm"};
Y.prototype.getSdk=Y.prototype.L;var Vb=Ub();v("Enabler",Vb,void 0);var Z=function(a){J.call(this,a)};ka(Z,J);Z.prototype.ha=function(a,b){this[a]=b;return this};v("studio.events.StudioEvent",Z,void 0);Z.prototype.addProperty=Z.prototype.ha;Z.INIT="init";Z.VISIBLE="visible";Z.HIDDEN="hidden";Z.VISIBILITY_CHANGE="visibilityChange";Z.VISIBILITY_CHANGE_WITH_INFO="visibilityChangeWithInfo";Z.EXIT="exit";Z.INTERACTION="interaction";Z.PAGE_LOADED="pageLoaded";Z.ORIENTATION="orientation";Z.ABOUT_TO_EXPAND="aboutToExpand";Z.EXPAND_START="expandStart";Z.EXPAND_FAILED="expandFailed";
Z.EXPAND_FINISH="expandFinish";Z.COLLAPSE_START="collapseStart";Z.COLLAPSE_FINISH="collapseFinish";Z.COLLAPSE="collapse";Z.FULLSCREEN_SUPPORT="fullscreenSupport";Z.HOSTPAGE_FEATURES_LOADED="hostpageFeaturesLoaded";Z.FULLSCREEN_DIMENSIONS="fullscreenDimensions";Z.FULLSCREEN_EXPAND_START="fullscreenExpandStart";Z.FULLSCREEN_EXPAND_FINISH="fullscreenExpandFinish";Z.FULLSCREEN_COLLAPSE_START="fullscreenCollapseStart";Z.FULLSCREEN_COLLAPSE_FINISH="fullscreenCollapseFinish";Z.HOSTPAGE_SCROLL="hostpageScroll";
Z.OPTIONAL_HOSTPAGE_SCROLL="optHostpageScroll";Z.SCROLL_INTERACTION="scrollInteraction";Z.ENTER_VIEWPORT="enterViewport";Z.OPTIONAL_ENTER_VIEWPORT="optEnterViewport";Z.EXIT_VIEWPORT="exitViewport";Z.OPTIONAL_EXIT_VIEWPORT="optExitViewport";Z.VIDEO_START="videoStart";})();
