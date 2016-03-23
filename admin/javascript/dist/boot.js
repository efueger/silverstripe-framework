!function e(t,r,n){function o(u,c){if(!r[u]){if(!t[u]){var a="function"==typeof require&&require;if(!c&&a)return a(u,!0);if(i)return i(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var d=r[u]={exports:{}};t[u][0].call(d.exports,function(e){var r=t[u][1][e];return o(r?r:e)},d,d.exports,e,t,r,n)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(){y["default"].add("config",w["default"]);var e={},t=(0,a.combineReducers)(y["default"].getAll()),r=(0,a.applyMiddleware)(d["default"],(0,l["default"])())(a.createStore);window.store=r(t,e),h.setConfig(window.ss.config)(window.store.dispatch)}var u=e("jQuery"),c=o(u),a=e("redux"),f=e("redux-thunk"),d=o(f),s=e("redux-logger"),l=o(s),p=e("reducer-register"),y=o(p),v=e("../state/config/actions"),h=n(v),g=e("../state/config/reducer"),w=o(g);(0,c["default"])("body").entwine({onadd:function(){i()}})},{"../state/config/actions":3,"../state/config/reducer":4,jQuery:"jQuery","reducer-register":"reducer-register",redux:13,"redux-logger":6,"redux-thunk":7}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={SET_CONFIG:"SET_CONFIG"}},{}],3:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){return function(t,r){return t({type:u["default"].SET_CONFIG,payload:{config:e}})}}Object.defineProperty(r,"__esModule",{value:!0}),r.setConfig=o;var i=e("./action-types"),u=n(i)},{"./action-types":2}],4:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case a["default"].SET_CONFIG:return(0,u["default"])(Object.assign({},e,t.payload.config));default:return e}}Object.defineProperty(r,"__esModule",{value:!0});var i=e("deep-freeze"),u=n(i),c=e("./action-types"),a=n(c);r["default"]=o},{"./action-types":2,"deep-freeze":5}],5:[function(e,t,r){t.exports=function n(e){return Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){!e.hasOwnProperty(t)||null===e[t]||"object"!=typeof e[t]&&"function"!=typeof e[t]||Object.isFrozen(e[t])||n(e[t])}),e}},{}],6:[function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function i(e,t,r,i){switch("undefined"==typeof e?"undefined":o(e)){case"object":return"function"==typeof e[i]?e[i].apply(e,n(r)):e[i];case"function":return e(t);default:return e}}function u(){function e(){E.forEach(function(e,t){var r=e.started,o=e.startedTime,c=e.action,a=e.prevState,d=e.error,l=e.took,p=e.nextState,v=E[t+1];v&&(p=v.prevState,l=v.started-r);var g=_(c),w="function"==typeof s?s(function(){return p},c):s,b=f(o),m=x.title?"color: "+x.title(g)+";":null,O="action "+(h?b:"")+" "+g.type+" "+(y?"(in "+l.toFixed(2)+" ms)":"");try{w?x.title?u.groupCollapsed("%c "+O,m):u.groupCollapsed(O):x.title?u.group("%c "+O,m):u.group(O)}catch(j){u.log(O)}var S=i(n,g,[a],"prevState"),M=i(n,g,[g],"action"),T=i(n,g,[d,a],"error"),A=i(n,g,[p],"nextState");S&&(x.prevState?u[S]("%c prev state","color: "+x.prevState(a)+"; font-weight: bold",a):u[S]("prev state",a)),M&&(x.action?u[M]("%c action","color: "+x.action(g)+"; font-weight: bold",g):u[M]("action",g)),d&&T&&(x.error?u[T]("%c error","color: "+x.error(d,a)+"; font-weight: bold",d):u[T]("error",d)),A&&(x.nextState?u[A]("%c next state","color: "+x.nextState(p)+"; font-weight: bold",p):u[A]("next state",p));try{u.groupEnd()}catch(j){u.log("—— log end ——")}}),E.length=0}var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=t.level,n=void 0===r?"log":r,o=t.logger,u=void 0===o?console:o,c=t.logErrors,a=void 0===c?!0:c,s=t.collapsed,l=t.predicate,p=t.duration,y=void 0===p?!1:p,v=t.timestamp,h=void 0===v?!0:v,g=t.transformer,w=t.stateTransformer,b=void 0===w?function(e){return e}:w,m=t.actionTransformer,_=void 0===m?function(e){return e}:m,O=t.errorTransformer,j=void 0===O?function(e){return e}:O,S=t.colors,x=void 0===S?{title:function(){return"#000000"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}}:S;if("undefined"==typeof u)return function(){return function(e){return function(t){return e(t)}}};g&&console.error("Option 'transformer' is deprecated, use stateTransformer instead");var E=[];return function(t){var r=t.getState;return function(t){return function(n){if("function"==typeof l&&!l(r,n))return t(n);var o={};E.push(o),o.started=d.now(),o.startedTime=new Date,o.prevState=b(r()),o.action=n;var i=void 0;if(a)try{i=t(n)}catch(u){o.error=j(u)}else i=t(n);if(o.took=d.now()-o.started,o.nextState=b(r()),e(),o.error)throw o.error;return i}}}}var c=function(e,t){return new Array(t+1).join(e)},a=function(e,t){return c("0",t-e.toString().length)+e},f=function(e){return"@ "+a(e.getHours(),2)+":"+a(e.getMinutes(),2)+":"+a(e.getSeconds(),2)+"."+a(e.getMilliseconds(),3)},d="undefined"!=typeof performance&&"function"==typeof performance.now?performance:Date;t.exports=u},{}],7:[function(e,t,r){"use strict";function n(e){var t=e.dispatch,r=e.getState;return function(e){return function(n){return"function"==typeof n?n(t,r):e(n)}}}t.exports=n},{}],8:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return function(e){return function(r,n,o){var u=e(r,n,o),a=u.dispatch,f=[],d={getState:u.getState,dispatch:function(e){return a(e)}};return f=t.map(function(e){return e(d)}),a=c["default"].apply(void 0,f)(u.dispatch),i({},u,{dispatch:a})}}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};r.__esModule=!0,r["default"]=o;var u=e("./compose"),c=n(u)},{"./compose":11}],9:[function(e,t,r){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function o(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),o={},i=0;i<r.length;i++){var u=r[i],c=e[u];"function"==typeof c&&(o[u]=n(c,t))}return o}r.__esModule=!0,r["default"]=o},{}],10:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var r=t&&t.type,n=r&&'"'+r.toString()+'"'||"an action";return'Reducer "'+e+'" returned undefined handling '+n+". To ignore an action, you must explicitly return the previous state."}function i(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:c.ActionTypes.INIT});if("undefined"==typeof n)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof r(void 0,{type:o}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+c.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function u(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var u=t[n];"function"==typeof e[u]&&(r[u]=e[u])}var c,a=Object.keys(r);try{i(r)}catch(f){c=f}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];if(c)throw c;for(var n=!1,i={},u=0;u<a.length;u++){var f=a[u],d=r[f],s=e[f],l=d(s,t);if("undefined"==typeof l){var p=o(f,t);throw new Error(p)}i[f]=l,n=n||l!==s}return n?i:e}}r.__esModule=!0,r["default"]=u;var c=e("./createStore"),a=e("lodash/isPlainObject"),f=(n(a),e("./utils/warning"));n(f)},{"./createStore":12,"./utils/warning":14,"lodash/isPlainObject":17}],11:[function(e,t,r){"use strict";function n(){for(var e=arguments.length,t=Array(e),r=0;e>r;r++)t[r]=arguments[r];return function(){if(0===t.length)return arguments.length<=0?void 0:arguments[0];var e=t[t.length-1],r=t.slice(0,-1);return r.reduceRight(function(e,t){return t(e)},e.apply(void 0,arguments))}}r.__esModule=!0,r["default"]=n},{}],12:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,r){function n(){y===p&&(y=p.slice())}function i(){return l}function a(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return n(),y.push(e),function(){if(t){t=!1,n();var r=y.indexOf(e);y.splice(r,1)}}}function f(e){if(!(0,u["default"])(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(v)throw new Error("Reducers may not dispatch actions.");try{v=!0,l=s(l,e)}finally{v=!1}for(var t=p=y,r=0;r<t.length;r++)t[r]();return e}function d(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,f({type:c.INIT})}if("function"==typeof t&&"undefined"==typeof r&&(r=t,t=void 0),"undefined"!=typeof r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var s=e,l=t,p=[],y=p,v=!1;return f({type:c.INIT}),{dispatch:f,subscribe:a,getState:i,replaceReducer:d}}r.__esModule=!0,r.ActionTypes=void 0,r["default"]=o;var i=e("lodash/isPlainObject"),u=n(i),c=r.ActionTypes={INIT:"@@redux/INIT"}},{"lodash/isPlainObject":17}],13:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0,r.compose=r.applyMiddleware=r.bindActionCreators=r.combineReducers=r.createStore=void 0;var o=e("./createStore"),i=n(o),u=e("./combineReducers"),c=n(u),a=e("./bindActionCreators"),f=n(a),d=e("./applyMiddleware"),s=n(d),l=e("./compose"),p=n(l),y=e("./utils/warning");n(y);r.createStore=i["default"],r.combineReducers=c["default"],r.bindActionCreators=f["default"],r.applyMiddleware=s["default"],r.compose=p["default"]},{"./applyMiddleware":8,"./bindActionCreators":9,"./combineReducers":10,"./compose":11,"./createStore":12,"./utils/warning":14}],14:[function(e,t,r){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}r.__esModule=!0,r["default"]=n},{}],15:[function(e,t,r){function n(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(r){}return t}t.exports=n},{}],16:[function(e,t,r){function n(e){return!!e&&"object"==typeof e}t.exports=n},{}],17:[function(e,t,r){function n(e){if(!i(e)||d.call(e)!=u||o(e))return!1;var t=c;if("function"==typeof e.constructor&&(t=s(e)),null===t)return!0;var r=t.constructor;return"function"==typeof r&&r instanceof r&&a.call(r)==f}var o=e("./_isHostObject"),i=e("./isObjectLike"),u="[object Object]",c=Object.prototype,a=Function.prototype.toString,f=a.call(Object),d=c.toString,s=Object.getPrototypeOf;t.exports=n},{"./_isHostObject":15,"./isObjectLike":16}]},{},[1]);