!function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return o(n?n:e)},s,s.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("../../../javascript/src/jQuery"),f=r(s),p=function(e){function t(e){o(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return"undefined"!=typeof n.props.route&&(n._render=n.render,n.render=function(){var e=null;return n.isComponentRoute()&&(e=n._render()),e},window.ss.router(n.props.route,function(e,t){n.handleEnterRoute(e,t)}),window.ss.router.exit(n.props.route,function(e,t){n.handleExitRoute(e,t)})),n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){if("undefined"!=typeof this.props.cmsEvents){this.cmsEvents=this.props.cmsEvents;for(var e in this.cmsEvents)(0,f["default"])(document).on(e,this.cmsEvents[e].bind(this))}}},{key:"componentWillUnmount",value:function(){for(var e in this.cmsEvents)(0,f["default"])(document).off(e)}},{key:"handleEnterRoute",value:function(e,t){t()}},{key:"handleExitRoute",value:function(e,t){t()}},{key:"isComponentRoute",value:function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];if("undefined"==typeof this.props.route)return!0;var t=new window.ss.router.Route(this.props.route);return t.match(window.ss.router.current,e)}},{key:"emitCmsEvent",value:function(e,t){(0,f["default"])(document).trigger(e,t)}}]),t}(c.Component);p.propTypes={cmsEvents:l["default"].PropTypes.object},n["default"]=p},{"../../../javascript/src/jQuery":25,react:"react"}],2:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(){y["default"].add("config",v["default"]),y["default"].add("schemas",w["default"]);var e={},t=(0,c.combineReducers)(y["default"].getAll()),n=(0,c.applyMiddleware)(s["default"],(0,p["default"])())(c.createStore);window.store=n(t,e),m.setConfig(window.ss.config)(window.store.dispatch)}var a=e("jQuery"),u=o(a),c=e("redux"),l=e("redux-thunk"),s=o(l),f=e("redux-logger"),p=o(f),d=e("reducer-register"),y=o(d),h=e("../state/config/actions"),m=r(h),b=e("../state/config/reducer"),v=o(b),g=e("../state/schema/reducer"),w=o(g),_=e("../sections/campaign-admin");o(_);(0,u["default"])("body").entwine({onadd:function(){i()}})},{"../sections/campaign-admin":16,"../state/config/actions":20,"../state/config/reducer":21,"../state/schema/reducer":24,jQuery:"jQuery","reducer-register":"reducer-register",redux:"redux","redux-logger":26,"redux-thunk":"redux-thunk"}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("../../SilverStripeComponent"),f=r(s),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("button",{type:this.props.type,className:this.props.className},this.props.label)}}]),t}(f["default"]);p.propTypes={className:l["default"].PropTypes.string,label:l["default"].PropTypes.string.isRequired,type:l["default"].PropTypes.string},p.defaultProps={className:"btn btn-primary",type:"button"},n["default"]=p},{"../../SilverStripeComponent":1,react:"react"}],4:[function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{schemas:e.schemas}}function l(e){return{actions:(0,h.bindActionCreators)(g,e)}}Object.defineProperty(n,"__esModule",{value:!0}),n.FormBuilderComponent=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=e("react"),d=o(p),y=e("react-redux"),h=e("redux"),m=e("jQuery"),b=o(m),v=e("../../state/schema/actions"),g=r(v),w=e("../../SilverStripeComponent"),_=o(w),C=e("../form"),O=o(C),P=e("../text-field"),E=o(P),j=e("../hidden-field"),T=o(j),S=e("../../components/grid-field"),M=o(S),k={components:{TextField:E["default"],GridField:M["default"],HiddenField:T["default"]},getComponentByName:function(e){return this.components[e]},getComponentByDataType:function(e){switch(e){case"String":return this.components.TextField;case"Hidden":return this.components.HiddenField;case"Text":return null;case"HTML":return null;case"Integer":return null;case"Decimal":return null;case"MultiSelect":return null;case"SingleSelect":return null;case"Date":return null;case"DateTime":return null;case"Time":return null;case"Boolean":return null;case"Custom":return this.components.GridField;default:return null}}},x=n.FormBuilderComponent=function(e){function t(e){i(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.formSchemaPromise=null,n.isFetching=!1,n.fetch(),n}return u(t,e),f(t,[{key:"fetch",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]?!0:arguments[0],n=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=[];return this.isFetching===!0?this.formSchemaPromise:(t===!0&&r.push("schema"),n===!0&&r.push("state"),this.formSchemaPromise=b["default"].ajax({method:"GET",headers:{"X-FormSchema-Request":r.join()},url:this.props.schemaUrl}).done(function(t,n,r){e.isFetching=!1,e.props.actions.setSchema(t)}),this.isFetching=!0,this.formSchemaPromise)}},{key:"mapFieldsToComponents",value:function(e){return e.map(function(e,t){var n=null!==e.component?k.getComponentByName(e.component):k.getComponentByDataType(e.type);if(null===n)return null;var r={attributes:e.attributes,data:e.data,description:e.description,extraClass:e.extraClass,fields:e.children,id:e.id,name:e.name};return"Structural"!==e.type&&(r.rightTitle=e.rightTitle,r.leftTitle=e.leftTitle,r.readOnly=e.readOnly,r.disabled=e.disabled,r.customValidationMessage=e.customValidationMessage),"MultiSelect"!==e.type&&"SingleSelect"!==e.type||(r.source=e.source),d["default"].createElement(n,s({key:t},r))})}},{key:"render",value:function(){var e=this.props.schemas[this.props.schemaUrl];if(!e)return null;var t={actions:e.schema.actions,attributes:e.schema.attributes,data:e.schema.data,fields:e.schema.fields,mapFieldsToComponents:this.mapFieldsToComponents};return d["default"].createElement(O["default"],t)}}]),t}(_["default"]);x.propTypes={actions:d["default"].PropTypes.object.isRequired,schemaUrl:d["default"].PropTypes.string.isRequired,schemas:d["default"].PropTypes.object.isRequired},n["default"]=(0,y.connect)(c,l)(x)},{"../../SilverStripeComponent":1,"../../components/grid-field":10,"../../state/schema/actions":23,"../form":5,"../hidden-field":13,"../text-field":14,jQuery:"jQuery",react:"react","react-redux":"react-redux",redux:"redux"}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("../../SilverStripeComponent"),f=r(s),p=e("../form-action"),d=r(p),y=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"getFormActionComponents",value:function(){return this.props.actions.map(function(e){return l["default"].createElement(d["default"],e)})}},{key:"render",value:function(){var e=this.props.attributes,t=this.props.mapFieldsToComponents(this.props.fields),n=this.getFormActionComponents();return l["default"].createElement("form",{id:e.id,className:e.className,encType:e.enctype,method:e.method,action:e.action},t&&l["default"].createElement("fieldset",{className:"form-group"},t),n&&l["default"].createElement("div",{className:"actions-fix-btm"},l["default"].createElement("div",{className:"btn-group",role:"group"},n)))}}]),t}(f["default"]);y.propTypes={actions:l["default"].PropTypes.array,attributes:l["default"].PropTypes.shape({action:l["default"].PropTypes.string.isRequired,"class":l["default"].PropTypes.string.isRequired,enctype:l["default"].PropTypes.string.isRequired,id:l["default"].PropTypes.string.isRequired,method:l["default"].PropTypes.string.isRequired}),data:l["default"].PropTypes.array,fields:l["default"].PropTypes.array.isRequired,mapFieldsToComponents:l["default"].PropTypes.func.isRequired},n["default"]=y},{"../../SilverStripeComponent":1,"../form-action":3,react:"react"}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("silverstripe-component"),f=r(s),p=function(e){function t(e){o(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.handleClick=n.handleClick.bind(n),n}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("button",{className:"grid-field-action-component font-icon-"+this.props.icon,onClick:this.handleClick})}},{key:"handleClick",value:function(e){this.props.handleClick(e)}}]),t}(f["default"]);p.PropTypes={handleClick:l["default"].PropTypes.func.isRequired},n["default"]=p},{react:"react","silverstripe-component":"silverstripe-component"}],7:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("../../SilverStripeComponent"),f=r(s),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("div",{className:this.getCellClassNames()},this.props.children)}},{key:"getCellClassNames",value:function(){var e="grid-field-cell-component ";return e+="number"!=typeof this.props.width?"cell-width-5":this.props.width>10?"cell-width-10":this.props.width<1?"cell-width-1":"cell-width-"+this.props.width}}]),t}(f["default"]);p.PropTypes={width:l["default"].PropTypes.number},n["default"]=p},{"../../SilverStripeComponent":1,react:"react"}],8:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("../../SilverStripeComponent"),f=r(s),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("div",{className:this.getHeaderCellClassNames()},this.props.children)}},{key:"getHeaderCellClassNames",value:function(){var e="grid-field-header-cell-component ";return e+="number"!=typeof this.props.width?"cell-width-5":this.props.width>10?"cell-width-10":this.props.width<1?"cell-width-1":"cell-width-"+this.props.width}}]),t}(f["default"]);p.PropTypes={width:l["default"].PropTypes.number},n["default"]=p},{"../../SilverStripeComponent":1,react:"react"}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("../../SilverStripeComponent"),f=r(s),p=e("./row"),d=r(p),y=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement(d["default"],null,this.props.children)}}]),t}(f["default"]);n["default"]=y},{"../../SilverStripeComponent":1,"./row":11,react:"react"}],10:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("../../SilverStripeComponent"),f=r(s),p=e("./table"),d=r(p),y=e("./header"),h=r(y),m=e("./header-cell"),b=r(m),v=e("./row"),g=r(v),w=e("./cell"),_=r(w),C=e("./action"),O=r(C),P=function(e){function t(e){o(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.deleteCampaign=n.deleteCampaign.bind(n),n.editCampaign=n.editCampaign.bind(n),n.mockData={campaigns:[{title:"SilverStripe 4.0 release",description:"All the stuff related to the 4.0 announcement",changes:20},{title:"March release",description:"march release stuff",changes:2},{title:"About us",description:"The team",changes:1345}]},n}return a(t,e),u(t,[{key:"render",value:function(){var e=[{name:"title"},{name:"changes",width:2},{name:"description",width:6}],t=[l["default"].createElement(O["default"],{icon:"cog",handleClick:this.editCampaign}),l["default"].createElement(O["default"],{icon:"cancel",handleClick:this.deleteCampaign})],n=l["default"].createElement("span",{key:"actionPlaceholder",style:{width:36*t.length+12}}),r=e.map(function(e,t){return l["default"].createElement(b["default"],{key:t,width:e.width},e.name)}),o=l["default"].createElement(h["default"],null,r.concat(n)),i=this.mockData.campaigns.map(function(n,r){var o=e.map(function(e,t){return l["default"].createElement(_["default"],{key:t,width:e.width},n[e.name])}),i=t.map(function(e,t){return Object.assign({},e,{key:"action-"+r+"-"+t})});return l["default"].createElement(g["default"],{key:r},o.concat(i))});return l["default"].createElement(d["default"],{header:o,rows:i})}},{key:"deleteCampaign",value:function(e){}},{key:"editCampaign",value:function(e){}}]),t}(f["default"]);n["default"]=P},{"../../SilverStripeComponent":1,"./action":6,"./cell":7,"./header":9,"./header-cell":8,"./row":11,"./table":12,react:"react"}],11:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("../../SilverStripeComponent"),f=r(s),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("li",{className:"grid-field-row-component [ list-group-item ]"},this.props.children)}}]),t}(f["default"]);n["default"]=p},{"../../SilverStripeComponent":1,react:"react"}],12:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("../../SilverStripeComponent"),f=r(s),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("ul",{className:"grid-field-table-component [ list-group ]"},this.generateHeader(),this.generateRows())}},{key:"generateHeader",value:function(){return"undefined"!=typeof this.props.header?this.props.header:("undefined"!=typeof this.props.data,null)}},{key:"generateRows",value:function(){return"undefined"!=typeof this.props.rows?this.props.rows:("undefined"!=typeof this.props.data,null)}}]),t}(f["default"]);p.propTypes={data:l["default"].PropTypes.object,header:l["default"].PropTypes.object,rows:l["default"].PropTypes.array},n["default"]=p},{"../../SilverStripeComponent":1,react:"react"}],13:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("../../SilverStripeComponent"),f=r(s),p=function(e){function t(e){o(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.handleChange=n.handleChange.bind(n),n}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("div",{className:"field hidden"},l["default"].createElement("input",this.getInputProps()))}},{key:"getInputProps",value:function(){return{className:["hidden",this.props.extraClass].join(" "),id:this.props.name,name:this.props.name,onChange:this.props.onChange,type:"hidden",value:this.props.value}}},{key:"handleChange",value:function(e){"undefined"!=typeof this.props.onChange&&this.props.onChange()}}]),t}(f["default"]);p.propTypes={label:l["default"].PropTypes.string,extraClass:l["default"].PropTypes.string,name:l["default"].PropTypes.string.isRequired,onChange:l["default"].PropTypes.func,value:l["default"].PropTypes.string},n["default"]=p},{"../../SilverStripeComponent":1,react:"react"}],14:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),s=e("../../SilverStripeComponent"),f=r(s),p=function(e){function t(e){o(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.handleChange=n.handleChange.bind(n),n}return a(t,e),u(t,[{key:"render",value:function(){return l["default"].createElement("div",{className:"field text"},this.props.label&&l["default"].createElement("label",{className:"left",htmlFor:"gallery_"+this.props.name},this.props.label),l["default"].createElement("div",{className:"middleColumn"},l["default"].createElement("input",this.getInputProps())))}},{key:"getInputProps",value:function(){return{className:["text",this.props.extraClass].join(" "),id:"gallery_"+this.props.name,name:this.props.name,onChange:this.props.onChange,type:"text",value:this.props.value}}},{key:"handleChange",value:function(e){"undefined"!=typeof this.props.onChange&&this.props.onChange()}}]),t}(f["default"]);p.propTypes={label:l["default"].PropTypes.string,extraClass:l["default"].PropTypes.string,name:l["default"].PropTypes.string.isRequired,onChange:l["default"].PropTypes.func,value:l["default"].PropTypes.string},n["default"]=p},{"../../SilverStripeComponent":1,react:"react"}],15:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){return{config:e.config.sections[t.sectionConfigKey]}}Object.defineProperty(n,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("react"),s=r(l),f=e("react-redux"),p=e("silverstripe-component"),d=r(p),y=e("action-button"),h=r(y),m=e("i18n"),b=r(m),v=e("north-header"),g=r(v),w=e("grid-field"),_=(r(w),e("../../components/form-builder")),C=r(_),O=function(e){function t(e){o(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.addCampaign=n.addCampaign.bind(n),n}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props.config.forms.editForm.schemaUrl;return s["default"].createElement("div",null,s["default"].createElement(g["default"],null),s["default"].createElement(h["default"],{text:b["default"]._t("Campaigns.ADDCAMPAIGN"),type:"secondary",icon:"plus-circled",handleClick:this.addCampaign}),s["default"].createElement(C["default"],{schemaUrl:e}))}},{key:"addCampaign",value:function(){}}]),t}(d["default"]);O.propTypes={config:s["default"].PropTypes.shape({data:s["default"].PropTypes.shape({forms:s["default"].PropTypes.shape({editForm:s["default"].PropTypes.shape({schemaUrl:s["default"].PropTypes.string})})})}),sectionConfigKey:s["default"].PropTypes.string.isRequired},n["default"]=(0,f.connect)(u)(O)},{"../../components/form-builder":4,"action-button":"action-button","grid-field":"grid-field",i18n:"i18n","north-header":"north-header",react:"react","react-redux":"react-redux","silverstripe-component":"silverstripe-component"}],16:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("reducer-register"),i=r(o),a=e("jQuery"),u=r(a),c=e("react"),l=r(c),s=e("react-dom"),f=r(s),p=e("react-redux"),d=e("./controller"),y=r(d),h=e("../../state/campaigns/reducer"),m=r(h);i["default"].add("campaigns",m["default"]),u["default"].entwine("ss",function(e){e(".cms-content.CampaignAdmin").entwine({onadd:function(){f["default"].render(l["default"].createElement(p.Provider,{store:window.store},l["default"].createElement(y["default"],{sectionConfigKey:"CampaignAdmin"})),this[0])},onremove:function(){f["default"].unmountComponentAtNode(this[0])}})})},{"../../state/campaigns/reducer":18,"./controller":15,jQuery:"jQuery",react:"react","react-dom":"react-dom","react-redux":"react-redux","reducer-register":"reducer-register"}],17:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={CREATE_CAMPAIGN:"CREATE_CAMPAIGN",UPDATE_CAMPAIGN:"UPDATE_CAMPAIGN",DELETE_CAMPAIGN:"DELETE_CAMPAIGN",FETCH_CAMPAIGN_REQUEST:"FETCH_CAMPAIGN_REQUEST",FETCH_CAMPAIGN_FAILURE:"FETCH_CAMPAIGN_FAILURE",FETCH_CAMPAIGN_SUCCESS:"FETCH_CAMPAIGN_SUCCESS"}},{}],18:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?l:arguments[0],t=arguments[1];
switch(t.type){case c["default"].CREATE_CAMPAIGN:return(0,a["default"])(Object.assign({},e,{}));case c["default"].UPDATE_CAMPAIGN:return(0,a["default"])(Object.assign({},e,{}));case c["default"].DELETE_CAMPAIGN:return(0,a["default"])(Object.assign({},e,{}));case c["default"].FETCH_CAMPAIGN_REQUEST:return(0,a["default"])(Object.assign({},e,{isFetching:!0}));case c["default"].FETCH_CAMPAIGN_FAILURE:return(0,a["default"])(Object.assign({},e,{isFetching:!1}));case c["default"].FETCH_CAMPAIGN_SUCCESS:return(0,a["default"])(Object.assign({},e,{isFetching:!1}));default:return e}}Object.defineProperty(n,"__esModule",{value:!0});var i=e("deep-freeze"),a=r(i),u=e("./action-types"),c=r(u),l={isFetching:!1,items:[]};n["default"]=o},{"./action-types":17,"deep-freeze":"deep-freeze"}],19:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={SET_CONFIG:"SET_CONFIG"}},{}],20:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return function(t,n){return t({type:a["default"].SET_CONFIG,payload:{config:e}})}}Object.defineProperty(n,"__esModule",{value:!0}),n.setConfig=o;var i=e("./action-types"),a=r(i)},{"./action-types":19}],21:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];switch(t.type){case c["default"].SET_CONFIG:return(0,a["default"])(Object.assign({},e,t.payload.config));default:return e}}Object.defineProperty(n,"__esModule",{value:!0});var i=e("deep-freeze"),a=r(i),u=e("./action-types"),c=r(u);n["default"]=o},{"./action-types":19,"deep-freeze":"deep-freeze"}],22:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={SET_SCHEMA:"SET_SCHEMA"};n["default"]=r},{}],23:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return function(t,n){return t({type:a["default"].SET_SCHEMA,payload:e})}}Object.defineProperty(n,"__esModule",{value:!0}),n.setSchema=o;var i=e("./action-types"),a=r(i)},{"./action-types":22}],24:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){var e=arguments.length<=0||void 0===arguments[0]?s:arguments[0],t=arguments.length<=1||void 0===arguments[1]?null:arguments[1];switch(t.type){case l["default"].SET_SCHEMA:var n=t.payload.schema.schema_url;return(0,u["default"])(Object.assign({},e,o({},n,t.payload)));default:return e}}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=i;var a=e("deep-freeze"),u=r(a),c=e("./action-types"),l=r(c),s=(0,u["default"])({})},{"./action-types":22,"deep-freeze":"deep-freeze"}],25:[function(e,t,n){"use strict";var r="undefined"!=typeof window.jQuery?window.jQuery:null;t.exports=r},{}],26:[function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function i(e,t,n,i){switch("undefined"==typeof e?"undefined":o(e)){case"object":return"function"==typeof e[i]?e[i].apply(e,r(n)):e[i];case"function":return e(t);default:return e}}function a(){function e(){j.forEach(function(e,t){var n=e.started,o=e.startedTime,u=e.action,c=e.prevState,s=e.error,p=e.took,d=e.nextState,h=j[t+1];h&&(d=h.prevState,p=h.started-n);var b=_(u),v="function"==typeof f?f(function(){return d},u):f,g=l(o),w=E.title?"color: "+E.title(b)+";":null,C="action "+(m?g:"")+" "+b.type+" "+(y?"(in "+p.toFixed(2)+" ms)":"");try{v?E.title?a.groupCollapsed("%c "+C,w):a.groupCollapsed(C):E.title?a.group("%c "+C,w):a.group(C)}catch(O){a.log(C)}var P=i(r,b,[c],"prevState"),T=i(r,b,[b],"action"),S=i(r,b,[s,c],"error"),M=i(r,b,[d],"nextState");P&&(E.prevState?a[P]("%c prev state","color: "+E.prevState(c)+"; font-weight: bold",c):a[P]("prev state",c)),T&&(E.action?a[T]("%c action","color: "+E.action(b)+"; font-weight: bold",b):a[T]("action",b)),s&&S&&(E.error?a[S]("%c error","color: "+E.error(s,c)+"; font-weight: bold",s):a[S]("error",s)),M&&(E.nextState?a[M]("%c next state","color: "+E.nextState(d)+"; font-weight: bold",d):a[M]("next state",d));try{a.groupEnd()}catch(O){a.log("—— log end ——")}}),j.length=0}var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=t.level,r=void 0===n?"log":n,o=t.logger,a=void 0===o?console:o,u=t.logErrors,c=void 0===u?!0:u,f=t.collapsed,p=t.predicate,d=t.duration,y=void 0===d?!1:d,h=t.timestamp,m=void 0===h?!0:h,b=t.transformer,v=t.stateTransformer,g=void 0===v?function(e){return e}:v,w=t.actionTransformer,_=void 0===w?function(e){return e}:w,C=t.errorTransformer,O=void 0===C?function(e){return e}:C,P=t.colors,E=void 0===P?{title:function(){return"#000000"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}}:P;if("undefined"==typeof a)return function(){return function(e){return function(t){return e(t)}}};b&&console.error("Option 'transformer' is deprecated, use stateTransformer instead");var j=[];return function(t){var n=t.getState;return function(t){return function(r){if("function"==typeof p&&!p(n,r))return t(r);var o={};j.push(o),o.started=s.now(),o.startedTime=new Date,o.prevState=g(n()),o.action=r;var i=void 0;if(c)try{i=t(r)}catch(a){o.error=O(a)}else i=t(r);if(o.took=s.now()-o.started,o.nextState=g(n()),e(),o.error)throw o.error;return i}}}}var u=function(e,t){return new Array(t+1).join(e)},c=function(e,t){return u("0",t-e.toString().length)+e},l=function(e){return"@ "+c(e.getHours(),2)+":"+c(e.getMinutes(),2)+":"+c(e.getSeconds(),2)+"."+c(e.getMilliseconds(),3)},s="undefined"!=typeof performance&&"function"==typeof performance.now?performance:Date;t.exports=a},{}]},{},[2]);
//# sourceMappingURL=bundle-framework.js.map
