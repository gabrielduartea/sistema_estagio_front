(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{609:function(e,t,n){e.exports=function(){"use strict";function e(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)e[t]=source[t]}return e}function t(n,r){function o(t,o,c){if("undefined"!=typeof document){"number"==typeof(c=e({},r,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var f="";for(var d in c)c[d]&&(f+="; "+d,!0!==c[d]&&(f+="="+c[d].split(";")[0]));return document.cookie=t+"="+n.write(o,t)+f}}function c(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},i=0;i<t.length;i++){var o=t[i].split("="),c=o.slice(1).join("=");try{var f=decodeURIComponent(o[0]);if(r[f]=n.read(c,f),e===f)break}catch(e){}}return e?r[e]:r}}return Object.create({set:o,get:c,remove:function(t,n){o(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(n)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},752:function(e,t,n){"use strict";n.r(t);var r=n(737),o=n(736),c=n(18),f=(n(77),n(29),n(87)),d=n.n(f),l=n(609),v=n.n(l),h=n(209),m={name:"IndexPage",created:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=v.a.get("token"),t.next=4,d.a.get("".concat(h.a,"auth/token/").concat(n),{token:n}).then((function(t){0===t.data.tipo?e.$router.push("/coordinators"):e.$router.push("/students")}));case 4:case"end":return t.stop()}}),t)})))()}},w=n(62),component=Object(w.a)(m,(function(){var e=this._self._c;return e(o.a,{attrs:{justify:"center",align:"center"}},[e(r.a,{attrs:{cols:"12",sm:"8",md:"6"}},[this._v(" teste ")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);