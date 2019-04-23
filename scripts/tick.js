$(document).ready(function(){


//------------------------------FADE STYLES-------------------------------------------//

// Make intro fade in of ticking rings 
setTimeout(function(){

	$('#middle').css('opacity', '1');

	setTimeout(function(){

		$('#middle2').css('opacity', '0.7');

		setTimeout(function(){
			$('#middle3').css('opacity', '0.5');
		}, 1000);

	}, 1000);

},1000);


// Function to make the time markers tick
var degs = 0;
var rotate = 0;
var d;
function startTicking(){

setInterval(function(){

	d = "rotate("+rotate+"deg)";

	$('#middle, #middle2, #middle3').css('transform',d);

	rotate = rotate + 10;
	if(rotate > 350){
		rotate = 0;
	}

},1000);
}

startTicking();









});