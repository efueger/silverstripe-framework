!function e(t,n,r){function o(u,a){if(!n[u]){if(!t[u]){var c="function"==typeof require&&require;if(!a&&c)return c(u,!0);if(i)return i(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var f=n[u]={exports:{}};t[u][0].call(f.exports,function(e){var n=t[u][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("reducer-register"),i=r(o),u=e("jQuery"),a=r(u),c=e("react"),l=r(c),f=e("react-dom"),s=r(f),p=e("../sections/campaign-admin/controller"),d=r(p),y=e("../state/campaigns/reducer"),b=r(y);i["default"].add("campaigns",b["default"]),a["default"].entwine("ss",function(e){e(".cms-content.CampaignAdmin").entwine({onadd:function(){s["default"].render(l["default"].createElement(d["default"],null),this[0])},onremove:function(){s["default"].unmountComponentAtNode(this[0])}})})},{"../sections/campaign-admin/controller":7,"../state/campaigns/reducer":9,jQuery:"jQuery",react:"react","react-dom":"react-dom","reducer-register":"reducer-register"}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),f=e("silverstripe-component"),s=r(f),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){return l["default"].createElement("td",{className:"grid-field-cell-component"},this.props.children)}}]),t}(s["default"]);n["default"]=p},{react:"react","silverstripe-component":"silverstripe-component"}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),f=e("silverstripe-component"),s=r(f),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){return l["default"].createElement("th",{className:"grid-field-header-cell-component"},this.props.children)}}]),t}(s["default"]);n["default"]=p},{react:"react","silverstripe-component":"silverstripe-component"}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),f=e("silverstripe-component"),s=r(f),p=e("../grid-field-row"),d=r(p),y=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){return l["default"].createElement("thead",{className:"grid-field-header-component"},l["default"].createElement(d["default"],null,this.props.children))}}]),t}(s["default"]);n["default"]=y},{"../grid-field-row":5,react:"react","silverstripe-component":"silverstripe-component"}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),f=e("silverstripe-component"),s=r(f),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){return l["default"].createElement("tr",{className:"grid-field-row-component"},this.props.children)}}]),t}(s["default"]);n["default"]=p},{react:"react","silverstripe-component":"silverstripe-component"}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),f=e("silverstripe-component"),s=r(f),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){return l["default"].createElement("table",{className:"grid-field-component [ table ]"},this.generateHeader(),l["default"].createElement("tbody",null,this.generateRows()))}},{key:"generateHeader",value:function(){return"undefined"!=typeof this.props.header?this.props.header:("undefined"!=typeof this.props.data,null)}},{key:"generateRows",value:function(){return"undefined"!=typeof this.props.rows?this.props.rows:("undefined"!=typeof this.props.data,null)}}]),t}(s["default"]);p.propTypes={data:l["default"].PropTypes.object,header:l["default"].PropTypes.object,rows:l["default"].PropTypes.array},n["default"]=p},{react:"react","silverstripe-component":"silverstripe-component"}],7:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=e("react"),l=r(c),f=e("silverstripe-component"),s=r(f),p=e("../../components/grid-field"),d=r(p),y=e("../../components/grid-field-header"),b=r(y),h=e("../../components/grid-field-header-cell"),m=r(h),_=e("../../components/grid-field-row"),v=r(_),E=e("../../components/grid-field-cell"),g=r(E),O=function(e){function t(e){o(this,t);var n=i(this,Object.getPrototypeOf(t).call(this,e));return n.mockData={campaigns:[{title:"SilverStripe 4.0 release",description:"All the stuff related to the 4.0 announcement",changes:20}]},n}return u(t,e),a(t,[{key:"render",value:function(){var e=["title","changes"],t=e.map(function(e,t){return l["default"].createElement(m["default"],{key:t},e)}),n=l["default"].createElement(b["default"],null,t),r=this.mockData.campaigns.map(function(t,n){var r=e.map(function(e,n){return l["default"].createElement(g["default"],{key:n},t[e])});return l["default"].createElement(v["default"],{key:n},r)});return l["default"].createElement(d["default"],{header:n,rows:r})}}]),t}(s["default"]);n["default"]=O},{"../../components/grid-field":6,"../../components/grid-field-cell":2,"../../components/grid-field-header":4,"../../components/grid-field-header-cell":3,"../../components/grid-field-row":5,react:"react","silverstripe-component":"silverstripe-component"}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={CREATE_CAMPAIGN:"CREATE_CAMPAIGN",UPDATE_CAMPAIGN:"UPDATE_CAMPAIGN",DELETE_CAMPAIGN:"DELETE_CAMPAIGN",FETCH_CAMPAIGN_REQUEST:"FETCH_CAMPAIGN_REQUEST",FETCH_CAMPAIGN_FAILURE:"FETCH_CAMPAIGN_FAILURE",FETCH_CAMPAIGN_SUCCESS:"FETCH_CAMPAIGN_SUCCESS"}},{}],9:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){var e=arguments.length<=0||void 0===arguments[0]?l:arguments[0],t=arguments[1];switch(t.type){case c["default"].CREATE_CAMPAIGN:return(0,u["default"])(Object.assign({},e,{}));case c["default"].UPDATE_CAMPAIGN:return(0,u["default"])(Object.assign({},e,{}));case c["default"].DELETE_CAMPAIGN:return(0,u["default"])(Object.assign({},e,{}));case c["default"].FETCH_CAMPAIGN_REQUEST:return(0,u["default"])(Object.assign({},e,{isFetching:!0}));case c["default"].FETCH_CAMPAIGN_FAILURE:return(0,u["default"])(Object.assign({},e,{isFetching:!1}));case c["default"].FETCH_CAMPAIGN_SUCCESS:return(0,u["default"])(Object.assign({},e,{isFetching:!1}));default:return e}}Object.defineProperty(n,"__esModule",{value:!0});var i=e("deep-freeze"),u=r(i),a=e("./action-types"),c=r(a),l={isFetching:!1,items:[]};n["default"]=o},{"./action-types":8,"deep-freeze":"deep-freeze"}]},{},[1]);