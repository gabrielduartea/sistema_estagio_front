(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{741:function(e,t,n){"use strict";n.r(t);var r=n(232),o=n(646),l=n(453),c=n(737),d=n(450),m=n(739),v=n(697),f=n(643),x=n(204),h=n(202),I=n(657),_=n(736),k=n(448),j=n(604),y=n(52),w=n(136),C=n(18),O=(n(77),n(27),n(29),n(174),n(87)),D=n.n(O),E=n(209),$={data:function(){return{dialog:!1,dialogDelete:!1,email:[function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"E-mail invalido"}],headers:[{text:"Nome",align:"start",sortable:!1,value:"nome"},{text:"CNPJ",value:"cnpj",sortable:!1},{text:"Email",value:"email",sortable:!1},{text:"Telefone",value:"telefone",sortable:!1},{text:"Endereço",value:"endereco",sortable:!1},{text:"Ações",value:"actions",sortable:!1}],rules:{required:function(e){return!!e||"Campo obrigatório"},cnpj:function(e){return String(e).length>13||"Incompleto"},telefone:function(e){return String(e).length>14||"Incompleto"}},desserts:[],editedIndex:-1,editedItem:{id:"",nome:"",cnpj:"",email:"",telefone:"",endereco:""},defaultItem:{id:"",nome:"",cnpj:"",email:"",telefone:"",endereco:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nova Empresa":"Editar Empresa"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{store:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.a.post("".concat(E.a,"empresas/create"),{nome:e.editedItem.nome,cnpj:e.editedItem.cnpj,email:e.editedItem.email,telefone:e.editedItem.telefone,endereco:e.editedItem.endereco});case 3:n=t.sent,console.log(n),e.initialize(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},update:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D.a.put("".concat(E.a,"empresas/").concat(e),t.editedItem);case 3:r=n.sent,console.log(r),t.initialize(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},destroy:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D.a.delete("".concat(E.a,"empresas/").concat(e));case 2:t.initialize();case 3:case"end":return n.stop()}}),n)})))()},initialize:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("".concat(E.a,"empresas/findAll"));case 2:n=t.sent,e.desserts=n.data;case 4:case"end":return t.stop()}}),t)})))()},companyMore:function(e){this.$router.push("/companies/".concat(e))},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.destroy(this.editedItem.id),console.log(this.editedIndex),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(this.update(this.editedItem.id),console.log(this.editedItem)):this.store(),this.close()}}},z=n(62),component=Object(z.a)($,(function(){var e=this,t=e._self._c;return t(d.a,[t("NuxtChild",{key:e.$route.params.id}),e._v(" "),t(_.a,[t(c.a,[t(m.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"nome"},scopedSlots:e._u([{key:"top",fn:function(){return[t(y.a,{attrs:{flat:""}},[t(w.b,[e._v("Empresas")]),e._v(" "),t(f.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(k.a),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[t(r.a,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",l,!1),o),[e._v("\n                  Novo\n                ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(o.a,[t(l.c,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(l.b,[t(d.a,[t(_.a,[t(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(j.a,{attrs:{label:"Nome da empresa",rules:[e.rules.required]},model:{value:e.editedItem.nome,callback:function(t){e.$set(e.editedItem,"nome",t)},expression:"editedItem.nome"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(j.a,{directives:[{name:"mask",rawName:"v-mask",value:"##.###.###/####-##",expression:"'##.###.###/####-##'"}],attrs:{label:"CNPJ",rules:[e.rules.cnpj]},model:{value:e.editedItem.cnpj,callback:function(t){e.$set(e.editedItem,"cnpj",t)},expression:"editedItem.cnpj"}})],1)],1),e._v(" "),t(_.a,[t(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(j.a,{attrs:{label:"Email",rules:e.email},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],attrs:{label:"Telefone",rules:[e.rules.telefone]},model:{value:e.editedItem.telefone,callback:function(t){e.$set(e.editedItem,"telefone",t)},expression:"editedItem.telefone"}})],1)],1),e._v(" "),t(_.a,[t(c.a,{attrs:{cols:"6"}},[t(j.a,{attrs:{label:"Endereço",rules:[e.rules.required]},model:{value:e.editedItem.endereco,callback:function(t){e.$set(e.editedItem,"endereco",t)},expression:"editedItem.endereco"}})],1)],1)],1)],1),e._v(" "),t(l.a,[t(k.a),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                    Cancelar\n                  ")]),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                    Salvar\n                  ")])],1)],1)],1),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(o.a,[t(l.c,{staticClass:"text-h5"},[e._v("Tem certeza que deseja apagar este item?")]),e._v(" "),t(l.a,[t(k.a),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t(k.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(n){var o=n.item;return[t("div",{staticClass:"text-center"},[t(I.a,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(x.a,e._g(e._b({staticClass:"mr-2",attrs:{small:"",color:"primary",dark:""}},"v-icon",o,!1),r),[e._v("\n                  mdi-dots-vertical\n                ")])]}}],null,!0)},[e._v(" "),t(h.a,[t("div",[t(r.a,{attrs:{color:"primary","x-small":"",text:""},on:{click:function(t){return e.companyMore(o.id)}}},[e._v("\n                    Gerenciar Supervisores\n                  ")])],1),e._v(" "),t("div",[t(r.a,{attrs:{color:"primary","x-small":"",text:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n                    Editar\n                  ")])],1),e._v(" "),t("div",[t(r.a,{attrs:{color:"primary","x-small":"",text:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n                    Excluir\n                  ")])],1)])],1)],1)]}},{key:"no-data",fn:function(){return[t(r.a,{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);