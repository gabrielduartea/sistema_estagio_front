(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{719:function(e,t,n){"use strict";n.r(t);var r=n(634),o=n(225),l=n(632),d=n(447),c=n(644),m=n(440),v=n(711),f=n(710),I=n(626),h=n(686),x=n(200),k=n(643),_=n(438),w=n(615),C=n(53),y=n(133),O=n(21),j=(n(86),n(27),n(171),n(113)),D=n.n(j),R=n(475),z=n.n(R),$={data:function(){return{itemsCourses:[],email:[function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"E-mail invalido"}],valid:!1,dialog:!1,dialogDelete:!1,headers:[{text:"Nome",align:"start",sortable:!1,value:"nome"},{text:"Curso",value:"course_nome",sortable:!1},{text:"Email",value:"email",sortable:!1},{text:"Telefone",value:"telefone",sortable:!1},{text:"CPF",value:"cpf",sortable:!1},{text:"Endereço",value:"enderesso",sortable:!1},{text:"Matrícula",value:"matricula",sortable:!1},{text:"Ações",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{id:"",nome:"",cursoId:"",email:"",telefone:"",cpf:"",enderesso:"",matricula:""},defaultItem:{id:"",nome:"",coursoId:"",email:"",telefone:"",cpf:"",enderesso:"",matricula:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Novo Estudante":"Editar Estudante"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{getCourses:function(){var e=this;return Object(O.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("https://sistema-estagio-back-production.up.railway.app/api/v1/cursos/findAll");case 2:n=t.sent,e.itemsCourses=n.data;case 5:case"end":return t.stop()}}),t)})))()},store:function(){var e=this;return Object(O.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=z.a.get("my_token"),t.next=4,D.a.post("https://sistema-estagio-back-production.up.railway.app/api/v1/alunos/create",{nome:e.editedItem.nome,cursoId:e.editedItem.cursoId,email:e.editedItem.email,telefone:e.editedItem.telefone,cpf:e.editedItem.cpf,enderesso:e.editedItem.enderesso,matricula:e.editedItem.matricula},{headers:{"Content-Type":"application/json",Authorization:"Basic "+n}});case 4:r=t.sent,console.log(r),e.initialize(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},update:function(e){var t=this;return Object(O.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,D.a.put("https://sistema-estagio-back-production.up.railway.app/api/v1/alunos/".concat(e),t.editedItem);case 3:r=n.sent,console.log(r),t.initialize(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},destroy:function(e){var t=this;return Object(O.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D.a.delete("https://sistema-estagio-back-production.up.railway.app/api/v1/alunos/".concat(e));case 2:t.initialize();case 3:case"end":return n.stop()}}),n)})))()},initialize:function(){var e=this;return Object(O.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("https://sistema-estagio-back-production.up.railway.app/api/v1/alunos/findAll");case 2:return n=t.sent,e.desserts=n.data,t.next=7,e.getCourses();case 7:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.destroy(this.editedItem.id),console.log(this.editedIndex),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(this.update(this.editedItem.id),console.log(this.editedItem)):this.store(),this.close()}}},E=n(62),component=Object(E.a)($,(function(){var e=this,t=e._self._c;return t(m.a,[t(k.a,[t(c.a,[t(v.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"nome"},scopedSlots:e._u([{key:"top",fn:function(){return[t(C.a,{attrs:{flat:""}},[t(y.b,[e._v("Estudantes")]),e._v(" "),t(I.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(_.a),e._v(" "),t(f.a,{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",l,!1),r),[e._v("\n                  Novo\n                ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(l.a,[t(d.c,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(d.b,[t(h.a,{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(k.a,[t(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(w.a,{attrs:{label:"Nome Completo"},model:{value:e.editedItem.nome,callback:function(t){e.$set(e.editedItem,"nome",t)},expression:"editedItem.nome"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(r.a,{attrs:{label:"Curso",items:e.itemsCourses,"item-text":"nome","item-value":"id"},model:{value:e.editedItem.cursoId,callback:function(t){e.$set(e.editedItem,"cursoId",t)},expression:"editedItem.cursoId"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(w.a,{attrs:{label:"Email",rules:e.email},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(w.a,{attrs:{label:"Telefone"},model:{value:e.editedItem.telefone,callback:function(t){e.$set(e.editedItem,"telefone",t)},expression:"editedItem.telefone"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(w.a,{attrs:{label:"CPF"},model:{value:e.editedItem.cpf,callback:function(t){e.$set(e.editedItem,"cpf",t)},expression:"editedItem.cpf"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(w.a,{attrs:{label:"Matrícula"},model:{value:e.editedItem.matricula,callback:function(t){e.$set(e.editedItem,"matricula",t)},expression:"editedItem.matricula"}})],1)],1),e._v(" "),t(k.a,[t(c.a,{attrs:{cols:"12"}},[t(w.a,{attrs:{label:"Endereço"},model:{value:e.editedItem.enderesso,callback:function(t){e.$set(e.editedItem,"enderesso",t)},expression:"editedItem.enderesso"}})],1)],1)],1)],1),e._v(" "),t(d.a,[t(_.a),e._v(" "),t(o.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                    Cancelar\n                  ")]),e._v(" "),t(o.a,{attrs:{color:"blue darken-1",text:"",disabled:!e.valid},on:{click:e.save}},[e._v("\n                    Salvar\n                  ")])],1)],1)],1),e._v(" "),t(f.a,{attrs:{"max-width":"600px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(l.a,[t(d.c,{staticClass:"text-h5"},[e._v("Tem certeza que deseja apagar este item?")]),e._v(" "),t(d.a,[t(_.a),e._v(" "),t(o.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e._v(" "),t(o.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t(_.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(n){var r=n.item;return[t(x.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("\n            mdi-pencil\n          ")]),e._v(" "),t(x.a,{attrs:{small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[t(o.a,{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);