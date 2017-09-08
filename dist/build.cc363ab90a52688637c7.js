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

// import $ from 'jquery';
// Get acces token from http://instagram.pixelunion.net/
var instagramAccessToken = '3595708606.1677ed0.1677ad7d687f44f886fc5bedd9c14643'
var instagramPostsToShow = 5

function getInstagramFeed() {
  var accessToken = instagramAccessToken;
  $.getJSON(
    "https://api.instagram.com/v1/users/self/media/recent/?access_token=" +
      accessToken +
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
      console.log(insta.data);
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWQyNDkxYzAwODIyZTZiMGM0MDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2Nzcz80NmQxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7O0FDL0VELHlDIiwiZmlsZSI6ImJ1aWxkLmNjMzYzYWI5MGE1MjY4ODYzN2M3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVkMjQ5MWMwMDgyMmU2YjBjNDA1IiwiaW1wb3J0ICcuL3Nhc3MvbWFpbi5zY3NzJztcbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBHZXQgYWNjZXMgdG9rZW4gZnJvbSBodHRwOi8vaW5zdGFncmFtLnBpeGVsdW5pb24ubmV0L1xudmFyIGluc3RhZ3JhbUFjY2Vzc1Rva2VuID0gJzM1OTU3MDg2MDYuMTY3N2VkMC4xNjc3YWQ3ZDY4N2Y0NGY4ODZmYzViZWRkOWMxNDY0MydcbnZhciBpbnN0YWdyYW1Qb3N0c1RvU2hvdyA9IDVcblxuZnVuY3Rpb24gZ2V0SW5zdGFncmFtRmVlZCgpIHtcbiAgdmFyIGFjY2Vzc1Rva2VuID0gaW5zdGFncmFtQWNjZXNzVG9rZW47XG4gICQuZ2V0SlNPTihcbiAgICBcImh0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvdXNlcnMvc2VsZi9tZWRpYS9yZWNlbnQvP2FjY2Vzc190b2tlbj1cIiArXG4gICAgICBhY2Nlc3NUb2tlbiArXG4gICAgICBcIiZjYWxsYmFjaz0/XCIsXG4gICAgZnVuY3Rpb24oaW5zdGEpIHtcbiAgICAgICQuZWFjaChpbnN0YS5kYXRhLCBmdW5jdGlvbihwaG90b3MsIHNyYykge1xuICAgICAgICB2YXIgcHJldHR5VGFncyA9IHNyYy50YWdzLm1hcChmdW5jdGlvbihpdGVtLCBpbmRleCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWcgPSAnPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZXhwbG9yZS90YWdzLycraXRlbSsnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgPiMnK2l0ZW0rJzwvYT4gJ1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFnXG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcHJldHR5Q2FwdGlvbnMgPSBzcmMuY2FwdGlvbi50ZXh0XG4gICAgICAgIC5yZXBsYWNlKC8jKFtcXHddKykvZywgXCI8YSBjbGFzcz1cXFwidGFncy1pbi1wb3N0LWRldGFpbHNcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2V4cGxvcmUvdGFncy8kMVxcXCI+JCY8L2E+XCIpXG4gICAgICAgIC5yZXBsYWNlKC9AKFtcXHddKykvZywgXCI8YSBjbGFzcz1cXFwidXNlci1pbi1wb3N0LWRldGFpbHNcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBocmVmPVxcXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLyQxXFxcIj4kJjwvYT5cIilcblxuICAgICAgICB2YXIgaHRtbFN0cmluZyA9XG4gICAgICAgICAgJzxsaSBjbGFzcz1cImluc3RhZ3JhbS10aWxlXCI+PGEgY2xhc3M9XCJoZWFkZXJcIiBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8nK3NyYy51c2VyLnVzZXJuYW1lKycvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgPjxpbWcgY2xhc3M9XCJpbnN0Z3JhbS1wcm9maWxlLXBpY3R1cmVcIiBzcmM9XCInICtcbiAgICAgICAgICBzcmMudXNlci5wcm9maWxlX3BpY3R1cmUgK1xuICAgICAgICAgICdcIi8+PHNwYW4gY2xhc3M9XCJpbnN0YWdyYW0tdXNlcm5hbWVcIj4nICtcbiAgICAgICAgICBzcmMudXNlci51c2VybmFtZSArXG4gICAgICAgICAgJzwvc3Bhbj48c3BhbiBjbGFzcz1cImluc3RhZ3JhbS1mdWxsbmFtZVwiPicgK1xuICAgICAgICAgIHNyYy51c2VyLmZ1bGxfbmFtZSArXG4gICAgICAgICAgJzwvc3Bhbj48L2E+PHNwYW4gY2xhc3M9XCJpbnN0YWdyYW0tcG9zdFwiPicgK1xuICAgICAgICAgICc8YSBocmVmPVwiJytcbiAgICAgICAgICBzcmMubGluaytcbiAgICAgICAgICAnXCI+PGltZyBpZD1cImluc3RhZ3JhbS1wb3N0XCIgY2xhc3M9XCJpbWFnZVwiIHNyYz1cIicrXG4gICAgICAgICAgc3JjLmltYWdlcy5zdGFuZGFyZF9yZXNvbHV0aW9uLnVybCArXG4gICAgICAgICAgJ1wiLz48L2E+PC9zcGFuPjxkaXYgY2xhc3M9XCJwb3N0LWluZm9cIj48YSBpZD1cImxpa2UtYnRuXCIgY2xhc3M9XCJsaWtlLXBvc3RcIiAgaHJlZj1cIicrIHNyYy5saW5rICsnXCIgdGFyZ2V0PVwiX2JsYW5rXCIgbWVkaWEtaWQ9XCInKyBzcmMuaWQgK1xuICAgICAgICAgICdcIj48L2E+PGEgY2xhc3M9XCJjb21tZW50LXBvc3RcIiBocmVmPVwiJytzcmMubGluaysnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PC9hPjxzcGFuIGNsYXNzPVwicG9zdC1saWtlc1wiJyArXG4gICAgICAgICAgc3JjLmxpa2VzLmNvdW50ICtcbiAgICAgICAgICAnIGxpa2VzPC9zcGFuPjxzcGFuIGNsYXNzPVwicG9zdC1jb21tZW50c1wiPicgK1xuICAgICAgICAgIHNyYy5jb21tZW50cy5jb3VudCArXG4gICAgICAgICAgJyBjb21tZW50czwvc3Bhbj48c3BhbiBjbGFzcz1cInBvc3QtaGVhZGxpbmVcIj4nK1xuICAgICAgICAgIHByZXR0eUNhcHRpb25zICtcbiAgICAgICAgICAnIDwvc3Bhbj48L3NwYW4+PHNwYW4gaHJlZj1cIiNcIiBjbGFzcz1cInBvc3QtdGFnc1wiPicgK1xuICAgICAgICAgIHByZXR0eVRhZ3Muam9pbihcIlwiKSArXG4gICAgICAgICAgJzwvc3Bhbj48L2Rpdj48L2xpPic7XG4gICAgICAgICQoaHRtbFN0cmluZykuYXBwZW5kVG8oXCIjaW5zdGFncmFtLXdyYXBwZXJcIik7XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKGluc3RhLmRhdGEpO1xuICAgIH1cbiAgKTtcbn07XG5cbi8vIGZ1bmN0aW9uIHNlbmRMaWtlKCkge1xuLy8gICAvLyBGaW5kIHRoZSBtZWRpYSBJRCBpbiBhIGRhdGEgYXR0cmlidXRlIGZvciB0aGUgYnV0dG9uXG4vLyAgIHZhciBtZWRpYUlkID0gJChldmVudC50YXJnZXQpLmRhdGEoJ21lZGlhLWlkJyk7XG4vL1xuLy8gICAvLyBCdWlsZCB0aGUgdXJsXG4vLyAgIHZhciB1cmwgPSAnaHR0cHM6Ly9hcGkuaW5zdGFncmFtLmNvbS92MS9tZWRpYS8nO1xuLy8gICB1cmwgKz0gbWVkaWFJZDtcbi8vICAgdXJsICs9ICcvbGlrZXM/YWNjZXNzX3Rva2VuPScgKyBpbnN0YWdyYW1BY2Nlc3NUb2tlbjtcbi8vXG4vLyAgIC8vTWFrZSB0aGUgcmVxdWVzdCBhbmQgaGFuZGxlIHRoZSByZXNwb25zZVxuLy8gICAkLnBvc3QodXJsKS50aGVuKGZ1bmN0aW9uKCl7XG4vLyAgICAgLy8gc3VjY2Vzc1xuLy8gICAgIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgY29uc29sZS5sb2coJ2xpa2UgcmVxdWVzdCBzdWNjZWVkZWQnKTtcbi8vICAgICB9LFxuLy8gICAgIC8vIGZhaWxcbi8vICAgICBmdW5jdGlvbigpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdsaWtlIHJlcXVlc3QgZmFpbGVkJyk7XG4vLyAgICAgfVxuLy8gICB9KTtcbi8vIH1cblxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuZ2V0SW5zdGFncmFtRmVlZCgpO1xuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==