

/*
 * @Author: Abdullah Irfan
 * DSLReports Speed Widget
 * TODO: Use WhichBrowser https://github.com/WhichBrowser/WhichBrowser
 * or WURFL.JS
 */

/**
* The __impl__ namespace is private to the Clearborg Object, hence no methods defined 
* here will be acccessible from outside the widget object.
*
* Execution of functions on this class starts from __impl.begin_test()__ function
*
* @class Clearborg.impl
*/

// starting up
(function(w) {

	var impl, reportspeed, d=w.document, httpinvokelocal, REPORTSPEED_start= new Date().getTime();

	// Loading an Async Script loader
	(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){a.finished_listeners[c]()}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g()}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){d=null;I(b)}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){e.ready_listeners[a]()}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){j()}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j++]()}catch(err){}continue}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.unshift(d,1);[].splice.apply(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);
	var scriptLoader = $LAB.noConflict();
	
	// Loading Minifiedjs.com JS for Utility Functions
	/^u/.test(typeof define)&&function(a){var b=this.requireDRWIDGET=function(b){return a[b]};this.define=function(c,d){a[c]=a[c]||d(b)}}({}),define("minified",function(){function N(a){return a.substr(0,3)}function D(a){return a!=h?""+a:""}function v(a){return"string"==typeof a}function E(a){return!!a&&"object"==typeof a}function M(a){return a&&a.nodeType}function W(a){return"number"==typeof a}function ba(a){return E(a)&&!!a.getDay}function Aa(a){return!0===a||!1===a}function ka(a){var b=typeof a;return"object"==b?!(!a||!a.getDay):"string"==b||"number"==b||Aa(a)}function u(a){return a}function Ba(a){return a+1}function l(a,b,c){return D(a).replace(b,c!=h?c:"")}function Ca(a){return l(a,/[\\\[\]\/{}()*+?.$|^-]/g,"\\$&")}function J(a){return l(a,/^\s+|\s+$/g)}function q(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c||a,d,a[d]);return a}function w(a,b,c){if(a)for(var d=0;d<a.length;d++)b.call(c||a,a[d],d);return a}function K(a,b,c){var d=[],e=n(b)?b:function(a){return b!=a};return w(a,function(b,f){e.call(c||a,b,f)&&d.push(b)}),d}function A(a,b,c,d){var e=[];return a(b,function(a,f){t(a=c.call(d||b,a,f))?w(a,function(a){e.push(a)}):a!=h&&e.push(a)}),e}function la(a,b,c){return A(w,a,b,c)}function db(a){var b=0;return q(a,function(){b++}),b}function Da(a){var b=[];return q(a,function(a){b.push(a)}),b}function z(a,b,c){var d=[];return w(a,function(e,f){d.push(b.call(c||a,e,f))}),d}function ma(a,b){if(t(a)){var c=O(b);return P(Q(a,0,c.length),c)}return b!=h&&a.substr(0,b.length)==b}function Ea(a,b){if(t(a)){var c=O(b);return P(Q(a,-c.length),c)||!c.length}return b!=h&&a.substr(a.length-b.length)==b}function X(a){var b=a.length;return t(a)?new x(z(a,function(){return a[--b]})):l(a,/[\s\S]/g,function(){return a.charAt(--b)})}function na(a,b){var c={};return w(a,function(a){c[a]=b}),c}function Y(a,b){var c,d=b||{};for(c in a)d[c]=a[c];return d}function ca(a,b){for(var c=b,d=0;d<a.length;d++)c=Y(a[d],c);return c}function Fa(a){return n(a)?a:function(b,c){return a===b?c:void 0}}function R(a,b,c){return b==h?c:0>b?Math.max(a.length+b,0):Math.min(a.length,b)}function S(a,b,c,d){b=Fa(b),d=R(a,d,a.length);for(var e=R(a,c,0);d>e;e++)if((c=b.call(a,a[e],e))!=h)return c}function Ga(a,b,c,d){b=Fa(b),d=R(a,d,-1);for(var e=R(a,c,a.length-1);e>d;e--)if((c=b.call(a,a[e],e))!=h)return c}function Q(a,b,c){var d=[];if(a)for(c=R(a,c,a.length),b=R(a,b,0);c>b;b++)d.push(a[b]);return d}function Ha(a){return z(a,u)}function Ia(a){return function(){return new x(T(a,arguments))}}function Ja(a){var b={};return K(a,function(a){return b[a]?!1:b[a]=1})}function Ka(a,b){var c=na(b,1);return K(a,function(a){var b=c[a];return c[a]=0,b})}function La(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1}function P(a,b){var c,d=n(a)?a():a,e=n(b)?b():b;return d==e?!0:d==h||e==h?!1:ka(d)||ka(e)?ba(d)&&ba(e)&&+d==+e:t(d)?d.length==e.length&&!S(d,function(a,b){return P(a,e[b])?void 0:!0}):!t(e)&&(c=Da(d)).length==db(e)&&!S(c,function(a){return P(d[a],e[a])?void 0:!0})}function U(a,b,c){return n(a)?a.apply(c&&b,z(c||b,u)):void 0}function T(a,b,c){return z(a,function(a){return U(a,b,c)})}function Ma(a,b,c,d){return function(){return U(a,b,la([c,arguments,d],u))}}function da(a,b){for(var c=0>b?"-":"",d=(c?-b:b).toFixed(0);d.length<a;)d="0"+d;return c+d}function Na(a,b,c){var d,e=0,f=c?b:X(b);return a=(c?a:X(a)).replace(/./g,function(a){return"0"==a?(d=!1,f.charAt(e++)||"0"):"#"==a?(d=!0,f.charAt(e++)||""):d&&!f.charAt(e)?"":a}),c?a:b.substr(0,b.length-e)+X(a)}function oa(a,b,c){return b!=h&&a?60*parseFloat(a[b])+parseFloat(a[b+1])+c.getTimezoneOffset():0}function Oa(a){return new Date(+a)}function pa(a,b,c){return a["set"+b](a["get"+b]()+c),a}function ea(a,b,c){return c==h?ea(new Date,a,b):pa(Oa(a),b.charAt(0).toUpperCase()+b.substr(1),c)}function Pa(a,b,c){var d=+b,e=+c,f=e-d;if(0>f)return-Pa(a,c,b);if(b={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5}[a])return f/b;for(b=a.charAt(0).toUpperCase()+a.substr(1),a=Math.floor(f/{fullYear:31536e6,month:2628e6,date:864e5}[a]-2),d=pa(new Date(d),b,a),f=a;1.2*a+4>f;f++)if(+pa(d,b,1)>e)return f}function qa(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function Qa(a){return l(a,/[\x00-\x1f'"\u2028\u2029]/g,qa)}function Z(a,b){for(var c,d=0,e=[];c=b.exec(a);)e.push(a.substring(d,c.index)),d=c.index+c[0].length;return e.push(a.substr(d)),e}function ra(a,b){function c(a,c){var d=[];return e.call(c||a,a,function(a,b){t(a)?w(a,function(a,c){b.call(a,a,c)}):q(a,function(a,c){b.call(c,a,c)})},b||u,function(){U(d.push,d,arguments)},O),d.join("")}if(fa[a])return fa[a];var d="with(_.isObject(obj)?obj:{}){"+z(Z(a,/{{|}}}?/g),function(a,b){var c,d=J(a),e=l(d,/^{/),d=d==e?"esc(":"";return b%2?(c=/^each\b(\s+([\w_]+(\s*,\s*[\w_]+)?)\s*:)?(.*)/.exec(e))?"each("+(J(c[4])?c[4]:"this")+", function("+c[2]+"){":(c=/^if\b(.*)/.exec(e))?"if("+c[1]+"){":(c=/^else\b\s*(if\b(.*))?/.exec(e))?"}else "+(c[1]?"if("+c[2]+")":"")+"{":(c=/^\/(if)?/.exec(e))?c[1]?"}\n":"});\n":(c=/^(var\s.*)/.exec(e))?c[1]+";":(c=/^#(.*)/.exec(e))?c[1]:(c=/(.*)::\s*(.*)/.exec(e))?"print("+d+'_.formatValue("'+Qa(c[2])+'",'+(J(c[1])?c[1]:"this")+(d&&")")+"));\n":"print("+d+(J(e)?e:"this")+(d&&")")+");\n":a?'print("'+Qa(a)+'");\n':void 0}).join("")+"}",e=Function("obj","each","esc","print","_",d);return 99<Ra.push(c)&&delete fa[Ra.shift()],fa[a]=c}function Sa(a){return l(a,/[<>'"&]/g,function(a){return"&#"+a.charCodeAt(0)+";"})}function sa(a,b){return ra(a,Sa)(b)}function L(a){return function(b,c){return new x(a(this,b,c))}}function B(a){return function(b,c,d){return a(this,b,c,d)}}function G(a){return function(b,c,d){return new x(a(b,c,d))}}function n(a){return"function"==typeof a&&!a.item}function t(a){return a&&a.length!=h&&!v(a)&&!M(a)&&!n(a)&&a!==y}function Ta(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function ga(a){return parseFloat(l(a,/^[^\d-]+/))}function ha(a){return a.Nia=a.Nia||++Ua}function ta(a,b){var c,d=[],e={};return r(a,function(a){r(b(a),function(a){e[c=ha(a)]||(d.push(a),e[c]=!0)})}),d}function Va(a,b){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:h},d=a.get(c),c=a.set(c).get("clientHeight");return a.set(d),c*b+"px"}function eb(a,b,c,d,e,f){return function(g,h){var i,j=g||y.event,k=!f,l=h||j.target||j.srcElement;if(f)for(;l&&l!=b&&!(k=f(l));)l=l.parentNode;return k&&(i=(!a.apply(s(f?l:b),c||[j,d])||""==e)&&"|"!=e)&&!h&&(j.preventDefault&&(j.preventDefault(),j.stopPropagation()),j.cancelBubble=!0),!i}}function ua(a,b){r(b,function(a){a.element.detachEvent("on"+a.b,a.c)})}function Wa(a){V?V.push(a):setTimeout(a,0)}function Xa(a,b,c){return H(a,b,c)[0]}function Ya(a,b,c){return a=s(document.createElement(a)),t(b)||b!=h&&!E(b)?a.add(b):a.set(b).add(c)}function va(a){return A(r,a,function(a){return t(a)?va(a):(M(a)&&(a=a.cloneNode(!0),a.removeAttribute&&a.removeAttribute("id")),a)})}function s(a,b,c){return n(a)?Wa(a):new x(H(a,b,c))}function H(a,b,c){function d(a){return a=A(r,a,function b(a){return t(a)?A(r,a,b):a}),f?K(a,function(a){for(;a=a.parentNode;)if(a==f||c)return a==f}):a}function e(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var f,g,h,i;return b&&1!=(b=H(b)).length?ta(b,function(b){return H(a,b,c)}):(f=b&&b[0],v(a)?f&&1!=M(f)?[]:1<(b=a.split(/\s*,\s*/)).length?ta(b,function(a){return H(a,f,c)}):(b=/(\S+)\s+(.+)$/.exec(a))?H(b[2],H(b[1],f),c):a!=(b=l(a,/^#/))?d(document.getElementById(b)):(g=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1],i=b[2],b=(h=document.getElementsByClassName&&i)?(f||document).getElementsByClassName(i):(f||document).getElementsByTagName(g||"*"),(g=h?g:i)&&(b=K(b,e(g,h?"tagName":"className"))),c?d(b):b):d(a))}function ia(a,b){function c(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var d,e,f={},g=f;return n(a)?a:W(a)?function(b,c){return c==a}:!a||"*"==a||v(a)&&(g=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(d=c(g[1],"tagName"),e=c(g[2],"className"),function(a){return 1==M(a)&&d(a)&&e(a)}):b?function(c){return s(a,b).find(c)!=h}:(s(a).each(function(a){f[ha(a)]=!0}),function(a){return f[ha(a)]})}function Za(a){var b=ia(a);return function(a){return b(a)?h:!0}}function r(a,b){return t(a)?w(a,b):a!=h&&b(a,0),a}function $(){function a(a,c){return b==h&&a!=h&&(b=a,i=t(c)?c:[c],setTimeout(function(){w(d,function(a){a()})},0)),b}var b,c,d=[],e=arguments,f=e.length,g=0,i=[];return w(e,function j(b,c){try{b.then?b.then(function(b){var d;(E(b)||n(b))&&n(d=b.then)?j(d,c):(i[c]=z(arguments,u),++g==f&&a(!0,2>f?i[c]:i))},function(){i[c]=z(arguments,u),a(!1,2>f?i[c]:[i[c][0],i,c])}):b(function(){a(!0,arguments)},function(){a(!1,arguments)})}catch(d){a(!1,[d,i,c])}}),a.stop=function(){return w(e,function(a){a.stop&&a.stop()}),U(a.stop0)},c=a.then=function(c,e){function f(){try{var a=b?c:e;n(a)?function f(a){try{var b,c=0;if((E(a)||n(a))&&n(b=a.then)){if(a===g)throw new TypeError;b.call(a,function(a){c++||f(a)},function(a){c++||g(!1,[a])}),g.stop0=a.stop}else g(!0,[a])}catch(d){c++||g(!1,[d])}}(U(a,aa,i)):g(b,i)}catch(d){g(!1,[d])}}var g=$();return g.stop0=a.stop,b!=h?setTimeout(f,0):d.push(f),g},a.always=function(a){return c(a,a)},a.error=function(a){return c(0,a)},a}function x(a,b){var c,d,e,f,g,h=0;if(a)for(c=0,d=a.length;d>c;c++)if(e=a[c],b&&t(e))for(f=0,g=e.length;g>f;f++)this[h++]=e[f];else this[h++]=e;else this[h++]=b;this.length=h,this._=!0}function O(){return new x(arguments,!0)}var aa,cb,y=this,wa={},xa={},Ua=1,I={},V=/^[ic]/.test(document.readyState)?h:[],ja={},ya=0,C=!!document.all&&!document.addEventListener,h=null,za=Z("January,February,March,April,May,June,July,August,September,October,November,December",/,/g),$a=z(za,N),ab=Z("Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",/,/g),gb=z(ab,N),hb=Z("am,pm",/,/g),ib=Z("am,am,am,am,am,am,am,am,am,am,am,am,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm,pm",/,/g),jb={y:["FullYear",u],Y:["FullYear",function(a){return a%100}],M:["Month",Ba],n:["Month",$a],N:["Month",za],d:["Date",u],m:["Minutes",u],H:["Hours",u],h:["Hours",function(a){return a%12||12}],k:["Hours",Ba],K:["Hours",function(a){return a%12}],s:["Seconds",u],S:["Milliseconds",u],a:["Hours",ib],w:["Day",gb],W:["Day",ab],z:["TimezoneOffset",function(a,b,c){return c?c:(b=a>0?a:-a,(0>a?"+":"-")+da(2,Math.floor(b/60))+da(2,b%60))}]},bb={y:0,Y:[0,-2e3],M:[1,1],n:[1,$a],N:[1,za],d:2,m:4,H:3,h:3,K:[3,1],k:[3,1],s:5,S:6,a:[3,hb]},fa={},Ra=[];return Y({each:B(w),filter:L(K),collect:L(la),map:L(z),toObject:B(na),equals:B(P),sub:L(Q),reverse:B(X),find:B(S),findLast:B(Ga),startsWith:B(ma),endsWith:B(Ea),contains:B(La),call:L(T),array:B(Ha),unite:B(Ia),merge:B(ca),uniq:L(Ja),intersection:L(Ka),join:function(a){return z(this,u).join(a)},reduce:function(a,b){return w(this,function(c,d){b=a.call(this,b,c,d)}),b},sort:function(a){return new x(z(this,u).sort(a))},remove:function(){r(this,function(a){C&&1==M(a)&&(r(H("*",a),function(a){ua(0,I[a.Nia]),delete I[a.Nia]}),ua(0,I[a.Nia]),delete I[a.Nia]),a.parentNode.removeChild(a)})},text:function(){function a(b){var c=M(b);return 1==c?A(r,b.childNodes,a):5>c?b.data:h}return A(r,this,a).join("")},trav:function(a,b,c){var d=W(b),e=ia(d?h:b),f=d?b:c;return new x(ta(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},next:function(a,b){return this.trav("nextSibling",a,b||1)},up:function(a,b){return this.trav("parentNode",a,b||1)},select:function(a,b){return s(a,this,b)},is:function(a){return!this.find(Za(a))},only:function(a){return new x(K(this,ia(a)))},not:function(a){return new x(K(this,Za(a)))},get:function(a,b){var c,d,e,f=this,g=f[0];return g?v(a)?(c=/^(\W*)(.*)/.exec(l(a,/^%/,"@data-")),d=c[1],g=xa[d]?xa[d](this,c[2]):"$"==a?f.get("className"):"$$"==a?C?g.style.cssText:f.get("@style"):"$$slide"==a?f.get("$height"):"$$fade"==a||"$$show"==a?"hidden"==f.get("$visibility")||"none"==f.get("$display")?0:"$$fade"==a?C?isNaN(f.get("$filter",!0))?1:f.get("$filter",!0)/100:isNaN(f.get("$opacity",!0))?1:f.get("$opacity",!0):1:"$$scrollX"==a?y.pageXOffset!=h?y.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft:"$$scrollY"==a?y.pageXOffset!=h?y.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:"$"==d?y.getComputedStyle?y.getComputedStyle(g,h).getPropertyValue(l(c[2],/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(g.currentStyle||g.style)[l(c[2],/^float$/,"cssFloat")]:"@"==d?g.getAttribute(c[2]):g[c[2]],b?ga(g):g):(e={},(t(a)?r:q)(a,function(a){e[a]=f.get(a,b)}),e):void 0},set:function(a,b){var c,d,e=this;return b!==aa?(c=/^(\W*)(.*)/.exec(l(l(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),d=c[1],wa[d]?wa[d](this,c[2],b):"$$fade"==a?e.set({$visibility:b?"visible":"hidden"}).set(C?1>b?{$filter:"alpha(opacity = "+100*b+")",$zoom:1}:{$filter:""}:{$opacity:b}):"$$slide"==a?e.set({$visibility:b?"visible":"hidden",$overflow:"hidden",$height:/px/.test(b)?b:function(a,c,d){return Va(s(d),b)}}):"$$show"==a?b?e.set({$visibility:b?"visible":"hidden",$display:""}).set({$display:function(a){return"none"==a?"block":a}}):e.set({$display:"none"}):"$$"==a?C?e.set("$cssText",b):e.set("@style",b):r(this,function(e,f){var g=n(b)?b(s(e).get(a),f,e):b;"$"==d?c[2]?e.style[c[2]]=g:r(g&&g.split(/\s+/),function(a){var b=l(a,/^[+-]/),c=e.className||"",d=l(c,RegExp("(^|\\s+)"+b+"(?=$|\\s)"));(/^\+/.test(a)||b==a&&c==d)&&(d+=" "+b),e.className=J(d)}):"$$scrollX"==a?e.scroll(g,s(e).get("$$scrollY")):"$$scrollY"==a?e.scroll(s(e).get("$$scrollX"),g):"@"==d?g==h?e.removeAttribute(c[2]):e.setAttribute(c[2],g):e[c[2]]=g})):v(a)||n(a)?e.set("$",a):q(a,function(a,b){e.set(a,b)}),e},show:function(){return this.set("$$show",1)},hide:function(){return this.set("$$show",0)},add:function(a,b){return this.each(function(c,d){function e(a){t(a)?r(a,e):n(a)?e(a(c,d)):a!=h&&(a=M(a)?a:document.createTextNode(a),f?f.parentNode.insertBefore(a,f.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),f=a)}var f;e(d&&!n(a)?va(a):a)})},fill:function(a){return this.each(function(a){s(a.childNodes).remove()}).add(a)},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:L(va),animate:function(a,b,c){var d,e=$(),f=this,g=A(r,this,function(b,d){var e,f=s(b),g={};return q(e=f.get(a),function(c,e){var h=a[c];g[c]=n(h)?h(e,d,b):"$$slide"==c?Va(f,h):h}),f.dial(e,g,c)}),h=b||500;return e.stop0=function(){return e(!1),d()},d=s.loop(function(a){T(g,[a/h]),a>=h&&(d(),e(!0,[f]))}),e},dial:function(a,b,c){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(2*b+1,2):(a=a.charAt(b+1))+a,16):ga(a.split(",")[b])}var e=this,f=c||0,g=n(f)?f:function(a,b,c){return c*(b-a)*(f+(1-f)*c*(3-2*c))+a};return function(c){q(a,function(a,f){var h=b[a],i=0;e.set(a,0>=c?f:c>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+")":l(h,/-?[\d.]+/,D(g(ga(f),ga(h),c))))})}},toggle:function(a,b,c,d){var e,f,g=this,i=!1;return b?(g.set(a),function(j){j!==i&&(f=(i=!0===j||!1===j?j:!i)?b:a,c?(e=g.animate(f,e?e.stop():c,d)).then(function(){e=h}):g.set(f))}):g.toggle(l(a,/\b(?=\w)/g,"-"),l(a,/\b(?=\w)/g,"+"))},values:function(a){var b=a||{};return this.each(function(a){var c=a.name||a.id,d=D(a.value);if(/form/i.test(a.tagName))for(c=0;c<a.elements.length;c++)s(a.elements[c]).values(b);else!c||/ox|io/i.test(a.type)&&!a.checked||(b[c]=b[c]==h?d:A(r,[b[c],d],u))}),b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d,e){return n(b)?this.on(h,a,b,c,e):v(d)?this.on(a,b,c,h,d):this.each(function(f,g){r(a?H(a,f):f,function(a){r(D(b).split(/\s/),function(b){var f=l(b,/[?|]/),h=!!e&&("blur"==f||"focus"==f),i=eb(c,a,d,g,l(b,/[^?|]/g),e&&ia(e,a));b={element:a,c:i,b:f,capture:h},(c.M=c.M||[]).push(b),C?(a.attachEvent("on"+b.b+(h?"in":""),i),f=ha(a),(I[f]=I[f]||[]).push(b)):(a.addEventListener(f,i,h),(a.M=a.M||[]).push(b))})})})},onOver:function(a,b){var c=this,d=[];return n(b)?this.on(a,"|mouseover |mouseout",function(a,e){var f=a.relatedTarget||a.toElement,g="mouseout"!=a.type;d[e]===g||!g&&f&&(f==c[e]||s(f).up(c[e]).length)||(d[e]=g,b.call(this,g,a))}):this.onOver(h,a)},onFocus:function(a,b,c){return n(b)?this.on(a,"|blur",b,[!1],c).on(a,"|focus",b,[!0],c):this.onFocus(h,a,b)},onChange:function(a,b,c){return n(b)?this.on(a,C?"|propertychange |change |keyup |clicked":"|input |change |clicked",function(a,c){var d,e=this[0];d=C&&/select/i.test(e.tagName)?e.options[e.selectedIndex].text:/ox|io/i.test(e.type)?e.checked:e.value,d!=e.NiaP&&b.call(this,e.NiaP=d,c)},c):this.onChange(h,a,b)},onClick:function(a,b,c,d){return n(b)?this.on(a,"click",b,c,d):this.onClick(h,a,b,c)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)r(C?I[e.Nia]:e.M,function(e){e.b==a&&(d=d||!e.c(b,c))}),e=e.parentNode})},per:function(a,b){if(n(a))for(var c=this.length,d=0;c>d;d++)a.call(this,new x(h,this[d]),d);else s(a,this).per(b);return this},ht:function(a,b){var c=2<arguments.length?ca(Q(arguments,1)):b;return this.set("innerHTML",n(a)?a(c):/{{/.test(a)?sa(a,c):/^#\S+$/.test(a)?sa(Xa(a).text,c):a)}},x.prototype),Y({request:function(a,b,c,d){d=d||{};var e,f=0,g=$(),i=c&&c.constructor==d.constructor;try{g.xhr=e=y.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),g.stop0=function(){e.abort()},i&&(c=A(q,c,function(a,b){return A(r,b,function(b){return encodeURIComponent(a)+(b!=h?"="+encodeURIComponent(b):"")})}).join("&")),c==h||/post/i.test(a)||(b+="?"+c,c=h),e.open(a,b,!0,d.user,d.pass),i&&/post/i.test(a)&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),q(d.headers,function(a,b){e.setRequestHeader(a,b)}),q(d.xhr,function(a,b){e[a]=b}),e.onreadystatechange=function(){4!=e.readyState||f++||(200==e.status?g(!0,[e.responseText,e]):g(!1,[e.status,e.responseText,e]))},e.send(c)}catch(j){f||g(!1,[0,h,D(j)])}return g},toJSON:function a(b){return b==h?""+b:v(b=b.valueOf())?'"'+l(b,/[\\\"\x00-\x1f\u2028\u2029]/g,qa)+'"':t(b)?"["+A(r,b,a).join()+"]":E(b)?"{"+A(q,b,function(b,c){return a(b)+":"+a(c)}).join()+"}":D(b)},parseJSON:y.JSON?y.JSON.parse:function(b){return b=l(b,/[\x00\xad\u0600-\uffff]/g,qa),/^[[\],:{}\s]*$/.test(l(l(b,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g))?eval("("+b+")"):void 0},ready:Wa,loop:function(a){function b(a){q(ja,function(b,c){c(a)}),ya&&g(b)}function c(){return ja[f]&&(delete ja[f],ya--),e}var d,e=0,f=Ua++,g=y.requestAnimationFrame||function(a){setTimeout(function(){a(+new Date)},33)};return ja[f]=function(b){d=d||b,a(e=b-d,c)},ya++||g(b),c},off:function(a){r(a.M,function(a){C?(a.element.detachEvent("on"+a.b+(a.capture?"in":""),a.c),Ta(I[a.element.Nia],a)):(a.element.removeEventListener(a.b,a.c,a.capture),Ta(a.element.M,a))}),a.M=h},setCookie:function(a,b,c,d){document.cookie=a+"="+(d?b:escape(b))+(c?"; expires="+(E(c)?c:new Date(+new Date+864e5*c)).toUTCString():"")},getCookie:function(a,b){var c,d=(c=RegExp("(^|;)\\s*"+a+"=([^;]*)").exec(document.cookie))&&c[2];return b?d:d&&unescape(d)},wait:function(a,b){var c=$(),d=setTimeout(function(){c(!0,b)},a);return c.stop0=function(){c(!1),clearTimeout(d)},c}},s),Y({filter:G(K),collect:G(la),map:G(z),sub:G(Q),reverse:X,each:w,toObject:na,find:S,findLast:Ga,contains:La,startsWith:ma,endsWith:Ea,equals:P,call:G(T),array:Ha,unite:Ia,merge:ca,uniq:G(Ja),intersection:G(Ka),keys:G(Da),values:G(function(a,b){var c=[];return b?w(b,function(b){c.push(a[b])}):q(a,function(a,b){c.push(b)}),c}),copyObj:Y,extend:function(a){return ca(Q(arguments,1),a)},range:function(a,b){for(var c=[],d=b==h?a:b,e=b!=h?a:0;d>e;e++)c.push(e);return new x(c)},bind:Ma,partial:function(a,b,c){return Ma(a,this,b,c)},eachObj:q,mapObj:function(a,b,c){var d={};return q(a,function(e,f){d[e]=b.call(c||a,e,f)}),d},filterObj:function(a,b,c){var d={};return q(a,function(e,f){b.call(c||a,e,f)&&(d[e]=f)}),d},isList:t,isFunction:n,isObject:E,isNumber:W,isBool:Aa,isDate:ba,isValue:ka,isString:v,toString:D,dateClone:Oa,dateAdd:ea,dateDiff:Pa,dateMidnight:function(a){return a=a||new Date,new Date(a.getFullYear(),a.getMonth(),a.getDate())},pad:da,formatValue:function(a,b){var c,d,e=l(a,/^\?/);return ba(b)?((d=/^\[(([+-]\d\d)(\d\d))\]\s*(.*)/.exec(e))&&(c=d[1],b=ea(b,"minutes",oa(d,2,b)),e=d[4]),l(e,/(\w)(\1*)(?:\[([^\]]+)\])?/g,function(a,d,e,f){return(d=jb[d])&&(a=b["get"+d[0]](),f=f&&f.split(","),a=t(d[1])?(f||d[1])[a]:d[1](a,f,c),a==h||v(a)||(a=da(e.length+1,a))),a})):S(e.split(/\s*\|\s*/),function(a){var c,d;if(c=/^([<>]?)(=?)([^:]*?)\s*:\s*(.*)$/.exec(a)){if(a=b,d=+c[3],(isNaN(d)||!W(a))&&(a=a==h?"null":D(a),d=c[3]),c[1]){if(!c[2]&&a==d||"<"==c[1]&&a>d||">"==c[1]&&d>a)return h}else if(a!=d)return h;c=c[4]}else c=a;return W(b)?c.replace(/[0#](.*[0#])?/,function(a){var c,d=/^([^.]+)(\.)([^.]+)$/.exec(a)||/^([^,]+)(,)([^,]+)$/.exec(a),e=0>b?"-":"",f=/(\d+)(\.(\d+))?/.exec((e?-b:b).toFixed(d?d[3].length:0));return a=d?d[1]:a,c=d?Na(d[3],l(f[3],/0+$/),!0):"",(e?"-":"")+("#"==a?f[1]:Na(a,f[1]))+(c.length?d[2]:"")+c}):c})},parseDate:function(a,b){var c,d,e,f,g,i,j,k,m,n={},o=1,p=l(a,/^\?/);if(p!=a&&!J(b))return h;if((e=/^\[([+-]\d\d)(\d\d)\]\s*(.*)/.exec(p))&&(c=e,p=e[3]),!(e=RegExp(p.replace(/(.)(\1*)(?:\[([^\]]*)\])?/g,function(a,b,c,e){return/[dmhkyhs]/i.test(b)?(n[o++]=b,a=c.length+1,"(\\d"+(2>a?"+":"{1,"+a+"}")+")"):"z"==b?(d=o,o+=2,"([+-]\\d\\d)(\\d\\d)"):/[Nna]/.test(b)?(n[o++]=[b,e&&e.split(",")],"([a-zA-Z\\u0080-\\u1fff]+)"):/w/i.test(b)?"[a-zA-Z\\u0080-\\u1fff]+":/\s/.test(b)?"\\s+":Ca(a)})).exec(b)))return aa;for(p=[0,0,0,0,0,0,0],f=1;o>f;f++)if(g=e[f],i=n[f],t(i)){if(j=i[0],k=bb[j],m=k[0],i=S(i[1]||k[1],function(a,b){return ma(g.toLowerCase(),a.toLowerCase())?b:void 0}),i==h)return aa;p[m]="a"==j?p[m]+12*i:i}else i&&(j=parseFloat(g),k=bb[i],t(k)?p[k[0]]+=j-k[1]:p[k]+=j);return p=new Date(p[0],p[1],p[2],p[3],p[4],p[5],p[6]),ea(p,"minutes",-oa(c,1,p)-oa(e,d,p))},parseNumber:function(a,b){var c=l(a,/^\?/);return c==a||J(b)?(c=/(^|[^0#.,])(,|[0#.]*,[0#]+|[0#]+\.[0#]+\.[0#.,]*)($|[^0#.,])/.test(c)?",":".",c=parseFloat(l(l(l(b,","==c?/\./g:/,/g),c,"."),/^[^\d-]*(-?\d)/,"$1")),isNaN(c)?aa:c):h},trim:J,isEmpty:function(a,b){return a==h||!a.length||b&&/^\s*$/.test(a)},escapeRegExp:Ca,escapeHtml:Sa,format:function(a,b,c){return ra(a,c)(b)},template:ra,formatHtml:sa,promise:$},O),C?(cb=function(){T(V),V=h},document.attachEvent("onreadystatechange",function(){/^[ic]/.test(document.readyState)&&cb()}),y.attachEvent("onload",cb)):document.addEventListener("DOMContentLoaded",function(){T(V),V=h},!1),y.e=function(){r(I,ua)},{HTML:function(){var a=Ya("div");return O(U(a.ht,a,arguments)[0].childNodes)},_:O,$:s,$$:Xa,EE:Ya,M:x,getter:xa,setter:wa}});

	if(typeof REPORTSPEED === "undefined") {
		REPORTSPEED = {};
	}
	// don't allow this code to be included twice
	if(REPORTSPEED.version) {
		return;
	}



	REPORTSPEED.version = "0.1";

	// impl is a private object not reachable from outside the REPORTSPEED object
	// users can set properties by passing in to the init() method



/**
 *`impl` Property contains all private code elements. Like calling the 
 * underlying speed testing class.
 *
 * @private
 * @property impl
 */
	impl = {
		// properties
		apiKey: "",
		isMobile: false,
		baseAddr: "http://www.dslreports.com",
		server: "",
		endpoints: {
			ping: "ping.php"
		},
		domelementtypes:["simplemeter","speedmeter"],
		testtype: "",
		platforms : ["GPRS", "3G", "4G", "WiFi", "Wireless", "Satellite", "DSL", "Cable", "Fiber", "", "Unsure"],
		events: {
			"DR_readyforTest": [],
			"DR_startingTest": [],
			"DR_startingPingTest": [],
			"DR_startingSpeedTestDownload": [],
			"DR_startingSpeedTestUpload": [],
			"DR_endedPingTest": [],
			"DR_endedSpeedTestDownload": [],
			"DR_endedSpeedTestUpload": [],
			"DR_finishedTest": [],
			"DR_restartTest" : [],
			"DR_librariesLoaded" : [],
			"DR_widgetLoaded" : [],
			"DR_updateMeasurements" : [],
			"DR_templatescanned": [],
			"DR_DOMready": [],
		},
		dimensions:{

		},
		customFunctions:{},
		domElements:[],
		states: {
			INITIALIZING: 0,
			WIDGET_LOADED: 1,
			PING_RUNNING: 2,
			DOWNLOADSPEEDTEST_RUNNING: 3,
			UPLOADSPEEDTEST_RUNNING : 4,
			COMPLETE: 5,
			TERMINATED: 6,
			RESTARTING: 7,
		},
		desktop_buttons:[{title:"DSL"}, {title:"Cable"}],
		mobile_buttons:[{title:"3G"}, {title:"4G"}],
		em:{
			UPLOAD: 1,
			DOWNLOAD: 0
		},
		promises: [],
		xhrs: {
			download: {
				abort:null,
			},
			upload:{
				abort:null,
			}
		},
		prefs: {
			inc: 4, //Higher values make the test faster and less accurate
		},
		vars: {},
		more_clicked_state : true,
		data: [
			{
				curIndex: 0,
				points:[],
				lastBytesLoaded: 0,
			    lastTimestamp: null
			},
			{
				curIndex: 0,
				points:[],
				lastBytesLoaded: 0,
			    lastTimestamp: null
			}]
		,prevData: [],
		utils: {

			isbelowIE10: function(){
				var isIE10 = false;
				if (navigator.userAgent.indexOf("MSIE 10") > -1) {
				        // this is internet explorer 10
				        return false;
				}

				var isIE = (navigator.userAgent.indexOf("MSIE") != -1);

				if(isIE){
				    if(!isIE10){
				    	return true;
				    }
				};
			},

			noSupport: function(){
				// Still being built
				var UA = navigator.userAgent;
				var isAndroid = UA.indexOf("android") > -1;
				isAndroid = true;
				if(isAndroid) {
					var patt = new RegExp("android (\d+(?:\.\d+)+);");
					var androidVER = patt.exec(UA);
					// var androidVER = UA.match('/Android [\d+\.]{3,5}/')[0].replace('Android ','');
					// alert(androidVER);
					// return false;
				}
				return false;
			},


			isAndroid:function(){
				var ua = navigator.userAgent.toLowerCase();
				var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
				if(isAndroid) {
				  // Do something!
				  // Redirect to Android-site?
				  return true;
				}
				return false;
			}
		},
		tests: {
			// Create tests here incase you're not using any
			// outside library
			generalDOWNLOAD: function(props){
				var req = new XMLHttpRequest();
				// console.log(req);
				// console.log('onprogress' in xhr);
				req.addEventListener("progress", function(event) {
					// impl.fireEvent("DR_updateMeasurements", event);
				    if (event.lengthComputable) {
				    	event.dtype = impl.em.DOWNLOAD;
				        impl.fireEvent("DR_updateMeasurements", event);
				    } else {
				        // Unable to compute progress information since the total size is unknown
				    }
				}, false);
				req.open("GET", impl.vars.file.url);
				req.send();
				impl.xhrs.download.abort = req;
				impl.xhrs.download.abortcall = "impl.xhrs.download.abort.abort()";

			},
			generalUPLOAD: function(props){
				var xdata = REPORTSPEED.utils.sampleString(),req = new XMLHttpRequest();
				req.open("POST", 'https://drspeedwidget.herokuapp.com/upload.php', false);
				req.upload.addEventListener('progress', 
					function(event){ 
						// console.log('progress');
						event.dtype = impl.em.UPLOAD; 
						impl.fireEvent("DR_updateMeasurements", event);

					}, 
				false);
				req.send(xdata);
				impl.xhrs.upload.abort = req;
				impl.xhrs.upload.abortcall = "impl.xhrs.upload.abort.abort()";
			},
			pluginbasedDOWNLOAD: function(props){
				var req;
				// alert(impl.vars.file.url);
				req=httpinvokelocal(impl.vars.file.url, 'GET', {
					headers: {
                        // 'Content-Type': 'text/plain',
                        // 'Accept': 'text/plain'
                    },
                    // system: true,
				    downloading: function(current, total) {
				    	var event =  {};
				    	event.loaded=current;
				    	event.timeStamp = Date.now();
				    	event.dtype = impl.em.DOWNLOAD;
	           			impl.fireEvent("DR_updateMeasurements", event);
	            	}
				});
				impl.xhrs.download.abort = req;
				impl.xhrs.download.abortcall = "impl.xhrs.download.abort()";

			},
			pluginbasedUPLOAD: function(props){
				var xdata = REPORTSPEED.utils.sampleString(),req;
		
				req = httpinvokelocal('https://drspeedwidget.herokuapp.com/upload.php', 'POST', {
				    input:xdata,
				    headers: {
	                        'Content-Type': 'text/plain',
	                        'Accept': 'text/plain'
	                    },
				    uploading: function(current, total) {
				    	// REPORTSPEED.displayMessage(current);
				    	var event =  {};
				    	event.loaded=current;
				    	event.timeStamp = Date.now();
				    	// event.timeStamp = 1;
				    	event.dtype = impl.em.UPLOAD;
				    	// // console.log("Uploading");
				    	// // console.log(current + ' out of ' + total + ' bytes');
	           			impl.fireEvent("DR_updateMeasurements", event);
	            	}
				});
				impl.xhrs.upload.abort = req;
				impl.xhrs.upload.abortcall = "impl.xhrs.upload.abort()";
			}
		},



/**
* Fires an Event.  
*
* @method fireEvent
* @param {String} e_name Event Name
* @param {Object} data Data to send
* @return {Boolean} Returns true on success
* @example
* 	impl.fireEvent('DR_readyforTest');
* 	impl.fireEvent('DR_finishedTest', {})
*/


		fireEvent: function(e_name, data) {
			var i, h, e;
			if(!this.events.hasOwnProperty(e_name)) {
				return false;
			}

			e = this.events[e_name];

			for(i=0; i<e.length; i++) {
				h = e[i];
				h[0].call(h[2], data, h[1]);
			}

			return true;
		},

		

		addListener: function(el, sType, fn) {
			if(el.addEventListener) {
				el.addEventListener(sType, fn, false);
			}
			else if(el.attachEvent) {
				el.attachEvent("on" + sType, fn);
			}
		},

		checkBrowsersupport: function(){
			return !(impl.utils.isbelowIE10()||impl.utils.noSupport());
		},


/**
* Authenticate the widget with the API Service and reject or accept further loading 
* of the widget if anything fails. It is invoked by the __reportr.init()__ function
* at the first load of the widget.
*
* @method authenticateAPI
* @return {Promise} Returns a Promise which is either accepted or rejected
* @example
* 	impl.authenticateAPI().then(function(){
* 		//success callback here
*   	},function(){
*		//error callback here 
*   	});
* 	
*/

		authenticateAPI: function(resolve, reject){
			// if server rejects the API
			// call : setTimeout(reject, 0);
			if (impl.apiKey == "7E9124AK"){
				setTimeout(resolve, 200);
			}
			else{
				setTimeout(reject, 200);
			}
		},

/**
* Loads External Libraries .  Add all your external script paths to this file for Async loading.
*
* @method loadExternallibs
*
* @example 
*   	//Example Usage inside this function
* 	scriptLoader.script("http://code.highcharts.com/adapters/standalone-framework.js").wait(function(){
* 	//run callback when script is loaded
*  	});
* @return {Nothing}
*/
		loadExternallibs: function(event){
			var dslurl = "//www.dslreports.com/assets/st/1.4/js/chart6.js?ver=1.1";
			// dslurl = "http://www.dslreports.com/front/.html5_speedtest_parallel.js";
			var testurl = "js/virtual_test.js";
			// dslurl = testurl;
			REPORTSPEED.info("Loading external Libraries");
			if (!impl.isMobile){
				REPORTSPEED.info("Started", "impl.loadExternallibs");
				impl.fireEvent("DR_widgetLoaded");
					scriptLoader.script("//www.dslreports.com/assets/st/1.4/js/hc1.js").wait(function(){
						 scriptLoader.script(dslurl).wait(function(){
							impl.fireEvent("DR_librariesLoaded");
							impl.begin_test(event);
							console.log(mini_test);
							REPORTSPEED.info("All Libraries loaded", "impl.loadExternallibs");
						 })
					});
			}else{
				REPORTSPEED.info("All Libraries loaded", "impl.loadExternallibs");
				// www.dslreports.com/front/.html5_speedtest_parallel.js
				scriptLoader.script(dslurl).wait(function(){
					impl.fireEvent("DR_librariesLoaded");
					impl.begin_test(event);
					REPORTSPEED.info("All Libraries loaded", "impl.loadExternallibs");
				})
			}
			// Bundling IE9 Support
			
		},


		pre_begin_test:function(event,index,xx){
			REPORTSPEED.info( "pre_begin_test: Starting test...");
			REPORTSPEED.displayMessage("Loading...");
			if (!impl.preloadedlibs){
				impl.preloadedlibs = true;
				impl.loadExternallibs(event);
			}else{

				impl.begin_test(event);
			}
			
			// impl.begin_test(event,index,xx);
		},

/**
* Start Speed Testing . This is the first function that gets executed when a user clicks the "Start" button.
* Add the underlying libraries start speed test code inside this function.
*
* @method begin_test
* @return 
*/
		begin_test: function(event,index,xx){
			REPORTSPEED.info( "begin_test: Starting test...");
			reportr.progressDone=true;
			reportr.prevVal = 0;
			reportr.current_status = "";
			impl.showDomelements();
			REPORTSPEED.miniQuery(event.target);
			var testtype = REPORTSPEED.miniQuery(event.target).get("%testtype");
			impl.testtype = testtype;
			REPORTSPEED.miniQuery(".DRWidget-testtype").set('innerHTML', "Testing "+testtype);
			REPORTSPEED.miniQuery('.DRWidget-cancel-btn-container').show();
			REPORTSPEED.miniQuery(".DRWidget-speedmeter-container").set('$zIndex', 0);
			REPORTSPEED.miniQuery(".DRWidget-starttestBox").hide();
			// REPORTSPEED.miniQuery(".DRWidget-speedmeter-container").set('$top', "-200px");
			
			var data_returned, dummy_data, promise;
			dummy_data = {complete: true};
			data_returned = dummy_data;
			impl.fireEvent("DR_startingTest");
			REPORTSPEED.displayMessage("Ready.");
			REPORTSPEED.t_state=impl.states.INITIALIZING;
			impl.fireEvent("DR_readyforTest")
			var args = {};
			args.op = "start";
			var connType = null;
			connType = REPORTSPEED.utils.find_in_array(impl.platforms, impl.testtype);
			args.params = {
				mini_test: true,
				apiKey: impl.apiKey,
				bufferbloat : impl.widgetOptions.bufferbloat,
				conntype: connType,
				onprogress: function(obj) {
					if (REPORTSPEED.t_state==impl.states.FINISHED){
						return;
					}
					REPORTSPEED.updateProgressBar({val: obj.progress});
					var msg=null;
					if (obj.doing) {
						 msg = obj.doing;
						if (msg == 'downloading') {
							REPORTSPEED.t_state=impl.states.DOWNLOADSPEEDTEST_RUNNING;
							msg = "Testing download";
							reportr.current_status = "Downloading...";
						}
						if (msg == 'uploading') {
							msg = "Testing upload";
							REPORTSPEED.t_state=impl.states.UPLOADSPEEDTEST_RUNNING;
							reportr.current_status = "Uploading...";
						}
						if (msg == 'pinging') {
							REPORTSPEED.t_state=impl.states.PING_RUNNING;
							msg = "Locating nearest servers";
							reportr.current_status = "Pinging...";
						}
						if (msg == 'pausing') {
							msg = "Pausing";
							reportr.current_status = msg;
						}
						if (msg == 'aborting') {
							msg = "Pausing";
							reportr.current_status = msg;
						}
						if (msg == 'ending') {
							msg = "Cleaning up";
							reportr.current_status = msg;
						}
						REPORTSPEED.displayMessage(msg);
						
					}
					
				},
				onstatus: function(obj) {
					//if (mode && mode != 'downloading' && mode != 'uploading') {
					//	value = 0.1;
					//}
					// if (value >= 0.1) {
						REPORTSPEED.info(obj);
						impl.update_measurements({data:obj.download});
						// var point = dslr.chart.series[0].points[0];
						// point.update(Math.round(value*10.0)/10.0);
					// }


				},
				onerror: function(obj) {
					// Issue an error message
					REPORTSPEED.displayError("Error: "+obj.msg);
					impl.cancelled_test();
				},
				oncomplete: function(obj) {
					REPORTSPEED.updateProgressBar({val: 100});
					obj.up = obj.upload;
					obj.down = obj.download;
					console.log(obj.down == "NaN");
					if (obj.up == "NaN" && obj.down == "NaN"){
						REPORTSPEED.info("TEST CANCELLED");
						impl.fireEvent("DR_cancelledSpeedTest");
						impl.cancelled_test();
					}else{
						REPORTSPEED.info(obj);
						impl.fireEvent("DR_endedSpeedTestUpload", obj);
					}

				}
			};

			REPORTSPEED.info(args);
			widget_start(args);
			REPORTSPEED.miniQuery("#DRWidget-speedindicator-url").hide();
	        
			// setTimeout(function(){promise.stop();},400);
		},

/**
* Start Ping Test. This is the second function that gets executed 
* after the __begin_test()__ function and clears sets up the display to begin
* speed testing; sets up the speedmeter, progress bar and the cancel buttons.
* @method begin_pingTest
* @param {Object} props Properties to start Ping testing with
*/

		begin_pingTest: function(props){
			
			impl.showDomelements();
			//If Desktop
			if (REPORTSPEED.miniQuery("#DRWidget-speedmeter").length> 0 || REPORTSPEED.miniQuery("#DRWidget-areachart").length> 0) {
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-download").hide();
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-upload").hide();
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-url").hide();
			}
            //End If desktop
			REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('innerHTML', "Cancel");
			REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('$', "-green +red");
			REPORTSPEED.miniQuery("#DRWidget-results").hide();
			// REPORTSPEED.info("Performing Ping test", "begin_pingTest");
			// REPORTSPEED.displayMessage("Performing Ping test...");
			REPORTSPEED.t_state=impl.states.PING_RUNNING;
			REPORTSPEED.miniQuery("#DRWidgetstartbtncontainer").hide();
			REPORTSPEED.miniQuery("#DRWidget-speedmeter").show();
			// REPORTSPEED.miniQuery("#DRWidget-speedmeter").set('$z-index', "0");
			REPORTSPEED.miniQuery(".DRWidgethidden").animate({$$fade: 1}, 200);
			
			
		},



		cancelled_test: function(props){
			REPORTSPEED.info("TEST CANCELLED DONE");
			REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('innerHTML', "Again");
			REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('$', "+green -red");
			REPORTSPEED.miniQuery("#DRWidget-speedindicator-download").hide();
			REPORTSPEED.miniQuery("#DRWidget-speedindicator-upload").hide();
			REPORTSPEED.miniQuery("#DRWidget-speedindicator-url").hide();
			REPORTSPEED.miniQuery("#DRWidget-results").hide();
			// REPORTSPEED.info("Performing Ping test", "begin_pingTest");
			REPORTSPEED.displayMessage("Test Cancelled");
			REPORTSPEED.t_state=impl.states.FINISHED;
			// REPORTSPEED.miniQuery("#DRWidgetstartbtncontainer").remove();
			// REPORTSPEED.miniQuery("#DRWidget-speedmeter").show();
			// REPORTSPEED.miniQuery("#DRWidget-speedmeter").set('$z-index', "0");
			REPORTSPEED.miniQuery(".DRWidgethidden").animate({$$fade: 1}, 200);
		},
/**
 * An optional callback function.
 *
 * @deprecated Not being currently used anywhere because the underlying speed library
 * doesn't provide a callback for it.
 * @method begin_speedTestDownload
 * @params {Object} props data
 * @optional
 */
		begin_speedTestDownload: function(props){

			REPORTSPEED.t_state=impl.states.DOWNLOADSPEEDTEST_RUNNING;
		},

/**
 * A function used to shutdown any running download tests after a cancel speed test call.
 *
 * @deprecated Not being currently used anywhere because the underlying speed library
 * doesn't implement the cancel function.
 * @method abort_downloadtest
 * @params {Object} props data
 * @optional
 */
		abort_downloadtest:function(props){
			eval(impl.xhrs.download.abortcall);
		},

/**
 * An optional callback function.
 *
 * @deprecated Not being currently used anywhere because the underlying speed library
 * doesn't provide a callback for it.
 * @method begin_speedTestUpload
 * @params {Object} props data
 * @optional
 */


		begin_speedTestUpload: function(data){
			
			REPORTSPEED.t_state=impl.states.UPLOADSPEEDTEST_RUNNING;
		},


/**
 * A function used to shutdown any running upload tests after a cancel speed test call.
 *
 * @deprecated Not being currently used anywhere because the underlying speed library
 * doesn't implement the cancel function.
 * @method abort_uploadtest
 * @params {Object} props data
 * @optional
 */

		abort_uploadtest:function(props){
			eval(impl.xhrs.upload.abortcall);
		},


/**
* Update speed measurements in the widget. This function gets executed on every  
* __onstatus()__ callback function where the __msg__ param is either __uploading__  
* or __downloading__ and issues a call to update widget displays with the latest
* speed data.
*
* @method update_measurements
* @param {Object} data Speed related data
*/
		update_measurements: function(data){
        	
 			// Convert to Mbs
			// speed=speed/1024;
			speed=Math.round(data.data*10.0)/10.0;

			impl.update_displays({speed:speed});
	
		   
		    
		},


/**
* Update displays in the widget with the latest data. This function gets executed after
* every __update_measurements(data)__ call.
*
*
* @method update_displays
* @param {Object} data Speed related data Object
* @example
*	impl.update_displays({speed: 10.41});
*/

		update_displays: function(data){
			var currentStatus= null, prevStatus=null;
			// var prevStatus, prevData = null;
			if (impl.domElements["speedmeter"].length > 0){
				// Speed Meters were found on this page
				if (data.speed == 0 )
					data.speed=0.1;

			}
			else{
				//Mobile Test
				if (data.speed == 0 )
					return;
			}
			var activeDomElement = REPORTSPEED.utils.getActiveElement();
			// if (REPORTSPEED.miniQuery("#DRWidget-speedmeter").length> 0 || REPORTSPEED.miniQuery("#DRWidget-areachart").length> 0) {
			// 	if (data.speed == 0 )
			// 		data.speed=0.1;
			// }else{
			// 	//Mobile Test
			// 	if (data.speed == 0 )
			// 		return;
			// }

			if (REPORTSPEED.t_state==impl.states.UPLOADSPEEDTEST_RUNNING){
				currentStatus = "Upload Speed";
			}
			if (REPORTSPEED.t_state==impl.states.DOWNLOADSPEEDTEST_RUNNING){
				currentStatus = "Download Speed";
			}
			
			// This function will be updating all the gauges in the widget
			// everytime it receives a call
			// if (impl.domElements[activeDomElement].length > 0){
				for (var i = impl.domElements[activeDomElement].length - 1; i >= 0; i--) {
					var meter = impl.domElements[activeDomElement][i];
					if (activeDomElement == "speedmeter"){
						impl.update_displays_speedmeter(currentStatus,meter,data);
					}
					if (activeDomElement == "simplemeter"){
						impl.update_displays_simplemeter(currentStatus,meter,data);
					}
					// REPORTSPEED.debug(meter.supportsstatus);
					
					
				};
				
			// }
			// if (REPORTSPEED.miniQuery('#DRWidget-areachart').length > 0){
			// 	var series = REPORTSPEED.areadownload.series[0];
			// 	var x = (new Date()).getTime(); // current time
   //           	var y = data.speed;
   //              series.addPoint([x, y], true, true);
			// }
			// else{
			// 	// REPORTSPEED.miniQuery('#DRWidget-speedindicator').set('$fontSize', "30px");
			// 	// REPORTSPEED.miniQuery('#DRWidget-speedindicator').set('$color', "black");
			// 	// REPORTSPEED.miniQuery('#DRWidget-speedindicator').set('$', "DRWidget-speedindicator");
			// 	if (currentStatus == "Download Speed")
			// 		REPORTSPEED.miniQuery('#DRWidget-speedindicator-download').set('innerHTML', '<span class="title">'+data.speed+' down'+'</span><br>'+'megabit/s');
			// 	if (currentStatus == "Upload Speed")
			// 		REPORTSPEED.miniQuery('#DRWidget-speedindicator-upload').set('innerHTML', '<span class="title">'+data.speed+' up'+'</span><br>'+'megabit/s');
			// }
			if (REPORTSPEED.t_state!=impl.states.COMPLETE || REPORTSPEED.t_state!=impl.states.TERMINATED){
				REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('innerHTML', "Cancel");
				REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('$', "-green +red");
			}

		},

		update_displays_simplemeter:function(currentStatus, meter,data){
			var metertype = REPORTSPEED.miniQuery(meter.element).get("%type");
			var speedLabel = 'megabit/s';
			var downLabel = ' down';
			var upLabel = ' up';
			if (data.speed == -1){
				data.speed = '-';
				speedLabel = '';
				downLabel = '';
				upLabel = '';
			}
			if (currentStatus == "Download Speed"){
				if (metertype == "download"){
					REPORTSPEED.miniQuery(meter.element).set('innerHTML', '<span class="title">'+data.speed+downLabel+'</span><br>'+speedLabel);
				}
			}
			if (currentStatus == "Upload Speed"){
				if (metertype == "upload"){
					REPORTSPEED.miniQuery(meter.element).set('innerHTML', '<span class="title">'+data.speed+upLabel+'</span><br>'+speedLabel);
				}
			}

		},

		update_displays_speedmeter:function(currentStatus, meter,data){
			var metertype = REPORTSPEED.miniQuery(meter.element).get("%type");
				if (metertype == "upload"){
					if (currentStatus == "Upload Speed"){
						if (data.speed>0.1){
							var chart = meter.chart;
							var point = chart.series[0].points[0];
							point.update(data.speed,true,false);
						}
						if (data.speed){
							REPORTSPEED.debug(data.speed);
						}
					}
				}else if (metertype == "download"){
					if (currentStatus == "Download Speed"){
						if (data.speed>0.1){
							var chart = meter.chart;
							var point = chart.series[0].points[0];
							point.update(data.speed,true, false);
						}
					}
				}
				if (metertype == "main"){
					var chart = meter.chart;
					var point = chart.series[0].points[0];
					point.update(data.speed,true,true);

				}			
		},



/**
* This function gets executed when the test is finished . It is ued to adjust the 
* UI accordingly and display results once the test gets completed.
*
*
* @method finished_test
* @param {Object} res Results data Object
* @example
*	impl.update_displays({up: 10.41, down: 3.31, url: '/results/290313'});
*/
		finished_test : function(res){
			// impl.abort_uploadtest();
			if (REPORTSPEED.t_state==impl.states.FINISHED){
				return;
			}

			if (isNaN(res.up)){
				res.up="-";
			}
			if (isNaN(res.down)){
				res.down="-";
			}
			REPORTSPEED.displayMessage("Test Complete!");
			REPORTSPEED.t_state = impl.states.FINISHED;
			try{
				if (impl.widgetOptions.finishcb){
					DRtest_finished(res);
				}
			}
			catch(E){
				REPORTSPEED.error(E);
			}
			
			// 
			REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('innerHTML', "Again");
			REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('$', "+green -red");
			if (REPORTSPEED.miniQuery("#DRWidget-results-custom").length> 0){
					var toCall = REPORTSPEED.miniQuery("#DRWidget-results-custom").get("%finishedcallback");
					// eval();
					// REPORTSPEED.miniQuery("#DRWidget-results-custom").hide();
					eval ("impl.customFunctions."+toCall+"(res)");
					return;
			}

			var activeDomElement = REPORTSPEED.utils.getActiveElement();
			switch(activeDomElement) {
			    case "speedmeter":
			        impl.finished_test_speedmeter(res);
			        break;
			    case "simplemeter":
			        impl.finished_test_simplemeter(res);
			        break;
			    default:
			    // Nothing here...yet
			}

			

		},

		finished_test_speedmeter:function(res){
			REPORTSPEED.miniQuery(".DRWidget-speedmeter").animate({$$fade: 0}, 500).then(function () {
				var results = "<div class='DRWidget-title'>Test Complete</div><span class='DRWidget-downloadresult'>Download: " + res.down + " Mbps</span><br><span class='DRWidget-uploadresult'>Upload: " + res.up + " Mbps</span><br><br><a class='DRWidget-link' href=''>Click here to view your Speed Report</a>";
				// Load Results from External URL
				// var results = "<div class='DRWidget-title'>Test Complete</div><span class='DRWidget-downloadresult'>Download: "+res.down+" Mbps</span><br><span class='DRWidget-uploadresult'>Upload: "+res.up+" Mbps</span><br><br><a class='DRWidget-link' href='"+REPORTSPEED.impl.baseAddr+"/"+res.url+"'>Click here to view your Speed Report</a>";
				//console.log("Line executed");
				REPORTSPEED.miniQuery("#DRWidget-results").show();
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-download").show();
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-upload").show();
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-grade").show();
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-url").show();

				REPORTSPEED.miniQuery("#DRWidget-speedindicator-url").set(
					"innerHTML", '<span class="title">'+
					'<a href="http://www.dslreports.com'+res.url+'">See Detailed Results</a>'+
					'</span><br>'+'');
				//REPORTSPEED.miniQuery("#DRWidget-results").set("innerHTML", results);
				// REPORTSPEED.miniQuery("#DRWidget-speedindicator-grade").set("innerHTML", '<span class="title">'+res.grades+'</span><br>Connection Grade');
				if (impl.widgetOptions.bufferbloat){
					var str_array = res.grades.split(',');
					var x = str_array[0];
					var y = str_array[1];
					REPORTSPEED.miniQuery("#DRWidget-speedindicator-grade-first").set("innerHTML", '<span class="title">'+x+' '+'</span><br>'+'Bufferbloat');
					REPORTSPEED.miniQuery("#DRWidget-speedindicator-grade-second").set("innerHTML", '<span class="title">'+y+' '+'</span><br>'+'Quality');
				}else{
					REPORTSPEED.miniQuery("#DRWidget-speedindicator-grade").hide();
				}
				
				
			
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-download").set("innerHTML", '<span class="title">'+res.down+' down'+'</span><br>'+'megabit/s');
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-upload").set("innerHTML", '<span class="title">'+res.up+' up'+'</span><br>'+'megabit/s');
				REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('innerHTML', "Again");
				REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('$', "+green -red");
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-url").on("click",function(event){
					window.open(
					  'http://www.dslreports.com'+res.url,
					  '_blank'
					);
				})
				if (REPORTSPEED.miniQuery('#DRWidget-speedmeter').length > 0) {
					REPORTSPEED.miniQuery("#DRWidget-speedmeter").set('$z-index', "-1");

				} else {
					REPORTSPEED.miniQuery("#DRWidget-speedindicator-download").set("innerHTML", res.down);
					REPORTSPEED.miniQuery("#DRWidget-speedindicator-upload").set("innerHTML", res.up);
					//REPORTSPEED.miniQuery("#DRWidget-speedindicator").hide();
				}
				this.remove();

			});
		},

		finished_test_simplemeter:function(res){
			// alert("FINISHED!");

			impl.hideDOMelements();
			REPORTSPEED.miniQuery("#DRWidget-results").show();
			REPORTSPEED.miniQuery("#DRWidget-speedindicator-download").show();
			REPORTSPEED.miniQuery("#DRWidget-speedindicator-upload").show();
			REPORTSPEED.miniQuery("#DRWidget-speedindicator-url").show();
			REPORTSPEED.miniQuery("#DRWidget-speedindicator-download").set("innerHTML", '<span class="title">'+res.down+' down'+'</span><br>'+'megabit/s');
			REPORTSPEED.miniQuery("#DRWidget-speedindicator-upload").set("innerHTML", '<span class="title">'+res.up+' up'+'</span><br>'+'megabit/s');
			REPORTSPEED.miniQuery("#DRWidget-speedindicator-url").set(
						"innerHTML", '<span class="title">'+
						'<a href="http://www.dslreports.com'+res.url+'">See Detailed Results</a>'+
						'</span><br>'+'');
			REPORTSPEED.miniQuery("#DRWidget-speedindicator-url").on("click",function(event){
						window.open(
						  'http://www.dslreports.com'+res.url,
						  '_blank'
						);
					})
			if (impl.widgetOptions.bufferbloat){
					var str_array = res.grades.split(',');
					var x = str_array[0];
					var y = str_array[1];
					REPORTSPEED.miniQuery("#DRWidget-speedindicator-grade-first").set("innerHTML", '<span class="title">'+x+' '+'</span><br>'+'Bufferbloat');
					REPORTSPEED.miniQuery("#DRWidget-speedindicator-grade-second").set("innerHTML", '<span class="title">'+y+' '+'</span><br>'+'Quality');
			}else{
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-grade").hide();
				
			}
			// REPORTSPEED.miniQuery("#DRWidget-speedindicator-url").show();
			// REPORTSPEED.miniQuery("#DRWidget-speedindicator-download").show();
			// REPORTSPEED.miniQuery("#DRWidget-speedindicator-upload").show();
			// REPORTSPEED.miniQuery("#DRWidget-speedindicator-download").set("innerHTML", '<span class="title">'+res.down+' down'+'</span><br>'+'megabit/s');
			// REPORTSPEED.miniQuery("#DRWidget-speedindicator-upload").set("innerHTML", '<span class="title">'+res.up+' up'+'</span><br>'+'megabit/s');
			// REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('innerHTML', "Again");
			// REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('$', "+green -red");
			// REPORTSPEED.miniQuery("#DRWidget-speedindicator-url").set("innerHTML", '<span class="title"><a href="http://www.dslreports.com'+res.url+'">See Detailed Results</a>'+'</span><br>'+'');
		},

		clear_up: function(){
			for (var i = 1; i >= 0; i--) {
				impl.data[i].lastBytesLoaded = null;
			    impl.data[i].lastTimestamp = null;
			    impl.data[i].points=[];
			    impl.data[i].curIndex=0;
			};


		},




		kill_promises:function(){
			// Begin killing all running promises.
			for (var i = impl.promises.length - 1; i >= 0; i--) {
				var promise = impl.promises[i];
				promise.stop();
			};
		},

/**
* Self-explanatory . This gets executed everytime a user clicks the CANCEL button 
* on the widget.
*
* @method cancel_test
* @example
*	impl.cancel_test();
*/
		cancel_test: function(){
			//Abort all running tests 
			if (REPORTSPEED.miniQuery("#DRWidget-cancel-btn").get("innerHTML")=="Again"){
				impl.fireEvent("DR_restartTest");
				return;
			}
			REPORTSPEED.displayMessage("Cancelling...");
		    widget_start( {op: 'stop'} );
		    try{
				eval("impl.cancel_test_"+REPORTSPEED.utils.getActiveElement()+"()");
			}
			catch(error){
				// alert(error);
				REPORTSPEED.info(error);
			}

     		// impl.fireEvent("DR_restartTest");
			if (REPORTSPEED.t_state==impl.states.TERMINATED || REPORTSPEED.t_state==impl.states.FINISHED){
				impl.fireEvent("DR_restartTest");
				// alert("I'm stuck!");
				return;
			}
			impl.kill_promises();
			REPORTSPEED.t_state=impl.states.TERMINATED;
			var point = REPORTSPEED.speedmeter.series[0].points[0];
			point.update(0.1);
			REPORTSPEED.displayMessage("Test Terminated");
			REPORTSPEED.updateProgressBar({val: 0});
			REPORTSPEED.info("Test Terminated");
			REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('innerHTML', "Again");
			REPORTSPEED.miniQuery("#DRWidget-cancel-btn").set('$', "+green -red");
			
		},


		cancel_test_simplemeter:function(){
			// alert("Cancelling test!");
			for (var i = impl.domElements["simplemeter"].length - 1; i >= 0; i--) {
				var current = impl.domElements["simplemeter"][i];
				if (REPORTSPEED.miniQuery(current.element).get("%type")!="status")
					REPORTSPEED.miniQuery(current.element).set("innerHTML","-");
			};
		},

		cancel_test_speedmeter:function(){

		},

		more_clicked:function(){
			REPORTSPEED.miniQuery('.DRWidget-startbtns').set("innerHTML", "");
			
			// alert(impl.more_clicked_state);
			if (impl.more_clicked_state==false){
				for (var i = impl.mobile_buttons.length - 1; i >= 0; i--) {
					var btn = impl.mobile_buttons[i];
					REPORTSPEED.miniQuery('.DRWidget-startbtns').add(
						REPORTSPEED.miniHTML('<button data-testtype="'+btn.title+'" id="DRWidgetInitiate" class="DRWidgetStartbtn DRWidget-center-indiv DRWidget-DSLR-btn DRWidget-DSLR-btn-primary DRWidgetInitiate">'+btn.title+'</button>&nbsp;')
					);
					REPORTSPEED.miniQuery(".DRWidgetInitiate").on("click",impl.pre_begin_test);
				};
				impl.more_clicked_state = true;
			}else{
				for (var i = impl.desktop_buttons.length - 1; i >= 0; i--) {
					var btn = impl.desktop_buttons[i];
					REPORTSPEED.miniQuery('.DRWidget-startbtns').add(
						REPORTSPEED.miniHTML('<button data-testtype="'+btn.title+'" id="DRWidgetInitiate" class="DRWidgetStartbtn DRWidget-center-indiv DRWidget-DSLR-btn DRWidget-DSLR-btn-primary DRWidgetInitiate">'+btn.title+'</button>&nbsp;')
					);
					REPORTSPEED.miniQuery(".DRWidgetInitiate").on("click",impl.pre_begin_test);
				};
				impl.more_clicked_state = false;
			}

		},



/**
* Self-explanatory . This gets executed everytime a user clicks the RESTART button 
* on the widget.
*
* @method restart_test
* @example
*	impl.restart_test();
*/

		restart_test:function(props){
			REPORTSPEED.info("Restarting Test");
			REPORTSPEED.displayMessage("");
			REPORTSPEED.t_state=impl.states.RESTARTING;
			REPORTSPEED.updateProgressBar({val: 0});
			if (REPORTSPEED.miniQuery('#DRWidget-speedmeter').length>0){

			}else{
				//REPORTSPEED.miniQuery("#DRWidget-speedindicator").show();
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-download").set('innerHTML', "-");
				REPORTSPEED.miniQuery("#DRWidget-speedindicator-upload").set('innerHTML', "-");
				REPORTSPEED.info("Zeroing out old values");
				var r = ["Upload Speed", "Download Speed" ];
				var activeDomElement = REPORTSPEED.utils.getActiveElement();
				for (var k = r.length - 1; k >= 0; k--) {
					var s = r[k];
					REPORTSPEED.info("Running for "+ s);
					for (var i = impl.domElements[activeDomElement].length - 1; i >= 0; i--) {
						var meter = impl.domElements[activeDomElement][i];
						var data = {};
						data.speed = -1;
						if (activeDomElement == "speedmeter"){
							impl.update_displays_speedmeter(s,meter,data);
						}
						if (activeDomElement == "simplemeter"){
							impl.update_displays_simplemeter(s,meter,data);
						}
						// REPORTSPEED.debug(meter.supportsstatus);
						
						
					};
				};
				
				// This function will be updating all the gauges in the widget
				// everytime it receives a call
				// if (impl.domElements[activeDomElement].length > 0){

			}
			// alert("Restarting...");
			REPORTSPEED.miniQuery(".DRWidget-starttestBox").show();
			impl.hide_results();
			REPORTSPEED.miniQuery('.DRWidget-cancel-btn-container').hide();
			REPORTSPEED.miniQuery("#DRWidgetstartbtncontainer").show();
			// var link = REPORTSPEED.miniHTML("by <a href='http://www.dslreports.com'>DSL Reports</a>");
			REPORTSPEED.miniQuery(".DRWidget-testtype").set('innerHTML', 'by <a href="http://www.dslreports.com">DSL Reports</a>' );
			// REPORTSPEED.miniQuery("#DRWidgetstartbtncontainer").set("innerHTML", "<h1>Hello World</h1>");
		},


		hide_results:function(){
			REPORTSPEED.info("Hiding Results");
			REPORTSPEED.miniQuery("#DRWidget-results").hide();
			
			impl.hideDOMelements();
			// alert("Hidden Results!");
		},


		scan_template:function(){
			console.log("Scanning template");
			if (!impl.isMobile){
				REPORTSPEED.miniQuery(".DRWidget-simplemeter").remove();
			}else{
				for (var i = 	impl.domelementtypes.length - 1; i >= 0; i--) {
					var curdomelement = impl.domelementtypes[i];
					if (curdomelement!="simplemeter"){
						// alert("Performing Removal!");
						REPORTSPEED.miniQuery(".DRWidget-"+curdomelement).remove();
					}
				}
			}
			// impl.domElements
			var event = {}
			var widgetWidth = (REPORTSPEED.miniQuery("#"+reportr.widgetId).get("clientWidth"));
			for (var i = 	impl.domelementtypes.length - 1; i >= 0; i--) {
				var curdomelement = impl.domelementtypes[i];
				REPORTSPEED.info(curdomelement);
				// REPORTSPEED.info(curdomelement + " under process !");
				impl.domElements[curdomelement] = [];
				// REPORTSPEED.info(speedmeters.length + " Speed meter found on this page");
				var speedmeters = REPORTSPEED.miniQuery(".DRWidget-"+curdomelement);
				REPORTSPEED.info("Speed meters "+ speedmeters.length);
				REPORTSPEED.info("Now on "+ curdomelement + " elements found = "+speedmeters.length);
				for (var j = speedmeters.length - 1; j >= 0; j--) {
					var speedmeter = speedmeters[j];
					impl.domElements[curdomelement].push({element:speedmeter});
					// console.log(speedmeter);
				};
			};


			
			
			impl.fireEvent("DR_templatescanned", event);
		},

		isEmpty: function(obj) {
		    for(var prop in obj) {
		        if(obj.hasOwnProperty(prop))
		            return false;
		    }

		    return true;
		},

		useUserDataObject:function(meter, speedmeterProps){
			// alert("I'm here");
			REPORTSPEED.info(meter);
			var logoText = REPORTSPEED.miniQuery(meter).get("%logotext");
			// alert(logoText);
			if (logoText){
				speedmeterProps.chart.logotext=logoText;
			}
			return speedmeterProps;
		},


		setupTemplate: function(){
			REPORTSPEED.info("Setting up template now");
			var activeDomElement = REPORTSPEED.utils.getActiveElement();
			REPORTSPEED.info("Active element = "+ activeDomElement);
			if (activeDomElement=="speedmeter"){
				impl.setupTemplateSpeedmeter();
			}
			if (activeDomElement=="simplemeter"){
				impl.setupTemplateSimplemeter();
			}

		
		},

		setupTemplateSimplemeter:function(){
			impl.fireEvent("DR_DOMready");
		},


		setupTemplateSpeedmeter:function(){
			var activeDomElement = "speedmeter";
			// impl.hideDOMelements();
			var speedmeterProps = {} , areachartProps={};
			speedmeterProps.chart={};
			var activeDomElements = impl.domElements[activeDomElement];
			speedmeterProps.chart.wdth="200";
			speedmeterProps.chart.hght="200";
			speedmeterProps.chart.sz=170;
			speedmeterProps.chart.labelfontsz = 12;
			fontSize:speedmeterProps.chart.logofontsz ="9px"
			speedmeterProps.chart.labelfont ="Arial";
			speedmeterProps.chart.y = -4;
			speedmeterProps.chart.logotext ="<i>DslReports.com</i>";
			var step = function(i){
					REPORTSPEED.info("Step "+i+ "");
				   if( i < activeDomElements.length ) {
					   	var meter = activeDomElements[i];
						var meter_id = REPORTSPEED.miniQuery(meter.element).get("@id");
						var data_sz = REPORTSPEED.miniQuery(meter.element).get("%size");
						var chartTheme = REPORTSPEED.miniQuery(meter.element).get("%charttheme");
						var supportsStatus = REPORTSPEED.miniQuery(meter.element).get("%supportsstatus");
						meter.supportsstatus = supportsStatus;
						REPORTSPEED.debug(supportsStatus);
						if (data_sz){
							speedmeterProps.chart.sz=data_sz;
						}
						if (chartTheme){
							REPORTSPEED.miniQuery.request
						    ('get', impl.server+'charts/'+chartTheme+'.js')
	   						.then(function(chartJSON) {
	   							console.log("Loading Chart");
	   							eval("" + chartJSON + "");
	   							console.log(chartJSONnew);
	   							if (DRWidgetcustomFunctions){
	   									if (!impl.isEmpty(DRWidgetcustomFunctions)){
	   										impl.customFunctions = DRWidgetcustomFunctions;
	   									}
	   							}
	   							chartJSONnew.chart.renderTo = meter_id;
	   							if (REPORTSPEED.miniQuery("#"+meter_id)){
	   								var chart = new Highcharts.Chart(chartJSONnew,callbackDRWIDGETCHART);
									meter.chart = chart;
									step(i+1);
	   							}else{
	   								REPORTSPEED.displayError("Unable to render chart.");
	   							}
	   							
	   						});
						}else{
							var meter2 = REPORTSPEED.miniQuery("#"+meter_id);
							speedmeterProps = impl.useUserDataObject(meter2, speedmeterProps);
							console.log ("Using base js for "+i);
							var chartJSON = {
					        	chart: {
						            type: 'gauge',
						            plotBackgroundColor: null,
						            plotBackgroundImage: null,
						            plotBorderWidth: 0,
						            plotShadow: false,
						            backgroundColor:'rgba(255, 255, 255, 0.1)'
						        },
								title: {
						            text: ''
								},
								tooltip: {enabled: false},

						        pane: {
						            startAngle: -120,
						            endAngle: 120,
						            size: speedmeterProps.chart.sz,
						            background: [{
						                backgroundColor: '#1A1815',
				                    	outerRadius: '68%',
				                    	innerRadius: '48%'
				                
						            },  {
						                // default background
						            },{
				                    // BG color for speed
				                    //  backgroundColor: '#E4E3DF',
				                    backgroundColor: { 
				                       radialGradient: {
				                          cx: 0.5,
				                          cy: 0.6,
				                          r: 1.0 
				                        },
				                       stops: [
				                           [0.3, '#A7A9A4'],
				                           //[0.6, '#FF04FF'],
				                           [0.45, '#DDD'],
				                           [0.7, '#EBEDEA'],
				                           //[0.7, '#FFFF04'],
				                       ]
				                    },
				                    innerRadius: '72%',
				                    outerRadius: '105%'
				                }
				                ,{
				                    // Below rpm bg color
				                    // backgroundColor: '#909090',
				                    zIndex: 1,
				                    backgroundColor: { 
				                       radialGradient: {
				                          cx: 0.5,
				                          cy: 0.55,
				                          r: 0.5 
				                        },
				                       stops: [
				                           [0.6, '#48443B' ],
				                           [0.8, '#909090'],
				                           [1, '#FFFFF6']
				                       ]
				                    },
				                    outerRadius: '25%',
				                    innerRadius: '20%',
				                }, {
				                    // backgroundColor: '#35382E',
				                    // zIndex: 1,
				                    // outerRadius: '40%',
				                    // innerRadius: '39%'
				                }, {
				                    backgroundColor: '#16160E',
				                    outerRadius: '19%'

				                }]
						        },

						        // the value axis
						        yAxis: {
						            min: 0.1,
						            max: 1000,

						            
						            type: 'logarithmic',
						            // tickInterval: 1,
						            minorTickInterval: 'auto',
						            minorTickWidth: 1,
						            minorTickLength: 4,
						            minorTickPosition: 'inside',
						            minorTickColor: '#8A94A8',

						            tickPixelInterval: 30,
						            tickWidth: 1,
						            tickPosition: 'inside',
						            tickLength: 6,
						            tickColor: '#8A94A8',
						            labels: {
						                formatter: function() { return this.value == 0.1 ? 0 : this.value; },
						                step: 2,
						                rotation: 'none',
						                y: speedmeterProps.chart.y,
				                    	x: 0,
						                style: {
					                       fontFamily: speedmeterProps.chart.labelfont,
					                       fontSize: speedmeterProps.chart.labelfontsz,
					                       color: '#454A54',

					                   },
					                   
						            },
						            
						            title: {
						                text: speedmeterProps.chart.logotext,
						                y: 10,
						                style: {
						                	fontFamily: speedmeterProps.chart.labelfont,
						                    color: '#454A54', fontSize:speedmeterProps.chart.logofontsz,
						                    fontStyle: 'italic'
						                }
						            },
						            plotBands: [{
						                from: 0,
						                to: 10,
						                color: '#F0F9FC' 
						            }
						            , {
						                from: 10,
						                to: 100,
						                color: '#B2E0F0' 
						            }, 
						            {
						                from: 100,
						                to: 400,
						                color: '#5CAFCA' // red
						            }, {
						                from:400,
						                to:1000,
						                color: '#336170'
						            }
						            ]
						        },
						        
						        plotOptions: {
						            gauge: {
						                  pivot: {
						                    radius: 5,
						                    borderWidth: 1,
						                    borderColor: 'gray',
						                    backgroundColor: {
						                        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
						                        stops: [
						                            [0, 'white'],
						                            [1, 'gray']
						                        ]
						                    }
						                },
						                dial: {
						                    radius: '95%',
						                    backgroundColor: 'silver',
						                    borderColor: '#000',
						                    borderWidth: 1,
						                    baseWidth: 1,
						                    topWidth: 1,
						                    baseLength: '90%', // of radius
						                    rearLength: '20%'
						                }
						            },
						        },
						        series: [{
						            name: 'Speed',
						            data: [0.1],
						            dataLabels: {
					                    color: '#454A54',
					                    borderWidth: 0,
					                    y: 33,
					                    x: 0,
					                    style: {
					                        fontSize: '20px',
					                        fontFamily: 'Arial',
					                        fontStyle: 'italic'
					                    },
					                    formatter: function() {
					                    	var data = this.y.toFixed(2),str,retdata;
					                    	str="<span>Mbps</span>"
					                    	if (data==0.1){
					                    		retdata = 0;
					                    	}else{
					                    		retdata = data;
					                    	}
					                    	retdata = retdata+" "+str;
					                        return retdata;
					                    }
					                },
						            tooltip: {
						                enabled: false
						                //valueSuffix: ' Mb/s'
						            },
						            pointStart: 1,
				        			
						        }]

						    };
						    if (REPORTSPEED.miniQuery("#"+meter_id)){
							    chartJSON.chart.renderTo = meter_id;
							    var chart = new Highcharts.Chart(chartJSON);
							    // REPORTSPEED.miniQuery("#"+meter_id).highcharts(chartJSON);
								meter.chart = chart;
								step(i+1);
							}else{
								REPORTSPEED.displayError("Unable to render chart.");
							}
						}
						
    			          
				   }else{
				   	impl.fireEvent("DR_DOMready");
				   }
				};
				step(0);

		},

		hideDOMelements:function(){
			// var type = "speedmeter";
			var activeDomElement = REPORTSPEED.utils.getActiveElement();
			REPORTSPEED.info("Hiding "+activeDomElement);
			for (var i = impl.domElements[activeDomElement].length - 1; i >= 0; i--) {
				var ele = impl.domElements[activeDomElement][i].element;
				REPORTSPEED.info("Element := ");
				REPORTSPEED.info(ele);
				REPORTSPEED.miniQuery(ele).set('$position', "relative");
		    	REPORTSPEED.miniQuery(ele).set('$z-index', "-1");
				// REPORTSPEED.miniQuery(ele).set('$top', "-310px");
				REPORTSPEED.miniQuery(ele).hide();
				// REPORTSPEED.debug(ele);
				// console.log("Can you see me?");
			};
		},


		showDomelements:function(){
			// var type = "speedmeter";
			REPORTSPEED.info("Showing all DOM elements!");

			var activeDomElement = REPORTSPEED.utils.getActiveElement();

			for (var i = impl.domElements[activeDomElement].length - 1; i >= 0; i--) {
				var ele = impl.domElements[activeDomElement][i].element;
				REPORTSPEED.miniQuery(ele).show();
				// REPORTSPEED.miniQuery(ele).set('$position', "relative");
				var ctype = REPORTSPEED.miniQuery(ele).get("%type");
				// if (ctype=="main"){
				// 	REPORTSPEED.miniQuery(ele).set('$zIndex', "2");
				// }else{
				// 	REPORTSPEED.miniQuery(ele).set('$zIndex', "0");

				// }
				// alert("Showing dom element = "+ impl.domElements[activeDomElement].length);
				REPORTSPEED.miniQuery(ele).set('$zIndex', "0");
				if (ctype=="main"){
					REPORTSPEED.miniQuery(ele).set('$zIndex', "2");
				}
				REPORTSPEED.info(ele);

				
			};
		},
/**
* Gets Fired once all the scripts have been loaded. This function then renders 
* the HighCharts powered speedmeter and sets up the UI before the Start button 
* is loaded. Once everything is complete this function stops the loader so that
* user can see the widget.
*
* @method restart_test
* @example
*	impl.libraries_loaded();
*/

		libraries_loaded : function(){
			console.log("Libraries loaded!");
			REPORTSPEED.speedmeter = null;
			var widgetWidth = (REPORTSPEED.miniQuery("#"+reportr.widgetId).get("clientWidth"));
			var speedmeterProps = {} , areachartProps={};
			speedmeterProps.chart={};
			if (widgetWidth<=300){
				speedmeterProps.chart.wdth="200";
				speedmeterProps.chart.hght="200";
				speedmeterProps.chart.sz=170;
				speedmeterProps.chart.labelfontsz = 12;
				fontSize:speedmeterProps.chart.logofontsz ="9px"
				speedmeterProps.chart.labelfont ="Arial";
				speedmeterProps.chart.y = -4;
			}
			if (widgetWidth > 300 && widgetWidth<=800){
				speedmeterProps.chart.wdth="200";
				speedmeterProps.chart.hght="200";
				speedmeterProps.chart.sz=250;
				speedmeterProps.chart.labelfontsz = 15;
				fontSize:speedmeterProps.chart.logofontsz="13px"
				speedmeterProps.chart.labelfont ="Arial";
				speedmeterProps.chart.y = -2;
			}
			if (REPORTSPEED.miniQuery("#DRWidget-areachart").length> 0){
				
				var chart = new Highcharts.Chart({
				    chart: {
		                type: 'areaspline',
		                renderTo: 'DRWidget-areachart-download',
		                backgroundColor:'rgba(255, 255, 255, 0.1)',
		                width: "200",
        				height: "200"
		            },
					title: {
			            text: 'Download'
			        },
			        xAxis: {
                		type: 'datetime',
                		labels:{
							  enabled: false
						}
			        },
			        yAxis: {
			            title: {
			                text: 'Mbps'
			            },
			            labels: {
			            	step: 0.5
			        	}
			        },
			        tooltip: {
			            shared: true,
			            valueSuffix: ' Mbps'
			        },
			        credits: {
			            enabled: false
			        },
			        plotOptions: {
			            areaspline: {
			            	pointPlacement: "on",
			                fillOpacity: 0.5,
			            }
			        },
			        series: [{
			            name: 'Download',
			            data: [0.0,0.0,0.0, 0.0]
			        }]
			 	});
				REPORTSPEED.areadownload = chart;
			}else{
				
			}
			REPORTSPEED.miniQuery("#DRWidgetInitiate").show();
			REPORTSPEED.miniQuery(".DRWidgetInitiate").show();
			REPORTSPEED.miniQuery(".DRWidget-starttestBox").show();

			REPORTSPEED.stop_loading();
			REPORTSPEED.info("Stopping Loader!");
			REPORTSPEED.displayMessage("Ready.");

			// if (impl.isMobile){
			// 	for (var i = impl.mobile_buttons.length - 1; i >= 0; i--) {
			// 		var btn = impl.mobile_buttons[i];
			// 		REPORTSPEED.miniQuery('.DRWidget-startbtns').add(
			// 			REPORTSPEED.miniHTML('<button data-testtype="'+btn.title+'" id="DRWidgetInitiate" class="DRWidgetStartbtn DRWidget-center-indiv DRWidget-DSLR-btn DRWidget-DSLR-btn-primary DRWidgetInitiate">'+btn.title+'</button>&nbsp;')
			// 		);
			// 		REPORTSPEED.miniQuery(".DRWidgetInitiate").on("click",impl.begin_test);
			// 	};
			// }else{
			// 	for (var i = impl.desktop_buttons.length - 1; i >= 0; i--) {
			// 		var btn = impl.desktop_buttons[i];
			// 		REPORTSPEED.miniQuery('.DRWidget-startbtns').add(
			// 			REPORTSPEED.miniHTML('<button data-testtype="'+btn.title+'" id="DRWidgetInitiate" class="DRWidgetStartbtn DRWidget-center-indiv DRWidget-DSLR-btn DRWidget-DSLR-btn-primary DRWidgetInitiate">'+btn.title+'</button>&nbsp;')
			// 		);
			// 		REPORTSPEED.miniQuery(".DRWidgetInitiate").on("click",impl.begin_test);
			// 	};
			// }
			
			// impl.mobile_buttons.length
			
			impl.fireEvent("DR_widgetLoaded");
			

		}
	};


	var MINI = requireDRWIDGET('minified');
	var miniQuery = MINI.$, miniHTML = MINI.HTML;
/**
* The __reportr__ namespace is __public__ to the Clearborg Object.
*
* Execution of functions on this class starts from __reportr.init()__ function
* 
* @class Clearborg.reportr
*
*/

	reportr = {
		widgetId: "DR-ReportSpeed", 
		t_start: null,
		t_end: null,
		speedmeter: null,
		t_state:null,
		
		// Utility functions
		utils: {
			loadCSS:  function(e,n,o,t){"use strict";var d=window.document.createElement("link"),i=n||window.document.getElementsByTagName("script")[0],r=window.document.styleSheets;return d.rel="stylesheet",d.href=e,d.media="only x",t&&(d.onload=t),i.parentNode.insertBefore(d,i),d.onloadcssdefined=function(e){for(var n,o=0;o<r.length;o++)r[o].href&&r[o].href===d.href&&(n=!0);n?e():setTimeout(function(){d.onloadcssdefined(e)})},d.onloadcssdefined(function(){d.media=o||"all"}),d},

			onloadCSS: function( ss, callback ) {
				ss.onload = function() {
					ss.onload = null;
					if( callback ) {
						callback.call( ss );
					}
				};

				// This code is for browsers that don’t support onload, any browser that
				// supports onload should use that instead.
				// No support for onload:
				//	* Android 4.3 (Samsung Galaxy S4, Browserstack)
				//	* Android 4.2 Browser (Samsung Galaxy SIII Mini GT-I8200L)
				//	* Android 2.3 (Pantech Burst P9070)

				// Weak inference targets Android < 4.4
				if( "isApplicationInstalled" in navigator && "onloadcssdefined" in ss ) {
					ss.onloadcssdefined( callback );
				}
			},
			sampleString: function() {
			    var x = "1234567890";
			    var iterations = 12;
			    for (var i = 0; i < iterations; i++) {
			      x += x.concat(x);
			    }
			    return x;
			},
			calcAvg:function(a) {
			  var av = 0;
			  var cnt = 0;
			  var len = a.length;
			  for (var i = 0; i < len; i++) {
			    var e = +a[i];
			    if (!e && a[i] !== 0 && a[i] !== '0') { e--; }
			    if (a[i] === e) { av += e; cnt++; }
			  }
			  return av/cnt;
			},
			find_in_array:function(arr,item){
				// Returns item index
				for (var i = arr.length - 1; i >= 0; i--) {
					var current = arr[i];
					if (current == item){
						return i;
					}
				};
				return null;
			},
			getActiveElement:function(){
				var activeDomElement = null;
				// REPORTSPEED.info("domElements.length = " + impl.domElements.length);
				// if (impl.domElements.length == 0){
				// 	return null;
				// }
				// REPORTSPEED.info(impl.domelementtypes);
				for (var i = 	impl.domelementtypes.length - 1; i >= 0; i--) {
					var curdomelement = impl.domelementtypes[i];
					// if (curdomelement != "simplemeter"){


						if (impl.domElements[curdomelement].length > 0 ){
							activeDomElement = curdomelement;
						}
					// }
					
				}

				return activeDomElement;
			},

			detectMobile:function(){
				var checkThis = null;
				var info = [];
				if (window.screen) {
		            info['pixelDepth'] = window.screen.pixelDepth;
		            info['availWidth'] = window.screen.availWidth;
		            info['availHeight'] = window.screen.availHeight;
		            info['actWidth'] = window.screen.height;
		            info['actHeight'] = window.screen.width;
		            info['dppx'] = window.devicePixelRatio;
		        }
		        if (info['actWidth'] < info['actHeight'])
		        	checkThis = info['actWidth'];
		        if (info['actHeight'] < info['actWidth'])
		        	checkThis = info['actHeight'];
		        REPORTSPEED.info("Screen width" + checkThis);
		        if (checkThis<=414){
		        	return true;
		        }
		        return false;

			},
		},

/**
* Used to display status messages at the bottom left section of the widget.
*
* @method displayMessage
* @param {String} msg Message to display
* @example
*	REPORTSPEED.displayMessage("Starting speed test");
*/
		displayMessage: function(msg){
			// alert(msg);
			REPORTSPEED.miniQuery("#DRWidget-logMessage").set("innerHTML", "");
			REPORTSPEED.miniQuery("#DRWidget-logMessage").set("innerHTML",msg);	
	
			if (REPORTSPEED.t_state == impl.states.WIDGET_LOADED || REPORTSPEED.t_state == impl.states.RESTARTING || REPORTSPEED.t_state == impl.states.TERMINATED || REPORTSPEED.t_state == impl.states.COMPLETE || REPORTSPEED.t_state ==impl.states.DOWNLOADSPEEDTEST_RUNNING || REPORTSPEED.t_state == impl.states.PING_RUNNING || REPORTSPEED.t_state ==impl.states.UPLOADSPEEDTEST_RUNNING){
				var activeComponent = REPORTSPEED.utils.getActiveElement();
				// alert(impl.domElements[activeComponent].length);
				for (var i = impl.domElements[activeComponent].length - 1; i >= 0; i--) {
					var domElement = impl.domElements[activeComponent][i];
					if (REPORTSPEED.miniQuery(domElement.element).get("%type")=="status"){
						REPORTSPEED.miniQuery(domElement.element).set("innerHTML",msg);	
					}
					if (REPORTSPEED.miniQuery(domElement.element).get("%type")=="main"){
						REPORTSPEED.miniQuery(".highcharts-yaxis-title").set("innerHTML",msg);
						REPORTSPEED.miniQuery(".highcharts-yaxis-title").set("textContent",msg);
						REPORTSPEED.miniQuery(".highcharts-yaxis-title").set("text",msg);

					}
				};	

			}
				

			if (impl.domElements["speedmeter"] && impl.domElements["speedmeter"].length > 0){
				for (var i = impl.domElements["speedmeter"].length - 1; i >= 0; i--) {
					var meter = impl.domElements["speedmeter"][i];
					var metertype = REPORTSPEED.miniQuery(meter.element).get("%type");
					if (meter.supportsstatus && meter.supportsstatus=="true"){
						if (meter.previouslyset){
							console.log(meter.statustextElement);
							meter.statustextElement.element.textContent  = reportr.current_status;
							var chart = meter.chart;
							// var reflow = meter.statustextElement.element.innerHTML.length;
							var reflow = meter.statustextElement.element.textContent.length;
							console.log (reflow);
							if (reflow >11)
								textx = chart.plotLeft + (chart.plotWidth  * 0.5) - (30+reflow);
							if (reflow == 7 || reflow == 10)
								textx = chart.plotLeft + (chart.plotWidth  * 0.5) - (25);
							if (reflow == 11)
								textx = chart.plotLeft + (chart.plotWidth  * 0.5) - (35);

							texty = chart.plotTop  + (chart.plotHeight * 0.5) - (20 * 0.5)+96;
							// console.log(meter.statustextElement.element.innerHTML.length);
							meter.statustextElement.attr({x: textx, y: texty, zIndex: 2}).css(
								{fontFamily: 'Orbitron',fontSize: '12px', color:'#E2F76F'});
						
							// REPORTSPEED.miniQuery(meter.statustextElement).remove();
							// meter.statustextElement.destroy();
							// meter.statusdestroyed = false;
							// var chart = meter.chart;
							// var rectX=chart.plotLeft+ (chart.plotWidth  * 0.5)-70;
							// var rectY=chart.plotTop+ (chart.plotHeight  * 0.5)+37;

							// var rect = chart.renderer.rect( rectX, rectY , 140, 55, 5)
							// 					        .attr({
							// 					            'stroke-width': 2,
							// 					            stroke: '#79ADD1',
							// 					            fill: '#000000',
							// 					            zIndex: 1
							// 					        })
							// 					        .add();
							// rect.toFront();
							// meter.statustextElement.remove();
						}else{
							// alert("I'm here");
							var chart = meter.chart;
							text = chart.renderer.text("").add();
							textBBox = text.getBBox();
							textx = chart.plotLeft + (chart.plotWidth  * 0.5) - (70);
							texty = chart.plotTop  + (chart.plotHeight * 0.5) - (textBBox.height * 0.5)+71;
							text.attr({x: textx, y: texty, zIndex: 2}).css({fontFamily: 'Orbitron',fontSize: '12px', color:'#79ADD1'});
						
					        meter.statustextElement = text;
					        meter.previouslyset = true;
						}
						

					}
				}
			}
		},


/**
* Used to display error messages on the widget.
*
* @method displayError
* @param {String} msg Message to display
* @example
*	REPORTSPEED.displayError("API verification failed.");
*/
		displayError:function(msg){
			if (REPORTSPEED.miniQuery(".DRWidget-error").length==0){
				REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId).set("innerHTML","");	
				var errorMsg = "<div class='error'>" + msg+"</div>";
				REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId).add(REPORTSPEED.miniHTML(errorMsg));
				REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId + ' .error').set("$fontSize","20px");
				REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId + ' .error').set("$padding","10px");
				REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId + ' .error').set("$position","relative");
				REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId + ' .error').set("$top","30%");
				REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId + ' .error').set("$color","red");
				REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId + ' .error').set("$fontFamily","Arial, Helvetica, sans-serif;");
			}
			REPORTSPEED.miniQuery(".DRWidget-error").show();
			REPORTSPEED.miniQuery(".DRWidget-error p").set("innerHTML", msg);
			
		},

		closeError:function(){
			REPORTSPEED.miniQuery(".DRWidget-error").hide();
			
		},


