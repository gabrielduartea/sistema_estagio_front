(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{444:function(e,t,n){var r=n(446).has;e.exports=function(e){return r(e),e}},445:function(e,t,n){var r=n(7),o=n(451),c=n(446),l=c.Map,d=c.proto,f=r(d.forEach),v=r(d.entries),m=v(new l).next;e.exports=function(map,e,t){return t?o(v(map),(function(t){return e(t[1],t[0])}),m):f(map,e)}},446:function(e,t,n){var r=n(7),o=Map.prototype;e.exports={Map:Map,set:r(o.set),get:r(o.get),has:r(o.has),remove:r(o.delete),proto:o}},448:function(e,t,n){"use strict";n(449)("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n(450))},449:function(e,t,n){"use strict";var r=n(5),o=n(15),c=n(7),l=n(134),d=n(43),f=n(294),v=n(204),m=n(205),h=n(19),x=n(76),_=n(33),y=n(6),k=n(206),I=n(112),w=n(210);e.exports=function(e,t,n){var C=-1!==e.indexOf("Map"),M=-1!==e.indexOf("Weak"),O=C?"set":"add",R=o[e],E=R&&R.prototype,S=R,T={},A=function(e){var t=c(E[e]);d(E,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(M&&!_(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return M&&!_(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(M&&!_(e))&&t(this,0===e?0:e)}:function(e,n){return t(this,0===e?0:e,n),this})};if(l(e,!h(R)||!(M||E.forEach&&!y((function(){(new R).entries().next()})))))S=n.getConstructor(t,e,C,O),f.enable();else if(l(e,!0)){var z=new S,D=z[O](M?{}:-0,1)!=z,j=y((function(){z.has(1)})),N=k((function(e){new R(e)})),U=!M&&y((function(){for(var e=new R,t=5;t--;)e[O](t,t);return!e.has(-0)}));N||((S=t((function(e,t){m(e,E);var n=w(new R,e,S);return x(t)||v(t,n[O],{that:n,AS_ENTRIES:C}),n}))).prototype=E,E.constructor=S),(j||U)&&(A("delete"),A("has"),C&&A("get")),(U||D)&&A(O),M&&E.clear&&delete E.clear}return T[e]=S,r({global:!0,constructor:!0,forced:S!=R},T),I(S,e),M||n.setStrong(S,e,C),S}},450:function(e,t,n){"use strict";var r=n(39).f,o=n(85),c=n(296),l=n(84),d=n(205),f=n(76),v=n(204),m=n(207),h=n(208),x=n(209),_=n(28),y=n(294).fastKey,k=n(77),I=k.set,w=k.getterFor;e.exports={getConstructor:function(e,t,n,m){var h=e((function(e,r){d(e,x),I(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),_||(e.size=0),f(r)||v(r,e[m],{that:e,AS_ENTRIES:n})})),x=h.prototype,k=w(t),C=function(e,t,n){var r,o,c=k(e),l=M(e,t);return l?l.value=n:(c.last=l={index:o=y(t,!0),key:t,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),_?c.size++:e.size++,"F"!==o&&(c.index[o]=l)),e},M=function(e,t){var n,r=k(e),o=y(t);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==t)return n};return c(x,{clear:function(){for(var e=k(this),data=e.index,t=e.first;t;)t.removed=!0,t.previous&&(t.previous=t.previous.next=void 0),delete data[t.index],t=t.next;e.first=e.last=void 0,_?e.size=0:this.size=0},delete:function(e){var t=this,n=k(t),r=M(t,e);if(r){var o=r.next,c=r.previous;delete n.index[r.index],r.removed=!0,c&&(c.next=o),o&&(o.previous=c),n.first==r&&(n.first=o),n.last==r&&(n.last=c),_?n.size--:t.size--}return!!r},forEach:function(e){for(var t,n=k(this),r=l(e,arguments.length>1?arguments[1]:void 0);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!M(this,e)}}),c(x,n?{get:function(e){var t=M(this,e);return t&&t.value},set:function(e,t){return C(this,0===e?0:e,t)}}:{add:function(e){return C(this,e=0===e?0:e,e)}}),_&&r(x,"size",{get:function(){return k(this).size}}),h},setStrong:function(e,t,n){var r=t+" Iterator",o=w(t),c=w(r);m(e,t,(function(e,t){I(this,{type:r,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=c(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?h("keys"==t?n.key:"values"==t?n.value:[n.key,n.value],!1):(e.target=void 0,h(void 0,!0))}),n?"entries":"values",!n,!0),x(t)}}},451:function(e,t,n){var r=n(26);e.exports=function(e,t,n){for(var o,c,l=n||e.next;!(o=r(l,e)).done;)if(void 0!==(c=t(o.value)))return c}},452:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},453:function(e,t,n){e.exports=function(){"use strict";function e(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)e[t]=source[t]}return e}function t(n,r){function o(t,o,c){if("undefined"!=typeof document){"number"==typeof(c=e({},r,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var d in c)c[d]&&(l+="; "+d,!0!==c[d]&&(l+="="+c[d].split(";")[0]));return document.cookie=t+"="+n.write(o,t)+l}}function c(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],r={},i=0;i<t.length;i++){var o=t[i].split("="),c=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(r[l]=n.read(c,l),e===l)break}catch(e){}}return e?r[e]:r}}return Object.create({set:o,get:c,remove:function(t,n){o(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(n)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},454:function(e,t,n){"use strict";n(4);var r=n(113),o=n.n(r),c=n(453),l=n.n(c),d=o.a.create({baseURL:"http://sistema-estagio-back-production.up.railway.app/api/v1",headers:[{source:"/api/(.*)",headers:[{key:"Access-Control-Allow-Credentials",value:"true"},{key:"Access-Control-Allow-Origin",value:"*"},{key:"Access-Control-Allow-Methods",value:"GET,OPTIONS,PATCH,DELETE,POST,PUT"},{key:"Access-Control-Allow-Headers",value:"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"}]}]});l.a.get("my_token");d.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),t.a=d},455:function(e,t,n){n(448)},456:function(e,t,n){"use strict";var r=n(5),o=n(444),c=n(446).remove;r({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var e,t=o(this),n=!0,r=0,l=arguments.length;r<l;r++)e=c(t,arguments[r]),n=n&&e;return!!n}})},457:function(e,t,n){"use strict";var r=n(5),o=n(84),c=n(444),l=n(445);r({target:"Map",proto:!0,real:!0,forced:!0},{every:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0);return!1!==l(map,(function(e,n){if(!t(e,n,map))return!1}),!0)}})},458:function(e,t,n){"use strict";var r=n(5),o=n(84),c=n(444),l=n(446),d=n(445),f=l.Map,v=l.set;r({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),n=new f;return d(map,(function(e,r){t(e,r,map)&&v(n,r,e)})),n}})},459:function(e,t,n){"use strict";var r=n(5),o=n(84),c=n(444),l=n(445);r({target:"Map",proto:!0,real:!0,forced:!0},{find:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),n=l(map,(function(e,n){if(t(e,n,map))return{value:e}}),!0);return n&&n.value}})},460:function(e,t,n){"use strict";var r=n(5),o=n(84),c=n(444),l=n(445);r({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),n=l(map,(function(e,n){if(t(e,n,map))return{key:n}}),!0);return n&&n.key}})},461:function(e,t,n){"use strict";var r=n(5),o=n(452),c=n(444),l=n(445);r({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(e){return!0===l(c(this),(function(t){if(o(t,e))return!0}),!0)}})},462:function(e,t,n){"use strict";var r=n(5),o=n(444),c=n(445);r({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(e){var t=c(o(this),(function(t,n){if(t===e)return{key:n}}),!0);return t&&t.key}})},463:function(e,t,n){"use strict";var r=n(5),o=n(84),c=n(444),l=n(446),d=n(445),f=l.Map,v=l.set;r({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),n=new f;return d(map,(function(e,r){v(n,t(e,r,map),e)})),n}})},464:function(e,t,n){"use strict";var r=n(5),o=n(84),c=n(444),l=n(446),d=n(445),f=l.Map,v=l.set;r({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),n=new f;return d(map,(function(e,r){v(n,r,t(e,r,map))})),n}})},465:function(e,t,n){"use strict";var r=n(5),o=n(444),c=n(204),l=n(446).set;r({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(e){for(var map=o(this),t=arguments.length,i=0;i<t;)c(arguments[i++],(function(e,t){l(map,e,t)}),{AS_ENTRIES:!0});return map}})},466:function(e,t,n){"use strict";var r=n(5),o=n(65),c=n(444),l=n(445),d=TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(e){var map=c(this),t=arguments.length<2,n=t?void 0:arguments[1];if(o(e),l(map,(function(r,o){t?(t=!1,n=r):n=e(n,r,o,map)})),t)throw d("Reduce of empty map with no initial value");return n}})},467:function(e,t,n){"use strict";var r=n(5),o=n(84),c=n(444),l=n(445);r({target:"Map",proto:!0,real:!0,forced:!0},{some:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0);return!0===l(map,(function(e,n){if(t(e,n,map))return!0}),!0)}})},468:function(e,t,n){"use strict";var r=n(5),o=n(65),c=n(444),l=n(446),d=TypeError,f=l.get,v=l.has,m=l.set;r({target:"Map",proto:!0,real:!0,forced:!0},{update:function(e,t){var map=c(this),n=arguments.length;o(t);var r=v(map,e);if(!r&&n<3)throw d("Updating absent value");var l=r?f(map,e):o(n>2?arguments[2]:void 0)(e,map);return m(map,e,t(l,e,map)),map}})},469:function(e,t,n){var r=n(297),o=n(39);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},472:function(e,t,n){n(5)({target:"Object",stat:!0},{is:n(295)})},476:function(e,t,n){"use strict";var r=n(28),o=n(93),c=n(49),l=n(54),d=n(469);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=c(this),t=l(e);return 0==t?void 0:e[t-1]},set:function(e){var t=c(this),n=l(t);return t[0==n?0:n-1]=e}}),o("lastItem"))},721:function(e,t,n){"use strict";n.r(t);var r=n(225),o=n(632),c=n(447),l=n(644),d=n(440),f=n(711),v=n(710),m=n(626),h=n(200),x=n(643),_=n(674),y=n(438),k=n(616),I=n(53),w=n(133),C=(n(36),n(21)),M=(n(86),n(171),n(454)),O={data:function(){return{company_id:"",dialog:!1,dialogDelete:!1,headers:[{text:"Nome",align:"start",sortable:!1,value:"name"},{text:"Email",value:"email",sortable:!1},{text:"Telefone",value:"phone",sortable:!1},{text:"Ações",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{id:"",name:"",company_id:"",email:"",phone:""},defaultItem:{id:"",name:"",company_id:"",email:"",phone:""},company_details:{id:"",name:"",company_id:"",email:"",phone:"",address:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Novo Supervisor":"Editar Supervisor"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{store:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.a.post("supervisors",{name:e.editedItem.name,email:e.editedItem.email,phone:e.editedItem.phone,company_id:e.$route.params.id});case 3:n=t.sent,console.log(n),e.initialize(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},update:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,M.a.put("supervisors/".concat(e),t.editedItem);case 3:r=n.sent,console.log(r),t.initialize(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},destroy:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.a.delete("supervisors/".concat(e));case 2:t.initialize();case 3:case"end":return n.stop()}}),n)})))()},showSupervisors:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.a.get("supervisors/".concat(e));case 2:r=n.sent,t.desserts=r.data;case 4:case"end":return n.stop()}}),n)})))()},initialize:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.company_id=e.$route.params.id,t.next=3,M.a.get("companies/".concat(e.company_id));case 3:n=t.sent,e.showSupervisors(e.company_id),e.company_details=n.data,console.log(e.company_details);case 7:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.destroy(this.editedItem.id),console.log(this.editedIndex),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(this.update(this.editedItem.id),console.log(this.editedItem)):this.store(),this.close()}}},R=n(62),component=Object(R.a)(O,(function(){var e=this,t=e._self._c;return t(d.a,[t(x.a,[t(l.a,[t("NuxtLink",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/companies"}},[t(r.a,{attrs:{color:"primary","x-small":"",text:""}},[t(h.a,{attrs:{small:""}},[e._v(" mdi-chevron-left ")]),e._v(" Voltar\n        ")],1)],1)],1)],1),e._v(" "),t(x.a,[t(l.a,[t(_.a,{staticClass:"elevation-1",attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("Name")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("CNPJ")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("Email")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("Telefone")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("Endereço")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v(e._s(e.company_details.name))]),e._v(" "),t("td",[e._v(e._s(e.company_details.company_id))]),e._v(" "),t("td",[e._v(e._s(e.company_details.email))]),e._v(" "),t("td",[e._v(e._s(e.company_details.phone))]),e._v(" "),t("td",[e._v(e._s(e.company_details.address))])])])]},proxy:!0}])})],1)],1),e._v(" "),t(x.a,[t(l.a,[t(f.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"name"},scopedSlots:e._u([{key:"top",fn:function(){return[t(I.a,{attrs:{flat:""}},[t(w.b,[e._v("Supervisores")]),e._v(" "),t(m.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(y.a),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[t(r.a,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",c,!1),o),[e._v("\n                  Novo\n                ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(o.a,[t(c.c,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(c.b,[t(d.a,[t(x.a,[t(l.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(k.a,{attrs:{label:"Nome"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(k.a,{attrs:{label:"Email"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1)],1),e._v(" "),t(x.a,[t(l.a,{attrs:{cols:"6"}},[t(k.a,{attrs:{label:"Telefone"},model:{value:e.editedItem.phone,callback:function(t){e.$set(e.editedItem,"phone",t)},expression:"editedItem.phone"}})],1)],1)],1)],1),e._v(" "),t(c.a,[t(y.a),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                    Cancelar\n                  ")]),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                    Salvar\n                  ")])],1)],1)],1),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(o.a,[t(c.c,{staticClass:"text-h5"},[e._v("Tem certeza que deseja apagar este item?")]),e._v(" "),t(c.a,[t(y.a),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t(y.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(n){var r=n.item;return[t(h.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("\n            mdi-pencil\n          ")]),e._v(" "),t(h.a,{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[t(r.a,{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);