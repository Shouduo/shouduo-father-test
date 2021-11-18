(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.test = {}));
}(this, (function (exports) { 'use strict';

  function addnumber(a, b) {
    var result = a + b;
    console.log("result", result);
    return result;
  }

  exports.addnumber = addnumber;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
