$(document).ready(function(){

	var cutcanvas = document.getElementById('select-canvas');
	var objectMove = document.getElementById('object-move');
	var objectImage = document.getElementById('object-location');

	// Function to select object canvases 
	var theX;
	var theY;


	$(cutcanvas).mousemove(function(){

	  var coor = getMousePos(cutcanvas, event);
	  theX = coor["x"];
	  theY = coor["y"];
	  theX = Math.round(theX)+1;
	  theY = Math.round(theY)-55;

	  //expand(theX);
	  yheight(theY);

	});


	//var diamond = document.getElementById("dia");
	function yheight(input){

	  objectImage.style.marginTop = (input-50)+"px";

	  objectMove.style.marginTop = (input-150)+"px";


	  console.log('yheight' + input+'px');

	  /*
	  setTimeout(function(){
	    diamond.style.transform = 'scale(1)';
	  }, 0);
	  */
	}




	// Expand function for the division below

	var amount; 
	var marginleft;
	function expand(input){
	amount = input;

	if(input < 66){
	  amount = amount;
	  marginleft = ((150-amount)/2)+"px";
	  updateSize(amount,marginleft);

	}else if(input > 65 && input < 86){
	  amount = 65;
	  marginleft = 45+"px";
	  updateSize(amount,marginleft);

	}else {
	  marginleft = (amount/2)+"px";
	  amount = 150-amount;
	  updateSize(amount,marginleft);
	}

	//console.log("amount " + amount);

	}


	// Update size function for middle division
	var marginleft;

	function updateSize(size,margl){

		if(size > 10){
			middle.style.width = size+"px";
		}else {
			middle.style.width = "10px";
		}
		  middle.style.marginLeft = margl;

	}





	// Get mouse position function, helper function 
	function getMousePos(canvas, evt) {
	    var rect = canvas.getBoundingClientRect();
	    return {
	      x: evt.clientX - rect.left,
	      y: evt.clientY - rect.top
	    };
	}










































});