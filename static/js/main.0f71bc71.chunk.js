(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/01d.a82069ff.svg"},function(e,t,a){e.exports=a.p+"static/media/01n.5c18f561.svg"},function(e,t,a){e.exports=a.p+"static/media/02d.6f58dee5.svg"},function(e,t,a){e.exports=a.p+"static/media/02n.01ea4817.svg"},function(e,t,a){e.exports=a.p+"static/media/03d.43d44daa.svg"},function(e,t,a){e.exports=a.p+"static/media/04d.4731597a.svg"},function(e,t,a){e.exports=a.p+"static/media/09d.472778e9.svg"},function(e,t,a){e.exports=a.p+"static/media/10d.043dcd80.svg"},function(e,t,a){e.exports=a.p+"static/media/10n.3f983a27.svg"},function(e,t,a){e.exports=a.p+"static/media/11d.58fab0dc.svg"},function(e,t,a){e.exports=a.p+"static/media/13d.109cc8d7.svg"},function(e,t,a){e.exports=a.p+"static/media/50d.2ecfcf0e.svg"},,function(e,t,a){e.exports=a.p+"static/media/x.62eefd11.svg"},,function(e,t,a){e.exports=a(33)},,,,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),l=a(1),i=a(2),o=a(4),u=a(3),m=a(5);var d=function(e){return r.a.createElement("div",{className:e.className},e.children)};var h=function(e){return r.a.createElement("header",{className:"Header"},r.a.createElement("h1",{className:"Heading Heading--h1"},r.a.createElement("span",{className:"Heading--background"},"Dashboard")))};var f=function(e){return r.a.createElement("h3",{className:"Heading Heading--h3 Heading--background "+e.className},e.title)},p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={time:new Date},a.localTime=function(){a.setState({time:new Date})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){return e.localTime()},1e3)}},{key:"render",value:function(){var e=this.state.time,t=e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate(),a=e.toLocaleTimeString();return r.a.createElement(d,{className:"Block Block--clock Block--spacer"},r.a.createElement(f,{title:a,className:"Heading--clock"}),r.a.createElement("p",null,t))}}]),t}(r.a.Component);var v=function(e){var t=e.className,a=e.handleChange,n=e.value;return r.a.createElement("button",{className:t,onClick:a}," ",n," ")},E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={time:60},a.startTimer=function(){a.interval=setInterval(function(){return a.tick()},1e3)},a.resetTimer=function(){clearInterval(a.interval),a.setState({time:60})},a.tick=function(){var e=a.state.time;0===e?a.setState({time:0}):e>0&&a.setState({time:e-1})},a.timerView=function(){var e=a.state.time;return 0===e?r.a.createElement(d,null,r.a.createElement("p",{className:"Timer"},"Time's up!"),r.a.createElement(v,{className:"Button Button-reset",handleChange:a.resetTimer,value:"Reset timer!"})):60===e?r.a.createElement(d,null,r.a.createElement("p",{className:"Timer"},e," seconds"),r.a.createElement(v,{className:"Button",handleChange:a.startTimer,value:"Start timer!"})):r.a.createElement("p",{className:"Timer--large"}," ",e," ")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.time,t=this.timerView,a=["Block Block--spacer"];return 0===e&&a.push("Timer--ended"),r.a.createElement(d,{className:a.join(" ")},r.a.createElement(f,{title:"Timer"}),t())}}]),t}(r.a.Component);var g=function(e){var t=e.items,a=e.fetchCurrency,n=e.getCurrentDate,c=t.map(function(e,t){return r.a.createElement("option",{value:e,key:t},e)});return r.a.createElement("select",{className:"Input-select",onChange:function(e){a(e.target.value),n()}},c)},b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currencyRates:[],baseCurrency:"EUR",currencies:[],lastUpdate:""},a.getCurrentDate=function(){var e=new Date,t=e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate()+" "+e.toLocaleTimeString();a.setState({lastUpdate:t})},a.fetchCurrency=function(e){fetch("https://api.exchangeratesapi.io/latest?base=".concat(e)).then(function(e){return e.json()}).then(function(e){a.setState({baseCurrency:e.base}),a.setState({currencyRates:e.rates})}).catch=function(e){console.log(e)}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchCurrency(this.state.baseCurrency),this.getCurrentDate()}},{key:"render",value:function(){var e=this.state,t=e.currencyRates,a=e.baseCurrency,n=e.lastUpdate,c=this.fetchCurrency,s=this.getCurrentDate,l=parseFloat(t.SEK).toFixed(2),i=Object.keys(t);return r.a.createElement(d,{className:"Block"},r.a.createElement(f,{title:"Currency"}),r.a.createElement("p",{className:"Text--currency"},"1 ",a," = ",l," SEK"),r.a.createElement("p",null,r.a.createElement("strong",null,"Last update:")," ",r.a.createElement("br",null),n),r.a.createElement(g,{items:i,fetchCurrency:c,getCurrentDate:s}))}}]),t}(r.a.Component);var y=function(e){var t=e.src,a=e.alt;return r.a.createElement("img",{src:t,className:"Icon",alt:a})},k=a(8),N=a.n(k),j=a(9),C=a.n(j),O=a(10),S=a.n(O),w=a(11),T=a.n(w),x=a(12),D=a.n(x),I=a(13),B=a.n(I),L=a(14),H=a.n(L),M=a(15),R=a.n(M),A=a(16),F=a.n(A),G=a(17),J=a.n(G),P=a(18),U=a.n(P),K=a(19),W=a.n(K),V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={weather:[],main:[]},a.fetchTodaysWeather=function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=3f811f4e602b5451b64f25e97ad55d60&units=metric").then(function(e){return e.json()}).then(function(e){a.setState({weather:e.main}),a.setState({main:e.weather[0]})}).catch=function(e){console.log(e)}},a.weatherIcons=function(){switch(a.state.main.icon){case"01d":return r.a.createElement(y,{src:N.a,alt:"Clear sky"});case"01n":return r.a.createElement(y,{src:C.a,alt:"Clear sky"});case"02d":return r.a.createElement(y,{src:S.a,alt:"Few clouds"});case"02n":return r.a.createElement(y,{src:T.a,alt:"Few clouds"});case"03d":return r.a.createElement(y,{src:D.a,alt:"Scattered clouds"});case"04d":return r.a.createElement(y,{src:B.a,alt:"Broken clouds"});case"09d":return r.a.createElement(y,{src:H.a,alt:"Shower rain"});case"10d":return r.a.createElement(y,{src:R.a,alt:"Rain"});case"10n":return r.a.createElement(y,{src:F.a,alt:"Rain"});case"11d":return r.a.createElement(y,{src:J.a,alt:"Thunderstorm"});case"13d":return r.a.createElement(y,{src:U.a,alt:"Snow"});case"50d":return r.a.createElement(y,{src:W.a,alt:"Mist"});default:return null}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchTodaysWeather()}},{key:"render",value:function(){var e=this.state,t=e.weather,a=e.main,n=this.weatherIcons;return r.a.createElement(d,{className:"Block"},r.a.createElement(f,{title:"Todays weather"}),n(),r.a.createElement("h4",null,"Stockholm"),r.a.createElement("p",null,"Temperature: ",Math.round(t.temp),"\xb0C"),r.a.createElement("p",null,a.description))}}]),t}(r.a.Component),Y=a(22),q=a(20);var z=function(e){var t=e.handleChange,a=e.handleSubmit,n=e.value,c=e.placeholder;return r.a.createElement("input",{type:"text",name:"name",className:"Input-field",value:n,onChange:t,onKeyDown:a,placeholder:c})},Q=a(21),X=a.n(Q);var Z=function(e){var t=e.items,a=e.deleteListItem,n=t.map(function(e,t){return r.a.createElement("li",{className:"List-item",key:t},e,r.a.createElement("img",{src:X.a,className:"Button-close",onClick:function(){return a(t)},alt:"Delete post"}))});return r.a.createElement("ul",{className:"List"},n)};var $=function(e){function t(){var e,a,n;Object(l.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",items:(n=JSON.parse(localStorage.getItem("store")),n||[]),error:""},a.handleChange=function(e){a.setState(Object(q.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){if(13===e.keyCode){if(a.state.name.length<3)return a.setState({error:"Please enter at least three characters!"}),null;a.setState({error:""});var t=Object(Y.a)(a.state.items);t.push(a.state.name),localStorage.setItem("store",JSON.stringify(t)),a.setState({items:t,name:""})}},a.deleteListItem=function(e){var t=a.state.items.filter(function(t,a){return a!==e});a.setState({items:t}),localStorage.setItem("store",JSON.stringify(t))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.items,n=e.error,c=this.handleChange,s=this.handleSubmit,l=this.deleteListItem;return r.a.createElement(d,{className:"Block Block--fullSize"},r.a.createElement(f,{title:"Post-it"}),r.a.createElement(z,{handleChange:c,handleSubmit:s,value:t,placeholder:"What to remember?"}),r.a.createElement("p",{className:"Text--errorMessage"},n),r.a.createElement(Z,{items:a,deleteListItem:l}))}}]),t}(r.a.Component);var _=function(){return r.a.createElement("main",{className:"Page-container"},r.a.createElement("div",{className:"Grid Grid--gutter"},r.a.createElement("div",{className:"Grid-cell"},r.a.createElement(p,null),r.a.createElement(V,null)),r.a.createElement("div",{className:"Grid-cell"},r.a.createElement(E,null),r.a.createElement(b,null)),r.a.createElement("div",{className:"Grid-cell"},r.a.createElement($,null))))},ee=(a(31),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d,{className:"app"},r.a.createElement(h,null),r.a.createElement(_,null))}}]),t}(r.a.Component)),te=document.getElementById("root");s.a.render(r.a.createElement(ee,null),te)}],[[23,2,1]]]);
//# sourceMappingURL=main.0f71bc71.chunk.js.map