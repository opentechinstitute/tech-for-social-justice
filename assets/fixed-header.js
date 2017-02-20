// var wrap = $("header-bar");

// wrap.on("scroll", function(e) {
    
//   if (this.scrollTop > 147) {
//     wrap.addClass("fixed");
//     wrap.removeClass("content");
//   } else {
//     wrap.removeClass("fixed");
//     wrap.addClass("content");
//   }
  
// });

$( document ).ready(function() {
	$(window).scroll(function(){
	  var sticky = $('.header-bar'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 100) sticky.removeClass('content').addClass('fixed');
	  else sticky.removeClass('fixed').addClass('content');
	});
});