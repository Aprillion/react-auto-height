(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{293:function(module,exports,__webpack_require__){__webpack_require__(294),__webpack_require__(450),__webpack_require__(451),module.exports=__webpack_require__(641)},361:function(module,exports){},451:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(104)},641:function(module,exports,__webpack_require__){"use strict";__webpack_require__(34),__webpack_require__(16),__webpack_require__(82),__webpack_require__(642),__webpack_require__(41),__webpack_require__(42),__webpack_require__(643),__webpack_require__(67),__webpack_require__(52);var _clientApi=__webpack_require__(116),_clientLogger=__webpack_require__(48),_configFilename=__webpack_require__(644);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},644:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(104);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(656)}),module)}.call(this,__webpack_require__(645)(module))},651:function(module,exports,__webpack_require__){var api=__webpack_require__(291),content=__webpack_require__(652);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},652:function(module,exports,__webpack_require__){(exports=__webpack_require__(292)(!1)).push([module.i,".react-auto-height {\n  overflow: hidden; /* hide scroll bar */\n  transition: height 200ms;\n}\n",""]),module.exports=exports},654:function(module,exports,__webpack_require__){var api=__webpack_require__(291),content=__webpack_require__(655);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},655:function(module,exports,__webpack_require__){(exports=__webpack_require__(292)(!1)).push([module.i,"body {\n  font: 16px 'Nunito Sans', -apple-system, '.SFNSText-Regular', 'San Francisco', BlinkMacSystemFont,\n    'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n.intro {\n  margin-bottom: 30px;\n}\n\npre {\n  background: #eee;\n  margin: 5px 0;\n  padding: 10px 0;\n}\n\np {\n  margin: 20px 0;\n}\n\nli {\n  padding: 1px 5px;\n}\n\n.additional-css,\n.nested {\n  white-space: pre;\n  cursor: pointer;\n}\n\n.nested {\n  display: flex;\n  align-items: flex-start;\n}\n\n.nested > div {\n  min-width: 130px;\n  margin-right: 5px;\n}\n",""]),module.exports=exports},656:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(287),__webpack_require__(84),__webpack_require__(51),__webpack_require__(23),__webpack_require__(646),__webpack_require__(46),__webpack_require__(29),__webpack_require__(16),__webpack_require__(21),__webpack_require__(15),__webpack_require__(26),__webpack_require__(22),__webpack_require__(36),__webpack_require__(28),__webpack_require__(35),__webpack_require__(52);var react=__webpack_require__(14),client=__webpack_require__(104),jsx_runtime=(__webpack_require__(101),__webpack_require__(648),__webpack_require__(83),__webpack_require__(124),__webpack_require__(650),__webpack_require__(34),__webpack_require__(66),__webpack_require__(651),__webpack_require__(0));function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _createForOfIteratorHelper(o,allowArrayLike){var it;if("undefined"==typeof Symbol||null==o[Symbol.iterator]){if(Array.isArray(o)||(it=function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=o[Symbol.iterator]()},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var myAdjustHeight="data-react-auto-height-adjust-height",elementsToUpdate=new Set,isUpdateScheduled=!1;function setNewHeight(el){var origDelay=getComputedStyle(el).getPropertyValue("transition-delay"),origDuration=getComputedStyle(el).getPropertyValue("transition-duration"),origHeight=el.style.height||getComputedStyle(el).getPropertyValue("height");el.style.transitionDelay="0",el.style.transitionDuration="0",el.style.height="auto";var adjustHeight=parseInt(el.getAttribute(myAdjustHeight))||0,newHeight=el.scrollHeight+adjustHeight+"px";if(el.style.height=origHeight,el.scrollHeight,el.style.transitionDelay=origDelay,el.style.transitionDuration=origDuration,el.style.height=newHeight,el.setAttribute(myAdjustHeight,0),elementsToUpdate.delete(el),origHeight!=newHeight){for(var myAdjust=parseInt(newHeight)-parseInt(origHeight),parent=el.parentElement;parent;)if(parent.className.includes("react-auto-height")){var existingAdjust=parseInt(parent.getAttribute(myAdjustHeight))||0;parent.setAttribute(myAdjustHeight,existingAdjust+myAdjust),elementsToUpdate.add(parent),parent=null}else parent=parent.parentElement;!function updateParents(){if(isUpdateScheduled||0===elementsToUpdate.size)return;isUpdateScheduled=!0,setTimeout((function(){isUpdateScheduled=!1;var _step,_iterator=_createForOfIteratorHelper(elementsToUpdate);try{for(_iterator.s();!(_step=_iterator.n()).done;){setNewHeight(_step.value)}}catch(err){_iterator.e(err)}finally{_iterator.f()}}),0)}()}}function AutoHeight(_ref){var children=_ref.children,_ref$element=_ref.element,element=void 0===_ref$element?"div":_ref$element,_ref$className=_ref.className,propClassName=void 0===_ref$className?"":_ref$className,props=_objectWithoutProperties(_ref,["children","element","className"]),Element=element,ref=Object(react.useRef)(),updateHeight=function updateHeight(){var el=ref.current;if(el){if("function"==typeof children){var _step2,_iterator2=_createForOfIteratorHelper(el.children);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var child=_step2.value;child.getAttribute&&setNewHeight(child)}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}}setNewHeight(el)}};return Object(react.useEffect)(updateHeight),Object(jsx_runtime.jsx)(Element,Object.assign({ref:ref,className:"".concat("react-auto-height"," ").concat(propClassName)},props,{children:"function"==typeof children?children(updateHeight):children}))}AutoHeight.displayName="AutoHeight",AutoHeight.displayName="AutoHeight",AutoHeight.__docgenInfo={description:'@param {{\n  children: JSX.Element | (updateHeight: () => void) => JSX.Element\n  element: keyof React.ReactHTML | React.ComponentType\n  className: string\n  [prop: string]: React.ComponentProps<"div">\n}} props\n@returns JSX.Element',methods:[],displayName:"AutoHeight",props:{element:{defaultValue:{value:"'div'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};var src_0=AutoHeight;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.jsx"]={name:"AutoHeight",docgenInfo:AutoHeight.__docgenInfo,path:"src/index.jsx"});__webpack_require__(654);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return stories_arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var intro=Object(jsx_runtime.jsxs)("div",{className:"intro",children:[Object(jsx_runtime.jsx)("h2",{children:"AutoHeight examples"}),"Demo of"," ",Object(jsx_runtime.jsx)("a",{href:"https://www.npmjs.com/package/react-auto-height",target:"_blank",rel:"noopener",children:Object(jsx_runtime.jsx)("code",{children:"react-auto-height"})}),", full storybook source code available on"," ",Object(jsx_runtime.jsx)("a",{href:"https://github.com/Aprillion/react-auto-height/blob/master/stories/index.jsx",target:"_blank",rel:"noopener",children:"github"}),"."]}),rndColor=function rndColor(){return"rgb(".concat(Array.from(Array(3)).map((function(){return Math.floor(100*Math.random()+155)})).join(", "),")")};Object(client.storiesOf)("AutoHeight").add("default",(function(){var _useState2=_slicedToArray(Object(react.useState)("\n."),2),content=_useState2[0],setContent=_useState2[1],_useState4=_slicedToArray(Object(react.useState)("yellowgreen"),2),background=_useState4[0],setBackground=_useState4[1];return Object(jsx_runtime.jsxs)("div",{onClick:function handleClick(){var rndLines=".\n".repeat(20*Math.random());setContent("\n".concat(rndLines,"end")),setBackground(rndColor())},children:[intro,Object(jsx_runtime.jsx)("pre",{children:"\n          import AutoHeight from 'react-auto-height'\n          \n          <AutoHeight className=\"additional-css\" style={{background}} onClick={handleClick}>\n            {dynamicContent}\n          </AutoHeight>\n        "}),Object(jsx_runtime.jsxs)(src_0,{className:"additional-css",style:{background:background},children:["click here multiple times to change content",content]})]})})).add("Nested AutoHeights",(function(){var _useState6=_slicedToArray(Object(react.useState)(!0),2),isShort=_useState6[0],setIsShort=_useState6[1],extra=isShort?null:Object(jsx_runtime.jsx)("div",{children:" ... extra\n ... extra"});return Object(jsx_runtime.jsxs)("div",{onClick:function handleClick(){return setIsShort((function(prev){return!prev}))},children:[intro,Object(jsx_runtime.jsxs)("div",{className:"nested",children:[Object(jsx_runtime.jsxs)("div",{style:{background:"salmon"},children:["none:",Object(jsx_runtime.jsx)("pre",{children:"<div>\n  <div />\n  <div />\n</div>"}),Object(jsx_runtime.jsxs)("div",{children:[".",extra]}),Object(jsx_runtime.jsxs)("div",{children:[".",extra]}),Object(jsx_runtime.jsx)("b",{children:extra}),". ✗"]}),Object(jsx_runtime.jsxs)(src_0,{style:{background:"orange"},children:["outer AutoHeight:",Object(jsx_runtime.jsx)("pre",{children:"<AutoHeight>\n  <div />\n  <div />\n</AutoHeight>"}),Object(jsx_runtime.jsxs)("div",{children:[".",extra]}),Object(jsx_runtime.jsxs)("div",{children:[".",extra]}),Object(jsx_runtime.jsx)("b",{children:extra}),". ✗"]}),Object(jsx_runtime.jsxs)("div",{style:{background:"gold"},children:["inner AutoHeights:",Object(jsx_runtime.jsx)("pre",{children:"<div>\n  <AutoHeight />\n  <AutoHeight />\n</div>"}),Object(jsx_runtime.jsxs)(src_0,{children:[".",extra]}),Object(jsx_runtime.jsxs)(src_0,{children:[".",extra]}),Object(jsx_runtime.jsx)("b",{children:extra}),". ✓"]}),Object(jsx_runtime.jsxs)(src_0,{style:{background:"yellowgreen"},children:["2 levels of nesting:",Object(jsx_runtime.jsx)("pre",{children:"<AutoHeight>\n  <AutoHeight />\n  <AutoHeight />\n</AutoHeight>"}),Object(jsx_runtime.jsxs)(src_0,{children:[".",extra]}),Object(jsx_runtime.jsxs)(src_0,{children:[".",extra]}),Object(jsx_runtime.jsx)("b",{children:extra}),". ✓"]}),Object(jsx_runtime.jsxs)(src_0,{style:{background:"greenyellow"},children:["3 levels of nesting:",Object(jsx_runtime.jsx)("pre",{children:"<AutoHeight>\n  ...\n  ...\n</AutoHeight>"}),Object(jsx_runtime.jsxs)(src_0,{children:[Object(jsx_runtime.jsx)(src_0,{children:"."}),Object(jsx_runtime.jsx)(src_0,{children:extra})]}),Object(jsx_runtime.jsxs)(src_0,{children:[Object(jsx_runtime.jsx)(src_0,{children:"."}),Object(jsx_runtime.jsx)(src_0,{children:extra})]}),Object(jsx_runtime.jsx)("b",{children:Object(jsx_runtime.jsx)(src_0,{children:extra})}),". ✓"]})]}),Object(jsx_runtime.jsx)("i",{children:"(click to change content)"}),Object(jsx_runtime.jsx)("p",{children:"Nested AutoHeights should work fine, but please test your app more carefully."})]})})).add("Custom element",(function(){var _useState8=_slicedToArray(Object(react.useState)(5),2),itemCount=_useState8[0],setCount=_useState8[1],_useState10=_slicedToArray(Object(react.useState)({}),2),expanded=_useState10[0],setExpanded=_useState10[1],_useState12=_slicedToArray(Object(react.useState)(Array.from(Array(itemCount)).map((function(_){return rndColor()}))),2),colors=_useState12[0],setColors=_useState12[1],items=Array.from(Array(itemCount)).map((function(_,i){return i})),createClickHandler=function createClickHandler(id){return function(event){event.stopPropagation(),setExpanded((function(prev){return Object.assign({},prev,function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},id,!prev[id]))}))}};return Object(jsx_runtime.jsxs)("div",{onClick:function handleReRender(){var nextCount=2+Math.floor(10*Math.random());setCount(nextCount),setColors(Array.from(Array(nextCount)).map((function(_){return rndColor()})))},children:[intro,Object(jsx_runtime.jsx)("pre",{children:'\n          <AutoHeight element="ul">\n            {items}\n          </AutoHeight>\n        '}),Object(jsx_runtime.jsx)(src_0,{element:"ul",children:items.map((function(item){return Object(jsx_runtime.jsxs)(src_0,{element:"li",onClick:createClickHandler(item),style:{background:colors[item],overflow:"visible",transition:"200ms cubic-bezier(0, -0.5, 1, 1.5)"},className:"additional-css",children:["item ",item,expanded[item]?"\n.".repeat(1+itemCount%5):""]},item)}))}),Object(jsx_runtime.jsx)("i",{children:"(click an item to expand/collapse, click outside to re-render number of items in the list)"})]})})).add("Textarea (controlled via render props)",(function(){var handleAutoResize=function handleAutoResize(ev){ev.currentTarget.style.height=ev.currentTarget.scrollHeight-2+"px"};return Object(jsx_runtime.jsxs)("div",{children:[intro,Object(jsx_runtime.jsx)("pre",{children:"\n          <AutoHeight>\n            {(updateHeight) => (\n              <textarea onInput={updateHeight} />\n            )}\n          </AutoHeight>\n        "}),Object(jsx_runtime.jsx)(src_0,{style:{background:"yellowgreen"},children:function children(updateHeight){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["AutoHeight render props: ✓ ",Object(jsx_runtime.jsx)("textarea",{onInput:updateHeight})]})}}),Object(jsx_runtime.jsx)("br",{}),"Please do NOT combine AutoHeight with other auto-resizing solutions:",Object(jsx_runtime.jsxs)(src_0,{style:{background:"orange"},children:["AutoHeight + other solution will NOT work: ✗ ",Object(jsx_runtime.jsx)("textarea",{onKeyPress:handleAutoResize})]}),Object(jsx_runtime.jsxs)("div",{style:{background:"gold"},children:["Other solution only: ✓ ",Object(jsx_runtime.jsx)("textarea",{onKeyPress:handleAutoResize})]}),Object(jsx_runtime.jsx)("i",{children:"(try typing long text into textareas)"})]})})).add("Parents of re-rendered children",(function(){var Child=function Child(){var _useState14=_slicedToArray(Object(react.useState)(!0),2),isShot=_useState14[0],setShort=_useState14[1],content=isShot?"  <AutoHeight>short</AutoHeight>":"  <AutoHeight>\n    long\n    long\n  </AutoHeight>";return Object(jsx_runtime.jsx)(src_0,{onClick:function handleClick(){return setShort((function(prev){return!prev}))},className:"additional-css",style:{background:"yellowgreen"},children:content})};return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[intro,Object(jsx_runtime.jsx)("pre",{children:Object(jsx_runtime.jsxs)(src_0,{children:["<AutoHeight>",Object(jsx_runtime.jsx)(Child,{}),"  ","...",Object(jsx_runtime.jsx)(Child,{}),"</AutoHeight>"]})}),Object(jsx_runtime.jsx)("i",{children:"(click on individual children to re-render them and update parent height, without re-rendering the parent)"})]})})).add("Interference with margin collapse",(function(){var _useState16=_slicedToArray(Object(react.useState)(!0),2),isShort=_useState16[0],setIsShort=_useState16[1],extra=isShort?null:Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)("p",{children:" ... extra paragraph 1"}),Object(jsx_runtime.jsx)("p",{children:" ... extra paragraph 2"})]});return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[intro,Object(jsx_runtime.jsxs)("pre",{onClick:function handleClick(){return setIsShort((function(prev){return!prev}))},children:[Object(jsx_runtime.jsx)("span",{children:"<p>...</p>"}),Object(jsx_runtime.jsx)("p",{children:"<p>...</p>"}),Object(jsx_runtime.jsx)("p",{children:Object(jsx_runtime.jsxs)(src_0,{style:{background:"yellowgreen"},children:["<p>\n  <AutoHeight>"," ",Object(jsx_runtime.jsx)("b",{children:"works fine inside an element with margin"})," ",extra,"  </AutoHeight>\n</p>"]})}),Object(jsx_runtime.jsx)("p",{children:"<p>...</p>"}),Object(jsx_runtime.jsx)(src_0,{children:Object(jsx_runtime.jsxs)("p",{style:{background:"gold"},children:["<AutoHeight>\n  <p>"," ",Object(jsx_runtime.jsxs)("b",{children:["if AutoHeight contains an element with margin, it will prevent"," ",Object(jsx_runtime.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing",target:"_blank",rel:"noopener",children:"margin collapse"})]}),extra,"  </p>\n</AutoHeight>"]})}),Object(jsx_runtime.jsx)("p",{children:"<p>...</p>"}),Object(jsx_runtime.jsx)("i",{children:"(click to change content)"})]})]})}))}},[[293,1,2]]]);
//# sourceMappingURL=main.a960c5963af063da1b3b.bundle.js.map