/**
* Used to update the progress bar on the widget. Gets fired on every onprogress call
* from the underlying speed library.
*
* @method updateProgressBar
* @param {Object} props Value in percents to update
* @example
*		//For a 31% progress update:
*	REPORTSPEED.updateProgressBar({val: 31});
*/

		updateProgressBar: function(props){

			var newVal = props.val;
			// REPORTSPEED.info(props);
			if (newVal > 100) newVal = 100;
			// if (newVal == 0) newVal = 0;
			// REPORTSPEED.info(reportr.progressDone);

			

			
			REPORTSPEED.miniQuery("#DRWidget-progress .progress-bar span").set("$width" , (newVal).toString()+'%');
			REPORTSPEED.miniQuery("#DRWidget-progress .progress-bar span").set("innerHTML" , (newVal).toString()+'%');
			REPORTSPEED.miniQuery("#DRWidget-progress").set('@value', newVal.toString());

		},

/**
* Is used to create the actual widget on the DOM.
* It loads the current theme's (__data-theme__) css and html template from the server
* and uses it to render the widget to the DOM.
*
* The template is loaded from the __/template/__ directory on the widget's server.
* The CSS is loaded from the __/style/__ directory on the widget's server.
*
* __Example__:
* If the embed code's __data-theme__ attribute is "theme1", the following files 
* are loaded: __/template/theme1.html__ and __/style/theme1.css__ .
* @method buildWidget
* @param {Object} props Message to display
* @example
*		
*	REPORTSPEED.buildWidget();
*/		

		buildWidget: function (props){
			reportr.times = [];
			var templateURL = "", styleURL="" ;
			if (props.defaultServer){
				templateURL =impl.server+'template/'+props.widgetTheme+'.html';
				// styleURL =impl.server+"style/"+props.widgetTheme+".css";
			}else{
				templateURL = props.templateURL;
				// styleURL = props.styleURL;
			}
			// Asynchronously Loading the Widget CSS first
			// var stylesheet = REPORTSPEED.utils.loadCSS(styleURL);
			// REPORTSPEED.info(stylesheet);
			// REPORTSPEED.utils.onloadCSS( stylesheet, function() {
			    REPORTSPEED.miniQuery.request('get', templateURL)
				   .then(function(txt) {
				        templ = txt;
				        REPORTSPEED.miniQuery("#DR-ReportSpeed").set("innerHTML", "");
						REPORTSPEED.miniQuery("#DR-ReportSpeed").add(REPORTSPEED.miniHTML(templ));
						REPORTSPEED.miniQuery(".DRWidget-DSLR-startbtns").hide();
						REPORTSPEED.miniQuery("#DRWidgetInitiate").hide();
						REPORTSPEED.miniQuery(".DRWidget-starttestBox").hide();
						
						// Bind our Start Function to Widget Start button
						// REPORTSPEED.miniQuery(".DRWidgetInitiate").on("click",impl.begin_test);
						if (impl.isMobile){
							impl.more_clicked_state=true;
						}else{
							impl.more_clicked_state=false;
						}
						REPORTSPEED.miniQuery(".DRWidget-btn-More").on("click",impl.more_clicked);
						// REPORTSPEED.miniQuery("#DRWidgetInitiate").on("click",impl.begin_test);
						REPORTSPEED.miniQuery("#DRWidget-cancel-btn").on("click", impl.cancel_test);
						REPORTSPEED.miniQuery("#DRWidget-close-error").on("click", reportr.closeError);
						REPORTSPEED.miniQuery(".DRWidget-error").hide();
						// REPORTSPEED.start_loading();
						REPORTSPEED.miniQuery("#DRWidgetInitiate").show();
						REPORTSPEED.miniQuery(".DRWidgetInitiate").show();
						REPORTSPEED.miniQuery(".DRWidget-starttestBox").show();

						REPORTSPEED.stop_loading();
						REPORTSPEED.info("Stopping Loader!");
						REPORTSPEED.displayMessage("Ready.");

						if (impl.isMobile){
							for (var i = impl.mobile_buttons.length - 1; i >= 0; i--) {
								var btn = impl.mobile_buttons[i];
								REPORTSPEED.miniQuery('.DRWidget-startbtns').add(
									REPORTSPEED.miniHTML('<button data-testtype="'+btn.title+'" id="DRWidgetInitiate" class="DRWidgetStartbtn DRWidget-center-indiv DRWidget-DSLR-btn DRWidget-DSLR-btn-primary DRWidgetInitiate">'+btn.title+'</button>&nbsp;')
								);
								REPORTSPEED.miniQuery(".DRWidgetInitiate").on("click",impl.pre_begin_test);
							};
						}else{
							for (var i = impl.desktop_buttons.length - 1; i >= 0; i--) {
								var btn = impl.desktop_buttons[i];
								REPORTSPEED.miniQuery('.DRWidget-startbtns').add(
									REPORTSPEED.miniHTML('<button data-testtype="'+btn.title+'" id="DRWidgetInitiate" class="DRWidgetStartbtn DRWidget-center-indiv DRWidget-DSLR-btn DRWidget-DSLR-btn-primary DRWidgetInitiate">'+btn.title+'</button>&nbsp;')
								);
								REPORTSPEED.miniQuery(".DRWidgetInitiate").on("click",impl.pre_begin_test);
							};
						}
						// REPORTSPEED.miniQuery(".DRWidget-starttestBox").show();
						// REPORTSPEED.displayMessage("Loading...");
						var apiKey = props.apiKey;
						// Verify user API key
						impl.widgetOptions = {};
						impl.widgetOptions = props;
						impl.apiKey = apiKey;
						// if (impl.checkBrowsersupport()){
						// 	// Browser is good to go
						// 	impl.loadExternallibs();
						// }else{
						// 	REPORTSPEED.displayMessage("Unsupported Browser.");
						// 	REPORTSPEED.miniQuery('.DRWidget-loader').hide();
						// 	REPORTSPEED.displayError("Your Browser is not supported by this speed test. <a href='#'>Click here</a> to view a list of supported browsers")
						// 	return;
						// }
						
						// Subscribe all listeners to events that will be emitted by our Widget
						REPORTSPEED.subscribe("DR_librariesLoaded", impl.scan_template, null, this);
						REPORTSPEED.subscribe("DR_templatescanned", impl.setupTemplate, null, this);
						REPORTSPEED.subscribe("DR_DOMready", impl.libraries_loaded, null, this);

						REPORTSPEED.subscribe("DR_readyforTest", impl.begin_pingTest, null, this);
						REPORTSPEED.subscribe("DR_endedPingTest", impl.begin_speedTestDownload, null, this);
						REPORTSPEED.subscribe("DR_endedSpeedTestDownload", impl.begin_speedTestUpload, null, this);
						REPORTSPEED.subscribe("DR_endedSpeedTestUpload", impl.finished_test, null, this);
						REPORTSPEED.subscribe("DR_cancelledSpeedTest", impl.cancelled_test, null, this);
						
						REPORTSPEED.subscribe("DR_updateMeasurements", impl.update_measurements, null, this);
						REPORTSPEED.subscribe("DR_finishedTest", impl.finished_test, null, this);
						REPORTSPEED.subscribe("DR_restartTest", impl.restart_test, null, this);
	            }).error(function(status, statusText, responseText) {
	            	REPORTSPEED.displayError("Widget loading error : "+statusText+' | '+JSON.stringify(responseText)+'|'+status+' <b>'+props.widgetTheme+'.html</b>');
			   });
			// });
			//The html template that gets loaded into the widget container
			// We can store templates on the server and load them here with 
			// a getJSON call.
			// Another advantage of loading by getJSON would be that we could
			// deny HTML to users whose API key wasn't verified.
			// DRWidget
			//REPORTSPEED.miniQuery.request('get', impl.server+'template/loader.php?theme='+props.widgetTheme+'.html')
			
			
						
		},

