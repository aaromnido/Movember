/*
	Document: custom_scripts.js
	Author: Fernando Val
*/

$(document).ready(function() {


	
	// Bocadillo hiding
	$('.bocadillo').toggle();
	
	// Moustache amplification
	$('.subastador').click(
	    function () {
	        $(this).animate({scale: '+=0.03'}, {queue: false, duration: 1000});
	    }
	);
	
	// Show bocadillo
	$('.subastador').hover(
	    function () {
	        $('.bocadillo').fadeToggle('fast', 'linear');
	    }
	);


	
	// Anchor animation function
	$(function(){
	
	     $('a[href*=#]').click(function() {
	
	     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	         && location.hostname == this.hostname) {
	             var $target = $(this.hash);
	             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	             if ($target.length) {
	                 var targetOffset = $target.offset().top;
	                 $('html,body').animate({scrollTop: targetOffset}, 1000);
	                 return false;
	            }
	       }
	   });
	
	});

	// Hashtags declarations
	tweetHashtag('product1', 'gourmet');
	tweetHashtag('product2', 'curvas');
	tweetHashtag('product3', 'espallargas');
	tweetHashtag('product4', 'vinoAylon');

	

});

/* Hashtags dinamic printing function */
function tweetHashtag(target, tag){

	var target = target,
	tag = tag,
	path = "https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A8888%2Fmovember_template%2Fejemplo_tweet.html&source=tweetbutton&text=%23MovemberZGZ, pujo por %23" + tag + "&url=http%3A%2F%2Flocalhost%3A8888%2Fmovember_template%2Fejemplo_tweet.html&via=cachiruloValley";
	
	// Print the complete URL
	$("." + target + " a").attr("href", path);
	
}



