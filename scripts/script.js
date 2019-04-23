$(document).ready(function(){

// Object content 



// Invert Scroll elements
$.jInvertScroll(['#main', '#back']);


// Function that takes scrolls and activates division events
var windowScrollCount, count, year, topDist;

$.jInvertScroll(['#main'], {
	width: 'auto',	// Page width (auto or int value)
	height: 200000,	// Page height (the shorter, the faster the scroll)
	onScroll: function(percent) {

		$('#start-scrolling').css('display', 'none');

		year = Math.round(percent*4519);

		if(year == 4519){
			console.log('complete');
			$('.year').css({
				'font-size': '150px',
				'text-align': 'left',
				'margin-top': '70px'
			});

			$('#ending').css('width', '50vw');
			$('#main').css('margin-left', '-5vw');

		}else {
			$('.year').css({
				'font-size': '300px',
				'text-align': 'center',
				'margin-top': '0px'
			});

			$('#ending').css('width', '0vw');
			$('#main').css('margin-left', '-0vw');
		}

    	updateYear(year);

    	//console.log('percentage: ' + Math.round(percent*600));
		$('#cover').css('width', Math.round(600-(percent*600))+'px');
		// Callback function that will be called each time the user
		// scrolls up or down, useful for animating other parts
		// on the page depending on how far the user has scrolled down
		// values go from 0.0 to 1.0 (with 4 decimals precision)
	}
});





//------------------------------YEAR UPDATES---------------------------------------//


// Function to update the year in the background 
function updateYear(yr){
	if(yr < 2500){
	   		yr = 2500-yr;
	   		yr = yr + " BCE";
	   	}else if( yr => 2500 && yr <= 4519){
	   		yr = yr-2500;
	   		yr = yr + " CE";
	   	}else {
	   		yr = 2019 + " CE";
	   	}
	$('.year').text(yr);
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























});