/**
* The __first__ function that's called to initialize the widget.
* It verifies the user's api Key and then registers all event listeners to listen 
* on events like "START", "CANCEL", "ABORT".
*
* @method init
* @param {Object} props Message to display
* @example
*		
*	REPORTSPEED.init();
*/
		init: function() {
			// Initializing the widget
			var apiKey = REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId).get("%key");
			widgetTheme = REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId).get("%theme");
			REPORTSPEED.info("REPORTSPEED Widget started", "reportr.init");
			REPORTSPEED.t_state=impl.states.INITIALIZING;
			if (REPORTSPEED.utils.detectMobile()){
				impl.isMobile = true;
			}

			// Build HTML Widget
			// Some CSS3 used in the Start button, will need to remove 
			// that to allow older browsers to be compatible
			var widgetOptions = {
				apiKey: apiKey, 
				bufferbloat:false,
				finishcb:false,
			}
			if (widgetTheme){
				widgetOptions.defaultServer = true;
				widgetOptions.widgetTheme = widgetTheme;
			}
			else{
				var templateURL = REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId).get("%templateURL");
				// 
				widgetOptions.templateURL = templateURL;
				widgetOptions.defaultServer = false;
			}
			if (REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId).get("%enableBufferbloat")=="true"){
				widgetOptions.bufferbloat = true;
			}
			if (REPORTSPEED.miniQuery("#"+REPORTSPEED.widgetId).get("%finishcb")=="true"){
				widgetOptions.finishcb = true;
			}
			REPORTSPEED.buildWidget(widgetOptions);
	

		},


