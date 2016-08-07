/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _data = __webpack_require__(1);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*var data = [
	  {id: 1, author: "Pete Hunt", text: "This is one comment"},
	  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
	];*/

	console.log(_data2.default); //bookmarK: Reactive State
	//import React from 'react';
	//import {render} from 'react-dom';


	var data = _data2.default;

	var CommentBox = React.createClass({
	  displayName: 'CommentBox',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h1',
	        null,
	        'Comments'
	      ),
	      React.createElement(CommentList, { data: this.props.data }),
	      React.createElement(CommentForm, null)
	    );
	  }
	});

	var CommentList = React.createClass({
	  displayName: 'CommentList',

	  render: function render() {

	    console.log(this.props.data);

	    if (Object.prototype.toString.call(this.props.data.myData) === '[object Array]') {
	      console.log('Array!');
	    }

	    var commentNodes = this.props.data.myData.map(function (comment) {
	      return React.createElement(
	        Comment,
	        { author: comment.author, key: comment.id },
	        comment.text
	      );
	    });
	    return React.createElement(
	      'div',
	      { className: 'commentList' },
	      commentNodes
	    );
	  }
	});

	var CommentForm = React.createClass({
	  displayName: 'CommentForm',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'commentForm' },
	      'Hello, world! I am a CommentForm.'
	    );
	  }
	});

	var Comment = React.createClass({
	  displayName: 'Comment',

	  rawMarkup: function rawMarkup() {
	    var md = new Remarkable();
	    var rawMarkup = md.render(this.props.children.toString());
	    return { __html: rawMarkup };
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'comment' },
	      React.createElement(
	        'h2',
	        { className: 'commentAuthor' },
	        this.props.author
	      ),
	      React.createElement('span', { dangerouslySetInnerHTML: this.rawMarkup() })
	    );
	  }
	});

	ReactDOM.render(React.createElement(CommentBox, { data: data }), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var data = [{ id: 1, author: "Pete Hunt", text: "This is one comment" }, { id: 2, author: "Jordan Walke", text: "This is *another* comment" }];

	exports.myData = data;

/***/ }
/******/ ]);