(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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

/**
 * HAS CLASS?
 * Checks if element has a given class
 */

var hasClass = exports.hasClass = function hasClass(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
};

/**
 * ADD CLASS
 */

var addClass = exports.addClass = function addClass(el, className) {
    if (el.classList) el.classList.add(className);else el.className += ' ' + className;

    return el;
};

/**
 * REMOVE CLASS
 */

var removeClass = exports.removeClass = function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');

    return el;
};

/**
 * GET ALL DATA-ATTRIBUTES
 */

var getDataAttributes = exports.getDataAttributes = function getDataAttributes(el) {
    var length = el.attributes.length;
    var pattern = /^data-/;
    var data = {};

    //Loop all attributes and check for data-
    for (var i = 0; i < length; i++) {
        var attribute = el.attributes[i];

        if (pattern.test(attribute.name)) {
            var name = attribute.name.substr(5);
            var value = attribute.value;
            if (value == 'true' || value == 'false') data[name] = value == 'true' ? true : false;else data[name] = value;
        }
    }

    return data;
};

/**
 * EVENT DELEGATION
 * on - Add delegated event
 * off - Remove delegated event
 */

var on = exports.on = function on(el, evnt, selector, func) {
    el.addEventListener(evnt, function (e) {
        var elem = e.target;
        var match = false;

        //Loop parents until match
        while (!match && elem !== el) {
            if (elem.matches(selector)) {
                match = elem;
            } else {
                elem = elem.parentNode;
            }
        }

        //Run callback if match is found
        if (match) {
            func(e, match);
        }
    });
};

/**
 * TRIGGER EVENT
 */

var trigger = exports.trigger = function trigger(el, e) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(e, true, false);
    el.dispatchEvent(event);
};

/**
 * REGEX ESCAPE
 */

