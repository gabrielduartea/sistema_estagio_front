(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{756:function(e,t,n){"use strict";n.r(t);var r=n(232),o=n(646),l=n(453),c=n(740),d=n(450),m=n(742),v=n(697),f=n(643),_=n(204),h=n(739),x=n(645),I=n(448),k=n(600),y=n(52),w=n(136),C=n(18),O=(n(29),n(174),n(77),n(87)),j=n.n(O),D=n(209),R={data:function(){return{empresaId:"",dialog:!1,dialogDelete:!1,headers:[{text:"Nome",align:"start",sortable:!1,value:"nome"},{text:"Email",value:"email",sortable:!1},{text:"Telefone",value:"telefone",sortable:!1},{text:"Ações",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{id:"",nome:"",empresaId:"",email:"",telefone:""},defaultItem:{id:"",nome:"",empresaId:"",email:"",telefone:""},company_details:{id:"",nome:"",empresaId:"",email:"",telefone:"",endereco:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Novo Supervisor":"Editar Supervisor"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{store:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("".concat(D.a,"supervisores/create"),{nome:e.editedItem.nome,email:e.editedItem.email,telefone:e.editedItem.telefone,empresaId:e.$route.params.id});case 3:n=t.sent,console.log(n),e.initialize(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},update:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,j.a.put("".concat(D.a,"supervisores/").concat(e),t.editedItem);case 3:r=n.sent,console.log(r),t.initialize(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},destroy:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.a.delete("".concat(D.a,"supervisores/").concat(e));case 2:t.initialize();case 3:case"end":return n.stop()}}),n)})))()},showSupervisors:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat(D.a,"supervisores/findAllEmpresa/").concat(t.empresaId));case 2:n=e.sent,t.desserts=n.data;case 5:case"end":return e.stop()}}),e)})))()},initialize:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.empresaId=e.$route.params.id,t.next=3,j.a.get("".concat(D.a,"empresas/").concat(e.empresaId));case 3:n=t.sent,e.showSupervisors(e.empresaId),e.company_details=n.data,console.log(e.company_details);case 8:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.destroy(this.editedItem.id),console.log(this.editedIndex),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(this.update(this.editedItem.id),console.log(this.editedItem)):this.store(),this.close()}}},S=n(62),component=Object(S.a)(R,(function(){var e=this,t=e._self._c;return t(d.a,[t(h.a,[t(c.a,[t("NuxtLink",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:"/companies"}},[t(r.a,{attrs:{color:"primary","x-small":"",text:""}},[t(_.a,{attrs:{small:""}},[e._v(" mdi-chevron-left ")]),e._v(" Voltar\n        ")],1)],1)],1)],1),e._v(" "),t(h.a,[t(c.a,[t(x.a,{staticClass:"elevation-1",attrs:{dense:""},scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("Nome")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("CNPJ")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("Email")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("Telefone")]),e._v(" "),t("th",{staticClass:"text-left"},[e._v("Endereço")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v(e._s(e.company_details.nome))]),e._v(" "),t("td",[e._v(e._s(e.company_details.cnpj))]),e._v(" "),t("td",[e._v(e._s(e.company_details.email))]),e._v(" "),t("td",[e._v(e._s(e.company_details.telefone))]),e._v(" "),t("td",[e._v(e._s(e.company_details.endereco))])])])]},proxy:!0}])})],1)],1),e._v(" "),t(h.a,[t(c.a,[t(m.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"nome"},scopedSlots:e._u([{key:"top",fn:function(){return[t(y.a,{attrs:{flat:""}},[t(w.b,[e._v("Supervisores")]),e._v(" "),t(f.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(I.a),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[t(r.a,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",l,!1),o),[e._v("\n                  Novo\n                ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(o.a,[t(l.c,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(l.b,[t(d.a,[t(h.a,[t(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(k.a,{attrs:{label:"Nome"},model:{value:e.editedItem.nome,callback:function(t){e.$set(e.editedItem,"nome",t)},expression:"editedItem.nome"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(k.a,{attrs:{label:"Email"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1)],1),e._v(" "),t(h.a,[t(c.a,{attrs:{cols:"6"}},[t(k.a,{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],attrs:{label:"Telefone"},model:{value:e.editedItem.telefone,callback:function(t){e.$set(e.editedItem,"telefone",t)},expression:"editedItem.telefone"}})],1)],1)],1)],1),e._v(" "),t(l.a,[t(I.a),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                    Cancelar\n                  ")]),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                    Salvar\n                  ")])],1)],1)],1),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(o.a,[t(l.c,{staticClass:"text-h5"},[e._v("Tem certeza que deseja apagar este item?")]),e._v(" "),t(l.a,[t(I.a),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e._v(" "),t(r.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t(I.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(n){var r=n.item;return[t(_.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("\n            mdi-pencil\n          ")]),e._v(" "),t(_.a,{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[t(r.a,{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);