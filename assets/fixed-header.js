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
	  var fixedHeader = $('.header-bar'),
	  	  fixedSearch = $('.search'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 100) fixedHeader.removeClass('content').addClass('fixed');
	  else fixedHeader.removeClass('fixed').addClass('content');

	  if (scroll >= 650) fixedSearch.addClass('search-fixed');
	  else fixedSearch.removeClass('search-fixed');
	});
});