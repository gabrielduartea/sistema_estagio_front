(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{454:function(t,e,r){"use strict";e.a="http://localhost:3003/api/v1/"},748:function(t,e,r){"use strict";r.r(e);var n=r(231),o=r(453),c=r(737),l=r(450),f=r(736),d=r(603),m=r(18),h=(r(77),r(29),r(42),r(4),r(40),r(35),r(58),r(48),r(27),r(10),r(59),r(63),r(49),r(87)),v=r.n(h),y=r(602),w=r(454);r(617);function S(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return I(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var k={data:function(){return{itemsStatus:["Em andamento","Finalizado","Cancelado","Todos"],itemsTeachers:[],heading:"Número de estudantes por professor orientador",editedItem:{status:""}}},created:function(){},methods:{gerarRelatorio:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(w.a,"professores/relatorioNumeroEstagiarios/").concat(t.editedItem.status));case 3:r=e.sent.data,n=[],o=S(r);try{for(o.s();!(c=o.n()).done;)l=c.value,n.push({professor:l.nome,numero:l.count})}catch(t){o.e(t)}finally{o.f()}f=[{title:"Professor",dataKey:"professor"},{title:"Número de orientandos",dataKey:"numero"}],(d=new y.default({orientation:"portrait",unit:"in",format:"letter"})).setFontSize(16).text(t.heading,.5,1),d.setLineWidth(.01).line(.5,1.1,8,1.1),d.autoTable({columns:f,body:n,margin:{left:.5,top:1.25}}),d.save("".concat(t.heading,".pdf")),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))()}}},x=r(62),component=Object(x.a)(k,(function(){var t=this,e=t._self._c;return e(l.a,[e(c.a,[e("h1",{staticClass:"title"},[t._v("Relatório do número de estagiários por professor")])]),t._v(" "),e(o.b,[e(l.a,[e(f.a,[e(c.a,{attrs:{cols:"12",sm:"6",md:"6"}},[e(d.a,{attrs:{items:t.itemsStatus,label:"Status"},model:{value:t.editedItem.status,callback:function(e){t.$set(t.editedItem,"status",e)},expression:"editedItem.status"}})],1)],1),t._v(" "),e(n.a,{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(e){return t.gerarRelatorio()}}},[t._v("\n                Gerar relatório\n            ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);