var regexcape = exports.regexcape = function regexcape(str) {
    return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBOzs7Ozs7QUFNQTs7OztBQUlPLElBQU0sb0NBQWMsU0FBZCxXQUFjLENBQUMsRUFBRCxFQUFLLE1BQUwsRUFBZ0I7QUFDdkMsUUFBRyxPQUFPLFVBQVYsRUFBc0I7QUFDbEIsZUFBTyxVQUFQLENBQWtCLFlBQWxCLENBQStCLEVBQS9CLEVBQW1DLE9BQU8sV0FBMUM7QUFDSDtBQUNKLENBSk07O0FBTVA7Ozs7O0FBS08sSUFBTSw4QkFBVyxTQUFYLFFBQVcsQ0FBQyxFQUFELEVBQUssU0FBTCxFQUFtQjtBQUN2QyxRQUFJLEdBQUcsU0FBUCxFQUFrQjtBQUNkLGVBQU8sR0FBRyxTQUFILENBQWEsUUFBYixDQUFzQixTQUF0QixDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBTyxJQUFJLE1BQUosQ0FBVyxVQUFVLFNBQVYsR0FBc0IsT0FBakMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQsQ0FBcUQsR0FBRyxTQUF4RCxDQUFQO0FBQ0g7QUFDSixDQU5NOztBQVFQOzs7O0FBSU8sSUFBTSw4QkFBVyxTQUFYLFFBQVcsQ0FBQyxFQUFELEVBQUssU0FBTCxFQUFtQjtBQUN2QyxRQUFJLEdBQUcsU0FBUCxFQUNJLEdBQUcsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsU0FBakIsRUFESixLQUdJLEdBQUcsU0FBSCxJQUFnQixNQUFNLFNBQXRCOztBQUVKLFdBQU8sRUFBUDtBQUNILENBUE07O0FBU1A7Ozs7QUFJTyxJQUFNLG9DQUFjLFNBQWQsV0FBYyxDQUFDLEVBQUQsRUFBSyxTQUFMLEVBQW1CO0FBQzFDLFFBQUksR0FBRyxTQUFQLEVBQ0ksR0FBRyxTQUFILENBQWEsTUFBYixDQUFvQixTQUFwQixFQURKLEtBR0ksR0FBRyxTQUFILEdBQWUsR0FBRyxTQUFILENBQWEsT0FBYixDQUFxQixJQUFJLE1BQUosQ0FBVyxZQUFZLFVBQVUsS0FBVixDQUFnQixHQUFoQixFQUFxQixJQUFyQixDQUEwQixHQUExQixDQUFaLEdBQTZDLFNBQXhELEVBQW1FLElBQW5FLENBQXJCLEVBQStGLEdBQS9GLENBQWY7O0FBRUosV0FBTyxFQUFQO0FBQ0gsQ0FQTTs7QUFTUDs7OztBQUlPLElBQU0sZ0RBQW9CLFNBQXBCLGlCQUFvQixDQUFDLEVBQUQsRUFBUTtBQUNyQyxRQUFNLFNBQVMsR0FBRyxVQUFILENBQWMsTUFBN0I7QUFDQSxRQUFNLFVBQVUsUUFBaEI7QUFDQSxRQUFNLE9BQU8sRUFBYjs7QUFFQTtBQUNBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFwQixFQUE0QixHQUE1QixFQUFpQztBQUM3QixZQUFNLFlBQVksR0FBRyxVQUFILENBQWMsQ0FBZCxDQUFsQjs7QUFFQSxZQUFHLFFBQVEsSUFBUixDQUFhLFVBQVUsSUFBdkIsQ0FBSCxFQUFnQztBQUM1QixnQkFBTSxPQUFPLFVBQVUsSUFBVixDQUFlLE1BQWYsQ0FBc0IsQ0FBdEIsQ0FBYjtBQUNBLGdCQUFNLFFBQVEsVUFBVSxLQUF4QjtBQUNBLGdCQUFHLFNBQVMsTUFBVCxJQUFtQixTQUFTLE9BQS9CLEVBQ0ksS0FBSyxJQUFMLElBQWEsU0FBUyxNQUFULEdBQWtCLElBQWxCLEdBQXlCLEtBQXRDLENBREosS0FHSSxLQUFLLElBQUwsSUFBYSxLQUFiO0FBQ1A7QUFDSjs7QUFFRCxXQUFPLElBQVA7QUFDSCxDQXBCTTs7QUFzQlA7Ozs7OztBQU1PLElBQU0sa0JBQUssU0FBTCxFQUFLLENBQUMsRUFBRCxFQUFLLElBQUwsRUFBVyxRQUFYLEVBQXFCLElBQXJCLEVBQThCO0FBQzVDLE9BQUcsZ0JBQUgsQ0FBb0IsSUFBcEIsRUFBMEIsVUFBQyxDQUFELEVBQU87QUFDN0IsWUFBSSxPQUFPLEVBQUUsTUFBYjtBQUNBLFlBQUksUUFBUSxLQUFaOztBQUVBO0FBQ0EsZUFBTyxDQUFDLEtBQUQsSUFBVSxTQUFTLEVBQTFCLEVBQThCO0FBQzFCLGdCQUFHLEtBQUssT0FBTCxDQUFhLFFBQWIsQ0FBSCxFQUEyQjtBQUN2Qix3QkFBUSxJQUFSO0FBQ0gsYUFGRCxNQUVLO0FBQ0QsdUJBQU8sS0FBSyxVQUFaO0FBQ0g7QUFDSjs7QUFFRDtBQUNBLFlBQUcsS0FBSCxFQUFVO0FBQ04saUJBQUssQ0FBTCxFQUFRLEtBQVI7QUFDSDtBQUNKLEtBakJEO0FBa0JILENBbkJNOztBQXFCUDs7OztBQUlPLElBQU0sNEJBQVUsU0FBVixPQUFVLENBQUMsRUFBRCxFQUFLLENBQUwsRUFBVztBQUM5QixRQUFNLFFBQVEsU0FBUyxXQUFULENBQXFCLFlBQXJCLENBQWQ7QUFDQSxVQUFNLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUIsSUFBbkIsRUFBeUIsS0FBekI7QUFDQSxPQUFHLGFBQUgsQ0FBaUIsS0FBakI7QUFDSCxDQUpNOztBQU9QOzs7O0FBSU8sSUFBTSxnQ0FBWSxTQUFaLFNBQVksQ0FBQyxHQUFELEVBQVM7QUFDOUIsV0FBTyxJQUFJLE9BQUosQ0FBWSxxQkFBWixFQUFtQyxNQUFuQyxDQUFQO0FBQ0gsQ0FGTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIFZBTklMTEEgSlMgSEVMUEVSIExJQlJBUllcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogTGlicmFyeSBjb250YWluaW5nIHZhbmlsbGEgSlMgaGVscGVyIGZ1bmN0aW9ucyBpbnN0ZWFkIG9mIGpRdWVyeVxuICovXG5cbi8qKlxuICogSU5TRVJUIEFGVEVSXG4gKi9cblxuZXhwb3J0IGNvbnN0IGluc2VydEFmdGVyID0gKGVsLCB0YXJnZXQpID0+IHtcbiAgICBpZih0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWwsIHRhcmdldC5uZXh0U2libGluZylcbiAgICB9XG59XG5cbi8qKlxuICogSEFTIENMQVNTP1xuICogQ2hlY2tzIGlmIGVsZW1lbnQgaGFzIGEgZ2l2ZW4gY2xhc3NcbiAqL1xuXG5leHBvcnQgY29uc3QgaGFzQ2xhc3MgPSAoZWwsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefCApJyArIGNsYXNzTmFtZSArICcoIHwkKScsICdnaScpLnRlc3QoZWwuY2xhc3NOYW1lKVxuICAgIH1cbn1cblxuLyoqXG4gKiBBREQgQ0xBU1NcbiAqL1xuXG5leHBvcnQgY29uc3QgYWRkQ2xhc3MgPSAoZWwsIGNsYXNzTmFtZSkgPT4ge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxuICAgIGVsc2VcbiAgICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZVxuXG4gICAgcmV0dXJuIGVsXG59XG5cbi8qKlxuICogUkVNT1ZFIENMQVNTXG4gKi9cblxuZXhwb3J0IGNvbnN0IHJlbW92ZUNsYXNzID0gKGVsLCBjbGFzc05hbWUpID0+IHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KVxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgICBlbHNlXG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhefFxcXFxiKScgKyBjbGFzc05hbWUuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKFxcXFxifCQpJywgJ2dpJyksICcgJylcblxuICAgIHJldHVybiBlbFxufVxuXG4vKipcbiAqIEdFVCBBTEwgREFUQS1BVFRSSUJVVEVTXG4gKi9cblxuZXhwb3J0IGNvbnN0IGdldERhdGFBdHRyaWJ1dGVzID0gKGVsKSA9PiB7XG4gICAgY29uc3QgbGVuZ3RoID0gZWwuYXR0cmlidXRlcy5sZW5ndGhcbiAgICBjb25zdCBwYXR0ZXJuID0gL15kYXRhLS9cbiAgICBjb25zdCBkYXRhID0ge31cblxuICAgIC8vTG9vcCBhbGwgYXR0cmlidXRlcyBhbmQgY2hlY2sgZm9yIGRhdGEtXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBlbC5hdHRyaWJ1dGVzW2ldXG5cbiAgICAgICAgaWYocGF0dGVybi50ZXN0KGF0dHJpYnV0ZS5uYW1lKSl7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gYXR0cmlidXRlLm5hbWUuc3Vic3RyKDUpXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHJpYnV0ZS52YWx1ZVxuICAgICAgICAgICAgaWYodmFsdWUgPT0gJ3RydWUnIHx8IHZhbHVlID09ICdmYWxzZScpXG4gICAgICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKiBFVkVOVCBERUxFR0FUSU9OXG4gKiBvbiAtIEFkZCBkZWxlZ2F0ZWQgZXZlbnRcbiAqIG9mZiAtIFJlbW92ZSBkZWxlZ2F0ZWQgZXZlbnRcbiAqL1xuXG5leHBvcnQgY29uc3Qgb24gPSAoZWwsIGV2bnQsIHNlbGVjdG9yLCBmdW5jKSA9PiB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldm50LCAoZSkgPT4ge1xuICAgICAgICBsZXQgZWxlbSA9IGUudGFyZ2V0XG4gICAgICAgIGxldCBtYXRjaCA9IGZhbHNlXG5cbiAgICAgICAgLy9Mb29wIHBhcmVudHMgdW50aWwgbWF0Y2hcbiAgICAgICAgd2hpbGUgKCFtYXRjaCAmJiBlbGVtICE9PSBlbCkge1xuICAgICAgICAgICAgaWYoZWxlbS5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgIG1hdGNoID0gZWxlbVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9SdW4gY2FsbGJhY2sgaWYgbWF0Y2ggaXMgZm91bmRcbiAgICAgICAgaWYobWF0Y2gpIHtcbiAgICAgICAgICAgIGZ1bmMoZSwgbWF0Y2gpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4vKipcbiAqIFRSSUdHRVIgRVZFTlRcbiAqL1xuXG5leHBvcnQgY29uc3QgdHJpZ2dlciA9IChlbCwgZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKVxuICAgIGV2ZW50LmluaXRFdmVudChlLCB0cnVlLCBmYWxzZSlcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KVxufVxuXG5cbi8qKlxuICogUkVHRVggRVNDQVBFXG4gKi9cblxuZXhwb3J0IGNvbnN0IHJlZ2V4Y2FwZSA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nLCAnXFxcXCQmJylcbn1cbiJdfQ==
