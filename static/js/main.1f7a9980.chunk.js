(this["webpackJsonpmusix-app"]=this["webpackJsonpmusix-app"]||[]).push([[0],{17:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var a=n(0),m=n.n(a),i=n(15),r=n.n(i);var l=function(){return m.a.createElement("header",null,m.a.createElement("h1",null," \ud834\udd06 Bandit \ud834\udd07"))},s=n(9);function o(e){var t=new Audio(e.soundsrc),n=new Audio("sounds/hi-hat-open.wav"),i=Object(a.useState)(!1),r=Object(s.a)(i,2),l=r[0],o=r[1];function c(){o(!0),setTimeout((function(){o(!1)}),120)}function u(a){a.key===e.keybind&&"J"===a.key&&(n.play(),c()),a.key===e.keybind&&"N"===a.key?(n.load(),t.play(),t.currentTime=0,c()):a.key===e.keybind&&"J"!==a.key&&"N"!==a.key&&(t.play(),t.currentTime=0,c())}return Object(a.useEffect)((function(){return document.addEventListener("keydown",u),function(){document.removeEventListener("keydown",u)}}),[u]),m.a.createElement("div",{className:"inline"},m.a.createElement("p",{className:"pad-letter"},e.keybind),m.a.createElement("button",{onClick:function(){t.play(),t.currentTime=0,c()},className:l?"drumpad pressed":"drumpad"},m.a.createElement("img",{id:e.name,className:"drumpad-img",src:e.img,alt:e.alt})),m.a.createElement("h3",null,e.name))}function c(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],r=new Audio("sounds/hi-hat-open.wav");function l(){i(!0),setTimeout((function(){i(!1)}),120)}function o(e){"J"===e.key&&(r.play(),r.currentTime=0,l())}return Object(a.useEffect)((function(){return document.addEventListener("keydown",o),function(){document.removeEventListener("keydown",o)}}),[o]),m.a.createElement("div",{className:"inline"},m.a.createElement("p",{className:"pad-letter"},"J"),m.a.createElement("button",{onClick:function(){r.play(),r.currentTime=0,l()},className:n?"drumpad pressed":"drumpad"},m.a.createElement("img",{id:"openhihat",className:"drumpad-img",src:"images/openhihat.jpg",alt:"openhihat-img"})),m.a.createElement("h3",null,"openhihat"))}var u=[{id:"kick",key:"kick",imgURL:"images/bass-drum.png",alt:"kick-img",letter:"B",soundURL:"sounds/kick-bass.mp3"},{id:"snare",key:"snare",imgURL:"images/snare.png",alt:"snare-img",letter:"G",soundURL:"sounds/snare.mp3"},{id:"tom1",key:"tom1",imgURL:"images/tom1.png",alt:"tom1-img",letter:"S",soundURL:"sounds/tom-1.mp3"},{id:"tom2",key:"tom2",imgURL:"images/tom2.png",alt:"tom2-img",letter:"D",soundURL:"sounds/tom-2.mp3"},{id:"tom3",key:"tom3",imgURL:"images/tom3.png",alt:"tom3-img",letter:"F",soundURL:"sounds/tom-3.mp3"},{id:"tom4",key:"tom4",imgURL:"images/tom4.png",alt:"kick-img",letter:"V",soundURL:"sounds/tom-4.mp3"},{id:"closedhihat",key:"closedhihat",imgURL:"images/closedhihat.jpg",alt:"closedhihat-img",letter:"N",soundURL:"sounds/hi-hat-closed.wav"},{id:"crash",key:"crash",imgURL:"images/crash.png",alt:"crash-img",letter:"H",soundURL:"sounds/crash.mp3"},{id:"ride",key:"ride",imgURL:"images/ride.jpg",alt:"ride-img",letter:"M",soundURL:"sounds/ride.mp3"}];function d(){return m.a.createElement("div",null,m.a.createElement("div",{className:"drums"},u.map((function(e){return m.a.createElement(o,{key:e.key,img:e.imgURL,name:e.id,keybind:e.letter,soundsrc:e.soundURL})})),m.a.createElement(c,null)))}var p=n(8),g=n(1);function k(){return m.a.createElement(p.a,null,m.a.createElement("div",{className:"nav"},m.a.createElement(p.b,{className:"link",to:"/Drumset"},"Drums"),m.a.createElement(p.b,{className:"link link-home",to:"/"},"Home"," "),m.a.createElement(p.b,{className:"link",to:"/Piano"},"Piano"),m.a.createElement(g.c,null,m.a.createElement(g.a,{path:"/Drumset"},m.a.createElement(d,null)))))}function E(){var e=(new Date).getFullYear();return m.a.createElement("div",null,m.a.createElement("footer",null,m.a.createElement("p",null,"\u24d2 Joe Benjamin ",e)))}var h=function(){return m.a.createElement("div",null,m.a.createElement(l,null),m.a.createElement(k,null),m.a.createElement(E,null))};r.a.render(m.a.createElement(h,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1f7a9980.chunk.js.map