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

},{}]},{},[1]);
