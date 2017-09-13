/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_main_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sass_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sass_main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sass_bx_slider_custom_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sass_bx_slider_custom_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__sass_bx_slider_custom_scss__);



// import $ from 'jquery';
// Get acces token from http://instagram.pixelunion.net/
var instagramAccessToken = '3595708606.1677ed0.1677ad7d687f44f886fc5bedd9c14643'
var instagramPostsToShow = 6

function getInstagramFeed() {
  $.getJSON(
    "https://api.instagram.com/v1/users/self/media/recent/?access_token=" +
      instagramAccessToken +
      "&count="+
      instagramPostsToShow +
      "&callback=?",
    function(insta) {
      $.each(insta.data, function(photos, src) {
        var prettyTags = src.tags.map(function(item, index){
                    var tag = '<a href="https://www.instagram.com/explore/tags/'+item+'" target="_blank" >#'+item+'</a> '
                    return tag
                  });

        var prettyCaptions = src.caption.text
        .replace(/#([\w]+)/g, "<a class=\"tags-in-post-details\" target=\"_blank\" href=\"https://www.instagram.com/explore/tags/$1\">$&</a>")
        .replace(/@([\w]+)/g, "<a class=\"user-in-post-details\" target=\"_blank\" href=\"https://www.instagram.com/$1\">$&</a>")

        var htmlString =
          '<li class="instagram-tile"><a class="header" href="https://www.instagram.com/'+src.user.username+'/" target="_blank" ><img class="instgram-profile-picture" src="' +
          src.user.profile_picture +
          '"/><span class="instagram-username">' +
          src.user.username +
          '</span><span class="instagram-fullname">' +
          src.user.full_name +
          '</span></a><span class="instagram-post">' +
          '<a href="'+
          src.link+
          '"><img id="instagram-post" class="image" src="'+
          src.images.standard_resolution.url +
          '"/></a></span><div class="post-info"><a id="like-btn" class="like-post"  href="'+ src.link +'" target="_blank" media-id="'+ src.id +
          '"></a><a class="comment-post" href="'+src.link+'" target="_blank"></a><span class="post-likes"' +
          src.likes.count +
          ' likes</span><span class="post-comments">' +
          src.comments.count +
          ' comments</span><span class="post-headline">'+
          prettyCaptions +
          ' </span></span><span href="#" class="post-tags">' +
          prettyTags.join("") +
          '</span></div></li>';
        $(htmlString).appendTo("#instagram-wrapper");
      });
      //console.log(insta.data);
      $('#instagram-wrapper').bxSlider({
        controls:false
      });
    }
  );
};

// function sendLike() {
//   // Find the media ID in a data attribute for the button
//   var mediaId = $(event.target).data('media-id');
//
//   // Build the url
//   var url = 'https://api.instagram.com/v1/media/';
//   url += mediaId;
//   url += '/likes?access_token=' + instagramAccessToken;
//
//   //Make the request and handle the response
//   $.post(url).then(function(){
//     // success
//     function() {
//       console.log('like request succeeded');
//     },
//     // fail
//     function() {
//       console.log('like request failed');
//     }
//   });
// }


$(document).ready(function() {

getInstagramFeed();




});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWZmNTAwODEyZTU3NTZiZDcyMDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2Nzcz80NmQxIiwid2VicGFjazovLy8uL3NyYy9zYXNzL2J4LXNsaWRlci1jdXN0b20uc2Nzcz85NGViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTs7QUFFQTs7Ozs7QUFLQSxDQUFDOzs7Ozs7O0FDeEZELHlDOzs7Ozs7QUNBQSx5QyIsImZpbGUiOiJidWlsZC43ZGRlMGExNWRiODA1OWYwYzJkZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZmY1MDA4MTJlNTc1NmJkNzIwNSIsImltcG9ydCAnLi9zYXNzL21haW4uc2Nzcyc7XG5pbXBvcnQgJy4vc2Fzcy9ieC1zbGlkZXItY3VzdG9tLnNjc3MnO1xuXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gR2V0IGFjY2VzIHRva2VuIGZyb20gaHR0cDovL2luc3RhZ3JhbS5waXhlbHVuaW9uLm5ldC9cbnZhciBpbnN0YWdyYW1BY2Nlc3NUb2tlbiA9ICczNTk1NzA4NjA2LjE2NzdlZDAuMTY3N2FkN2Q2ODdmNDRmODg2ZmM1YmVkZDljMTQ2NDMnXG52YXIgaW5zdGFncmFtUG9zdHNUb1Nob3cgPSA2XG5cbmZ1bmN0aW9uIGdldEluc3RhZ3JhbUZlZWQoKSB7XG4gICQuZ2V0SlNPTihcbiAgICBcImh0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvdXNlcnMvc2VsZi9tZWRpYS9yZWNlbnQvP2FjY2Vzc190b2tlbj1cIiArXG4gICAgICBpbnN0YWdyYW1BY2Nlc3NUb2tlbiArXG4gICAgICBcIiZjb3VudD1cIitcbiAgICAgIGluc3RhZ3JhbVBvc3RzVG9TaG93ICtcbiAgICAgIFwiJmNhbGxiYWNrPT9cIixcbiAgICBmdW5jdGlvbihpbnN0YSkge1xuICAgICAgJC5lYWNoKGluc3RhLmRhdGEsIGZ1bmN0aW9uKHBob3Rvcywgc3JjKSB7XG4gICAgICAgIHZhciBwcmV0dHlUYWdzID0gc3JjLnRhZ3MubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhZyA9ICc8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9leHBsb3JlL3RhZ3MvJytpdGVtKydcIiB0YXJnZXQ9XCJfYmxhbmtcIiA+IycraXRlbSsnPC9hPiAnXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YWdcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBwcmV0dHlDYXB0aW9ucyA9IHNyYy5jYXB0aW9uLnRleHRcbiAgICAgICAgLnJlcGxhY2UoLyMoW1xcd10rKS9nLCBcIjxhIGNsYXNzPVxcXCJ0YWdzLWluLXBvc3QtZGV0YWlsc1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZXhwbG9yZS90YWdzLyQxXFxcIj4kJjwvYT5cIilcbiAgICAgICAgLnJlcGxhY2UoL0AoW1xcd10rKS9nLCBcIjxhIGNsYXNzPVxcXCJ1c2VyLWluLXBvc3QtZGV0YWlsc1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vJDFcXFwiPiQmPC9hPlwiKVxuXG4gICAgICAgIHZhciBodG1sU3RyaW5nID1cbiAgICAgICAgICAnPGxpIGNsYXNzPVwiaW5zdGFncmFtLXRpbGVcIj48YSBjbGFzcz1cImhlYWRlclwiIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLycrc3JjLnVzZXIudXNlcm5hbWUrJy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiA+PGltZyBjbGFzcz1cImluc3RncmFtLXByb2ZpbGUtcGljdHVyZVwiIHNyYz1cIicgK1xuICAgICAgICAgIHNyYy51c2VyLnByb2ZpbGVfcGljdHVyZSArXG4gICAgICAgICAgJ1wiLz48c3BhbiBjbGFzcz1cImluc3RhZ3JhbS11c2VybmFtZVwiPicgK1xuICAgICAgICAgIHNyYy51c2VyLnVzZXJuYW1lICtcbiAgICAgICAgICAnPC9zcGFuPjxzcGFuIGNsYXNzPVwiaW5zdGFncmFtLWZ1bGxuYW1lXCI+JyArXG4gICAgICAgICAgc3JjLnVzZXIuZnVsbF9uYW1lICtcbiAgICAgICAgICAnPC9zcGFuPjwvYT48c3BhbiBjbGFzcz1cImluc3RhZ3JhbS1wb3N0XCI+JyArXG4gICAgICAgICAgJzxhIGhyZWY9XCInK1xuICAgICAgICAgIHNyYy5saW5rK1xuICAgICAgICAgICdcIj48aW1nIGlkPVwiaW5zdGFncmFtLXBvc3RcIiBjbGFzcz1cImltYWdlXCIgc3JjPVwiJytcbiAgICAgICAgICBzcmMuaW1hZ2VzLnN0YW5kYXJkX3Jlc29sdXRpb24udXJsICtcbiAgICAgICAgICAnXCIvPjwvYT48L3NwYW4+PGRpdiBjbGFzcz1cInBvc3QtaW5mb1wiPjxhIGlkPVwibGlrZS1idG5cIiBjbGFzcz1cImxpa2UtcG9zdFwiICBocmVmPVwiJysgc3JjLmxpbmsgKydcIiB0YXJnZXQ9XCJfYmxhbmtcIiBtZWRpYS1pZD1cIicrIHNyYy5pZCArXG4gICAgICAgICAgJ1wiPjwvYT48YSBjbGFzcz1cImNvbW1lbnQtcG9zdFwiIGhyZWY9XCInK3NyYy5saW5rKydcIiB0YXJnZXQ9XCJfYmxhbmtcIj48L2E+PHNwYW4gY2xhc3M9XCJwb3N0LWxpa2VzXCInICtcbiAgICAgICAgICBzcmMubGlrZXMuY291bnQgK1xuICAgICAgICAgICcgbGlrZXM8L3NwYW4+PHNwYW4gY2xhc3M9XCJwb3N0LWNvbW1lbnRzXCI+JyArXG4gICAgICAgICAgc3JjLmNvbW1lbnRzLmNvdW50ICtcbiAgICAgICAgICAnIGNvbW1lbnRzPC9zcGFuPjxzcGFuIGNsYXNzPVwicG9zdC1oZWFkbGluZVwiPicrXG4gICAgICAgICAgcHJldHR5Q2FwdGlvbnMgK1xuICAgICAgICAgICcgPC9zcGFuPjwvc3Bhbj48c3BhbiBocmVmPVwiI1wiIGNsYXNzPVwicG9zdC10YWdzXCI+JyArXG4gICAgICAgICAgcHJldHR5VGFncy5qb2luKFwiXCIpICtcbiAgICAgICAgICAnPC9zcGFuPjwvZGl2PjwvbGk+JztcbiAgICAgICAgJChodG1sU3RyaW5nKS5hcHBlbmRUbyhcIiNpbnN0YWdyYW0td3JhcHBlclwiKTtcbiAgICAgIH0pO1xuICAgICAgLy9jb25zb2xlLmxvZyhpbnN0YS5kYXRhKTtcbiAgICAgICQoJyNpbnN0YWdyYW0td3JhcHBlcicpLmJ4U2xpZGVyKHtcbiAgICAgICAgY29udHJvbHM6ZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgKTtcbn07XG5cbi8vIGZ1bmN0aW9uIHNlbmRMaWtlKCkge1xuLy8gICAvLyBGaW5kIHRoZSBtZWRpYSBJRCBpbiBhIGRhdGEgYXR0cmlidXRlIGZvciB0aGUgYnV0dG9uXG4vLyAgIHZhciBtZWRpYUlkID0gJChldmVudC50YXJnZXQpLmRhdGEoJ21lZGlhLWlkJyk7XG4vL1xuLy8gICAvLyBCdWlsZCB0aGUgdXJsXG4vLyAgIHZhciB1cmwgPSAnaHR0cHM6Ly9hcGkuaW5zdGFncmFtLmNvbS92MS9tZWRpYS8nO1xuLy8gICB1cmwgKz0gbWVkaWFJZDtcbi8vICAgdXJsICs9ICcvbGlrZXM/YWNjZXNzX3Rva2VuPScgKyBpbnN0YWdyYW1BY2Nlc3NUb2tlbjtcbi8vXG4vLyAgIC8vTWFrZSB0aGUgcmVxdWVzdCBhbmQgaGFuZGxlIHRoZSByZXNwb25zZVxuLy8gICAkLnBvc3QodXJsKS50aGVuKGZ1bmN0aW9uKCl7XG4vLyAgICAgLy8gc3VjY2Vzc1xuLy8gICAgIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgY29uc29sZS5sb2coJ2xpa2UgcmVxdWVzdCBzdWNjZWVkZWQnKTtcbi8vICAgICB9LFxuLy8gICAgIC8vIGZhaWxcbi8vICAgICBmdW5jdGlvbigpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdsaWtlIHJlcXVlc3QgZmFpbGVkJyk7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH1cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuZ2V0SW5zdGFncmFtRmVlZCgpO1xuXG5cblxuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL2J4LXNsaWRlci1jdXN0b20uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9