$(document).ready(function(){


// Loading text in intro 


var period = 0;
var loadingText = "";
var readied = 0;
var scrollReady = false;

disableScroll();

$('#clock-main').css('opacity', '1');

setInterval(function(){

	if(period == 0){
		loadingText = "LOADING..";
		period = 1;
	}else if (period == 1){
		loadingText = "LOADING...";
		period = 2;
	}else {
		loadingText = "LOADING.";
		period = 0;
	}

	$('#loading').text(loadingText);
	readied = readied + 100;

	if(readied > 500){
		nextIntro();
	}
}, 800);


function nextIntro(){
	$('#intro-logo').fadeOut(200);
	$('#loading').fadeOut(200);
	$('#intro-header').fadeIn(1400);
	setTimeout(function(){
		$('#click-begin').fadeIn(800);
	}, 3000);
}



/*
// Scroll function, if ready, closes intro 
$(window).scroll(function(){
	//console.log('scroll');
	if(scrollReady){
		wipe();
	}
});*/



$('#click-begin').click(function(){
		wipe();
});



// Animation wipe
function wipe(){

	$('#wipe').css('margin-left', '-100vw');
	$('#intro-header').fadeOut(1400);
	$('#click-begin').fadeOut(1400);

setTimeout(function(){

	$('#intro').css('opacity', '0');

	setTimeout(function(){
		$('#intro').css('display', 'none');
		enableScroll();

	},2000);

}, 2000);

}






// Disable and enable scroll functions
function disableScroll(){
	$('body').css('overflow', 'hidden');
	$('html').css('overflow', 'hidden');

}

function enableScroll(){
	$('body').css('overflow', 'auto');
	$('html').css('overflow', 'auto');
}


// Enabled for working on main page content 
enableScroll();











});