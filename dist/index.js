(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('./helpers');

var helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = helpers;

},{"./helpers":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVscGVycy5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUE7Ozs7O0FBS08sSUFBTSw4QkFBVyxTQUFYLFFBQVcsQ0FBQyxFQUFELEVBQUssU0FBTCxFQUFtQjtBQUN2QyxRQUFJLEdBQUcsU0FBUCxFQUFrQjtBQUNkLGVBQU8sR0FBRyxTQUFILENBQWEsUUFBYixDQUFzQixTQUF0QixDQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsZUFBTyxJQUFJLE1BQUosQ0FBVyxVQUFVLFNBQVYsR0FBc0IsT0FBakMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQsQ0FBcUQsR0FBRyxTQUF4RCxDQUFQO0FBQ0g7QUFDSixDQU5NOztBQVFQOzs7O0FBSU8sSUFBTSw4QkFBVyxTQUFYLFFBQVcsQ0FBQyxFQUFELEVBQUssU0FBTCxFQUFtQjtBQUN2QyxRQUFJLEdBQUcsU0FBUCxFQUNJLEdBQUcsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsU0FBakIsRUFESixLQUdJLEdBQUcsU0FBSCxJQUFnQixNQUFNLFNBQXRCOztBQUVKLFdBQU8sRUFBUDtBQUNILENBUE07O0FBU1A7Ozs7QUFJTyxJQUFNLG9DQUFjLFNBQWQsV0FBYyxDQUFDLEVBQUQsRUFBSyxTQUFMLEVBQW1CO0FBQzFDLFFBQUksR0FBRyxTQUFQLEVBQ0ksR0FBRyxTQUFILENBQWEsTUFBYixDQUFvQixTQUFwQixFQURKLEtBR0ksR0FBRyxTQUFILEdBQWUsR0FBRyxTQUFILENBQWEsT0FBYixDQUFxQixJQUFJLE1BQUosQ0FBVyxZQUFZLFVBQVUsS0FBVixDQUFnQixHQUFoQixFQUFxQixJQUFyQixDQUEwQixHQUExQixDQUFaLEdBQTZDLFNBQXhELEVBQW1FLElBQW5FLENBQXJCLEVBQStGLEdBQS9GLENBQWY7O0FBRUosV0FBTyxFQUFQO0FBQ0gsQ0FQTTs7QUFTUDs7OztBQUlPLElBQU0sZ0RBQW9CLFNBQXBCLGlCQUFvQixDQUFDLEVBQUQsRUFBUTtBQUNyQyxRQUFNLFNBQVMsR0FBRyxVQUFILENBQWMsTUFBN0I7QUFDQSxRQUFNLFVBQVUsUUFBaEI7QUFDQSxRQUFNLE9BQU8sRUFBYjs7QUFFQTtBQUNBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxNQUFwQixFQUE0QixHQUE1QixFQUFpQztBQUM3QixZQUFNLFlBQVksR0FBRyxVQUFILENBQWMsQ0FBZCxDQUFsQjs7QUFFQSxZQUFHLFFBQVEsSUFBUixDQUFhLFVBQVUsSUFBdkIsQ0FBSCxFQUFnQztBQUM1QixnQkFBTSxPQUFPLFVBQVUsSUFBVixDQUFlLE1BQWYsQ0FBc0IsQ0FBdEIsQ0FBYjtBQUNBLGdCQUFNLFFBQVEsVUFBVSxLQUF4QjtBQUNBLGdCQUFHLFNBQVMsTUFBVCxJQUFtQixTQUFTLE9BQS9CLEVBQ0ksS0FBSyxJQUFMLElBQWEsU0FBUyxNQUFULEdBQWtCLElBQWxCLEdBQXlCLEtBQXRDLENBREosS0FHSSxLQUFLLElBQUwsSUFBYSxLQUFiO0FBQ1A7QUFDSjs7QUFFRCxXQUFPLElBQVA7QUFDSCxDQXBCTTs7QUFzQlA7Ozs7OztBQU1PLElBQU0sa0JBQUssU0FBTCxFQUFLLENBQUMsRUFBRCxFQUFLLElBQUwsRUFBVyxRQUFYLEVBQXFCLElBQXJCLEVBQThCO0FBQzVDLE9BQUcsZ0JBQUgsQ0FBb0IsSUFBcEIsRUFBMEIsVUFBQyxDQUFELEVBQU87QUFDN0IsWUFBSSxPQUFPLEVBQUUsTUFBYjtBQUNBLFlBQUksUUFBUSxLQUFaOztBQUVBO0FBQ0EsZUFBTyxDQUFDLEtBQUQsSUFBVSxTQUFTLEVBQTFCLEVBQThCO0FBQzFCLGdCQUFHLEtBQUssT0FBTCxDQUFhLFFBQWIsQ0FBSCxFQUEyQjtBQUN2Qix3QkFBUSxJQUFSO0FBQ0gsYUFGRCxNQUVLO0FBQ0QsdUJBQU8sS0FBSyxVQUFaO0FBQ0g7QUFDSjs7QUFFRDtBQUNBLFlBQUcsS0FBSCxFQUFVO0FBQ04saUJBQUssQ0FBTCxFQUFRLEtBQVI7QUFDSDtBQUNKLEtBakJEO0FBa0JILENBbkJNOztBQXFCUDs7OztBQUlPLElBQU0sNEJBQVUsU0FBVixPQUFVLENBQUMsRUFBRCxFQUFLLENBQUwsRUFBVztBQUM5QixRQUFNLFFBQVEsU0FBUyxXQUFULENBQXFCLFlBQXJCLENBQWQ7QUFDQSxVQUFNLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUIsSUFBbkIsRUFBeUIsS0FBekI7QUFDQSxPQUFHLGFBQUgsQ0FBaUIsS0FBakI7QUFDSCxDQUpNOztBQU9QOzs7O0FBSU8sSUFBTSxnQ0FBWSxTQUFaLFNBQVksQ0FBQyxHQUFELEVBQVM7QUFDOUIsV0FBTyxJQUFJLE9BQUosQ0FBWSxxQkFBWixFQUFtQyxNQUFuQyxDQUFQO0FBQ0gsQ0FGTTs7Ozs7Ozs7O0FDM0dQOztJQUFZLE87Ozs7a0JBRUcsTyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEhBUyBDTEFTUz9cbiAqIENoZWNrcyBpZiBlbGVtZW50IGhhcyBhIGdpdmVuIGNsYXNzXG4gKi9cblxuZXhwb3J0IGNvbnN0IGhhc0NsYXNzID0gKGVsLCBjbGFzc05hbWUpID0+IHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKCcoXnwgKScgKyBjbGFzc05hbWUgKyAnKCB8JCknLCAnZ2knKS50ZXN0KGVsLmNsYXNzTmFtZSlcbiAgICB9XG59XG5cbi8qKlxuICogQUREIENMQVNTXG4gKi9cblxuZXhwb3J0IGNvbnN0IGFkZENsYXNzID0gKGVsLCBjbGFzc05hbWUpID0+IHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KVxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgICBlbHNlXG4gICAgICAgIGVsLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWVcblxuICAgIHJldHVybiBlbFxufVxuXG4vKipcbiAqIFJFTU9WRSBDTEFTU1xuICovXG5cbmV4cG9ydCBjb25zdCByZW1vdmVDbGFzcyA9IChlbCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdClcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgZWxzZVxuICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpXG5cbiAgICByZXR1cm4gZWxcbn1cblxuLyoqXG4gKiBHRVQgQUxMIERBVEEtQVRUUklCVVRFU1xuICovXG5cbmV4cG9ydCBjb25zdCBnZXREYXRhQXR0cmlidXRlcyA9IChlbCkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IGVsLmF0dHJpYnV0ZXMubGVuZ3RoXG4gICAgY29uc3QgcGF0dGVybiA9IC9eZGF0YS0vXG4gICAgY29uc3QgZGF0YSA9IHt9XG5cbiAgICAvL0xvb3AgYWxsIGF0dHJpYnV0ZXMgYW5kIGNoZWNrIGZvciBkYXRhLVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZWwuYXR0cmlidXRlc1tpXVxuXG4gICAgICAgIGlmKHBhdHRlcm4udGVzdChhdHRyaWJ1dGUubmFtZSkpe1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJpYnV0ZS5uYW1lLnN1YnN0cig1KVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGUudmFsdWVcbiAgICAgICAgICAgIGlmKHZhbHVlID09ICd0cnVlJyB8fCB2YWx1ZSA9PSAnZmFsc2UnKVxuICAgICAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhXG59XG5cbi8qKlxuICogRVZFTlQgREVMRUdBVElPTlxuICogb24gLSBBZGQgZGVsZWdhdGVkIGV2ZW50XG4gKiBvZmYgLSBSZW1vdmUgZGVsZWdhdGVkIGV2ZW50XG4gKi9cblxuZXhwb3J0IGNvbnN0IG9uID0gKGVsLCBldm50LCBzZWxlY3RvciwgZnVuYykgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZudCwgKGUpID0+IHtcbiAgICAgICAgbGV0IGVsZW0gPSBlLnRhcmdldFxuICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZVxuXG4gICAgICAgIC8vTG9vcCBwYXJlbnRzIHVudGlsIG1hdGNoXG4gICAgICAgIHdoaWxlICghbWF0Y2ggJiYgZWxlbSAhPT0gZWwpIHtcbiAgICAgICAgICAgIGlmKGVsZW0ubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IGVsZW1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnBhcmVudE5vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vUnVuIGNhbGxiYWNrIGlmIG1hdGNoIGlzIGZvdW5kXG4gICAgICAgIGlmKG1hdGNoKSB7XG4gICAgICAgICAgICBmdW5jKGUsIG1hdGNoKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuLyoqXG4gKiBUUklHR0VSIEVWRU5UXG4gKi9cblxuZXhwb3J0IGNvbnN0IHRyaWdnZXIgPSAoZWwsIGUpID0+IHtcbiAgICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJylcbiAgICBldmVudC5pbml0RXZlbnQoZSwgdHJ1ZSwgZmFsc2UpXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudClcbn1cblxuXG4vKipcbiAqIFJFR0VYIEVTQ0FQRVxuICovXG5cbmV4cG9ydCBjb25zdCByZWdleGNhcGUgPSAoc3RyKSA9PiB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZywgJ1xcXFwkJicpXG59XG4iLCJpbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gJy4vaGVscGVycydcblxuZXhwb3J0IGRlZmF1bHQgaGVscGVyc1xuIl19
