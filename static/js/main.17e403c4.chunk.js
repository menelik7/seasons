(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),i=a(3),o=a.n(i),s=(a(10),{summer:{iconName:"sun",text:"Let's hit the beach"},winter:{iconName:"snowflake",text:"Burrr it's cold"}}),l=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),c=s[n],i=c.iconName,o=c.text;return r.a.createElement("div",{className:"season-display ".concat(n)},r.a.createElement("i",{className:"icon-left massive ".concat(i," icon")}),r.a.createElement("h1",null,o),r.a.createElement("i",{className:"icon-right massive ".concat(i," icon")}))},u=function(e){return r.a.createElement("div",{className:"ui active dimmer"},r.a.createElement("div",{className:"ui big text loader"},e.message))};u.defaultProps={message:"Loading..."};var m=u,d=function(){var e,t=function(){var e=Object(c.useState)(null),t=Object(n.a)(e,2),a=t[0],r=t[1],i=Object(c.useState)(""),o=Object(n.a)(i,2),s=o[0],l=o[1];return Object(c.useEffect)(function(){window.navigator.geolocation.getCurrentPosition(function(e){return r(e.coords.latitude)},function(e){return l(e.message)})},[]),[a,s]}(),a=Object(n.a)(t,2),i=a[0],o=a[1];return o?(e=r.a.createElement("div",null,"Error: ",o),r.a.createElement("div",{className:"border-red"},e)):i?r.a.createElement(l,{lat:i}):r.a.createElement(m,{message:"please accept the location request"})};o.a.render(r.a.createElement(d,null),document.querySelector("#root"))},4:function(e,t,a){e.exports=a(11)}},[[4,1,2]]]);
//# sourceMappingURL=main.17e403c4.chunk.js.map