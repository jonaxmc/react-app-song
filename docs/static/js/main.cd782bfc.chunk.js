(this["webpackJsonpsong-recomender"]=this["webpackJsonpsong-recomender"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a(16),n=a.n(s),c=a(14),r=a(9),o=a(3),l=a(4),d=a.n(l),j=a(10),h=a.n(j),b=a(18),p=a.n(b),O=a(0);p()(d.a);var x=function(){var e=JSON.parse(sessionStorage.getItem("historial"))||{},t={},a={};if(0!==Object.keys(e).length){for(var i=[],s=[],n=0;n<e.length;n++){var c=e[n].titulo_original,o=e[n].similitud,l=e[n].titulo_predicho,j=e[n]["similitud 2"];i.push([c,o]),s.push([l,j])}t={chart:{type:"column"},title:{text:"History of Similarity of Recommendations Vs. Original Titles"},xAxis:{type:"category"},yAxis:{min:0,max:1,title:{text:"Similarity "}},legend:{enabled:!1},plotOptions:{series:{borderWidth:0,dataLabels:{enabled:!0,format:"{point.y:.1f}"}}},tooltip:{headerFormat:'<span style="font-size:11px">{series.name}</span><br>',pointFormat:'<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'},series:[{colorByPoint:!0,data:i}]},a={chart:{type:"column"},title:{text:"History of Similarity of Recommendations Vs. Original Titles"},xAxis:{type:"category"},yAxis:{min:0,max:1,title:{text:"Similarity "}},legend:{enabled:!1},plotOptions:{series:{borderWidth:0,dataLabels:{enabled:!0,format:"{point.y:.1f}"}}},tooltip:{headerFormat:'<span style="font-size:11px">{series.name}</span><br>',pointFormat:'<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'},series:[{colorByPoint:!0,data:s}]}}return Object(O.jsx)("div",{children:0===Object.keys(e).length?Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"no hay datos"}),Object(O.jsx)("h1",{children:"no hay datos"}),Object(O.jsx)("h1",{children:"no hay datos"}),Object(O.jsx)("h1",{children:"no hay datos"}),Object(O.jsx)("h1",{children:"no hay datos"})]}):Object(O.jsxs)("div",{className:"contenedor__historial",children:[Object(O.jsxs)("div",{className:"tabs",children:[Object(O.jsx)("input",{type:"radio",id:"tab1",name:"tab-control",defaultChecked:!0}),Object(O.jsx)("input",{type:"radio",id:"tab2",name:"tab-control"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{title:"Features",children:Object(O.jsx)("label",{htmlFor:"tab1",role:"button",children:Object(O.jsx)("span",{children:"Similarity Jaccard with Semantics"})})}),Object(O.jsx)("li",{title:"Delivery Contents",children:Object(O.jsx)("label",{htmlFor:"tab2",role:"button",children:Object(O.jsx)("span",{children:"Similarity Jaccard without Semantics"})})})]}),Object(O.jsx)("div",{className:"slider",id:"tab-dos",children:Object(O.jsx)("div",{className:"indicator"})}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("section",{children:Object(O.jsx)("div",{id:"Frecuencia",children:Object(O.jsx)("figure",{className:"highcharts-figure",children:Object(O.jsx)("div",{children:Object(O.jsx)(h.a,{highcharts:d.a,options:a})})})})}),Object(O.jsx)("section",{children:Object(O.jsx)("div",{id:"Polaridad",children:Object(O.jsx)("figure",{className:"highcharts-figure",children:Object(O.jsx)("div",{children:Object(O.jsx)(h.a,{highcharts:d.a,options:t})})})})})]})]}),Object(O.jsxs)("div",{id:"container-historial",children:[Object(O.jsx)("div",{className:"contenedor-centrar",children:Object(O.jsx)(r.b,{className:"btn-primario a-btn",to:"/",role:"button",children:"TRY ANOTHER SONG"})}),Object(O.jsx)("div",{className:"contenedor-centrar",children:Object(O.jsx)(r.b,{className:"btn-secundario a-btn",to:"/results",role:"button",children:"RETURN TO THE PREVIOUS PAGE"})})]})]})})},u=a(30),m=a(12),y=a.n(m),f=a(19),v=a(20),g=a.n(v),N=function(){var e=Object(f.a)(y.a.mark((function e(t){var a,i,s;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://backend-song-recomender.herokuapp.com/upload",(a=new FormData).append("song",t),e.prev=3,g.a.fire({title:"Processing song",html:"Wait a moment please",timerProgressBar:!0,didOpen:function(){g.a.showLoading()}}),e.next=7,fetch("https://backend-song-recomender.herokuapp.com/upload",{method:"POST",body:a});case 7:if(!(i=e.sent).ok){e.next=17;break}return e.next=11,i.json();case 11:return s=e.sent,sessionStorage.setItem("datos",JSON.stringify(s)),g.a.close(),e.abrupt("return",s);case 17:return e.next=19,i.json();case 19:throw e.sent;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(3),console.log(e.t0);case 25:case"end":return e.stop()}}),e,null,[[3,22]])})));return function(t){return e.apply(this,arguments)}}(),S="[File] Upload File",F="[File] Send File",k="[Data] Start Loading",w="[Data] Finish Loading",P="[Data] Save Data",T="[Historial] Save Historial",E="[Path] Loading Path",L=function(e){return function(t){var a=JSON.parse(sessionStorage.getItem("historial"))||[];t(_(e)),a.push(e),sessionStorage.setItem("historial",JSON.stringify(a))}},R=function(e){return{type:P,payload:e}},_=function(e){return{type:T,payload:e}},C=function(){var e,t=Object(c.b)(),a=Object(o.f)(),s=Object(i.useState)(),n=Object(u.a)(s,2),r=n[0],l=n[1],d=Object(c.c)((function(e){return e.path}));return Object(O.jsxs)("div",{className:"home_container",children:[Object(O.jsx)("div",{id:"upload-area",className:"form",children:Object(O.jsxs)("div",{className:"upload-ui",children:[Object(O.jsx)("div",{className:"titulo",children:"Drag and drop audio file here!"}),Object(O.jsx)("p",{className:"titulo",children:"OR"}),Object(O.jsx)("label",{htmlFor:"fileSelector",className:"btn-primario",children:"CHOOSE FILE"}),Object(O.jsx)("input",{id:"fileSelector",type:"file",name:"file",className:"btn-secundario",onChange:function(a){var i;e=a.target.files[0],l(e),t((i=e.name,{type:E,payload:i}))},style:{display:"none"}}),Object(O.jsx)("div",{className:"file-name",children:d})]})}),Object(O.jsx)("div",{className:"contenedor-enviar",children:Object(O.jsx)("button",{onClick:function(){r&&t(function(e,t){return function(){var a=Object(f.a)(y.a.mark((function a(i){var s;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i({type:k}),a.next=3,N(e);case 3:s=a.sent,console.log(s),i({type:w}),i(R(s)),i(L(s.historial)),t.push("/results");case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(r,a))},className:"btn-primario",children:"Enviar"})})]})},D=a(28);a.n(D)()(d.a),p()(d.a);var I=function(){var e=JSON.parse(sessionStorage.getItem("datos"))||{},t=e.titulo_original,a=e.subtitle,i=e.titulo_predicho,s=e.image,n=e.lyrics,c=e.letraNube,o=e.palabras,l=e.res,j=e.sentimientos,b=e.pesos_topico,p={},x={},u={};if(0!==Object.keys(e).length){var m=[],y=[],f=c.trim().split(" "),v=[],g={};for(var N in f.forEach((function(e){g[e]=(g[e]||0)+1})),g)v.push({name:N,weight:g[N]});for(var S=0;S<o.length;S++)m.push({name:o[S],y:l[S]}),y.push({y:j[S].compound,z:l[S],name:o[S]});p={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:"Tokens Frequency"},subtitle:{text:""},yAxis:{title:{text:"Frecuencia"}},legend:{enabled:!1},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} </b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},series:[{type:"pie",allowPointSelect:!0,keys:["name","y","selected","sliced"],data:m}]},x={chart:{type:"bubble",plotBorderWidth:1,zoomType:"xy"},legend:{enabled:!1},title:{text:"Polarity"},xAxis:{gridLineWidth:1,categories:o,plotLines:[{color:"black",dashStyle:"dot",width:2,value:65,label:{rotation:0,y:15,style:{fontStyle:"italic"}}}]},yAxis:{min:-1,max:1,startOnTick:!1,endOnTick:!1,title:{text:"Polarity"},labels:{format:"{value}"},maxPadding:.2,plotLines:[{color:"black",dashStyle:"dot",width:2,value:50,label:{align:"right",style:{fontStyle:"italic"},text:"Safe sugar intake 50g/day",x:-10},zIndex:3}]},tooltip:{useHTML:!0,headerFormat:"<table>",pointFormat:'<tr><th colspan="2"><h3>{point.name}</h3></th></tr><tr><th>Polarity:</th><td>{point.y}</td></tr><tr><th>Frecuency:</th><td>{point.z}</td></tr>',footerFormat:"</table>",followPointer:!0},plotOptions:{series:{dataLabels:{enabled:!0,format:"{point.name}"}}},series:[{data:y,marker:{fillColor:{radialGradient:{cx:.4,cy:.3,r:.7},stops:[[0,"rgba(255,255,255,0.5)"],[1,d.a.color(d.a.getOptions().colors[4]).setOpacity(.5).get("rgba")]]}}}]},u={series:[{type:"wordcloud",data:v,name:"Occurrences"}],title:{text:"Wordcloud of Lorem Ipsum"}}}return Object(O.jsx)("div",{children:0===Object.keys(e).length?Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"no hay datos"}),Object(O.jsx)("h1",{children:"no hay datos"}),Object(O.jsx)("h1",{children:"no hay datos"}),Object(O.jsx)("h1",{children:"no hay datos"}),Object(O.jsx)("h1",{children:"no hay datos"})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"contenedor-encabezado"}),Object(O.jsxs)("div",{className:"data",children:[Object(O.jsx)("div",{className:"data-titulo",children:t}),Object(O.jsx)("div",{className:"data-subtitulo",children:a}),Object(O.jsx)("div",{className:"data-tipoAPI",children:"Retrieved from "})]}),Object(O.jsxs)("div",{className:"titulo-recomendado",children:["Recommended Title: ",i]}),Object(O.jsx)("img",{className:"caratula",src:s,alt:s}),Object(O.jsx)("div",{className:"container-md contenedor-datos",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("h1",{className:"div-letra",children:"Lyrics"}),Object(O.jsx)("div",{className:"col-sm-5 col-md-6 letra",children:n.map((function(e,t){return Object(O.jsx)("div",{children:e},t)}))}),Object(O.jsxs)("div",{className:"col-sm-5 col-md-6",children:[Object(O.jsx)("div",{className:"row"}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("table",{className:"table table-striped table-hover",children:[Object(O.jsx)("thead",{className:"table-dark",children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{scope:"col",children:"Recommended Tokens "}),Object(O.jsx)("th",{scope:"col",children:"Frequency "}),Object(O.jsx)("th",{scope:"col",children:"Polarity"}),Object(O.jsx)("th",{scope:"col",children:"LDA Weight"})]})}),Object(O.jsx)("tbody",{children:o.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:o[t]}),Object(O.jsx)("td",{children:l[t]}),Object(O.jsx)("td",{children:j[t].compound}),Object(O.jsx)("td",{children:b[t]})]},t)}))})]}),Object(O.jsxs)("div",{className:"tabs",children:[Object(O.jsx)("input",{type:"radio",id:"tab1",name:"tab-control",defaultChecked:!0}),Object(O.jsx)("input",{type:"radio",id:"tab2",name:"tab-control"}),Object(O.jsx)("input",{type:"radio",id:"tab3",name:"tab-control"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{title:"Features",children:Object(O.jsx)("label",{htmlFor:"tab1",role:"button",children:Object(O.jsx)("span",{children:"Frequency"})})}),Object(O.jsx)("li",{title:"Delivery Contents",children:Object(O.jsx)("label",{htmlFor:"tab2",role:"button",children:Object(O.jsx)("span",{children:"Polarity"})})}),Object(O.jsx)("li",{title:"Delivery Contents",children:Object(O.jsx)("label",{htmlFor:"tab3",role:"button",children:Object(O.jsx)("span",{children:"Word Cloud"})})})]}),Object(O.jsx)("div",{className:"slider",children:Object(O.jsx)("div",{className:"indicator"})}),Object(O.jsxs)("div",{className:"content",children:[Object(O.jsx)("section",{children:Object(O.jsx)("div",{id:"Frecuencia",children:Object(O.jsx)("figure",{className:"highcharts-figure",children:Object(O.jsx)("div",{id:"tabla-hi-frecuencia",children:Object(O.jsx)(h.a,{highcharts:d.a,options:p})})})})}),Object(O.jsx)("section",{children:Object(O.jsx)("div",{id:"Polaridad",children:Object(O.jsx)("figure",{className:"highcharts-figure",children:Object(O.jsx)("div",{id:"tabla-hi",children:Object(O.jsx)(h.a,{highcharts:d.a,options:x})})})})}),Object(O.jsx)("section",{children:Object(O.jsx)("div",{id:"Nube",children:Object(O.jsx)("figure",{className:"highcharts-figure",children:Object(O.jsx)("div",{id:"tabla-nube",children:Object(O.jsx)(h.a,{highcharts:d.a,options:u})})})})})]})]})]})]})]})}),Object(O.jsx)("div",{className:"contenedor-centrar",children:Object(O.jsx)(r.b,{className:"btn-primario a-btn",to:"/",role:"button",children:"TRY ANOTHER SONG "})})]})})},A=function(){return Object(O.jsx)(r.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("nav",{className:"navbar navbar-light fixed-top nav-menu",children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)(r.b,{className:"title-logo",to:"/",children:"RECOMMENDER"}),Object(O.jsx)("form",{className:"d-flex",children:Object(O.jsx)(r.b,{className:"btn-historial",to:"/history",role:"button",children:"History"})})]})}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/results",component:I}),Object(O.jsx)(o.a,{exact:!0,path:"/",component:C}),Object(O.jsx)(o.a,{exact:!0,path:"/history",component:x})]})]})})},H=a(15),J=a(29),W=JSON.parse(sessionStorage.getItem("datos"))||{},z="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.c,B=Object(H.b)({path:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.payload;default:return e}},file:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return{file:t.payload.file};case F:return{data:t.payload};default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:case T:return{datos:t.payload};default:return e}}}),M=Object(H.d)(B,z(Object(H.a)(J.a))),G=function(){return Object(O.jsx)(c.a,{store:M,children:Object(O.jsx)(A,{})})};a(52);n.a.render(Object(O.jsx)(G,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.cd782bfc.chunk.js.map