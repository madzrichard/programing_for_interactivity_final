( function( $ ) {
	
	$window = $(window);
	$slide = $('.homeSlide');
	$body = $('body');
	  
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      adjustWindow();
			  $body.removeClass('loading').addClass('loaded');
		}, 800);
	});
	
	function adjustWindow(){
		var s = skrollr.init({
		    forceHeight: false
		});
		
	    winH = $window.height();
	    if(winH <= 550) {
			winH = 550;
		} 
	    $slide.height(winH);
	    s.refresh($('.homeSlide'));
	}
		
} )( jQuery );



function openModal() {
  document.getElementById('myModal').style.display = "block";
}
function openModal2(){
  document.getElementById('myModal2').style.display = "block";
}
function openModal3(){
	document.getElementById('myModal3').style.display = "block";
}
function openModal4(){
	document.getElementById('myModal4').style.display = "block";
}


function closeModal() {
  document.getElementById('myModal').style.display = "none";
}
function closeModal2(){
  document.getElementById('myModal2').style.display = "none";
}
function closeModal3(){
  document.getElementById('myModal3').style.display = "none";
}
function closeModal4(){
  document.getElementById('myModal4').style.display = "none";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

}


