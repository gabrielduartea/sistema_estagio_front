(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1261:function(e,t,r){"use strict";r.r(t);var n=r(238),o=r(1144),c=r(458),l=r(1138),d=r(450),f=r(1258),v=r(1191),m=r(1141),h=r(204),x=r(202),k=r(1158),I=r(1137),y=r(448),_=r(630),w=r(52),M=r(136),E=r(18),j=(r(79),r(27),r(29),r(175),r(89)),z=r.n(j),C=r(211),O={data:function(){return{dialog:!1,dialogDelete:!1,email:[function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"E-mail invalido"}],headers:[{text:"Nome",align:"start",sortable:!1,value:"nome"},{text:"CNPJ",value:"cnpj",sortable:!1},{text:"Email",value:"email",sortable:!1},{text:"Telefone",value:"telefone",sortable:!1},{text:"Endereço",value:"endereco",sortable:!1},{text:"Ações",value:"actions",sortable:!1}],rules:{required:function(e){return!!e||"Campo obrigatório"},cnpj:function(e){return String(e).length>13||"Incompleto"},telefone:function(e){return String(e).length>14||"Incompleto"}},desserts:[],editedIndex:-1,editedItem:{id:"",nome:"",cnpj:"",email:"",telefone:"",endereco:""},defaultItem:{id:"",nome:"",cnpj:"",email:"",telefone:"",endereco:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nova Empresa":"Editar Empresa"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{store:function(){var e=this;return Object(E.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,z.a.post("".concat(C.a,"empresas/create"),{nome:e.editedItem.nome,cnpj:e.editedItem.cnpj,email:e.editedItem.email,telefone:e.editedItem.telefone,endereco:e.editedItem.endereco});case 3:r=t.sent,console.log(r),e.initialize(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},update:function(e){var t=this;return Object(E.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,z.a.put("".concat(C.a,"empresas/").concat(e),t.editedItem);case 3:n=r.sent,console.log(n),t.initialize(),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},destroy:function(e){var t=this;return Object(E.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,z.a.delete("".concat(C.a,"empresas/").concat(e));case 2:t.initialize();case 3:case"end":return r.stop()}}),r)})))()},initialize:function(){var e=this;return Object(E.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.a.get("".concat(C.a,"empresas/findAll"));case 2:r=t.sent,e.desserts=r.data;case 4:case"end":return t.stop()}}),t)})))()},companyMore:function(e){this.$router.push("/companies/".concat(e))},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.destroy(this.editedItem.id),console.log(this.editedIndex),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(this.update(this.editedItem.id),console.log(this.editedItem)):this.store(),this.close()}}},S=r(63),component=Object(S.a)(O,(function(){var e=this,t=e._self._c;return t(d.a,[t("NuxtChild",{key:e.$route.params.id}),e._v(" "),t(I.a,[t(l.a,[t(f.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"nome"},scopedSlots:e._u([{key:"top",fn:function(){return[t(w.a,{attrs:{flat:""}},[t(M.b,[e._v("Empresas")]),e._v(" "),t(m.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(y.a),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[t(n.a,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",c,!1),o),[e._v("\n                  Novo\n                ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(o.a,[t(c.c,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(c.b,[t(d.a,[t(I.a,[t(l.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(_.a,{attrs:{label:"Nome da empresa",rules:[e.rules.required]},model:{value:e.editedItem.nome,callback:function(t){e.$set(e.editedItem,"nome",t)},expression:"editedItem.nome"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(_.a,{directives:[{name:"mask",rawName:"v-mask",value:"##.###.###/####-##",expression:"'##.###.###/####-##'"}],attrs:{label:"CNPJ",rules:[e.rules.cnpj]},model:{value:e.editedItem.cnpj,callback:function(t){e.$set(e.editedItem,"cnpj",t)},expression:"editedItem.cnpj"}})],1)],1),e._v(" "),t(I.a,[t(l.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(_.a,{attrs:{label:"Email",rules:e.email},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),e._v(" "),t(l.a,{attrs:{cols:"6"}},[t(_.a,{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],attrs:{label:"Telefone",rules:[e.rules.telefone]},model:{value:e.editedItem.telefone,callback:function(t){e.$set(e.editedItem,"telefone",t)},expression:"editedItem.telefone"}})],1)],1),e._v(" "),t(I.a,[t(l.a,{attrs:{cols:"6"}},[t(_.a,{attrs:{label:"Endereço",rules:[e.rules.required]},model:{value:e.editedItem.endereco,callback:function(t){e.$set(e.editedItem,"endereco",t)},expression:"editedItem.endereco"}})],1)],1)],1)],1),e._v(" "),t(c.a,[t(y.a),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                    Cancelar\n                  ")]),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                    Salvar\n                  ")])],1)],1)],1),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(o.a,[t(c.c,{staticClass:"text-h5"},[e._v("Tem certeza que deseja apagar este item?")]),e._v(" "),t(c.a,[t(y.a),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t(y.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(r){var o=r.item;return[t("div",{staticClass:"text-center"},[t(k.a,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t(h.a,e._g(e._b({staticClass:"mr-2",attrs:{small:"",color:"primary",dark:""}},"v-icon",o,!1),n),[e._v("\n                  mdi-dots-vertical\n                ")])]}}],null,!0)},[e._v(" "),t(x.a,[t("div",[t(n.a,{attrs:{color:"primary","x-small":"",text:""},on:{click:function(t){return e.companyMore(o.id)}}},[e._v("\n                    Gerenciar Supervisores\n                  ")])],1),e._v(" "),t("div",[t(n.a,{attrs:{color:"primary","x-small":"",text:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n                    Editar\n                  ")])],1),e._v(" "),t("div",[t(n.a,{attrs:{color:"primary","x-small":"",text:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n                    Excluir\n                  ")])],1)])],1)],1)]}},{key:"no-data",fn:function(){return[t(n.a,{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},455:function(e,t,r){"use strict";var n=r(457).has;e.exports=function(e){return n(e),e}},456:function(e,t,r){"use strict";var n=r(7),o=r(464),c=r(457),l=c.Map,d=c.proto,f=n(d.forEach),v=n(d.entries),m=v(new l).next;e.exports=function(map,e,t){return t?o({iterator:v(map),next:m},(function(t){return e(t[1],t[0])})):f(map,e)}},457:function(e,t,r){"use strict";var n=r(7),o=Map.prototype;e.exports={Map:Map,set:n(o.set),get:n(o.get),has:n(o.has),remove:n(o.delete),proto:o}},461:function(e,t,r){"use strict";r(462)("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),r(463))},462:function(e,t,r){"use strict";var n=r(5),o=r(16),c=r(7),l=r(137),d=r(43),f=r(302),v=r(209),m=r(210),h=r(17),x=r(77),k=r(36),I=r(6),y=r(212),_=r(116),w=r(214);e.exports=function(e,t,r){var M=-1!==e.indexOf("Map"),E=-1!==e.indexOf("Weak"),j=M?"set":"add",z=o[e],C=z&&z.prototype,O=z,S={},R=function(e){var t=c(C[e]);d(C,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(E&&!k(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return E&&!k(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(E&&!k(e))&&t(this,0===e?0:e)}:function(e,r){return t(this,0===e?0:e,r),this})};if(l(e,!h(z)||!(E||C.forEach&&!I((function(){(new z).entries().next()})))))O=r.getConstructor(t,e,M,j),f.enable();else if(l(e,!0)){var N=new O,T=N[j](E?{}:-0,1)!=N,D=I((function(){N.has(1)})),$=y((function(e){new z(e)})),A=!E&&I((function(){for(var e=new z,t=5;t--;)e[j](t,t);return!e.has(-0)}));$||((O=t((function(e,t){m(e,C);var r=w(new z,e,O);return x(t)||v(t,r[j],{that:r,AS_ENTRIES:M}),r}))).prototype=C,C.constructor=O),(D||A)&&(R("delete"),R("has"),M&&R("get")),(A||T)&&R(j),E&&C.clear&&delete C.clear}return S[e]=O,n({global:!0,constructor:!0,forced:O!=z},S),_(O,e),E||r.setStrong(O,e,M),O}},463:function(e,t,r){"use strict";var n=r(87),o=r(115),c=r(303),l=r(85),d=r(210),f=r(77),v=r(209),m=r(216),h=r(217),x=r(213),k=r(28),I=r(302).fastKey,y=r(78),_=y.set,w=y.getterFor;e.exports={getConstructor:function(e,t,r,m){var h=e((function(e,o){d(e,x),_(e,{type:t,index:n(null),first:void 0,last:void 0,size:0}),k||(e.size=0),f(o)||v(o,e[m],{that:e,AS_ENTRIES:r})})),x=h.prototype,y=w(t),M=function(e,t,r){var n,o,c=y(e),l=E(e,t);return l?l.value=r:(c.last=l={index:o=I(t,!0),key:t,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),k?c.size++:e.size++,"F"!==o&&(c.index[o]=l)),e},E=function(e,t){var r,n=y(e),o=I(t);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==t)return r};return c(x,{clear:function(){for(var e=y(this),data=e.index,t=e.first;t;)t.removed=!0,t.previous&&(t.previous=t.previous.next=void 0),delete data[t.index],t=t.next;e.first=e.last=void 0,k?e.size=0:this.size=0},delete:function(e){var t=this,r=y(t),n=E(t,e);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),k?r.size--:t.size--}return!!n},forEach:function(e){for(var t,r=y(this),n=l(e,arguments.length>1?arguments[1]:void 0);t=t?t.next:r.first;)for(n(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!E(this,e)}}),c(x,r?{get:function(e){var t=E(this,e);return t&&t.value},set:function(e,t){return M(this,0===e?0:e,t)}}:{add:function(e){return M(this,e=0===e?0:e,e)}}),k&&o(x,"size",{configurable:!0,get:function(){return y(this).size}}),h},setStrong:function(e,t,r){var n=t+" Iterator",o=w(t),c=w(n);m(e,t,(function(e,t){_(this,{type:n,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=c(this),t=e.kind,r=e.last;r&&r.removed;)r=r.previous;return e.target&&(e.last=r=r?r.next:e.state.first)?h("keys"==t?r.key:"values"==t?r.value:[r.key,r.value],!1):(e.target=void 0,h(void 0,!0))}),r?"entries":"values",!r,!0),x(t)}}},464:function(e,t,r){"use strict";var n=r(26);e.exports=function(e,t,r){for(var o,c,l=r?e:e.iterator,d=e.next;!(o=n(d,l)).done;)if(void 0!==(c=t(o.value)))return c}},465:function(e,t,r){"use strict";e.exports=function(e,t){return e===t||e!=e&&t!=t}},468:function(e,t,r){"use strict";r(461)},469:function(e,t,r){"use strict";var n=r(5),o=r(455),c=r(457).remove;n({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var e,t=o(this),r=!0,n=0,l=arguments.length;n<l;n++)e=c(t,arguments[n]),r=r&&e;return!!r}})},470:function(e,t,r){"use strict";var n=r(5),o=r(85),c=r(455),l=r(456);n({target:"Map",proto:!0,real:!0,forced:!0},{every:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0);return!1!==l(map,(function(e,r){if(!t(e,r,map))return!1}),!0)}})},471:function(e,t,r){"use strict";var n=r(5),o=r(85),c=r(455),l=r(457),d=r(456),f=l.Map,v=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),r=new f;return d(map,(function(e,n){t(e,n,map)&&v(r,n,e)})),r}})},472:function(e,t,r){"use strict";var n=r(5),o=r(85),c=r(455),l=r(456);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),r=l(map,(function(e,r){if(t(e,r,map))return{value:e}}),!0);return r&&r.value}})},473:function(e,t,r){"use strict";var n=r(5),o=r(85),c=r(455),l=r(456);n({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),r=l(map,(function(e,r){if(t(e,r,map))return{key:r}}),!0);return r&&r.key}})},474:function(e,t,r){"use strict";var n=r(5),o=r(465),c=r(455),l=r(456);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(e){return!0===l(c(this),(function(t){if(o(t,e))return!0}),!0)}})},475:function(e,t,r){"use strict";var n=r(5),o=r(455),c=r(456);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(e){var t=c(o(this),(function(t,r){if(t===e)return{key:r}}),!0);return t&&t.key}})},476:function(e,t,r){"use strict";var n=r(5),o=r(85),c=r(455),l=r(457),d=r(456),f=l.Map,v=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),r=new f;return d(map,(function(e,n){v(r,t(e,n,map),e)})),r}})},477:function(e,t,r){"use strict";var n=r(5),o=r(85),c=r(455),l=r(457),d=r(456),f=l.Map,v=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0),r=new f;return d(map,(function(e,n){v(r,n,t(e,n,map))})),r}})},478:function(e,t,r){"use strict";var n=r(5),o=r(455),c=r(209),l=r(457).set;n({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(e){for(var map=o(this),t=arguments.length,i=0;i<t;)c(arguments[i++],(function(e,t){l(map,e,t)}),{AS_ENTRIES:!0});return map}})},479:function(e,t,r){"use strict";var n=r(5),o=r(62),c=r(455),l=r(456),d=TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(e){var map=c(this),t=arguments.length<2,r=t?void 0:arguments[1];if(o(e),l(map,(function(n,o){t?(t=!1,r=n):r=e(r,n,o,map)})),t)throw d("Reduce of empty map with no initial value");return r}})},480:function(e,t,r){"use strict";var n=r(5),o=r(85),c=r(455),l=r(456);n({target:"Map",proto:!0,real:!0,forced:!0},{some:function(e){var map=c(this),t=o(e,arguments.length>1?arguments[1]:void 0);return!0===l(map,(function(e,r){if(t(e,r,map))return!0}),!0)}})},481:function(e,t,r){"use strict";var n=r(5),o=r(62),c=r(455),l=r(457),d=TypeError,f=l.get,v=l.has,m=l.set;n({target:"Map",proto:!0,real:!0,forced:!0},{update:function(e,t){var map=c(this),r=arguments.length;o(t);var n=v(map,e);if(!n&&r<3)throw d("Updating absent value");var l=n?f(map,e):o(r>2?arguments[2]:void 0)(e,map);return m(map,e,t(l,e,map)),map}})},618:function(e,t,r){"use strict";r(5)({target:"Object",stat:!0},{is:r(304)})},624:function(e,t,r){"use strict";var n=r(28),o=r(95),c=r(49),l=r(53),d=r(115);n&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=c(this),t=l(e);return 0==t?void 0:e[t-1]},set:function(e){var t=c(this),r=l(t);return t[0==r?0:r-1]=e}}),o("lastItem"))}}]);