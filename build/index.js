/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={424:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>i});var n=r(645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,".react-auto-height {\n  overflow: hidden; /* hide scroll bar */\n  transition: height 200ms;\n}\n",""]);const i=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),e.push(l))}},e}},585:(t,e,r)=>{var n=r(424),o=r(718),i="string"==typeof n?[[t.id,n,""]]:n;(e=t.exports=n.locals||{})._getContent=function(){return i},e._getCss=function(){return""+n},e._insertCss=function(t){return o(i,t)}},718:t=>{"use strict";var e={};function r(t){t.forEach((function(t){if(--e[t]<=0){var r=document.getElementById(t);r&&r.parentNode.removeChild(r)}}))}t.exports=function(t,n){for(var o,i=void 0===n?{}:n,a=i.replace,u=void 0!==a&&a,l=i.prepend,c=void 0!==l&&l,s=i.prefix,f=void 0===s?"s":s,d=[],p=0;p<t.length;p++){var y=t[p],h=y[0],v=y[1],g=y[2],m=y[3],b=""+f+h+"-"+p;if(d.push(b),!e[b]||u){e[b]=1;var S=document.getElementById(b),O=!1;S||(O=!0,(S=document.createElement("style")).setAttribute("type","text/css"),S.id=b,g&&S.setAttribute("media",g));var x=v;m&&"function"==typeof btoa&&(x+="\n/*# sourceMappingURL=data:application/json;base64,"+(o=JSON.stringify(m),btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(function(t,e){return String.fromCharCode("0x"+e)})))+"*/"),x+="\n/*# sourceURL="+m.file+"?"+b+"*/"),"textContent"in S?S.textContent=x:S.styleSheet.cssText=x,O&&(c?document.head.insertBefore(S,document.head.childNodes[0]):document.head.appendChild(S))}else e[b]++}return r.bind(null,d)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,exports:{}};return t[n](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{default:()=>p});const t=require("react");var e=r.n(t);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function i(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return u=t.done,t},e:function(t){l=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(l)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r(585);var u="react-auto-height",l="data-react-auto-height-adjust-height",c=new Set,s=!1;function f(t){var e=getComputedStyle(t).getPropertyValue("transition-delay"),r=getComputedStyle(t).getPropertyValue("transition-duration"),n=t.style.height||getComputedStyle(t).getPropertyValue("height");t.style.transitionDelay="0",t.style.transitionDuration="0",t.style.height="auto";var o=parseInt(t.getAttribute(l))||0,a=t.scrollHeight+o+"px";if(t.style.height=n,t.scrollHeight,t.style.transitionDelay=e,t.style.transitionDuration=r,t.style.height=a,t.setAttribute(l,0),c.delete(t),n!=a){for(var d=parseInt(a)-parseInt(n),p=t.parentElement;p;)if(p.className.includes(u)){var y=parseInt(p.getAttribute(l))||0;p.setAttribute(l,y+d),c.add(p),p=null}else p=p.parentElement;s||0===c.size||(s=!0,setTimeout((function(){s=!1;var t,e=i(c);try{for(e.s();!(t=e.n()).done;)f(t.value)}catch(t){e.e(t)}finally{e.f()}}),0))}}function d(r){var n=r.children,a=r.element,l=void 0===a?"div":a,c=r.className,s=void 0===c?"":c,d=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(r,["children","element","className"]),p=l,y=(0,t.useRef)(),h=function(){var t=y.current;if(t){if("function"==typeof n){var e,r=i(t.children);try{for(r.s();!(e=r.n()).done;){var o=e.value;o.getAttribute&&f(o)}}catch(t){r.e(t)}finally{r.f()}}f(t)}};return(0,t.useEffect)(h),e().createElement(p,o({ref:y,className:"".concat(u," ").concat(s)},d),"function"==typeof n?n(h):n)}d.displayName="AutoHeight";const p=d})(),module.exports=n})();