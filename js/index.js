!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=[{id:1,content:[[1],[2],[3],[2]],next:[2,1,3,5,7]},{id:2,content:[[2],[3],[],[4,2]],next:[3,9]},{id:3,content:[[2],[1],[],[1,5]],next:[1,2,3,4,5,6,7,8,9]},{id:4,content:[[5],[3],[4],[2]],next:[6,7,4,8]},{id:5,content:[[2],[1],[3],[1]],next:[4,7]},{id:6,content:[[1],[2],[3,1],[]],next:[7]},{id:7,content:[[3],[3],[1],[]],next:[6,8]},{id:8,content:[[2],[2],[2,4],[2]],next:[8,5,9]},{id:9,content:[[3],[3],[1],[1]],next:[8,5,7,1]}];function o(e="default"){if("default"===e)return r[Math.floor(Math.random()*r.length)];const t=e.next[Math.floor(Math.random()*e.next.length)];let n={};return r.forEach(e=>{e.id===t&&(n=e)}),n}const i=Synth.createInstrument("piano");function s(e,t){i.play(["C","D","F","G","A"][e-1],t,2)}class c{constructor(e=0,t=0,n=null){this.costume=n||new Array(1).fill(null).map(()=>new Array(1).fill(1)),this.x=e,this.y=t}}const l=10,a=new class{constructor(e=64,t=48,n){this.target=n,this.screen=this.clearScreen(),this.sprites=[],this.width=e,this.height=t}clearScreen(){this.screen=new Array(this.height).fill(null).map(()=>new Array(this.width).fill(0)),console.clear(),this.target.innerHTML=""}render(){this.clearScreen(),this.sprites.forEach(e=>{e.costume.forEach((t,n)=>{e.y+n<this.screen.length&&e.y+n>=0&&t.forEach((t,r)=>{e.x+r<this.screen[0].length&&e.x+r>=0&&(this.screen[e.y+n][e.x+r]=t)})})}),this.target.innerHTML=this.screen.reduce((e,t)=>`${e+t.map(e=>Number.isNaN(parseInt(e,10))?e:`<span class="color${e}">█</span>`).join("")}\n`,"\n"),console.log(this.screen.reduce((e,t)=>`${e+t.join("")}\n`,"\n"))}}(5,l,document.getElementById("terminal")),u=new c(0,a.height-2,[[8,8,8,8,8]]);a.sprites.push(u);const h=new c(0,a.height-1,[["o","o","o","o","o"]]);a.sprites.push(h);let f=[];document.addEventListener("keydown",e=>{parseInt(e.key,10)<6&&parseInt(e.key,10)>0&&(s(parseInt(e.key,10),3),-1===f.indexOf(parseInt(e.key,10)-1)&&f.push("err"),f=f.filter(t=>parseInt(e.key,10)-1!==t))}),function(e=700){let t=o(),n=0,r=[],i=5;window.setInterval(()=>{!1==(0===f.length)&&(i-=1),h.costume[0]=h.costume[0].map((e,t)=>t<i?"o":"x");const e=t.content[n];3===n?(t=o(t),n=0):n+=1,r.forEach(e=>{const t=e;return t.y+=1,t}),f=r.filter(e=>e.y===a.height-2).map(e=>e.x),e.forEach(e=>{const t=new c(e-1,1,[[e]]);a.sprites.push(t),r.push(t)}),a.sprites=a.sprites.filter((e,t)=>e.y<l-1||t>-1&&t<2),r=r.filter(e=>e.y<l-1),a.render()},e)}()}]);