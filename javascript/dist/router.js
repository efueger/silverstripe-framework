(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('ss.router', ['exports', 'page.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('page.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.page);
    global.ssRouter = mod.exports;
  }
})(this, function (exports, _page) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _page2 = _interopRequireDefault(_page);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function normalise(path) {
    if (path.match(/^(http|https):\/\//)) {
      var anchor = document.createElement('a');
      anchor.href = path;

      if (window.location.host !== anchor.host) {
        return path;
      }

      var base = _page2.default.base();
      if (!base || anchor.pathname.startsWith(base)) {
        path = anchor.pathname.substring(base.length);
      } else {
        return path;
      }
    }

    if (path.startsWith('/')) {
      return path;
    }
    return '/' + path;
  }

  function show(page) {
    var pageShow = page.show;

    return function (path, state, dispatch, push) {
      console.log("base: " + page.base());
      console.log("pre: " + path);
      path = page.normalise(path);
      console.log("normalised: " + path);
      return pageShow(path, state, dispatch, push);
    };
  }

  function routeAppliesToCurrentLocation(route) {
    var r = new _page2.default.Route(route);
    return r.match(_page2.default.current, {});
  }

  _page2.default.normalise = normalise.bind(_page2.default);
  _page2.default.show = show(_page2.default);
  _page2.default.routeAppliesToCurrentLocation = routeAppliesToCurrentLocation;

  exports.default = _page2.default;
});