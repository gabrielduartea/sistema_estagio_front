(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{444:function(e,t,r){var n=r(446).has;e.exports=function(e){return n(e),e}},445:function(e,t,r){var n=r(7),o=r(451),c=r(446),l=c.Map,d=c.proto,f=n(d.forEach),v=n(d.entries),h=v(new l).next;e.exports=function(map,e,t){return t?o(v(map),(function(t){return e(t[1],t[0])}),h):f(map,e)}},446:function(e,t,r){var n=r(7),o=Map.prototype;e.exports={Map:Map,set:n(o.set),get:n(o.get),has:n(o.has),remove:n(o.delete),proto:o}},448:function(e,t,r){"use strict";r(449)("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(450))},449:function(e,t,r){"use strict";var n=r(5),o=r(15),c=r(7),l=r(134),d=r(43),f=r(294),v=r(204),h=r(205),m=r(19),x=r(76),I=r(33),k=r(6),y=r(206),_=r(112),w=r(210);e.exports=function(e,t,r){var C=-1!==e.indexOf("Map"),M=-1!==e.indexOf("Weak"),z=C?"set":"add",O=o[e],R=O&&O.prototype,j=O,E={},D=function(e){var t=c(R[e]);d(R,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(M&&!I(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return M&&!I(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(M&&!I(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})};if(l(e,!m(O)||!(M||R.forEach&&!k((function(){(new O).entries().next()})))))j=r.getConstructor(t,e,C,z),f.enable();else if(l(e,!0)){var P=new j,T=P[z](M?{}:-0,1)!=P,S=k((function(){P.has(1)})),A=y((function(e){new O(e)})),U=!M&&k((function(){for(var e=new O,t=5;t--;)e[z](t,t);return!e.has(-0)}));A||((j=t((function(e,t){h(e,R);var r=w(new O,e,j);return x(t)||v(t,r[z],{that:r,AS_ENTRIES:C}),r}))).prototype=R,R.constructor=j),(S||U)&&(D("delete"),D("has"),C&&D("get")),(U||T)&&D(z),M&&R.clear&&delete R.clear}return E[e]=j,n({global:!0,constructor:!0,forced:j!=O},E),_(j,e),M||r.setStrong(j,e,C),j}},450:function(e,t,r){"use strict";var n=r(39).f,o=r(85),c=r(296),l=r(84),d=r(205),f=r(76),v=r(204),h=r(207),m=r(208),x=r(209),I=r(28),k=r(294).fastKey,y=r(77),_=y.set,w=y.getterFor;e.exports={getConstructor:function(e,t,r,h){var m=e((function(e,n){d(e,x),_(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),I||(e.size=0),f(n)||v(n,e[h],{that:e,AS_ENTRIES:r})})),x=m.prototype,y=w(t),C=function(e,t,r){var n,o,c=y(e),l=M(e,t);return l?l.value=r:(c.last=l={index:o=k(t,!0),key:t,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),I?c.size++:e.size++,"F"!==o&&(c.index[o]=l)),e},M=function(e,t){var r,n=y(e),o=k(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return c(x,{clear:function(){for(var e=y(this),data=e.index,t=e.first;t;)t.removed=!0,t.previous&&(t.previous=t.previous.next=void 0),delete data[t.index],t=t.next;e.first=e.last=void 0,I?e.size=0:this.size=0},delete:function(e){var t=this,r=y(t),n=M(t,e);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),I?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=y(this),n=l(e,arguments.length>1?arguments[1]:void 0);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!M(this,e)}}),c(x,r?{get:function(e){var t=M(this,e);return t&&t.value},set:function(e,t){return C(this,0===e?0:e,t)}}:{add:function(e){return C(this,e=0===e?0:e,e)}}),I&&n(x,"size",{get:function(){return y(this).size}}),m},setStrong:function(e,t,r){var n=t+" Iterator",o=w(t),c=w(n);h(e,t,(function(e,t){_(this,{type:n,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=c(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?m("keys"==t?r.key:"values"==t?r.value:[r.key,r.value],!1):(e.target=void 0,m(void 0,!0))}),r?"entries":"values",!r,!0),x(t)}}},451:function(e,t,r){var n=r(26);e.exports=function(e,t,r){for(var o,c,l=r||e.next;!(o=n(l,e)).done;)if(void 0!==(c=t(o.value)))return c}},452:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},453:function(e,t,r){e.exports=function(){"use strict";function e(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)e[t]=source[t]}return e}function t(r,n){function o(t,o,c){if("undefined"!=typeof document){"number"==typeof(c=e({},n,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var d in c)c[d]&&(l+="; "+d,!0!==c[d]&&(l+="="+c[d].split(";")[0]));return document.cookie=t+"="+r.write(o,t)+l}}function c(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],n={},i=0;i<t.length;i++){var o=t[i].split("="),c=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(n[l]=r.read(c,l),e===l)break}catch(e){}}return e?n[e]:n}}return Object.create({set:o,get:c,remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(r){return t(this.converter,e({},this.attributes,r))},withConverter:function(r){return t(e({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(r)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},454:function(e,t,r){"use strict";r(4);var n=r(113),o=r.n(n),c=r(453),l=r.n(c),d=o.a.create({baseURL:"https://sistema-estagio-back-production.up.railway.app/api/v1"}),f=l.a.get("my_token");d.interceptors.request.use((function(e){return e.headers={Authorization:"Bearer ".concat(f)},e}),(function(e){return Promise.reject(e)})),t.a=d},455:function(e,t,r){r(448)},456:function(e,t,r){"use strict";var n=r(5),o=r(444),c=r(446).remove;n({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var e,t=o(this),r=!0,n=0,l=arguments.length;n<l;n++)e=c(t,arguments[n]),r=r&&e;return!!r}})},457:function(e,t,r){"use strict";var n=r(5),o=r(84),c=r(444),l=r(445);n({target:"Map",proto:!0,real:!0,forced:!0},{every:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0);return!1!==l(map,(function(e,r){if(!t(e,r,map))return!1}),!0)}})},458:function(e,t,r){"use strict";var n=r(5),o=r(84),c=r(444),l=r(446),d=r(445),f=l.Map,v=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),r=new f;return d(map,(function(e,n){t(e,n,map)&&v(r,n,e)})),r}})},459:function(e,t,r){"use strict";var n=r(5),o=r(84),c=r(444),l=r(445);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),r=l(map,(function(e,r){if(t(e,r,map))return{value:e}}),!0);return r&&r.value}})},460:function(e,t,r){"use strict";var n=r(5),o=r(84),c=r(444),l=r(445);n({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),r=l(map,(function(e,r){if(t(e,r,map))return{key:r}}),!0);return r&&r.key}})},461:function(e,t,r){"use strict";var n=r(5),o=r(452),c=r(444),l=r(445);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(e){return!0===l(c(this),(function(t){if(o(t,e))return!0}),!0)}})},462:function(e,t,r){"use strict";var n=r(5),o=r(444),c=r(445);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(e){var t=c(o(this),(function(t,r){if(t===e)return{key:r}}),!0);return t&&t.key}})},463:function(e,t,r){"use strict";var n=r(5),o=r(84),c=r(444),l=r(446),d=r(445),f=l.Map,v=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),r=new f;return d(map,(function(e,n){v(r,t(e,n,map),e)})),r}})},464:function(e,t,r){"use strict";var n=r(5),o=r(84),c=r(444),l=r(446),d=r(445),f=l.Map,v=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),r=new f;return d(map,(function(e,n){v(r,n,t(e,n,map))})),r}})},465:function(e,t,r){"use strict";var n=r(5),o=r(444),c=r(204),l=r(446).set;n({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(e){for(var map=o(this),t=arguments.length,i=0;i<t;)c(arguments[i++],(function(e,t){l(map,e,t)}),{AS_ENTRIES:!0});return map}})},466:function(e,t,r){"use strict";var n=r(5),o=r(65),c=r(444),l=r(445),d=TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(e){var map=c(this),t=arguments.length<2,r=t?void 0:arguments[1];if(o(e),l(map,(function(n,o){t?(t=!1,r=n):r=e(r,n,o,map)})),t)throw d("Reduce of empty map with no initial value");return r}})},467:function(e,t,r){"use strict";var n=r(5),o=r(84),c=r(444),l=r(445);n({target:"Map",proto:!0,real:!0,forced:!0},{some:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0);return!0===l(map,(function(e,r){if(t(e,r,map))return!0}),!0)}})},468:function(e,t,r){"use strict";var n=r(5),o=r(65),c=r(444),l=r(446),d=TypeError,f=l.get,v=l.has,h=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{update:function(e,t){var map=c(this),r=arguments.length;o(t);var n=v(map,e);if(!n&&r<3)throw d("Updating absent value");var l=n?f(map,e):o(r>2?arguments[2]:void 0)(e,map);return h(map,e,t(l,e,map)),map}})},469:function(e,t,r){var n=r(297),o=r(39);e.exports=function(e,t,r){return r.get&&n(r.get,t,{getter:!0}),r.set&&n(r.set,t,{setter:!0}),o.f(e,t,r)}},472:function(e,t,r){r(5)({target:"Object",stat:!0},{is:r(295)})},476:function(e,t,r){"use strict";var n=r(28),o=r(93),c=r(49),l=r(54),d=r(469);n&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=c(this),t=l(e);return 0==t?void 0:e[t-1]},set:function(e){var t=c(this),r=l(t);return t[0==r?0:r-1]=e}}),o("lastItem"))},720:function(e,t,r){"use strict";r.r(t);var n=r(225),o=r(632),c=r(447),l=r(644),d=r(440),f=r(711),v=r(710),h=r(626),m=r(200),x=r(643),I=r(438),k=r(616),y=r(53),_=r(133),w=r(21),C=(r(171),r(86),r(454)),M={data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Nome",align:"start",sortable:!1,value:"nome"},{text:"Código",value:"codigoProfessor",sortable:!1},{text:"Email",value:"email",sortable:!1},{text:"Telefone",value:"telefone",sortable:!1},{text:"Ações",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{id:"",nome:"",codigoProfessor:"",email:"",telefone:""},defaultItem:{id:"",nome:"",codigoProfessor:"",email:"",telefone:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Novo Professor":"Editar Professor"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{store:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.post("professores/create",{nome:e.editedItem.nome,email:e.editedItem.email,telefone:e.editedItem.telefone,codigoProfessor:e.editedItem.codigoProfessor});case 3:r=t.sent,console.log(r),e.initialize(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},update:function(e){var t=this;return Object(w.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,C.a.put("professores/".concat(e),t.editedItem);case 3:n=r.sent,console.log(n),t.initialize(),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},destroy:function(e){var t=this;return Object(w.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.delete("professores/".concat(e));case 2:t.initialize();case 3:case"end":return r.stop()}}),r)})))()},initialize:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("professores/findAll");case 2:r=t.sent,e.desserts=r.data;case 4:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.destroy(this.editedItem.id),console.log(this.editedIndex),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(this.update(this.editedItem.id),console.log(this.editedItem)):this.store(),this.close()}}},z=r(62),component=Object(z.a)(M,(function(){var e=this,t=e._self._c;return t(d.a,[t(x.a,[t(l.a,[t(f.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"nome"},scopedSlots:e._u([{key:"top",fn:function(){return[t(y.a,{attrs:{flat:""}},[t(_.b,[e._v("Professores Orientadores")]),e._v(" "),t(h.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(I.a),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[t(n.a,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",c,!1),o),[e._v("\n                  Novo\n                ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(o.a,[t(c.c,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(c.b,[t(d.a,[t(x.a,[t(l.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(k.a,{attrs:{label:"Nome do Professor"},model:{value:e.editedItem.nome,callback:function(t){e.$set(e.editedItem,"nome",t)},expression:"editedItem.nome"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(k.a,{attrs:{label:"E-mail"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1)],1),e._v(" "),t(x.a,[t(l.a,{attrs:{cols:"6"}},[t(k.a,{attrs:{label:"Telefone"},model:{value:e.editedItem.telefone,callback:function(t){e.$set(e.editedItem,"telefone",t)},expression:"editedItem.telefone"}})],1),e._v(" "),t(l.a,{attrs:{cols:"6"}},[t(k.a,{attrs:{label:"Código"},model:{value:e.editedItem.codigoProfessor,callback:function(t){e.$set(e.editedItem,"codigoProfessor",t)},expression:"editedItem.codigoProfessor"}})],1)],1)],1)],1),e._v(" "),t(c.a,[t(I.a),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                    Cancelar\n                  ")]),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                    Salvar\n                  ")])],1)],1)],1),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(o.a,[t(c.c,{staticClass:"text-h5"},[e._v("Tem certeza que deseja apagar este item?")]),e._v(" "),t(c.a,[t(I.a),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t(I.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(r){var n=r.item;return[t(m.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v("\n            mdi-pencil\n          ")]),e._v(" "),t(m.a,{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[t(n.a,{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);