/**
* The loader function which displays an animation while the widget loads.
*
*
* @method start_loading
* @param {Object} props 
* @example
*		
*	REPORTSPEED.start_loading();
*/
		start_loading:function(props){

			var target = document.getElementsByClassName('DRWidget-loader')
			// console.log(target);
			// var spinner = new Spinner(opts).spin(target[0]);
			REPORTSPEED.miniQuery(target).set("innerHTML", "");
			REPORTSPEED.miniQuery(target).set("innerHTML", '<img src="//i.dslr.net/pre-white.gif" width=30 height=10>');
			// console.log(spinner);
		},
/**
* This function stops the loading animation.
*
*
* @method start_loading
* @example
*		
*	REPORTSPEED.start_loading();
*/
		stop_loading:function(props){
			REPORTSPEED.info("Stopping Loader from stop_loading");
			REPORTSPEED.miniQuery('.DRWidget-loader').hide();
		},

/**
* The callback fired if verification via the API fails.
*
*
* @method apiVerification_error
* @example
*		
*	REPORTSPEED.apiVerification_error();
*/

		apiVerification_error: function(props){
			REPORTSPEED.displayMessage("ERROR!: Unable to authenticate via API");
			REPORTSPEED.displayError("ERROR!: Unable to authenticate via API");
			REPORTSPEED.stop_loading();
		},


