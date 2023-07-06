/*! For license information please see index.js.LICENSE.txt */
(()=>{var t={424:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,".react-auto-height {\n  overflow: hidden; /* hide scroll bar */\n  transition: height 200ms;\n}\n",""]);const u=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var l=this[u][0];null!=l&&(i[l]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},585:(t,e,n)=>{var r=n(424),o=n(718),a="string"==typeof r?[[t.id,r,""]]:r;(e=t.exports=r.locals||{})._getContent=function(){return a},e._getCss=function(){return""+r},e._insertCss=function(t){return o(a,t)}},718:t=>{"use strict";var e={};function n(t){t.forEach((function(t){if(--e[t]<=0){var n=document.getElementById(t);n&&n.parentNode.removeChild(n)}}))}t.exports=function(t,r){for(var o,a=void 0===r?{}:r,i=a.replace,u=void 0!==i&&i,l=a.prepend,c=void 0!==l&&l,s=a.prefix,f=void 0===s?"s":s,d=[],v=0;v<t.length;v++){var y=t[v],p=y[0],h=y[1],g=y[2],m=y[3],b=""+f+p+"-"+v;if(d.push(b),!e[b]||u){e[b]=1;var S=document.getElementById(b),x=!1;S||(x=!0,(S=document.createElement("style")).setAttribute("type","text/css"),S.id=b,g&&S.setAttribute("media",g));var O=h;m&&"function"==typeof btoa&&(O+="\n/*# sourceMappingURL=data:application/json;base64,"+(o=JSON.stringify(m),btoa(encodeURIComponent(o).replace(/%([0-9A-F]{2})/g,(function(t,e){return String.fromCharCode("0x"+e)})))+"*/"),O+="\n/*# sourceURL="+m.file+"?"+b+"*/"),"textContent"in S?S.textContent=O:S.styleSheet.cssText=O,x&&(c?document.head.insertBefore(S,document.head.childNodes[0]):document.head.appendChild(S))}else e[b]++}return n.bind(null,d)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{default:()=>p});const t=require("react");var e=n.n(t),o=(n(585),["children","element","className"]);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}function i(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=u(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){l=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function u(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c="react-auto-height",s="data-react-auto-height-adjust-height",f=new Set,d=!1;function v(t){var e=getComputedStyle(t).getPropertyValue("transition-delay"),n=getComputedStyle(t).getPropertyValue("transition-duration"),r=t.style.height||getComputedStyle(t).getPropertyValue("height");t.style.transitionDelay="0",t.style.transitionDuration="0",t.style.height="auto";var o=parseInt(t.getAttribute(s))||0,a=t.scrollHeight+o+"px";if(t.style.height=r,t.scrollHeight,t.style.transitionDelay=e,t.style.transitionDuration=n,t.style.height=a,t.setAttribute(s,0),f.delete(t),r!=a){for(var u=parseInt(a)-parseInt(r),l=t.parentElement;l;)if(l.className.includes(c)){var y=parseInt(l.getAttribute(s))||0;l.setAttribute(s,y+u),f.add(l),l=null}else l=l.parentElement;d||0===f.size||(d=!0,setTimeout((function(){d=!1;var t,e=i(f);try{for(e.s();!(t=e.n()).done;)v(t.value)}catch(t){e.e(t)}finally{e.f()}}),0))}}function y(n){var r=n.children,l=n.element,s=void 0===l?"div":l,f=n.className,d=void 0===f?"":f,y=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(n,o),p=s,h=(0,t.useRef)(),g=function(){var t=h.current;if(t){if("function"==typeof r){var e,n=i(t.children);try{for(n.s();!(e=n.n()).done;){var o=e.value;o.getAttribute&&v(o)}}catch(t){n.e(t)}finally{n.f()}}v(t)}};(0,t.useEffect)(g);var m,b,S=(m=(0,t.useState)(),b=2,function(t){if(Array.isArray(t))return t}(m)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(m,b)||u(m,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),x=(S[0],S[1]);return(0,t.useEffect)((function(){var t=!0,e=function(e){setTimeout((function(){t&&x({})}))};return addEventListener("toggle",e,!0),addEventListener("resize",e,!0),addEventListener("orientationchange",e,!0),function(){t=!1,removeEventListener("toggle",e),removeEventListener("resize",e),removeEventListener("orientationchange",e)}}),[]),e().createElement(p,a({ref:h,className:"".concat(c," ").concat(d)},y),"function"==typeof r?r(g):r)}y.displayName="AutoHeight";const p=y})(),module.exports=r})();