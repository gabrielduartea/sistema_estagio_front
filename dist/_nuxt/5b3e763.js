(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{454:function(e,t,r){"use strict";t.a="http://localhost:3003/api/v1/"},650:function(e,t,r){"use strict";var n=r(2),o=(r(57),r(68),r(175),r(8),r(4),r(13),r(69),r(173),r(11),r(10),r(19),r(20),r(14)),l=r(99),c=r(137);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},747:function(e,t,r){"use strict";r.r(t);var n=r(231),o=r(646),l=r(453),c=r(737),d=r(450),f=r(739),m=r(697),v=r(643),h=r(650),x=r(204),_=r(202),I=r(657),k=r(736),w=r(448),O=r(605),y=r(52),j=r(136),P=r(18),C=(r(77),r(27),r(29),r(174),r(87)),D=r.n(C),$=r(454),E={data:function(){return{dialog:!1,dialogDelete:!1,valid:!1,email:[function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"E-mail invalido"}],rules:{required:function(e){return!!e||"Campo obrigatório"},cpf:function(e){return String(e).length>13||"Incompleto"},telefone:function(e){return String(e).length>14||"Incompleto"}},headers:[{text:"Nome",align:"start",sortable:!1,value:"nome"},{text:"Código",value:"codigoProfessor",sortable:!1},{text:"Email",value:"email",sortable:!1},{text:"Telefone",value:"telefone",sortable:!1},{text:"Ações",value:"actions",sortable:!1}],desserts:[],editedIndex:-1,editedItem:{id:"",nome:"",codigoProfessor:"",email:"",telefone:""},defaultItem:{id:"",nome:"",codigoProfessor:"",email:"",telefone:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"Novo Professor":"Editar Professor"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{store:function(){var e=this;return Object(P.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.a.post("".concat($.a,"professores/create"),{nome:e.editedItem.nome,email:e.editedItem.email,telefone:e.editedItem.telefone,codigoProfessor:e.editedItem.codigoProfessor});case 3:r=t.sent,console.log(r),e.initialize(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},update:function(e){var t=this;return Object(P.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,D.a.put("".concat($.a,"professores/").concat(e),t.editedItem);case 3:n=r.sent,console.log(n),t.initialize(),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},destroy:function(e){var t=this;return Object(P.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,D.a.delete("".concat($.a,"professores/").concat(e));case 2:t.initialize();case 3:case"end":return r.stop()}}),r)})))()},initialize:function(){var e=this;return Object(P.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("".concat($.a,"professores/findAll"));case 2:r=t.sent,e.desserts=r.data;case 4:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.desserts.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.desserts.splice(this.editedIndex,1),this.destroy(this.editedItem.id),console.log(this.editedIndex),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(this.update(this.editedItem.id),console.log(this.editedItem)):this.store(),this.close()}}},B=r(62),component=Object(B.a)(E,(function(){var e=this,t=e._self._c;return t(d.a,[t(k.a,[t(c.a,[t(f.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"sort-by":"nome"},scopedSlots:e._u([{key:"top",fn:function(){return[t(y.a,{attrs:{flat:""}},[t(j.b,[e._v("Professores Orientadores")]),e._v(" "),t(v.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(w.a),e._v(" "),t(m.a,{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[t(n.a,e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",l,!1),o),[e._v("\n                  Novo\n                ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(o.a,[t(l.c,[t("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),t(l.b,[t(h.a,{on:{submit:e.checkForm},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(k.a,[t(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(O.a,{attrs:{rules:[e.rules.required],label:"Nome do Professor"},model:{value:e.editedItem.nome,callback:function(t){e.$set(e.editedItem,"nome",t)},expression:"editedItem.nome"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[t(O.a,{attrs:{label:"E-mail",rules:e.email},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1)],1),e._v(" "),t(k.a,[t(c.a,{attrs:{cols:"6"}},[t(O.a,{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####-####",expression:"'(##) #####-####'"}],attrs:{label:"Telefone",rules:[e.rules.telefone]},model:{value:e.editedItem.telefone,callback:function(t){e.$set(e.editedItem,"telefone",t)},expression:"editedItem.telefone"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(O.a,{directives:[{name:"mask",rawName:"v-mask",value:"############",expression:"'############'"}],attrs:{label:"Código",rules:[e.rules.required]},model:{value:e.editedItem.codigoProfessor,callback:function(t){e.$set(e.editedItem,"codigoProfessor",t)},expression:"editedItem.codigoProfessor"}})],1)],1)],1)],1),e._v(" "),t(l.a,[t(w.a),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                    Cancelar\n                  ")]),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:"",disabled:!e.valid},on:{click:e.save}},[e._v("\n                    Salvar\n                  ")])],1)],1)],1),e._v(" "),t(m.a,{attrs:{"max-width":"600px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[t(o.a,[t(l.c,{staticClass:"text-h5"},[e._v("Tem certeza que deseja apagar este item?")]),e._v(" "),t(l.a,[t(w.a),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancelar")]),e._v(" "),t(n.a,{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t(w.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(r){var o=r.item;return[t("div",{staticClass:"text-center"},[t(I.a,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t(x.a,e._g(e._b({staticClass:"mr-2",attrs:{small:"",color:"primary",dark:""}},"v-icon",o,!1),n),[e._v("\n                  mdi-dots-vertical\n                ")])]}}],null,!0)},[e._v(" "),t(_.a,[t("div",[t(n.a,{attrs:{color:"primary","x-small":"",text:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n                    Editar\n                  ")])],1),e._v(" "),t("div",[t(n.a,{attrs:{color:"primary","x-small":"",text:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v("\n                    Excluir\n                  ")])],1)])],1)],1)]}},{key:"no-data",fn:function(){return[t(n.a,{attrs:{color:"primary"},on:{click:e.initialize}},[e._v(" Reset ")])]},proxy:!0}],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);