/**
* The callback fired if verification via the API fails.
*
*
* @method subscribe
* @param {String} en_name Event name
* @param {Function} fn Function to callback
* @param {Object} cb_data Callback data
* @param {Scope} cb_scope Callback scope; use "this"
* @example
*		
*	REPORTSPEED.subscribe("DR_librariesLoaded", impl.libraries_loaded, null, this);
*/

		subscribe: function(e_name, fn, cb_data, cb_scope) {
			var i, h, e;

			if(!impl.events.hasOwnProperty(e_name)) {
				return this;
			}

			e = impl.events[e_name];

			// don't allow a handler to be attached more than once to the same event
			for(i=0; i<e.length; i++) {
				h = e[i];
				if(h[0] === fn && h[1] === cb_data && h[2] === cb_scope) {
					return this;
				}
			}
			e.push([ fn, cb_data || {}, cb_scope || null ]);

			if(e_name === 'page_unload') {
				impl.addListener(w, "unload",
							function() {
								if(fn) {
									fn.call(cb_scope, null, cb_data);
								}
								fn=cb_scope=cb_data=null;
							}
						);
				impl.addListener(w, "beforeunload",
							function() {
								if(fn) {
									fn.call(cb_scope, null, cb_data);
								}
								fn=cb_scope=cb_data=null;
							}
						);
			}

			return this;
		}
	}


	var make_logger = function(l) {
		return function(m, s) {
			this.log(m, l, "REPORTSPEED::" + this.version + "   : REPORTSPEED" + (s?"."+s:"")); return this;
		};
	};

	REPORTSPEED.debug = make_logger("debug");
	REPORTSPEED.info = make_logger("info");
	REPORTSPEED.warn = make_logger("warn");
	REPORTSPEED.error = make_logger("error");

	if(typeof console !== "undefined" && typeof console.log !== "undefined") {
		REPORTSPEED.log = function(m,l,s) { console.log(s + ": [" + l + "] ", m); };
	}


	for(k in reportr) {
		if(reportr.hasOwnProperty(k)) {
			REPORTSPEED[k] = reportr[k];
		}
	}


	REPORTSPEED.miniQuery = miniQuery;
	REPORTSPEED.miniHTML = miniHTML;
	REPORTSPEED.init();



})(window);
// console.log(window);
