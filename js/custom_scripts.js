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



	/* Por desarrollar funcion aleatoria para los thumbnails girados */
	/*
	var rango_superior = 10;
	var rango_inferior = 5;
	var aleatorio = Math.floor(Math.random()*(rango_superior-(rango_inferior-1))) + rango_inferior;
	console.log(aleatorio);
	*/
	
	

});