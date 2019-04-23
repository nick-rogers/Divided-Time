$(document).ready(function(){




	// Gaussian blur filter
	var filters = document.querySelector(".filters"), // the SVG that contains the filters
		defs = filters.querySelector("defs"), // the  element inside the SVG
		blur = defs.querySelector("#blur"), // the blur filter
		blurFilter = blur.firstElementChild; // the feGaussianBlur primitive




	// Progress click function 
	var coor, theX, pCan;
	pCan = document.getElementById('p-can');

	$('#p-can').click(function(){
		coor = getMousePos(pCan, event);
		theX = coor["x"];
		$('#bar').css('width', theX+'px');
		$("html, body").animate({ scrollTop: ((theX/600)*200000)+"px" });
		setBlur(5);
		blurry();
		setTimeout(function(){
			setBlur(0);
		}, 400);
	});







$('.mark').click(function(){
	var id = this.id;
	id = id.substring(4,6);
	var dist = $('#division'+id).css('margin-left');

	dist = parseInt(dist.substring(0, dist.length-2));
	console.log(dist);
	dist = ((dist/20000)*200000);
	$("html, body").animate({ scrollTop: (dist)+"px" });
	setBlur(5);
	blurry();
	setTimeout(function(){
		setBlur(0);
	}, 400);
});















	// Get mouse position function, helper function 
	function getMousePos(canvas, evt) {
	    var rect = canvas.getBoundingClientRect();
	    return {
	      x: evt.clientX - rect.left
	    };
	}



	// the element we want to apply the effect
	var $element=$("#main");
	// storing the last position, to be able to measure changes
	var lastPos=$element.offset();
	// a multiplier, to be able to control the intensity of the effect
	var multiplier=0.15;

	// a helper to simplify setting the blur. 
	function setBlur(x){
		blurFilter.setAttribute("stdDeviation",x+","+0);	
	}

	var yDiff;
	var filterOn = 'url(index.html#blur)';
	var filterOff = 'none';


	function blurry(){
		$('#main').css('filter', filterOn);
	}













});