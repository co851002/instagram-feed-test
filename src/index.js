import './sass/main.scss';
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
