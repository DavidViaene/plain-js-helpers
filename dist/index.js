(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * VANILLA JS HELPER LIBRARY
 * ---------------------------
 * Library containing vanilla JS helper functions instead of jQuery
 */

/**
 * INSERT AFTER
 */

var insertAfter = exports.insertAfter = function insertAfter(el, target) {
  if (target.parentNode) {
    target.parentNode.insertBefore(el, target.nextSibling);
  }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBOzs7Ozs7QUFNQTs7OztBQUlPLElBQU0sb0NBQWMsU0FBZCxXQUFjLENBQUMsRUFBRCxFQUFLLE1BQUwsRUFBZ0I7QUFDdkMsTUFBRyxPQUFPLFVBQVYsRUFBc0I7QUFDbEIsV0FBTyxVQUFQLENBQWtCLFlBQWxCLENBQStCLEVBQS9CLEVBQW1DLE9BQU8sV0FBMUM7QUFDSDtBQUNKLENBSk0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBWQU5JTExBIEpTIEhFTFBFUiBMSUJSQVJZXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIExpYnJhcnkgY29udGFpbmluZyB2YW5pbGxhIEpTIGhlbHBlciBmdW5jdGlvbnMgaW5zdGVhZCBvZiBqUXVlcnlcbiAqL1xuXG4vKipcbiAqIElOU0VSVCBBRlRFUlxuICovXG5cbmV4cG9ydCBjb25zdCBpbnNlcnRBZnRlciA9IChlbCwgdGFyZ2V0KSA9PiB7XG4gICAgaWYodGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCB0YXJnZXQubmV4dFNpYmxpbmcpXG4gICAgfVxufVxuIl19
