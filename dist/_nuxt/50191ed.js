(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{743:function(e,t,r){"use strict";r.r(t);var n=r(232),o=r(646),c=r(453),d=r(737),l=r(450),m=r(739),v=r(697),f=r(643),h=r(204),x=r(202),I=r(657),_=r(736),k=r(448),w=r(604),C=r(52),y=r(136),D=r(18),O=(r(29),r(174),r(77),r(87)),j=r.n(O),R=r(209),z={data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Nome",align:"start",sortable:!1,value:"nome"},{text:"Descrição",value:"descricao",sortable:!1},{text:"Departamento",value:"departamento",sortable:!1},{text:"Ações",value:"actions",sortable:!1}],desserts:[],rules:{required:function(e){return!!e||"Campo obrigatório"}},editedIndex:-1,editedItem:{id:"",nome:"",descricao:"",departamento:""},defaultItem:{id:"",nome:"",descricao:"",departamento:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Novo Curso":"Editar Curso"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{store:function(){var e=this;return Object(D.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.post("".concat(R.a,"cursos/create"),{nome:e.editedItem.nome,descricao:e.editedItem.descricao,departamento:e.editedItem.departamento},{headers:"Access-Control-Allow-Origin: *"});case 3:r=t.sent,console.log(r),e.initialize(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},update:function(e){var t=this;return Object(D.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,j.a.put("".concat(R.a,"cursos/").concat(e),t.editedItem);case 3:n=r.sent,console.log(n),t.initialize(),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},destroy:function(e){var t=this;return Object(D.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.a.delete("".concat(R.a,"cursos/").concat(e));case 2:t.initialize();case 3:case"end":return r.stop()}}),r)})))()},initialize:function(){var e=this;return Object(D.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("".concat(R.a,"cursos/findAll"));case 2:r=t.sent,e.desserts=r.data;case 4:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.destroy(this.editedItem.id),console.log(this.editedIndex),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(this.update(this.editedItem.id),console.log(this.editedItem)):this.store(),this.close()}}},T=r(62),component=Object(T.a)(z,(function(){var e=this,t=e._self._c;return t(l.a,[t(_.a,[t(d.a,[t(m.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"nome"},scopedSlots:e._u([{key:"top",fn:function(){return[t(C.a,{attrs:{flat:""}},[t(y.b,[e._v("Cursos")]),e._v(" "),t(f.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(k.a),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[t(n.a,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",c,!1),o),[e._v("\n                  Novo\n                ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(o.a,[t(c.c,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(c.b,[t(l.a,[t(_.a,[t(d.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(w.a,{attrs:{rules:[e.rules.required],label:"Nome do Curso"},model:{value:e.editedItem.nome,callback:function(t){e.$set(e.editedItem,"nome",t)},expression:"editedItem.nome"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(w.a,{attrs:{rules:[e.rules.required],label:"Departamento"},model:{value:e.editedItem.departamento,callback:function(t){e.$set(e.editedItem,"departamento",t)},expression:"editedItem.departamento"}})],1)],1),e._v(" "),t(_.a,[t(d.a,{attrs:{cols:"12"}},[t(w.a,{attrs:{rules:[e.rules.required],label:"Descrição"},model:{value:e.editedItem.descricao,callback:function(t){e.$set(e.editedItem,"descricao",t)},expression:"editedItem.descricao"}})],1)],1)],1)],1),e._v(" "),t(c.a,[t(k.a),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                    Cancelar\n                  ")]),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("\n                    Salvar\n                  ")])],1)],1)],1),e._v(" "),t(v.a,{attrs:{"max-width":"600px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(o.a,[t(c.c,{staticClass:"text-h5"},[e._v("Tem certeza que deseja apagar este item?")]),e._v(" "),t(c.a,[t(k.a),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t(k.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(r){var o=r.item;return[t("div",{staticClass:"text-center"},[t(I.a,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t(h.a,e._g(e._b({staticClass:"mr-2",attrs:{small:"",color:"primary",dark:""}},"v-icon",o,!1),n),[e._v("\n                  mdi-dots-vertical\n                ")])]}}],null,!0)},[e._v(" "),t(x.a,[t("div",[t(n.a,{attrs:{color:"primary","x-small":"",text:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n                    Editar\n                  ")])],1),e._v(" "),t("div",[t(n.a,{attrs:{color:"primary","x-small":"",text:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n                    Excluir\n                  ")])],1)])],1)],1)]}},{key:"no-data",fn:function(){return[t(n.a,{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);